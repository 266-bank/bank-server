const DAOLayer = require("../DAOlayer");

module.exports = {
    createUserAccount: function(req, res) {
        console.log("createUserAcoount");
        // call the createUser in userDAO
        return DAOLayer.UserDAO.createUser(req.body.username, req.body.password)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    },

    loginUserAccount: function (req, res) {
        console.log("login");
        return DAOLayer.UserDAO.loginUser(req.body.username, req.body.password)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));

    }
};