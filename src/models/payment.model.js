const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  paymentId: {
    type: String,
    required: [true, 'Payment ID is required'],
    unique: [true, 'Payment ID must be unique'],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: [true, 'Project ID is required'],
  },
  paymentAmount: {
    type: Number,
    required: [true, 'Payment amount is required'],
    min: [0, 'Payment amount must be greater than or equal to 0'],
  },
  paymentDate: {
    type: Date,
    required: [true, 'Payment date is required'],
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending',
    required: [true, 'Payment status is required'],
  },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
