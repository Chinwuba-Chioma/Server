const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required.'],
    minlength: [3, 'Username must be at least 3 characters.'],
    maxlength: [20, 'Username cannot be more than 20 characters.']
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: [true, 'Email already exists.'],
    match: [/\S+@\S+\.\S+/, 'Please provide a valid email address.']
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
    minlength: [6, 'Password must be at least 6 characters.']
  },
  role: {
    type: String,
    required: [true, 'Role is required.'],
    enum: ['client', 'freelancer']
  },
  dateRegistered: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date
  }
}, {
  timestamp: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
