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
    return res.status(StatusCodes.CREATED).json({
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


const login = async function (req, res) {
  console.log("login function called");
  try {
    const email = req.body.email;
    const password = req.body.password;
    const token = await auth.login(email, password);

    return res.status(StatusCodes.OK).json({
      status: "success",
      token
    })
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: `Error signing in: ${error.message}`,
    });
  }
};

const tested = async function (req, res) {
  console.log("tested function called");
  try {
    
    return res.status(StatusCodes.OK).json({
      status: "success",
      message: "Test successfully"
    })
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: `Error testing : ${error.message}`,
    });
  }
};


module.exports = {
  register,
  login,
  tested
};