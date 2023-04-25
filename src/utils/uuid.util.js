const uuid = require('uuid');

const giveID = function () {
  return uuid.v4();
}

module.exports = {
  giveID
};