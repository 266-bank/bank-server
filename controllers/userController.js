const Repo = require("../repositories");

module.exports = {
    createUser: async (req, res) => {
        console.log("--- createUser ---");
        console.log(req.body);
      
        if (!req.body.username.trim() || !req.body.password.trim() 
            || (req.body.initBal < 0)) {
            return res.status(400).json('incorrect form submission');
        }

        let validRE = /[^_\-.0-9a-z]+/;
        if (req.body.username.match(validRE) !== null || req.body.password.match(validRE) !== null) {
            return res.status(401).json('invalid username or password characters');
        }

        return await Repo.User.createUserAccount(req).then(result => {
            try {
                console.log("--- UserController response ---");
                console.log(result);
              if (result === true) {
                res.status(201).json({ created:result });
              } else {
                res.status(400).json({ created:result });
              }
            }
            catch (err){
                console.log(err);
                res.status(500);
            }
        })
    },

    loginUser: function(req, res) {
        console.log("login");

        if (!req.body.username.trim() || !req.header("Authorization").trim()) {
            return res.status(400).json('incorrect form submission');
        }

        return Repo.User.loginUserAccount(req).then(response => {
            console.log("--- UserController response ---");
            console.log(response);
            if (response === true) {
                res.status(201).json({loggedIn:response});
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