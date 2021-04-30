const DAOLayer = require("../DAOlayer");

module.exports = {
    userRepoDeposit: function(req, res) {
        console.log("repo")
        return DAOLayer.BankDAO.userDeposit(req.body.username, req.body.amount)
            .catch(err => {
                console.error("repo error", err);
                // res.status(500).json(err);
            });
    },

    userRepoWithdrawal: function(req, res) {
        return DAOLayer.BankDAO.userWithdrawal(req.body.username, req.body.amount)
            .catch(err => {
                console.error("repo error", err);
                // res.status(500).json(err);
            });
    },

    userRepoGetBalance: function (req) {
        const result = DAOLayer.BankDAO.userGetBalance(req.body.username);
        return result.catch(err => {
            console.error("repo error", err);
            // res.status(500).json(err);
    });
    }
};