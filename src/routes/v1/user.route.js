const express = require("express");
const router = express.Router();
const handler = require("../../controllers");
const { protect } = require("../../utils").jwt;
const asyncHandler = require("express-async-handler");
// const { register } = require("../../validators");

router.put("/profile", protect, asyncHandler(handler.user.changeUsername));

module.exports = router;