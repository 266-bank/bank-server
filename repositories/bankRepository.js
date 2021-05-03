const DAOLayer = require("../DAOlayer");

module.exports = {
    userRepoDeposit: async(req) => {
        console.log("--- Bank Repository ---");
        let balance = 0;
        await DAOLayer.BankDAO.userDeposit(req.body.username, req.body.amount, req.header("Authorization"))
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
        await DAOLayer.BankDAO.userWithdrawal(req.body.username, req.body.amount, req.header("Authorization"))
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
        return await DAOLayer.BankDAO.userGetBalance(req.params.username, req.header("Authorization"))
            .then(response => {
                console.log("--- Bank Repository ---");
                console.log(response);
                return response;
            })
            .catch(err => {
                console.log("--- Bank Repository ---");
                console.error("repo error", err);
            });
    }
};