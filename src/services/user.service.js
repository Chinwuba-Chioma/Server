const Services = require('./data.service');
const { User } = require('../models');
const UserService = new Services(User);

class UserHelper {
  async updateProfile(userId, profileData) {
    try {
      return await UserService.update(userId, profileData);
    } catch (error) {
      throw new Error(`Error updating profile: ${error.message}`);
    }
  }

}

module.exports = new UserHelper();
