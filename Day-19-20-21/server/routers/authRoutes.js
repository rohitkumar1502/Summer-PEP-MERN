const { signUp } = require("../controllers/authController.js");
const express = require("express");

const authRouter = express.Router();

authRouter.route("/signup").post(signUp);

module.exports = authRouter;