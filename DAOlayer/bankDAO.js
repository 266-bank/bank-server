const server = require("../ServerConnect");
const bcrypt = require("bcrypt");
const {callback} = require("pg");
const db = server.client;

module.exports = {
    userDeposit: async (userName, depositAmount, passWord) => {
        console.log("--- BankDAO ---");
        console.log(userName);
        console.log(depositAmount);

        try{
            // can leave it as it is, or make it prepared statement
            const queryString = `SELECT password FROM users WHERE username = '${userName}';`;
            return await db.query(queryString).then(async (result) => {
                // Match the hashed pw
                if (await bcrypt.compare(passWord, result.rows[0].password)) {
                    console.log("User validate");
                    await db.query(`UPDATE bank SET balance = balance + ${depositAmount} WHERE username = '${userName}'`);
                    const result = await db.query(`SELECT * FROM bank WHERE username = '${userName}';`);

                    return result.rows[0].balance;
                }
                return -2;

            });
        }
        catch (err) {
            console.log("Caught error while trying to get data from database.");
            console.log(err.stack);
            return false;
        }

    },

    userWithdrawal : async (userName, withdrawalAmount, passWord) => {
        console.log("--- BankDAO ---");
        console.log(userName);
        console.log(withdrawalAmount);

        try{
            // can leave it as it is, or make it prepared statement
            const queryString = `SELECT password FROM users WHERE username = '${userName}';`;
            return await db.query(queryString).then(async (result) => {
                // Match the hashed pw
                if (await bcrypt.compare(passWord, result.rows[0].password)) {
                    console.log("User validate");
                    const currentBalanceQuery = await db.query(`SELECT balance FROM bank WHERE username = '${userName}';`)
                    const currentBalance = currentBalanceQuery.rows[0].balance;
                    console.log("current balance: ", currentBalance);
                    if (currentBalance >= withdrawalAmount) {
                        await db.query(`UPDATE bank SET balance = balance - ${withdrawalAmount} WHERE username = '${userName}'`);
                        const result = await db.query(`SELECT * FROM bank WHERE username = '${userName}';`);
                        return result.rows[0].balance;
                    } else {
                        console.log("aww, currentBalance < withdraw amount");
                        return -1;
                    }
                }
                return -2;

            });
        }
        catch (err) {
            console.log("Caught error while trying to get data from database.");
            console.log(err.stack);
            return false;
        }



    },

    userGetBalance : async (userName, passWord) => {
        console.log("--- BankDAO ---");
        console.log(userName);
        //console.log(passWord);
        const queryString = `SELECT password FROM users WHERE username = '${userName}';`;
        return await db.query(queryString).then(async (result) => {
            // Match the hashed pw
           // console.log(result.rows[0].password);
            const check = await bcrypt.compare(passWord, result.rows[0].password);
            //console.log(check)
            if (check) {
                const result = await db.query(`SELECT *
                                               FROM bank
                                               WHERE username = '${userName}';`);
                return result.rows[0].balance;
            }
            return -2;

        });
    }
};
