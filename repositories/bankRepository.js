const DAOLayer = require("../DAOlayer");

module.exports = {
    userRepoDeposit: async(req) => {
        console.log("--- Bank Repository ---");
        let balance = 0;
        await DAOLayer.BankDAO.userDeposit(req.body.username, req.body.amount)
            .then(response => {
                console.log("--- Bank Repository ---");
                console.log(response);
                balance = response;
            })
            .catch(err => {
                console.log("--- Bank Repository ---");
                console.error("repo error", err);
            });
        return balance;
    },

    userRepoWithdrawal: async(req) => {
        let balance = 0;
        await DAOLayer.BankDAO.userWithdrawal(req.body.username, req.body.amount)
            .then(response => {
                console.log("--- Bank Repository ---");
                console.log(response);
                balance = response;
            })
            .catch(err => {
                console.log("--- Bank Repository ---");
                console.error("repo error", err);
            });
        return balance;
},

    userRepoGetBalance: async(req) => {
        let balance = 0;
        await DAOLayer.BankDAO.userGetBalance(req.body.username)
            .then(response => {
                console.log("--- Bank Repository ---");
                console.log(response);
                balance = response;
            })
            .catch(err => {
                console.log("--- Bank Repository ---");
                console.error("repo error", err);
            });
        return balance;
    }
};