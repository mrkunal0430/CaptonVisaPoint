const mongoose = require('mongoose');

const eligibilityLeadSchema = new mongoose.Schema({
  // Personal Details
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  whatsapp: {
    type: String,
    required: [true, 'WhatsApp number is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },

  // Quiz Answers
  pcbScore: {
    type: String,
    required: true,
    enum: ['85% & above', '75% – 84%', '60% – 74%', 'Below 60%']
  },
  neetStatus: {
    type: String,
    required: true,
    enum: [
      'NEET qualified with good score',
      'NEET qualified (average / borderline)',
      'Appeared but not qualified',
      'Not appeared yet'
    ]
  },
  annualBudget: {
    type: String,
    required: true,
    enum: [
      '₹6 Lakhs & above per year',
      '₹5 – 6 Lakhs per year',
      '₹4 – 5 Lakhs per year',
      'Below ₹4 Lakhs per year'
    ]
  },
  readiness: {
    type: String,
    required: true,
    enum: [
      'Fully ready with family & financial support',
      'Ready but need guidance',
      'Interested but unsure',
      'Not comfortable yet'
    ]
  },

  // Scoring
  totalScore: {
    type: Number,
    required: true,
    min: 2,
    max: 10
  },
  eligibilityCategory: {
    type: String,
    required: true,
    enum: ['Highly Eligible', 'Eligible with Guidance', 'Borderline', 'Not Eligible Yet']
  },

  // Consent
  consentGiven: {
    type: Boolean,
    required: true,
    default: true
  },

  // Status for admin tracking
  status: {
    type: String,
    enum: ['new', 'contacted', 'converted', 'closed'],
    default: 'new'
  },

  // Admin notes
  notes: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: true
});

// Indexes for filtering and sorting
eligibilityLeadSchema.index({ createdAt: -1 });
eligibilityLeadSchema.index({ totalScore: -1 });
eligibilityLeadSchema.index({ eligibilityCategory: 1 });
eligibilityLeadSchema.index({ status: 1 });

module.exports = mongoose.model('EligibilityLead', eligibilityLeadSchema);
