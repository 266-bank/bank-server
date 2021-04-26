const server = require("../ServerConnect");
const db = server.client;

module.exports = {
    userDeposit: async (userName, depositAmount) => {
        await db.connect();
        return db.query(`UPDATE balance SET balance = balance + ${depositAmount} WHERE username = '${userName}'`)
            .then(res => console.log('Deposit Success'))
            .catch(err => console.log(err))
            .finally(db.close());
    },

    userWithdrawal : async (userName, withdrawalAmount) => {
        await db.connect();
        return db.query(`UPDATE bank SET balance = balance - ${withdrawalAmount} WHERE username = '${userName}'`)
            .then(res => console.log(`withdrawal ${withdrawalAmount} Success`))
            .catch(err => console.log(err))
            .finally(db.close());
    },

    userGetBalance : async (userName) => {
        await db.connect();
        return db.query(`SELECT balance FROM bank WHERE username = '${userName}';`)
            .then(res => console.log(`Balance is ` + res))
            .catch(err => console.log(err))
            .finally(db.close());
    }
};
