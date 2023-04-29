const mongoose = require('mongoose');

const freelancerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required.']
  },
  fullName: {
    type: String,
    required: [true, 'Full name is required.']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required.'],
    match: [/^\d{10}$/, 'Please provide a valid phone number.']
  },
  address: {
    type: String,
    required: [true, 'Address is required.']
  },
  shortBio: {
    type: String,
    maxlength: [500, 'Short bio cannot be more than 500 characters.']
  },
  profilePicture: {
    type: String,
    required: [true, 'Profile picture is required.']
  },
  skills: {
    type: [String],
    required: [true, 'Skills are required.']
  }
}, {
  timestamps: true
});

const Freelancer = mongoose.model('Freelancer', freelancerSchema);

module.exports = Freelancer;
