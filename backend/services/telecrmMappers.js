/**
 * Mongoose document -> TeleCRM `fields` mappers.
 *
 * Keys on the left of each mapping are TeleCRM field API names. Standard
 * fields (name, phone, email) always exist in a workspace; anything else must
 * exist as a custom field in the TeleCRM workspace or it is silently dropped
 * during background processing. Adjust the key names below to match the
 * workspace field configuration.
 */
const { normalizePhone } = require('./telecrmService');

/** Drop empty strings, nulls, empty arrays so a re-push never blanks a value. */
function clean(fields) {
  const out = {};
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      if (value.length) out[key] = value.join(', ');
      continue;
    }
    const str = typeof value === 'string' ? value.trim() : value;
    if (str === '') continue;
    out[key] = str;
  }
  return out;
}

/** Marketing attribution shared by Lead and ServiceLead. */
function marketingFields(doc) {
  return {
    leadSource: doc.source,
    utmSource: doc.utmSource,
    utmMedium: doc.utmMedium,
    utmCampaign: doc.utmCampaign,
    utmTerm: doc.utmTerm,
    utmContent: doc.utmContent,
    landingPage: doc.landingPage,
    referrer: doc.referrer,
  };
}

/** General enquiry form -> models/Lead.js */
function mapLead(doc) {
  return clean({
    name: doc.name,
    phone: normalizePhone(doc.phone),
    email: doc.email,
    city: doc.city,
    country: doc.country,
    service: doc.service,
    education: doc.education,
    message: doc.message,
    websiteForm: 'General Inquiry',
    ...marketingFields(doc),
  });
}

/** Eligibility checker -> models/EligibilityLead.js */
function mapEligibilityLead(doc) {
  return clean({
    name: doc.name,
    phone: normalizePhone(doc.phone),
    email: doc.email,
    city: doc.city,
    preference: doc.preference,
    eligibilityScore: doc.score,
    scoreCategory: doc.scoreCategory,
    qualification: doc.qualification,
    age: doc.age,
    germanLevel: doc.germanLevel,
    neetAppeared: doc.neetAppeared,
    neetScore: doc.neetScore,
    preferredCountry: doc.preferredCountry,
    preferredState: doc.preferredState,
    highestQualification: doc.highestQualification,
    languageTest: doc.languageTest,
    preferredSector: doc.preferredSector,
    websiteForm: 'Eligibility Check',
    leadSource: 'Website',
  });
}

/** Service enquiry forms -> models/ServiceLead.js */
function mapServiceLead(doc) {
  return clean({
    name: doc.fullName,
    phone: normalizePhone(doc.phone),
    email: doc.email,
    city: doc.city,
    whatsapp: normalizePhone(doc.whatsapp),
    serviceType: doc.serviceType,
    jobSubType: doc.jobSubType,

    // MBBS India
    twelfthStream: doc.twelfthStream,
    overallPCBPercent: doc.overallPCBPercent,
    neetAppeared: doc.neetAppeared,
    neetScore: doc.neetScore,
    neetQualified: doc.neetQualified,
    budgetMbbsIndia: doc.budgetMbbsIndia,
    collegeCategory: doc.collegeCategory,
    statePreference: doc.statePreference,

    // MBBS Abroad
    pcbStudied: doc.pcbStudied,
    pcbPercentage: doc.pcbPercentage,
    budgetMbbsAbroad: doc.budgetMbbsAbroad,
    countryPreferenceMbbs: doc.countryPreferenceMbbs,
    passportAvailable: doc.passportAvailable,
    planToGo: doc.planToGo,

    // Study Abroad
    highestQualification: doc.highestQualification,
    courseType: doc.courseType,
    currentPercentage: doc.currentPercentage,
    languageTest: doc.languageTest,
    languageScore: doc.languageScore,
    countryPreferenceStudy: doc.countryPreferenceStudy,
    budgetStudyAbroad: doc.budgetStudyAbroad,

    // Work Abroad
    qualification: doc.qualification,
    specialization: doc.specialization,
    yearsOfExperience: doc.yearsOfExperience,
    keySkills: doc.keySkills,
    drivingLicense: doc.drivingLicense,
    age: doc.age,
    englishLevel: doc.englishLevel,
    languageCertification: doc.languageCertification,
    jobField: doc.jobField,
    countryPreferenceWork: doc.countryPreferenceWork,

    websiteForm: 'Service Inquiry',
    ...marketingFields(doc),
  });
}

module.exports = { mapLead, mapEligibilityLead, mapServiceLead, clean };
