const server = require("../ServerConnect");
const bcrypt = require("bcrypt");
const db = server.client;

module.exports = {
  userDeposit: async (userName, depositAmount, passWord) => {
    console.log("--- BankDAO ---");
    console.log(userName);
    console.log(depositAmount);

    try {
      const queryString = "SELECT password FROM users WHERE username = $1;";

      const queryResp = await db.query(queryString, [userName]);

      if (await bcrypt.compare(passWord, queryResp.rows[0].password)) {
        console.log("User validate");
        await db.query(`UPDATE bank
                        SET balance = balance + $1
                        WHERE username = $2;`, [depositAmount, userName]);
        const queryRes = await db.query(`SELECT *
                                         FROM bank
                                         WHERE username = $1;`, [userName]);

        return queryRes.rows[0].balance;
      }
      return -2;

    } catch (err) {
      console.log("Caught error while trying to get data from database.");
      console.log(err.stack);
      return false;
    }
  },

  userWithdrawal: async (userName, withdrawalAmount, passWord) => {
    console.log("--- BankDAO ---");
    console.log(userName);
    console.log(withdrawalAmount);

    try {
      const queryString = `SELECT password
                           FROM users
                           WHERE username = $1;`;

      const queryResp = await db.query(queryString, [userName]);

      if (await bcrypt.compare(passWord, queryResp.rows[0].password)) {
        console.log("User validate");
        const currentBalanceQuery = await db.query(`SELECT balance
                                                    FROM bank
                                                    WHERE username = $1;`, userName)
        const currentBalance = currentBalanceQuery.rows[0].balance;
        console.log("current balance: ", currentBalance);
        if (currentBalance >= withdrawalAmount) {
          await db.query(`UPDATE bank
                          SET balance = balance - ${withdrawalAmount}
                          WHERE username = $1;`, [userName]);
          const queryRes = await db.query(`SELECT *
                                           FROM bank
                                           WHERE username = $1;`, userName);
          return queryRes.rows[0].balance;
        } else {
          console.log("aww, currentBalance < withdraw amount");
          return -1;
        }
      }
      return -2;
    } catch (err) {
      console.log("Caught error while trying to get data from database.");
      console.log(err.stack);
      return false;
    }
  },

  userGetBalance: async (userName, passWord) => {
    console.log("--- BankDAO ---");
    console.log(userName);

    const queryString = `SELECT password
                         FROM users
                         WHERE username = $1;`;

    const queryResp = await db.query(queryString, [userName]);

    const check = await bcrypt.compare(passWord, queryResp.rows[0].password);
    if (check) {
      const queryRes = await db.query(`SELECT *
                                       FROM bank
                                       WHERE username = $1;`, [userName]);
      return queryRes.rows[0].balance;
    }
    return -2;
  }
};
