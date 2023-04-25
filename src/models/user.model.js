const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, 'User ID is required.'],
    unique: true
  },
  username: {
    type: String,
    required: [true, 'Username is required.'],
    minlength: [3, 'Username must be at least 3 characters.'],
    maxlength: [20, 'Username cannot be more than 20 characters.']
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
    minlength: [6, 'Password must be at least 6 characters.'],
    maxlength: [100, 'Password cannot be more than 100 characters.']
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: [true, "Email already exists."],
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address.']
  },
}, {
  timestamp: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
