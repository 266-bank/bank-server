const DAOLayer = require("../DAOlayer");

module.exports = {
    userRepoDeposit: function(req, res) {
        return DAOLayer.BankDAO.userDeposit(req)
            .then(dbModel => res.json(dbModel))
            // not too sure about the status code, can change later
            .catch(err => res.status(500).json(err));
    },

    userRepoWithdrawal: function(req, res) {
        return DAOLayer.BankDAO.userWithdrawal(req)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));
    },

    userRepoGetBalance: function(req, res) {
        return DAOLayer.BankDAO.userGetBalance(req)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));
    }
};