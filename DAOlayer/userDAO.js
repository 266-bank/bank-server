const server = require("../ServerConnect");
const db = server.client;

module.exports = {
    createUser: async (userName, passWord) => {
        try{
            const queryString = `INSERT INTO users (username, password) VALUES ('${userName}', '${passWord}'); `;
            const initamount = `INSERT INTO bank (username, balance) VALUES ('${userName}', 0.00);`;
            const res = await db.query(queryString);
            const initba = await db.query(initamount);
            console.log('User is successfully created');
            return res, initba;

        }
        catch (err) {
            console.log(err.stack);
        } 
    },

    loginUser: async (userName, passWord) => {
        try{
            const queryString = `SELECT password FROM users WHERE username = '${userName}';`
            const res = await db.query(queryString);
            if(res === userName){
                return true;
            }else{
                return false;
            }
        }
        catch (err) {
            console.log(err.stack);
        }
    }

}
