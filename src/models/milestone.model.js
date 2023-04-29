const mongoose = require('mongoose');

const milestoneSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: [true, 'Project ID is required.']
  },
  title: {
    type: String,
    required: [true, 'Title is required.']
  },
  description: {
    type: String,
    required: [true, 'Description is required.']
  },
  dueDate: {
    type: Date,
    required: [true, 'Due date is required.']
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required.'],
    min: [0, 'Amount cannot be negative.']
  }
}, {
  timestamps: true
});

const Milestone = mongoose.model('Milestone', milestoneSchema);

module.exports = Milestone;
