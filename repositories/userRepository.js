const DAOLayer = require("../DAOlayer");

module.exports = {
    createUserAccount: function(req, res) {
        // call the createUser in userDAO
        DAOLayer.UserDAO.createUser(req)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    }
};