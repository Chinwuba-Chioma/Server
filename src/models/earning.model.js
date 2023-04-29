const mongoose = require('mongoose');

const earningSchema = new mongoose.Schema({
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Freelancer',
    required: [true, 'Freelancer ID is required.']
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: [true, 'Project ID is required.']
  },
  milestone: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Milestone',
    required: [true, 'Milestone ID is required.']
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required.'],
    min: [0, 'Amount cannot be negative.']
  }
}, {
  timestamps: true
});

const Earning = mongoose.model('Earning', earningSchema);

module.exports = Earning;
