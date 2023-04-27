const Services = require('./data.service');
const { passwordUtil, jwt } = require('../utils');
const { User } = require('../models');

class AuthService extends Services {
  constructor(User) {
    super(User);
  }

  async register(user) {
    try {
      return await this.create(user);
    } catch (error) {
      throw new Error(`Error registering user: ${error.message}`);
    }
  }

  async login(email, password) {
    try {
      const user = await this.getUserByEmail(email);
      const hashPassword = await user.password;

      if (!user) {
        throw new Error('User not found');
      }

      const isPassword = await passwordUtil.verifyPassword(hashPassword, password);

      if (isPassword) {
        const token = await jwt.signToken({user});
        console.log('token: ' + token);
        return token;
      } else {
        throw new Error('Invalid password');
      }
    } catch (error) {
      throw new Error(`Error logging in: ${error.message}`);
    }
  }

  async forgotPassword(email) {
    try {
      // Perform forgot password logic and return result
      // Example implementation:
      // return { success: true };
    } catch (error) {
      throw new Error(`Error requesting forgot password: ${error.message}`);
    }
  }

  async resetPassword(token, newPassword) {
    try {
      // Perform reset password logic and return result
      // Example implementation:
      // return { success: true };
    } catch (error) {
      throw new Error(`Error resetting password: ${error.message}`);
    }
  }

  async verifyEmail(token) {
    try {
      // Perform email verification logic and return result
      // Example implementation:
      // return { success: true };
    } catch (error) {
      throw new Error(`Error verifying email: ${error.message}`);
    }
  }

  async isEmailVerified(userId) {
    try {
      // Perform email verification check logic and return result
      // Example implementation:
      // return { verified: true };
    } catch (error) {
      throw new Error(`Error checking email verification status: ${error.message}`);
    }
  }

  async changePassword(userId, oldPassword, newPassword) {
    try {
      const user = await this.get(userId);

      if (!user) {
        throw new Error('User not found');
      }

      // Perform change password logic and return result
      // Example implementation:
      // if (user.password === oldPassword) {
      //   // User password is correct, perform password change
      //   return { success: true };
      // } else {
      //   throw new Error('Invalid password');
      // }
    } catch (error) {
      throw new Error(`Error changing password: ${error.message}`);
    }
  }

  async updateProfile(userId, profileData) {
    try {
      return await this.update(userId, profileData);
    } catch (error) {
      throw new Error(`Error updating profile: ${error.message}`);
    }
  }

  async deleteAccount(userId) {
    try {
      return await this.delete(userId);
    } catch (error) {
      throw new Error(`Error deleting account: ${error.message}`);
    }
  }
}

module.exports = new AuthService(User);
