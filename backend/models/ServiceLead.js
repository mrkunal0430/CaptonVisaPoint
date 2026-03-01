const mongoose = require('mongoose');

const serviceLeadSchema = new mongoose.Schema({
  // ===== COMMON FIELDS (All Services) =====
  serviceType: {
    type: String,
    required: true,
    enum: ['MBBS_INDIA', 'MBBS_ABROAD', 'STUDY_ABROAD', 'WORK_ABROAD'],
  },

  // Job sub-type for WORK_ABROAD leads
  jobSubType: {
    type: String,
    enum: ['HEALTHCARE_JOBS', 'JOBS_AFTER_12TH', 'TECHNICAL_JOBS', 'HOSPITALITY_JOBS', ''],
    default: ''
  },

  // Basic Details
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
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
    trim: true
  },
  whatsapp: {
    type: String,
    trim: true
  },

  // ===== MBBS INDIA SPECIFIC FIELDS =====
  // Academic Details
  twelfthStream: {
    type: String,
    enum: ['PCB', 'PCM', 'Other', '']
  },
  physicsPercent: Number,
  chemistryPercent: Number,
  biologyPercent: Number,
  overallPCBPercent: Number,

  // NEET Details
  neetAppeared: {
    type: String,
    enum: ['Yes', 'No', '']
  },
  neetScore: Number,
  neetQualified: {
    type: String,
    enum: ['Yes', 'No', '']
  },

  // Budget (MBBS India)
  budgetMbbsIndia: {
    type: String,
    enum: ['Less than 5L', '5-10L', '10-15L', '15L+', '']
  },

  // Preferences (MBBS India)
  collegeCategory: {
    type: String,
    enum: ['Government', 'Private', 'Deemed', '']
  },
  statePreference: String,

  // ===== MBBS ABROAD SPECIFIC FIELDS =====
  // Eligibility
  pcbStudied: {
    type: String,
    enum: ['Yes', 'No', '']
  },
  pcbPercentage: {
    type: String,
    enum: ['Above 50', 'Below 50', '']
  },

  // Budget (MBBS Abroad)
  budgetMbbsAbroad: {
    type: String,
    enum: ['3-4L', '4-6L', '6-8L', '8L+', '']
  },

  // Country Preference (MBBS Abroad) - Multi-select
  countryPreferenceMbbs: [{
    type: String,
    enum: ['Russia', 'Uzbekistan', 'Kazakhstan', 'Georgia', 'Philippines', 'Egypt', 'Other']
  }],

  // Additional (MBBS Abroad)
  passportAvailable: {
    type: String,
    enum: ['Yes', 'No', '']
  },
  planToGo: {
    type: String,
    enum: ['ASAP', 'Within 3 months', 'Within 6 months', 'This year', 'Next year', 'Exploring', '']
  },

  // ===== STUDY ABROAD SPECIFIC FIELDS =====
  // Education
  highestQualification: {
    type: String,
    enum: ['10th', '12th', 'Diploma', 'Graduate', 'Post Graduate', '']
  },
  courseType: {
    type: String,
    enum: ['Bachelors', 'Masters', 'Diploma', 'PhD', '']
  },
  currentPercentage: String,

  // Language Proficiency
  languageTest: {
    type: String,
    enum: ['IELTS', 'TOEFL', 'PTE', 'Duolingo', 'Not taken', '']
  },
  languageScore: String,

  // Country Preference (Study Abroad)
  countryPreferenceStudy: [{
    type: String,
    enum: ['UK', 'USA', 'Canada', 'Germany', 'Australia', 'Europe', 'Other']
  }],

  // Budget (Study Abroad)
  budgetStudyAbroad: {
    type: String,
    enum: ['Below 10L', '10-20L', '20-30L', '30L+', '']
  },

  // ===== WORK ABROAD SPECIFIC FIELDS =====
  // Profile
  qualification: {
    type: String,
    enum: ['MBBS', 'BSc Nursing', 'GNM', 'Hotel Management', 'IT/Engineering',
           '10th Pass', '12th Pass', 'ITI', 'Diploma', 'B.Tech/BE', 'BCA/MCA',
           'Allied Health', 'Other', '']
  },
  specialization: String,
  yearsOfExperience: String,
  keySkills: String,
  drivingLicense: {
    type: String,
    enum: ['Yes', 'No', '']
  },
  age: {
    type: String,
    enum: ['18-25', '25-35', '35+', '']
  },

  // Language (Work Abroad)
  englishLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', '']
  },
  languageCertification: {
    type: String,
    enum: ['IELTS', 'OET', 'German A1', 'German A2', 'German B1', 'German B2', 'DHA/MOH/Prometric', 'None', '']
  },

  // Job Preference
  jobField: {
    type: String,
    enum: ['Healthcare', 'Hospitality', 'Retail & Sales', 'Warehouse & Logistics',
           'Driver & Delivery', 'Construction', 'Catering', 'IT', 'Mechanical',
           'Electrical', 'Civil', 'Automotive & Welding', 'Oil & Gas', 'Skilled Worker', 'Other', '']
  },
  countryPreferenceWork: [{
    type: String,
    enum: ['Germany', 'UK', 'Gulf', 'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman',
           'Bahrain', 'Australia', 'Canada', 'USA', 'Europe', 'Other']
  }],

  // ===== MARKETING & TRACKING =====
  source: {
    type: String,
    enum: ['Meta Ads', 'Google', 'Organic', 'Referral', 'Direct', 'Other'],
    default: 'Direct'
  },
  utmSource: String,
  utmMedium: String,
  utmCampaign: String,
  utmTerm: String,
  utmContent: String,
  landingPage: String,
  referrer: String,

  // ===== STATUS MANAGEMENT =====
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Converted', 'Not Interested', 'Follow Up'],
    default: 'New'
  },
  notes: String,
  assignedTo: String,
  followUpDate: Date,

}, {
  timestamps: true
});

// Indexes for efficient querying
serviceLeadSchema.index({ createdAt: -1 });
serviceLeadSchema.index({ serviceType: 1 });
serviceLeadSchema.index({ status: 1 });
serviceLeadSchema.index({ source: 1 });
serviceLeadSchema.index({ 'fullName': 'text', 'email': 'text', 'phone': 'text' });

module.exports = mongoose.model('ServiceLead', serviceLeadSchema);
