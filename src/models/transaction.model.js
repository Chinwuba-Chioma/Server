const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required.']
  },
  type: {
    type: String,
    enum: ['debit', 'credit'],
    required: [true, 'Transaction type is required.']
  },
  amount: {
    type: Number,
    required: [true, 'Transaction amount is required.']
  },
  description: {
    type: String,
    required: [true, 'Transaction description is required.']
  }
}, {
  timestamps: true
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
