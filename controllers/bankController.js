const Repo = require("../repositories");

module.exports = {
    userDeposit: function(req, res) {
        console.log("control")
        return Repo.Bank.userRepoDeposit(req)
        .then((result) => {
            //console.log(result);
            res.status(200).send(result);
        })
        // unsure about the status code
        .catch(err => res.status(500).json(err));
    },

    userWithdrawal: function(req, res) {
        return Repo.Bank.userRepoWithdrawal(req)
        .then((result) => {
            //console.log(result);
            res.status(200).send(result);
        })
        .catch(err => res.status(500).json(err));
    },

    userGetBalance: function(req, res) {
        return Repo.Bank.userRepoGetBalance(req)
        .then((result) => {
            //console.log(result);
            res.status(200).send(result);
        })
        .catch(err => res.status(500).json(err));
    }
};