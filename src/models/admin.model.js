const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  adminId: {
    type: String,
    required: [true, 'Admin ID is required.'],
    unique: true,
    trim: true
  },
  username: {
    type: String,
    required: [true, 'Username is required.'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
    trim: true
  },
  privileges: {
    type: String,
    trim: true
  }
});

adminSchema.path('password');
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
