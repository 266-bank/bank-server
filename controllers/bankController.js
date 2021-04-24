const Repo = require("../repositories");

module.exports = {
    userDeposit: function(req, res) {
        Repo.Bank.userRepoDeposit(req.body.username, req.body.amount)
        .then(dbModel => res.json(dbModel))
        // unsure about the status code
        .catch(err => res.status(500).json(err));
    },

    userWithdrawal: function(req, res) {
        Repo.Bank.userRepoWithdrawal(req.body.username, req.body.amount)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    },

    userGetBalance: function(req, res) {
        Repo.Bank.userRepoGetBalance(req.body.username)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(500).json(err));
    }
};