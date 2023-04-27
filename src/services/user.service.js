const Services = require('./data.service');
const { User, Project, Bid, Review, Notification } = require('../models');

class UserService extends Services {
  constructor(User, Project, Bid, Review, Notification) {
    super(User);
    this.Project = Project;
    this.Bid = Bid;
    this.Feedback = Review;
    this.Notification = Notification;
  }


  async updateProfile(userId, profileData) {
    try {
      return await this.update(userId, profileData);
    } catch (error) {
      throw new Error(`Error updating profile: ${error.message}`);
    }
  }

  async viewDashboard(userId) {
    try {
      // Fetch user data
      const user = await this.get(userId);
      if (!user) {
        throw new Error('User not found');
      }

      // Fetch project and bid data related to user
      const projects = await this.Project.find({ createdBy: userId });
      const bids = await this.Bid.find({ userId });

      // Perform relevant dashboard logic and return data
      // Example implementation:
      // const earnings = calculateEarnings(user);
      // const projectStatus = getProjectStatus(projects);
      // const bidStatus = getBidStatus(bids);
      // return { earnings, projectStatus, bidStatus };
    } catch (error) {
      throw new Error(`Error viewing dashboard: ${error.message}`);
    }
  }

  async createProject(projectData) {
    try {
      return await this.Project.create(projectData);
    } catch (error) {
      throw new Error(`Error creating project: ${error.message}`);
    }
  }

  async viewProjects(filter) {
    try {
      // Fetch project data based on filter criteria
      const projects = await this.Project.find(filter);

      // Perform relevant filtering logic and return filtered projects
      // Example implementation:
      // const filteredProjects = filterProjects(projects, filter);
      // return filteredProjects;
    } catch (error) {
      throw new Error(`Error viewing projects: ${error.message}`);
    }
  }

  async submitBid(bidData) {
    try {
      return await this.Bid.create(bidData);
    } catch (error) {
      throw new Error(`Error submitting bid: ${error.message}`);
    }
  }

  async viewBidStatus(userId) {
    try {
      // Fetch bid data related to user
      const bids = await this.Bid.find({ userId });

      // Perform relevant bid status logic and return bid status
      // Example implementation:
      // const bidStatus = getBidStatus(bids);
      // return bidStatus;
    } catch (error) {
      throw new Error(`Error viewing bid status: ${error.message}`);
    }
  }

  async viewProfile(userId) {
    try {
      // Fetch user data
      const user = await this.get(userId);
      if (!user) {
        throw new Error('User not found');
      }

      // Fetch feedback data related to user
      const feedback = await this.Feedback.find({ userId });

      // Perform relevant profile view logic and return profile data
      // Example implementation:
      // const portfolio = getPortfolio(user);
      // const feedbackHistory = getFeedbackHistory(feedback);
      // return { user, portfolio, feedbackHistory };
    } catch (error) {
      throw new Error(`Error viewing profile: ${error.message}`);
    }
  }

  async updatePassword(userId, oldPassword, newPassword) {
    try {
      // Fetch user data
      const user = await this.get(userId);
      if (!user) {
        throw new Error('User not found');
      }

      // Check if old password matches
      if (user.password !== oldPassword) {
        throw new Error('Old password does not match');
      }

      // Update user password
      user.password = newPassword;
      await user.save();
      return user;
    } catch (error) {
      throw new Error(`Error updating password: ${error.message}`);
    }
  }

  async resetPassword(userId, newPassword) {
    try {
      // Fetch user data
      const user = await this.get(userId);
      if (!user) {
        throw new Error('User not found');
      }

      // Update user password
      user.password = newPassword;
      await user.save();
      return user;
    } catch (error) {
      throw new Error(`Error resetting password: ${error.message}`);
    }
  }

  async deleteAccount(userId) {
    try {
      // Fetch user data
      const user = await this.get(userId);
      if (!user) {
        throw new Error('User not found');
      }

      // Delete user account
      await this.delete(userId);
      return user;
    } catch (error) {
      throw new Error(`Error deleting account: ${error.message}`);
    }
  }

  async viewProjectHistory(userId) {
    try {
      // Fetch project data related to user
      const projects = await this.Project.find({ createdBy: userId });

      // Perform relevant project history logic and return project history
      // Example implementation:
      // const projectHistory = getProjectHistory(projects);
      // return projectHistory;
    } catch (error) {
      throw new Error(`Error viewing project history: ${error.message}`);
    }
  }

  async viewFeedbackHistory(userId) {
    try {
      // Fetch feedback data related to user
      const feedback = await this.Feedback.find({ userId });

      // Perform relevant feedback history logic and return feedback history
      // Example implementation:
      // const feedbackHistory = getFeedbackHistory(feedback);
      // return feedbackHistory;
    } catch (error) {
      throw new Error(`Error viewing feedback history: ${error.message}`);
    }
  }

  async editProfile(userId, profileData) {
    try {
      // Fetch user data
      const user = await this.get(userId);
      if (!user) {
        throw new Error('User not found');
      }

      // Update user profile information
      Object.assign(user, profileData);
      await user.save();
      return user;
    } catch (error) {
      throw new Error(`Error editing profile: ${error.message}`);
    }
  }

  async viewNotifications(userId) {
    try {
      // Fetch notifications related to user
      const notifications = await this.Notification.find({ userId });

      // Perform relevant notification logic and return notifications
      // Example implementation:
      // const filteredNotifications = filterNotifications(notifications);
      // return filteredNotifications;
    } catch (error) {
      throw new Error(`Error viewing notifications: ${error.message}`);
    }
  }

  async communicateWithUser(senderId, receiverId, message) {
    try {
      // Fetch sender and receiver user data
      const sender = await this.get(senderId);
      const receiver = await this.get(receiverId);

      if (!sender || !receiver) {
        throw new Error('Sender or receiver not found');
      }

      // Perform relevant communication logic, e.g., send message through chat or messaging feature
      // Example implementation:
      // sendMessage(sender, receiver, message);
    } catch (error) {
      throw new Error(`Error communicating with user: ${error.message}`);
    }
  }

  async trackStatus(userId) {
    try {
      // Fetch user data
      const user = await this.get(userId);
      if (!user) {
        throw new Error('User not found');
      }

      // Perform relevant status tracking logic, e.g., track project, bid, and payment status
      // Example implementation:
      // const projectStatus = getProjectStatus(user);
      // const bidStatus = getBidStatus(user);
      // const paymentStatus = getPaymentStatus(user);
      // return { projectStatus, bidStatus, paymentStatus };
    } catch (error) {
      throw new Error(`Error tracking status: ${error.message}`);
    }
  }

  async withdrawEarnings(userId) {
    try {
      // Fetch user data
      const user = await this.get(userId);
      if (!user) {
        throw new Error('User not found');
      }

      // Perform relevant earnings withdrawal logic, e.g., withdraw earnings from completed projects
      // Example implementation:
      // const earnings = calculateEarnings(user);
      // withdrawEarnings(user, earnings);
    } catch (error) {
      throw new Error(`Error withdrawing earnings: ${error.message}`);
    }
  }
}

module.exports = new UserService(User, Project, Bid, Review, Notification);
