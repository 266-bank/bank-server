const pg = require("./ServerConnect");
const db = pg.client;





exports.createUser = async (userName, passWord) => {
    db.connect();
    try{
        const queryString = `INSERT INTO USER (username, password) VALUES ($userName, $passWord); `;
        const res = await db.query(queryString);
        console.log('User is successfully created');
    }
    catch (err) {
        console.log(err.stack);
    } finally {
        db.close();
    }
}
