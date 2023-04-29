const Services = require('./data.service');
const { passwordUtil, jwt } = require('../utils');
const { User } = require('../models');
const AuthService = new Services(User);

class AuthHelper {
  async register(user) {
    try {
      return await AuthService.create(user);
    } catch (error) {
      throw new Error(`Error registering user: ${error.message}`);
    }
  }

  async login(email, password) {
    try {
      const user = await AuthService.getUserByEmail(email);
      const hashPassword = await user.password;

      if (!user) {
        throw new Error('User not found');
      }

      const isPassword = await passwordUtil.verifyPassword(hashPassword, password);

      if (isPassword) {
        const token = await jwt.signToken({ user });
        console.log('token: ' + token);
        return token;
      } else {
        throw new Error('Invalid password');
      }
    } catch (error) {
      throw new Error(`Error logging in: ${error.message}`);
    }
  }
}

module.exports = new AuthHelper();
