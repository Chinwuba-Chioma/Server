const mongoose = require('mongoose');

const userDashboardSchema = new mongoose.Schema({
  userDashboardId: {
    type: String,
    required: [true, 'User dashboard ID is required'],
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
  projectStatus: {
    type: String,
    required: [true, 'Project status is required'],
    enum: ['in-progress', 'completed', 'cancelled'],
  },
  bidStatus: {
    type: String,
    required: [true, 'Bid status is required'],
    enum: ['active', 'won', 'lost'],
  },
  earnings: {
    type: Number,
    required: [true, 'Earnings is required'],
    min: [0, 'Earnings cannot be negative'],
  },
  otherInformation: {
    type: String,
    required: [true, 'Other information is required'],
  },
});

const UserDashboard = mongoose.model('UserDashboard', userDashboardSchema);

module.exports = UserDashboard;
