const DAOLayer = require("../DAOlayer");

module.exports = {
    createUserAccount: async(req) => {
        // can add "Failing fast" concept here? but idk wat criteria would be, mostly would be caught in the frontend?
        console.log("--- UserRepository Layer ---");
        const result = await DAOLayer.UserDAO.createUser(req.body.username, req.header("Authorization"), req.body.initBal)
            .then(dbRes => {
                console.log("--- UserRepository Layer: response ---");
                console.log(dbRes);
                //result = dbRes;
                return dbRes;

            })
            .catch(err => {
                console.log("--- UserRepository Layer ---");
                console.log(err);
            });
        console.log("result is: " + result);
        return Promise.resolve(result);
    },

    loginUserAccount: async(req) => {
        // can add "Failing fast" concept here... or in the frontend
        console.log("UserRepository Layer - Login");
        //let loggedIn = false;
        return await DAOLayer.UserDAO.loginUser(req.body.username, req.header("Authorization"))
            .then(dbRes => {
                console.log("--- UserRepository Layer ---");
                console.log(dbRes);
                //loggedIn = dbRes;
                return dbRes
            })
            .catch(err => {
                console.log("--- UserRepository Layer ---");
                console.log(err);
                return false;
            });
        //console.log("Login result: " + loggedIn);
    }
};