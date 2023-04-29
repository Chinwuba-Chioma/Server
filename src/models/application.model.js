const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Freelancer',
    required: [true, 'Freelancer ID is required.']
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: [true, 'Project ID is required.']
  },
  coverLetter: {
    type: String,
    required: [true, 'Cover letter is required.']
  },
  proposalAmount: {
    type: Number,
    required: [true, 'Proposal amount is required.'],
    min: [0, 'Proposal amount cannot be negative.']
  }
}, {
  timestamps: true
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
