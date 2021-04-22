const Repo = require("../repositories");

module.exports = {
    userDeposit: function(req, res) {
        Repo.Bank.userRepoDeposit(req)
        .then(dbModel => res.json(dbModel))
        // unsure about the status code
        .catch(err => res.status(500).json(err));
    },

    userWithdrawal: function(req, res) {
        Repo.Bank.userRepoWithdrawal(req)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    },

    userGetBalance: function(req, res) {
        Repo.Bank.userGetBalance(req)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    }
};