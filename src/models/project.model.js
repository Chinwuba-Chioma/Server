const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: [true, 'Client ID is required.']
  },
  title: {
    type: String,
    required: [true, 'Title is required.']
  },
  description: {
    type: String,
    required: [true, 'Description is required.']
  },
  category: {
    type: String,
    required: [true, 'Category is required.']
  },
  budget: {
    type: Number,
    required: [true, 'Budget is required.'],
    min: [0, 'Budget cannot be negative.']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required.']
  },
  endDate: {
    type: Date,
    required: [true, 'End date is required.']
  }
}, {
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;