const express = require("express");
const router = express.Router();
const handler = require("../../controllers");
const asyncHandler = require("express-async-handler");

// const validate = require('../../validators');
// router.post("/register", validate.signUp, asyncHandler(handler.auth.sign_up));

router.post("/register", asyncHandler(handler.auth.register));

module.exports = router;