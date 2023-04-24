const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewId: {
    type: String,
    required: [true, 'Review ID is required.'],
    unique: true,
    trim: true
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
  rating: {
    type: Number,
    required: [true, 'Rating is required.'],
    min: [1, 'Rating must be at least 1.'],
    max: [5, 'Rating must be at most 5.']
  },
  comments: {
    type: String,
    required: [true, 'Comments are required.'],
    trim: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
