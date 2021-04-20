const router = require("express").Router();
const userController = require("../controllers/userController");
const bankController = require("../controllers/bankController");

// User - matches with /user
router.route("/user").post(userController.createUser);

// Bank
// matches with /:username/balance
router.route("/:username/balance").get(bankController.userGetBalance);
// matches with /deposit
router.route("/deposit").post(bankController.userDeposit);
// matches with /withdrawal
router.route("/withdrawal").post(bankController.userWithdrawal);

module.exports = router;
