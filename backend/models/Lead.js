const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
    trim: true
  },
  city: {
    type: String,
    trim: true,
    default: ''
  },
  service: {
    type: String,
    enum: ['MBBS Abroad', 'Study Abroad', 'Ausbildung', 'Language Coaching', 'Visa Service', 'General Inquiry'],
    default: 'General Inquiry'
  },
  message: {
    type: String,
    trim: true,
    default: ''
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'converted', 'closed'],
    default: 'new'
  }
}, {
  timestamps: true
});

// Index for filtering
leadSchema.index({ createdAt: -1 });
leadSchema.index({ service: 1 });
leadSchema.index({ status: 1 });
leadSchema.index({ city: 1 });

module.exports = mongoose.model('Lead', leadSchema);
