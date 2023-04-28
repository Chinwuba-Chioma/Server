const { StatusCodes } = require("http-status-codes");
const { user } = require("../services");

const changeUsername = async function (req, res) {
  try {
    const username = req.body.username;
    const userId = req.user.id;

    const newUser = await user.update(userId, { username });

    return res.status(StatusCodes.OK).json({
      status: "success",
      newUser
    })
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: `Error Editing User Profile: ${error.message}`,
    });
  }
};




module.exports = {
  changeUsername,
};