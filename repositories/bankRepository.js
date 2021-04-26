const DAOLayer = require("../DAOlayer");

module.exports = {
    userRepoDeposit: function(req, res) {
        DAOLayer.BankDAO.userDeposit(req.body.username, req.body.amount)
        .then(dbModel => res.json(dbModel))
        // not too sure about the status code, can change later
        .catch(err => res.status(500).json(err));
    },

    userRepoWithdrawal: function(req, res) {
        DAOLayer.BankDAO.userWithdrawal(req.body.username, req.body.amount)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    },

    userRepoGetBalance: function(req, res) {
        DAOLayer.BankDAO.userGetBalance(req.body.username)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    }
};