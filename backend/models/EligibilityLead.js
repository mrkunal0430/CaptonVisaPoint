const mongoose = require('mongoose');

const eligibilityLeadSchema = new mongoose.Schema({
  // Personal Details (Step 3)
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
    required: [true, 'Phone number is required'],
    trim: true
  },
  city: {
    type: String,
    trim: true,
    default: ''
  },

  // Step 1 - Preference Type
  preference: {
    type: String,
    required: true,
    enum: ['ausbildung', 'mbbs-abroad', 'mbbs-india', 'study-abroad', 'jobs']
  },

  // Step 2 - Ausbildung specific
  qualification: {
    type: String,
    enum: ['10th', '12th', 'diploma', 'graduation', 'bachelors', 'masters', 'others', ''],
    default: ''
  },
  age: {
    type: String,
    default: ''
  },
  germanLevel: {
    type: String,
    enum: ['A1', 'A2', 'B1', 'B2', 'Not Started', ''],
    default: ''
  },

  // Step 2 - MBBS specific
  neetAppeared: {
    type: String,
    enum: ['yes', 'no', 'waiting', ''],
    default: ''
  },
  neetScore: {
    type: String,
    default: ''
  },
  preferredCountry: {
    type: String,
    default: ''
  },
  preferredState: {
    type: String,
    default: ''
  },

  // Step 2 - Study Abroad specific
  highestQualification: {
    type: String,
    default: ''
  },
  languageTest: {
    type: String,
    default: ''
  },

  // Step 2 - Jobs specific
  preferredSector: {
    type: String,
    enum: ['health care', 'it', 'hospitality', 'others', ''],
    default: ''
  },

  // Scoring
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  scoreCategory: {
    type: String,
    enum: ['Excellent', 'Good', 'Needs Work'],
    default: 'Good'
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
eligibilityLeadSchema.index({ score: -1 });
eligibilityLeadSchema.index({ preference: 1 });
eligibilityLeadSchema.index({ status: 1 });

module.exports = mongoose.model('EligibilityLead', eligibilityLeadSchema);
