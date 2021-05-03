const server = require("../ServerConnect");
const db = server.client;
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
    createUser: async (userName, passWord, initBal) => {


        // To verify if the username already exists
        console.log("--- DAO --- Username is: ");
        console.log(userName);
        console.log(passWord);
        console.log(initBal);

        try {
            // const queryToVerifyUsername = {
            //     name: 'Verify-username',
            //     text: 'SELECT COUNT(*) FROM users WHERE username = $1',
            //     values: [`'${userName}'`]
            // };
            const queryToVerifyUsername = `SELECT COUNT(*) FROM users WHERE username = '${userName}'`;
            return db.query(queryToVerifyUsername).then(function(result) {

                let success = false;

                if(result.rows[0].count > 0) {
                    console.log("--- UserDAO Layer ---");
                    console.log("Username already exists");
                    return false;
                }
                // Username does not exists, hash the pw and store
                else {
                    return bcrypt.hash(passWord, saltRounds)
                    .then(function(hash) {
                        try{
                            const queryString = `INSERT INTO users (username, password) VALUES ('${userName}', '${hash}');`;
                            const initamount = `INSERT INTO bank (username, balance) VALUES ('${userName}', ${initBal});`;
                            db.query(queryString);
                            db.query(initamount);
                            console.log("--- UserDAO Layer ---");
                            console.log('User is successfully created');
                            return true;
                        }
                        catch (err) {
                            // should we be sending error back to the client instead of just logging here?
                            console.log("--- UserDAO Layer ---");
                            console.log("Caught error while querying");
                            console.log(err);
                            return false;
                        } 
                    })
                    .catch(err => {
                        console.log("--- UserDAO Layer ---");
                        console.log("Caught error while hashing password.");
                        console.log(err);
                        return false;
                    });
                }
                //return success;
            });
        }
        catch(err) {
            console.log("--- UserDAO Layer ---");
            console.log(err);
            return false;
        };

    },

    loginUser: async (userName, passWord) => {
        console.log("--- UserDAO Layer ---");
        console.log(userName);
        console.log(passWord);
        let success = false;

        try{
            // can leave it as it is, or make it prepared statement
            const queryString = `SELECT password FROM users WHERE username = '${userName}';`;
            return await db.query(queryString).then(result => {
                // Match the hashed pw
                success = bcrypt.compare(passWord, result.rows[0].password);
                console.log("match : " + success);
                return success
            });
        }
        catch (err) {
            console.log("Caught error while trying to get data from database.");
            console.log(err.stack);
            success = false;
            return success
        }
    }
};
