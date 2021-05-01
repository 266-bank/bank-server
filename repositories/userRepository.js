const DAOLayer = require("../DAOlayer");

module.exports = {
    createUserAccount: async(req) => {
        // can add "Failing fast" concept here? but idk wat criteria would be, mostly would be caught in the frontend?
        console.log("--- UserRepository Layer ---");
        let result = false;
        await DAOLayer.UserDAO.createUser(req.body.username, req.header("Authorization"), req.body.initBal)
            .then(dbRes => {
                console.log("--- UserRepository Layer: response ---");
                console.log(dbRes);
                result = dbRes;

            })
            .catch(err => {
                console.log("--- UserRepository Layer ---");
                console.log(err);
            });
        console.log("result is: " + result);
        return result;
    },

    loginUserAccount: async(req) => {
        // can add "Failing fast" concept here... or in the frontend
        console.log("UserRepository Layer - Login");
        let loggedIn = false;
        await DAOLayer.UserDAO.loginUser(req.body.username, req.header("Authorization"))
            .then(dbRes => {
                console.log("--- UserRepository Layer ---");
                console.log(dbRes);
                loggedIn = dbRes;
            })
            .catch(err => {
                console.log("--- UserRepository Layer ---");
                console.log(err);    
            });
        console.log("Login result: " + loggedIn);
        return loggedIn;
    }
};