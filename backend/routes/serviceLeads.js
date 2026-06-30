const express = require('express');
const ServiceLead = require('../models/ServiceLead');
const { protect } = require('../middleware/auth');

const router = express.Router();

// ─── Shared helper ────────────────────────────────────────────────────────────
/**
 * Normalise a Mongoose ValidationError into a human-readable message.
 * Returns null when the error is NOT a ValidationError so callers can
 * decide whether to bubble up a generic 500.
 */
function handleLeadError(error, res, context) {
  console.error(`${context} Error:`, error);

  if (error.name === 'ValidationError') {
    // Return the first meaningful validation message
    const messages = Object.values(error.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: messages[0] || 'Invalid data submitted. Please check your inputs.',
    });
  }

  return res.status(500).json({
    success: false,
    message: 'Failed to submit form. Please try again.',
  });
}

// ============ PUBLIC ROUTES (Form Submissions) ============

// @route   POST /api/service-leads/mbbs-india
// @desc    Submit MBBS India inquiry
// @access  Public
router.post('/mbbs-india', async (req, res) => {
  try {
    const lead = await ServiceLead.create({ serviceType: 'MBBS_INDIA', ...req.body });
    res.status(201).json({
      success: true,
      message: 'Thank you! Our counselor will contact you shortly.',
      leadId: lead._id,
    });
  } catch (error) {
    handleLeadError(error, res, 'MBBS India Lead');
  }
});

// @route   POST /api/service-leads/mbbs-abroad
// @desc    Submit MBBS Abroad inquiry
// @access  Public
router.post('/mbbs-abroad', async (req, res) => {
  try {
    const lead = await ServiceLead.create({ serviceType: 'MBBS_ABROAD', ...req.body });
    res.status(201).json({
      success: true,
      message: 'Thank you! Our counselor will contact you shortly.',
      leadId: lead._id,
    });
  } catch (error) {
    handleLeadError(error, res, 'MBBS Abroad Lead');
  }
});

// @route   POST /api/service-leads/study-abroad
// @desc    Submit Study Abroad inquiry
// @access  Public
router.post('/study-abroad', async (req, res) => {
  try {
    const lead = await ServiceLead.create({ serviceType: 'STUDY_ABROAD', ...req.body });
    res.status(201).json({
      success: true,
      message: 'Thank you! Our counselor will contact you shortly.',
      leadId: lead._id,
    });
  } catch (error) {
    handleLeadError(error, res, 'Study Abroad Lead');
  }
});

// @route   POST /api/service-leads/work-abroad
// @desc    Submit Work Abroad inquiry
// @access  Public
router.post('/work-abroad', async (req, res) => {
  try {
    const lead = await ServiceLead.create({ serviceType: 'WORK_ABROAD', ...req.body });
    res.status(201).json({
      success: true,
      message: 'Thank you! Our counselor will contact you shortly.',
      leadId: lead._id,
    });
  } catch (error) {
    handleLeadError(error, res, 'Work Abroad Lead');
  }
});

// @route   POST /api/service-leads/healthcare-jobs
// @desc    Submit Healthcare Jobs Abroad inquiry
// @access  Public
router.post('/healthcare-jobs', async (req, res) => {
  try {
    const lead = await ServiceLead.create({
      serviceType: 'WORK_ABROAD',
      jobSubType: 'HEALTHCARE_JOBS',
      ...req.body,
    });
    res.status(201).json({
      success: true,
      message: 'Thank you! Our healthcare recruitment consultant will contact you within 24 hours.',
      leadId: lead._id,
    });
  } catch (error) {
    handleLeadError(error, res, 'Healthcare Jobs Lead');
  }
});

// @route   POST /api/service-leads/jobs-after-12th
// @desc    Submit Jobs After 12th inquiry
// @access  Public
router.post('/jobs-after-12th', async (req, res) => {
  try {
    const lead = await ServiceLead.create({
      serviceType: 'WORK_ABROAD',
      jobSubType: 'JOBS_AFTER_12TH',
      ...req.body,
    });
    res.status(201).json({
      success: true,
      message: 'Thank you! Our placement consultant will contact you within 24 hours.',
      leadId: lead._id,
    });
  } catch (error) {
    handleLeadError(error, res, 'Jobs After 12th Lead');
  }
});

// @route   POST /api/service-leads/technical-jobs
// @desc    Submit Technical Jobs Abroad inquiry
// @access  Public
router.post('/technical-jobs', async (req, res) => {
  try {
    const lead = await ServiceLead.create({
      serviceType: 'WORK_ABROAD',
      jobSubType: 'TECHNICAL_JOBS',
      ...req.body,
    });
    res.status(201).json({
      success: true,
      message: 'Thank you! Our technical recruitment consultant will contact you within 24 hours.',
      leadId: lead._id,
    });
  } catch (error) {
    handleLeadError(error, res, 'Technical Jobs Lead');
  }
});


// @route   POST /api/service-leads/hospitality-jobs
// @desc    Submit Hospitality Jobs Abroad inquiry
// @access  Public
router.post('/hospitality-jobs', async (req, res) => {
  try {
    const lead = await ServiceLead.create({
      serviceType: 'WORK_ABROAD',
      jobSubType: 'HOSPITALITY_JOBS',
      ...req.body,
    });
    res.status(201).json({
      success: true,
      message: 'Thank you! Our hospitality recruitment consultant will contact you within 24 hours.',
      leadId: lead._id,
    });
  } catch (error) {
    handleLeadError(error, res, 'Hospitality Jobs Lead');
  }
});

// ============ ADMIN ROUTES (Protected) ============

// @route   GET /api/service-leads
// @desc    Get all service leads with filters
// @access  Private (Admin only)
router.get('/', protect, async (req, res) => {
  try {
    const {
      serviceType,
      jobSubType,
      status,
      source,
      budget,
      startDate,
      endDate,
      search,
      page = 1,
      limit = 20
    } = req.query;

    // Build filter query
    const filter = {};

    if (serviceType && serviceType !== 'all') {
      filter.serviceType = serviceType;
    }

    if (jobSubType && jobSubType !== 'all') {
      filter.jobSubType = jobSubType;
    }

    if (status && status !== 'all') {
      filter.status = status;
    }

    if (source && source !== 'all') {
      filter.source = source;
    }

    // Budget filter based on service type
    if (budget && budget !== 'all') {
      if (serviceType === 'MBBS_INDIA') {
        filter.budgetMbbsIndia = budget;
      } else if (serviceType === 'MBBS_ABROAD') {
        filter.budgetMbbsAbroad = budget;
      } else if (serviceType === 'STUDY_ABROAD') {
        filter.budgetStudyAbroad = budget;
      }
    }

    // Date range filter
    if (startDate || endDate) {
      filter.createdAt = {};
      if (startDate) {
        filter.createdAt.$gte = new Date(startDate);
      }
      if (endDate) {
        filter.createdAt.$lte = new Date(endDate + 'T23:59:59.999Z');
      }
    }

    // Search by name, email, or phone
    if (search) {
      filter.$or = [
        { fullName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } }
      ];
    }

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [leads, total] = await Promise.all([
      ServiceLead.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit)),
      ServiceLead.countDocuments(filter)
    ]);

    res.json({
      success: true,
      leads,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit)),
        limit: parseInt(limit)
      }
    });
  } catch (error) {
    console.error('Get Service Leads Error:', error);
    res.status(500).json({ message: 'Failed to fetch leads' });
  }
});

// @route   GET /api/service-leads/stats
// @desc    Get service lead statistics
// @access  Private (Admin only)
router.get('/stats', protect, async (req, res) => {
  try {
    const [total, statusStats, serviceStats, sourceStats, recentLeads] = await Promise.all([
      ServiceLead.countDocuments(),
      ServiceLead.aggregate([
        { $group: { _id: '$status', count: { $sum: 1 } } }
      ]),
      ServiceLead.aggregate([
        { $group: { _id: '$serviceType', count: { $sum: 1 } } }
      ]),
      ServiceLead.aggregate([
        { $group: { _id: '$source', count: { $sum: 1 } } }
      ]),
      ServiceLead.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select('fullName serviceType status createdAt')
    ]);

    // Today's leads
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayCount = await ServiceLead.countDocuments({ createdAt: { $gte: today } });

    // This week's leads
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weekCount = await ServiceLead.countDocuments({ createdAt: { $gte: weekAgo } });

    res.json({
      success: true,
      stats: {
        total,
        today: todayCount,
        thisWeek: weekCount,
        byStatus: statusStats,
        byService: serviceStats,
        bySource: sourceStats,
        recentLeads
      }
    });
  } catch (error) {
    console.error('Stats Error:', error);
    res.status(500).json({ message: 'Failed to fetch stats' });
  }
});

// @route   GET /api/service-leads/export
// @desc    Export leads as CSV
// @access  Private (Admin only)
router.get('/export', protect, async (req, res) => {
  try {
    const { serviceType, status, startDate, endDate } = req.query;

    const filter = {};
    if (serviceType && serviceType !== 'all') filter.serviceType = serviceType;
    if (status && status !== 'all') filter.status = status;
    if (startDate || endDate) {
      filter.createdAt = {};
      if (startDate) filter.createdAt.$gte = new Date(startDate);
      if (endDate) filter.createdAt.$lte = new Date(endDate + 'T23:59:59.999Z');
    }

    const leads = await ServiceLead.find(filter).sort({ createdAt: -1 });

    // Build CSV with all fields
    const headers = [
      'Date', 'Service Type', 'Job Sub Type', 'Full Name', 'Email', 'Phone', 'City', 'WhatsApp',
      'Status', 'Source',
      // MBBS India
      '12th Stream', 'Physics %', 'Chemistry %', 'Biology %', 'Overall PCB %',
      'NEET Appeared', 'NEET Score', 'NEET Qualified',
      'Budget', 'College Category', 'State Preference',
      // MBBS Abroad
      'PCB Studied', 'PCB Percentage', 'Passport Available', 'Plan To Go',
      // Study Abroad
      'Highest Qualification', 'Course Type', 'Current Percentage',
      'Language Test', 'Language Score',
      // Work Abroad
      'Qualification', 'Specialization', 'Years of Experience', 'Key Skills',
      'English Level', 'Language Certification', 'Job Field',
      'Age', 'Driving License',
      // Common
      'Country Preference',
      // Tracking
      'UTM Source', 'UTM Medium', 'UTM Campaign', 'UTM Term', 'UTM Content',
      'Landing Page', 'Referrer',
      // Management
      'Assigned To', 'Follow Up Date', 'Notes'
    ];

    const csvRows = [headers.join(',')];

    leads.forEach(lead => {
      const d = new Date(lead.createdAt);
      const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

      const row = [
        date,
        lead.serviceType || '',
        lead.jobSubType || '',
        `"${(lead.fullName || '').replace(/"/g, '""')}"`,
        lead.email || '',
        lead.phone || '',
        `"${(lead.city || '').replace(/"/g, '""')}"`,
        lead.whatsapp || '',
        lead.status || '',
        lead.source || '',
        // MBBS India
        lead.twelfthStream || '',
        lead.physicsPercent || '',
        lead.chemistryPercent || '',
        lead.biologyPercent || '',
        lead.overallPCBPercent || '',
        lead.neetAppeared || '',
        lead.neetScore || '',
        lead.neetQualified || '',
        lead.budgetMbbsIndia || lead.budgetMbbsAbroad || lead.budgetStudyAbroad || '',
        lead.collegeCategory || '',
        `"${(lead.statePreference || '').replace(/"/g, '""')}"`,
        // MBBS Abroad
        lead.pcbStudied || '',
        lead.pcbPercentage || '',
        lead.passportAvailable || '',
        lead.planToGo || '',
        // Study Abroad
        lead.highestQualification || '',
        lead.courseType || '',
        lead.currentPercentage || '',
        lead.languageTest || '',
        lead.languageScore || '',
        // Work Abroad
        lead.qualification || '',
        `"${(lead.specialization || '').replace(/"/g, '""')}"`,
        lead.yearsOfExperience || '',
        `"${(lead.keySkills || '').replace(/"/g, '""')}"`,
        lead.englishLevel || '',
        lead.languageCertification || '',
        lead.jobField || '',
        lead.age || '',
        lead.drivingLicense || '',
        // Common
        `"${(lead.countryPreferenceMbbs || lead.countryPreferenceStudy || lead.countryPreferenceWork || []).join(', ')}"`,
        // Tracking
        lead.utmSource || '',
        lead.utmMedium || '',
        `"${(lead.utmCampaign || '').replace(/"/g, '""')}"`,
        lead.utmTerm || '',
        lead.utmContent || '',
        `"${(lead.landingPage || '').replace(/"/g, '""')}"`,
        `"${(lead.referrer || '').replace(/"/g, '""')}"`,
        // Management
        lead.assignedTo || '',
        lead.followUpDate ? (() => { const fd = new Date(lead.followUpDate); return `${fd.getFullYear()}-${String(fd.getMonth() + 1).padStart(2, '0')}-${String(fd.getDate()).padStart(2, '0')}`; })() : '',
        `"${(lead.notes || '').replace(/"/g, '""')}"`
      ];
      csvRows.push(row.join(','));
    });

    // Add UTF-8 BOM so Excel opens the CSV correctly
    const BOM = '\uFEFF';
    const csv = BOM + csvRows.join('\r\n');

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename=service-leads-${new Date().toISOString().split('T')[0]}.csv`);
    res.send(csv);
  } catch (error) {
    console.error('Export Error:', error);
    res.status(500).json({ message: 'Failed to export leads' });
  }
});

// @route   GET /api/service-leads/:id
// @desc    Get single lead details
// @access  Private (Admin only)
router.get('/:id', protect, async (req, res) => {
  try {
    const lead = await ServiceLead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.json({ success: true, lead });
  } catch (error) {
    console.error('Get Lead Error:', error);
    res.status(500).json({ message: 'Failed to fetch lead' });
  }
});

// @route   PUT /api/service-leads/:id
// @desc    Update lead (status, notes, etc.)
// @access  Private (Admin only)
router.put('/:id', protect, async (req, res) => {
  try {
    const { status, notes, assignedTo, followUpDate } = req.body;

    const updateData = {};
    if (status) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;
    if (assignedTo !== undefined) updateData.assignedTo = assignedTo;
    if (followUpDate) updateData.followUpDate = followUpDate;

    const lead = await ServiceLead.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.json({ success: true, lead });
  } catch (error) {
    console.error('Update Lead Error:', error);
    res.status(500).json({ message: 'Failed to update lead' });
  }
});

// @route   DELETE /api/service-leads/:id
// @desc    Delete a lead
// @access  Private (Admin only)
router.delete('/:id', protect, async (req, res) => {
  try {
    const lead = await ServiceLead.findByIdAndDelete(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.json({ success: true, message: 'Lead deleted successfully' });
  } catch (error) {
    console.error('Delete Lead Error:', error);
    res.status(500).json({ message: 'Failed to delete lead' });
  }
});

module.exports = router;
