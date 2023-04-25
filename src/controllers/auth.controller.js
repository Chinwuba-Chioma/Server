const { StatusCodes } = require("http-status-codes");
const { auth } = require("../services");
const { uuidUtil, passwordUtil } = require("../utils");

const register = async function (req, res) {
  const password = await passwordUtil.hashPassword(req.body.password);
  console.log(password.length);
  try {
    const user = {
      userId: uuidUtil.giveID(),
      username: req.body.username,
      email: req.body.email,
      password,
    };
    const newUser = await auth.register(user)
    return res.status(StatusCodes.OK).json({
      status: "success",
      newUser
    })
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: `Error creating User: ${error.message}`,
    });
  }
};



module.exports = {
  register,
};