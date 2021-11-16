const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
} = require("../controllers/auth");

// ez pont olyan mint a router.post("/register", )
router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").post(resetpassword);

module.exports = router;
