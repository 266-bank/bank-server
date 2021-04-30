const Repo = require("../repositories");

module.exports = {
    createUser: function(req, res) {
        console.log("--- createUser ---");
        console.log(req.body);
        return Repo.User.createUserAccount(req).then(response => {
            console.log("--- UserController response ---");
            console.log(response);
            res.json({ created:response});
        })
        .catch(err => {
            console.log(err);
            res.status(500);
        });
    },

    loginUser: function(req, res) {
        console.log("login");

        return Repo.User.loginUserAccount(req).then(response => {
            console.log("--- UserController response ---");
            console.log(response);
            res.json({ loggedIn:response});
        })
        .catch(err => {
            console.log(err);
            res.status(500);
        });
    }
};