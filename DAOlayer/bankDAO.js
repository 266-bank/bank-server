const server = require("../ServerConnect");
const {callback} = require("pg");
const db = server.client;

module.exports = {
    userDeposit: async (userName, depositAmount) => {
        console.log("--- BankDAO ---");
        console.log(userName);
        console.log(depositAmount);
        await db.query(`UPDATE bank SET balance = balance + ${depositAmount} WHERE username = '${userName}'`);
        const result = await db.query(`SELECT * FROM bank WHERE username = '${userName}';`);
        return result.rows[0].balance;
    },

    userWithdrawal : async (userName, withdrawalAmount) => {
        console.log("--- BankDAO ---");
        console.log(userName);
        console.log(withdrawalAmount);
        await db.query(`UPDATE bank SET balance = balance - ${withdrawalAmount} WHERE username = '${userName}'`);
        const result = await db.query(`SELECT * FROM bank WHERE username = '${userName}';`);
        return result.rows[0].balance;
    },

    userGetBalance : async (userName) => {
        console.log("--- BankDAO ---");
        console.log(userName);
        const result = await db.query(`SELECT * FROM bank WHERE username = '${userName}';`);
        return result.rows[0].balance;
    }
};
