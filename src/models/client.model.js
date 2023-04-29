const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required.']
  },
  companyName: {
    type: String,
    required: [true, 'Company name is required.']
  },
  companyAddress: {
    type: String,
    required: [true, 'Company address is required.']
  }
}, {
  timestamps: true
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
