const server = require("../ServerConnect");
const {callback} = require("pg");
const db = server.client;
//db.connect();

module.exports = {
    userDeposit: async (userName, depositAmount) => {
        await db.query(`UPDATE bank SET balance = balance + ${depositAmount} WHERE username = '${userName}'`);
        const result = await db.query(`SELECT * FROM bank WHERE username = '${userName}';`);

        return Promise.resolve(result.rows)
            .catch(err => console.error("DAO error", err));
    },

    userWithdrawal : async (userName, withdrawalAmount) => {
        const result = db.query(`UPDATE bank SET balance = balance - ${withdrawalAmount} WHERE username = '${userName}'`)
        return Promise.resolve(result.rows)
            .catch(err => console.error("DAO error", err));
    },

    userGetBalance : async (userName) => {
        const result = await db.query(`SELECT * FROM bank WHERE username = '${userName}';`);
        //console.log(result.rows[0]);
        return Promise.resolve(result.rows)
            .catch(err => console.error("DAO error", err))


    }
};
