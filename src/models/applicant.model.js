const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: [true, 'Project ID is required.']
  },
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Freelancer',
    required: [true, 'Freelancer ID is required.']
  },
  dateOfApplication: {
    type: Date,
    required: [true, 'Date of application is required.'],
    default: Date.now
  },
  status: {
    type: String,
    enum: ['accepted', 'declined', 'pending'],
    default: 'pending'
  }
}, {
  timestamps: true
});

const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;
