const server = require("../ServerConnect");
const db = server.client;
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  createUser: async (userName, passWord, initBal) => {
    console.log("--- DAO --- Username is: ");
    console.log(userName);
    console.log(passWord);
    console.log(initBal);

    try {
      const queryToVerifyUsername = `SELECT COUNT(*)
                                     FROM users
                                     WHERE username = $1;`;
      const queryResp = await db.query(queryToVerifyUsername, [userName]);

      if (queryResp.rows[0].count > 0) {
        console.log("--- UserDAO Layer ---");
        console.log("Username already exists");
        return false;
      } else {
        const hashedPass = await bcrypt.hash(passWord, saltRounds);

        const queryString = `INSERT INTO users (username, password)
                             VALUES ($1, $2);`;
        const initAmount = `INSERT INTO bank (username, balance)
                            VALUES ($1, $2);`;
        db.query(queryString, [userName, hashedPass]);
        db.query(initAmount, [userName, initBal]);
        console.log("--- UserDAO Layer ---");
        console.log('User is successfully created');
        return true;
      }
    } catch (err) {
      console.log("--- UserDAO Layer ---");
      console.log(err);
      return false;
    }
  },

  loginUser: async (userName, passWord) => {
    console.log("--- UserDAO Layer ---");
    console.log(userName);
    console.log(passWord);

    try {
      const queryString = `SELECT password
                           FROM users
                           WHERE username = $1;`;
      const queryResp = await db.query(queryString, [userName]);

      let success = bcrypt.compare(passWord, queryResp.rows[0].password);
      console.log("match : " + success);
      return success;

    } catch (err) {
      console.log("Caught error while trying to get data from database.");
      console.error(err);
      return false;
    }
  }
};
