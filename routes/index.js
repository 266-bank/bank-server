const router = require("express").Router();
const userController = require("../controllers/userController");
const bankController = require("../controllers/bankController");

// User - matches with /user
router.route("/user").post(userController.createUser);

router.route("/login").post(userController.loginUser);

// Bank
// matches with /:username/balance
router.route("/balance/:username").get(bankController.userGetBalance);
// matches with /deposit
router.route("/deposit").post(bankController.userDeposit);
// matches with /withdrawal
router.route("/withdrawal").post(bankController.userWithdrawal);

module.exports = router;
