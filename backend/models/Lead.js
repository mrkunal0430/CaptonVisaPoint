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
  country: {
    type: String,
    trim: true,
    default: ''
  },
  service: {
    type: String,
    enum: ['MBBS Abroad', 'Study Abroad', 'Ausbildung', 'Language Coaching', 'Visa Service', 'General Inquiry'],
    default: 'General Inquiry'
  },
  education: {
    type: String,
    trim: true,
    default: ''
  },
  message: {
    type: String,
    trim: true,
    default: ''
  },
  // ===== MARKETING & TRACKING =====
  // Mirrors ServiceLead so campaign attribution works across every form.
  source: {
    type: String,
    enum: ['Meta Ads', 'Google', 'Organic', 'Referral', 'Direct', 'Other'],
    default: 'Direct'
  },
  utmSource: { type: String, default: '' },
  utmMedium: { type: String, default: '' },
  utmCampaign: { type: String, default: '' },
  utmTerm: { type: String, default: '' },
  utmContent: { type: String, default: '' },
  landingPage: { type: String, default: '' },
  referrer: { type: String, default: '' },

  status: {
    type: String,
    enum: ['new', 'contacted', 'converted', 'closed'],
    default: 'new'
  },
  notes: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: true
});

// Index for filtering
leadSchema.index({ createdAt: -1 });
leadSchema.index({ service: 1 });
leadSchema.index({ status: 1 });
leadSchema.index({ city: 1 });
leadSchema.index({ source: 1 });

module.exports = mongoose.model('Lead', leadSchema);
