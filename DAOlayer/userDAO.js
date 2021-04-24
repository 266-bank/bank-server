const server = require("../ServerConnect");
const db = server.client;

module.exports = {
    createUser: async (userName, passWord) => {
        try{
            await db.connect();
            const queryString = `INSERT INTO users (username, password) VALUES ('${userName}', '${passWord}'); `;
            const initamount = `INSERT INTO bank (username, balance) VALUES ('${userName}', 0.00);`;
            const res = await db.query(queryString);
            const initba = await db.query(initamount);
            console.log('User is successfully created');
            return res, initba;

        }
        catch (err) {
            console.log(err.stack);
            db.close();
        } finally {
            db.close();
        }
    }

}
