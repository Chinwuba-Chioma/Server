const User = require("./user.model")
const Admin = require("./admin.model");
const Bid = require("./bid.model");
const Payment = require("./payment.model");
const Project = require("./project.model");
const Review = require("./review.model");
const SearchFilter = require("./search.filter.model");
const Skill = require("./skill.model");
const UserDashboard = require("./user.dashboard.model");
const Notification = require("./notification.model");


module.exports = {
  User,
  Admin,
  Bid,
  Payment,
  Project,
  Review,
  SearchFilter,
  Skill,
  UserDashboard,
  Notification,
};