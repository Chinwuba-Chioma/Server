const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: [true, 'Project ID is required.'],
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required.']
  },
  title: {
    type: String,
    required: [true, 'Title is required.'],
    minlength: [5, 'Title must be at least 5 characters.'],
    maxlength: [50, 'Title cannot be more than 50 characters.']
  },
  requirements: {
    type: String,
    maxlength: [200, 'Requirements cannot be more than 200 characters.']
  },
  deadline: {
    type: Date,
    validate: {
      validator: function (v) { return !v || v >= new Date(); },
      message: 'Deadline must be in the future.'
    }
  },
  budget: {
    type: Number,
    min: [0, 'Budget cannot be negative.']
  },
  status: {
    type: String,
    enum: ['open', 'closed', 'in progress'],
    default: 'open'
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
