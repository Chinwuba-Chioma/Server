const docs = require('./docs.page');
const home = require('./home.page');
const emailTemplates = require("./email.templates");
const uuidUtil = require('./uuid.util');
const passwordUtil = require('./password.util');
const jwt = require('./jwt.util');


module.exports = {
  docs,
  home,
  emailTemplates,
  uuidUtil,
  passwordUtil,
  jwt
};