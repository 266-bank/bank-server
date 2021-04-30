const Repo = require("../repositories");

module.exports = {
    userDeposit: function(req, res) {
        console.log("control")
        return Repo.Bank.userRepoDeposit(req)
        .then((result) => {
            console.log("--- Controller Layer ---");
            console.log(result);
            res.status(200).json(result);
        })
        // unsure about the status code
        .catch(err => {
            console.log(err);
            res.status(500);
        });
    },

    userWithdrawal: function(req, res) {
        return Repo.Bank.userRepoWithdrawal(req)
        .then((result) => {
            console.log("--- Controller Layer ---");
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500);
        });
    },

    userGetBalance: function(req, res) {
        return Repo.Bank.userRepoGetBalance(req)
        .then((result) => {
            console.log("--- Controller Layer ---");
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500);
        });
    }
};