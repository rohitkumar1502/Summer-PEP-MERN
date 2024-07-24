const express = require("express");

const {post}= require('./fileFolderRoutes');
const uploadFileMulter = require("../config/uploadFileMulter");
const { create } = require("../model/otpSchema");
const { createFile } = require("../controller/fileControllers");

const fileRouter = express.Router()
fileRouter.route('/').post(uploadFileMulter.single("file"), createFile)
module.exports = fileRouter