const { signUp , login} = require("../controllers/authController.js");
const express = require("express");

const authRouter = express.Router();

authRouter.route("/signup").post(signUp);
authRouter.route("/login").post(login);

module.exports = authRouter;