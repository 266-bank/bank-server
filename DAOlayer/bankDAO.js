const pg = require("./ServerConnect");
const db = pg.client;

exports.userDeposit = async (userName, depositAmount) => {
    db.connect();
    return db.query(`UPDATE balance SET balance = balance + $depositAmount WHERE username = $userName`)
        .then(res => console.log('Deposit Success'))
        .catch(err => console.log(err))
        .finally(() => db.end());
}

exports.userWithdrawal = async (userName, withdrawalAmount) => {
    db.connect();

    return db.query(`UPDATE bank SET balance = balance - $withdrawalAmount WHERE username = $userName`)
        .then(res => console.log(`withdrawal` + withdrawalAmount + `Success`))
        .catch(err => console.log(err))
        .finally(() => db.end());
}

exports.userWithdrawal = async (userName, withdrawalAmount) => {
    db.connect();

    return db.query(`UPDATE bank SET balance = balance - $withdrawalAmount WHERE username = $userName`)
        .then(res => console.log(`withdrawal` + withdrawalAmount + `Success`))
        .catch(err => console.log(err))
        .finally(() => db.end());
}

exports.userGetBalance = async (userName) => {
    db.connect();

    return db.query(`SELECT balance FROM bank WHERE username = $userName;`)
        .then(res => console.log(`Balance is ` + res))
        .catch(err => console.log(err))
        .finally(() => db.end());
}
