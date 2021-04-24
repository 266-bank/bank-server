const Repo = require("../repositories");

module.exports = {
    createUser: function(req, res) {
        console.log("createUser")
        // database handling
      return Repo.User.createUserAccount(req).then(dbModel => res.json(dbModel))
       // unsure about the status code
       .catch(err => res.status(500).json(err));
    }
};