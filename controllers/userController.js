const Repo = require("../repositories");

module.exports = {
    createUser: function(req, res) {
        // database handling
       Repo.User.createUserAccount(req)
       .then(dbModel => res,json(dbModel))
       // unsure about the status code
       .catch(error => res.status(500).json(err)); 
    }
};