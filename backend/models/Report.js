
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  reportType: {
    type: String,
    enum: ['user-specific', 'system-wide'],
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: function() { return this.reportType === 'user-specific'; }, // Only required for user-specific reports
  },
  dateRange: {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  generatedAt: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: mongoose.Schema.Types.Mixed, // Flexible schema for storing report data, can be JSON or another format
    required: true,
  },
  generatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the admin who generated the report
    required: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;
