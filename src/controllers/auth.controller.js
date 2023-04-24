const { StatusCodes } = require("http-status-codes");
const { auth } = require("../services");

const register = async function (req, res) {
  try {
    console.log("register");
    const user = {
      email: req.body.email 
    }
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