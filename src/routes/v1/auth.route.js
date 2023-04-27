const express = require("express");
const router = express.Router();
const handler = require("../../controllers");
const { protect } = require("../../utils").jwt;
const asyncHandler = require("express-async-handler");
const { register } = require("../../validators");

router.post("/register", register, asyncHandler(handler.auth.register));
router.post("/login", asyncHandler(handler.auth.login));
router.get("/test", protect, asyncHandler(handler.auth.tested));
// router.login("/forgotPassword", asyncHandler(handler.auth.forgotPassword));
// router.login("/resetPassword", asyncHandler(handler.auth.resetPassword));
// router.login("/verifyEmail", asyncHandler(handler.auth.verifyEmail));
// router.login("/isEmailVerified", asyncHandler(handler.auth.isEmailVerified));
// router.login("/updateProfile", asyncHandler(handler.auth.updateProfile));
// router.login("/deleteAccount", asyncHandler(handler.auth.deleteAccount));

module.exports = router;