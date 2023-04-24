// notifications.model.js

// Import necessary modules
const mongoose = require('mongoose');

// Define the notification schema
const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    notificationType: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'notifications', // Collection name in MongoDB
  }
);

// Create the notification model
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
