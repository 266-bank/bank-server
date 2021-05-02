const Repo = require("../repositories");

module.exports = {
    userDeposit: function(req, res) {
        console.log("--- bankController Layer ---");
        if (req.body.amount < 0) {
            return res.status(400).json('incorrect deposit mount');
        }
        return Repo.Bank.userRepoDeposit(req)
        .then(response => {
            console.log("--- bankController Layer ---");
            console.log(response);
            res.status(200).json({ balance: response });
        })
        // unsure about the status code
        .catch(err => {
            console.log(err);
            res.status(500);
        });
    },

    userWithdrawal: function(req, res) {
        if (req.body.amount < 0) {
            return res.status(400).json('incorrect withdraw amount');
        }
        return Repo.Bank.userRepoWithdrawal(req)
        .then(response => {
            console.log("--- bankController Layer ---");
            console.log(response);
            if (response >= 0) {
                res.status(200).json({ balance: response });
            } else {
                res.status(400).json('invalid withdrawal');
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500);
        });
    },

    userGetBalance: function(req, res) {
        return Repo.Bank.userRepoGetBalance(req)
        .then(response => {
            console.log("--- bankController Layer ---");
            console.log(response);
            res.status(200).json({ balance: response });
        })
        .catch(err => {
            console.log(err);
            res.status(500);
        });
    }
};