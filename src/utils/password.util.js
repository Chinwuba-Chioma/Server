const argon2 = require('argon2');

const hashPassword = async function (password) {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (error) {
    throw new Error(`Error hashing password: ${error.message}`);
  }
}

const verifyPassword = async function (hash, password) {
  try {
    const hash = await argon2.verify(hash, password);
    if (hash) {
      return true
    } else { 
      return false;
    }
  } catch (error) {
    throw new Error(`Error verifying password: ${error.message}`);
  }
}



module.exports = {
  hashPassword,
  verifyPassword
}