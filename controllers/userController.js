const Repo = require("../repositories");

module.exports = {
    createUser: async (req, res) => {
        console.log("--- createUser ---");
        console.log(req.body);
        return await Repo.User.createUserAccount(req).then(result => {
            try{
                console.log("--- UserController response ---");
                console.log(result);
                res.status(200).json({ created:result});
            }
            catch (err){
                console.log(err);
                res.status(500);
            }
        })
    },

    loginUser: function(req, res) {
        console.log("login");

        return Repo.User.loginUserAccount(req).then(response => {
            console.log("--- UserController response ---");
            console.log(response);
            res.status(200).json({ loggedIn:response});
        })
        .catch(err => {
            console.log(err);
            res.status(500);
        });
    }
};