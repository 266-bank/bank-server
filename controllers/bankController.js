const Repo = require("../repositories");

module.exports = {
    userDeposit: function(req, res) {
        console.log("--- bankController Layer ---");
        if (req.body.amount < 0) {
            return res.status(406).json('Invalid deposit amount');
        }
        if(!req.body.username.trim() || !req.header("Authorization").trim()) {
            return res.status(400).json('Access Denied');
        }

        return Repo.Bank.userRepoDeposit(req)
        .then(response => {
            console.log("--- bankController Layer ---");
            console.log(response);
            if (response >= 0) {
                res.status(201).json({ balance: response });
            } else if (response == -1){
                res.status(406).json('invalid Deposit');
            } else if (response == -2){
                res.status(401).json('Authorization Failed');
            }
            else{
                res.status(502).json("Undefined Error");
            }
        })
        // unsure about the status code
        .catch(err => {
            console.log(err);
            res.status(500);
        });
    },

    userWithdrawal: function(req, res) {
        if (req.body.amount < 0) {
            return res.status(406).json('incorrect withdraw amount');
        }
        if(!req.body.username.trim() || !req.header("Authorization").trim()) {
            return res.status(400).json('Access Denied');
        }

        return Repo.Bank.userRepoWithdrawal(req)
        .then(response => {
            console.log("--- bankController Layer ---");
            console.log(response);
            if (response >= 0) {
                res.status(201).json({ balance: response });
            } else if (response == -1){
                res.status(406).json('invalid withdrawal');
            } else if (response == -2){
                res.status(401).json('Authorization failed');
            }else{
                res.status(502).json("Undefined Error");
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500);
        });
    },

    userGetBalance: function(req, res) {
        if(!req.params.username.trim() || !req.header("Authorization").trim()) {
            return res.status(400).json('Access Denied');
        }

        return Repo.Bank.userRepoGetBalance(req)
        .then(response => {
            console.log("--- bankController Layer ---");
            console.log(response);
            if (response >= 0) {
                res.status(201).json({ balance: response });
            } else if (response == -2){
                res.status(401).json('Authorization failed');
            }else{
                res.status(502).json("Undefined Error");
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500);
        });
    }
};