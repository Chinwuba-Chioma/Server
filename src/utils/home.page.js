const pid = process.pid;

module.exports = (req, res) => {
  console.log({ user: req.user });
  return res.json({
    success: true,
    message: `welcome to the cleanomart server handled by process: ${pid}`,
  });
};
