const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
  bidId: {
    type: String,
    required: [true, 'Bid ID is required.'],
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required.']
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: [true, 'Project ID is required.']
  },
  bidAmount: {
    type: Number,
    required: [true, 'Bid amount is required.'],
    min: [0, 'Bid amount cannot be negative.']
  },
  timeOfSubmission: {
    type: Date,
    required: [true, 'Time of submission is required.'],
    validate: {
      validator: function (v) { return !v || v <= new Date(); },
      message: 'Time of submission cannot be in the future.'
    }
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  },
});

const Bid = mongoose.model('Bid', bidSchema);

module.exports = Bid;
