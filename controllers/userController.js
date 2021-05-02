const Repo = require("../repositories");

module.exports = {
    createUser: function(req, res) {
        console.log("--- createUser ---");
        console.log(req.body);
        if (!req.body.username || !req.header("Authorization")) {
            return res.status(400).json('incorrect form submission');
        }

        return Repo.User.createUserAccount(req).then(response => {
            console.log("--- UserController response ---");
            console.log(response);
            if (response === true) {
                res.status(200).json({ created:response });
            } else {
                res.status(400).json({ created:response });
            }

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
            if (response === true) {
                res.status(200).json({loggedIn:response});
            } else {
                res.status(400).json({loggedIn:response})
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500);
        });
    }
};