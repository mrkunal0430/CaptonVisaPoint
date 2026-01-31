const express = require('express');
const EligibilityLead = require('../models/EligibilityLead');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/eligibility
// @desc    Submit eligibility check
// @access  Public
router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      city,
      preference,
      qualification,
      age,
      germanLevel,
      neetAppeared,
      neetScore,
      preferredCountry,
      preferredState,
      highestQualification,
      languageTest,
      preferredSector,
      score
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Name, email, and phone are required' });
    }

    if (!preference) {
      return res.status(400).json({ message: 'Preference selection is required' });
    }

    if (score === undefined) {
      return res.status(400).json({ message: 'Score is required' });
    }

    // Determine score category
    let scoreCategory = 'Good';
    if (score >= 70) scoreCategory = 'Excellent';
    else if (score < 50) scoreCategory = 'Needs Work';

    const eligibilityLead = await EligibilityLead.create({
      name,
      email,
      phone,
      city: city || '',
      preference,
      qualification: qualification || '',
      age: age || '',
      germanLevel: germanLevel || '',
      neetAppeared: neetAppeared || '',
      neetScore: neetScore || '',
      preferredCountry: preferredCountry || '',
      preferredState: preferredState || '',
      highestQualification: highestQualification || '',
      languageTest: languageTest || '',
      preferredSector: preferredSector || '',
      score,
      scoreCategory
    });

    res.status(201).json({
      success: true,
      message: 'Your eligibility check has been submitted. Our expert will contact you soon!',
      lead: eligibilityLead
    });
  } catch (error) {
    console.error('Eligibility Submission Error:', error);
    res.status(500).json({ message: 'Failed to submit eligibility check. Please try again.' });
  }
});

// @route   GET /api/eligibility
// @desc    Get all eligibility leads with filters
// @access  Private (Admin only)
router.get('/', protect, async (req, res) => {
  try {
    const {
      preference,
      status,
      startDate,
      endDate,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      page = 1,
      limit = 20
    } = req.query;

    // Build filter query
    const filter = {};

    if (preference && preference !== 'all') {
      filter.preference = preference;
    }

    if (status && status !== 'all') {
      filter.status = status;
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
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ];
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [leads, total] = await Promise.all([
      EligibilityLead.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(parseInt(limit)),
      EligibilityLead.countDocuments(filter)
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
    console.error('Get Eligibility Leads Error:', error);
    res.status(500).json({ message: 'Failed to fetch eligibility leads' });
  }
});

// @route   GET /api/eligibility/export
// @desc    Export eligibility leads as CSV
// @access  Private (Admin only)
router.get('/export', protect, async (req, res) => {
  try {
    const { preference, status, startDate, endDate } = req.query;

    const filter = {};
    if (preference && preference !== 'all') filter.preference = preference;
    if (status && status !== 'all') filter.status = status;
    if (startDate || endDate) {
      filter.createdAt = {};
      if (startDate) filter.createdAt.$gte = new Date(startDate);
      if (endDate) filter.createdAt.$lte = new Date(endDate + 'T23:59:59.999Z');
    }

    const leads = await EligibilityLead.find(filter).sort({ createdAt: -1 });

    // Generate CSV
    const headers = ['Date', 'Name', 'Email', 'Phone', 'City', 'Preference', 'Score', 'Score Category', 'Status', 'Notes'];
    const csvRows = [headers.join(',')];

    leads.forEach(lead => {
      const row = [
        new Date(lead.createdAt).toLocaleDateString(),
        `"${(lead.name || '').replace(/"/g, '""')}"`,
        `"${(lead.email || '').replace(/"/g, '""')}"`,
        `"${(lead.phone || '').replace(/"/g, '""')}"`,
        `"${(lead.city || '').replace(/"/g, '""')}"`,
        `"${(lead.preference || '').replace(/"/g, '""')}"`,
        lead.score || 0,
        `"${(lead.scoreCategory || '').replace(/"/g, '""')}"`,
        lead.status || 'new',
        `"${(lead.notes || '').replace(/"/g, '""')}"`
      ];
      csvRows.push(row.join(','));
    });

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=eligibility-leads-${new Date().toISOString().split('T')[0]}.csv`);
    res.send(csvRows.join('\n'));
  } catch (error) {
    console.error('Export Error:', error);
    res.status(500).json({ message: 'Failed to export eligibility leads' });
  }
});

// @route   GET /api/eligibility/stats
// @desc    Get eligibility lead statistics
// @access  Private (Admin only)
router.get('/stats', protect, async (req, res) => {
  try {
    const [total, newLeads, contacted, converted] = await Promise.all([
      EligibilityLead.countDocuments(),
      EligibilityLead.countDocuments({ status: 'new' }),
      EligibilityLead.countDocuments({ status: 'contacted' }),
      EligibilityLead.countDocuments({ status: 'converted' })
    ]);

    // Preference breakdown
    const preferenceStats = await EligibilityLead.aggregate([
      { $group: { _id: '$preference', count: { $sum: 1 } } }
    ]);

    // Score category breakdown
    const scoreCategoryStats = await EligibilityLead.aggregate([
      { $group: { _id: '$scoreCategory', count: { $sum: 1 } } }
    ]);

    // Average score
    const avgScoreResult = await EligibilityLead.aggregate([
      { $group: { _id: null, avgScore: { $avg: '$score' } } }
    ]);
    const avgScore = avgScoreResult[0]?.avgScore?.toFixed(1) || 0;

    res.json({
      success: true,
      stats: {
        total,
        new: newLeads,
        contacted,
        converted,
        avgScore,
        byPreference: preferenceStats,
        byScoreCategory: scoreCategoryStats
      }
    });
  } catch (error) {
    console.error('Eligibility Stats Error:', error);
    res.status(500).json({ message: 'Failed to fetch stats' });
  }
});

// @route   GET /api/eligibility/:id
// @desc    Get single eligibility lead
// @access  Private (Admin only)
router.get('/:id', protect, async (req, res) => {
  try {
    const lead = await EligibilityLead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: 'Eligibility lead not found' });
    }

    res.json({ success: true, lead });
  } catch (error) {
    console.error('Get Eligibility Lead Error:', error);
    res.status(500).json({ message: 'Failed to fetch lead' });
  }
});

// @route   PUT /api/eligibility/:id
// @desc    Update eligibility lead status/notes
// @access  Private (Admin only)
router.put('/:id', protect, async (req, res) => {
  try {
    const { status, notes } = req.body;
    const updateData = {};

    if (status) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;

    const lead = await EligibilityLead.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ message: 'Eligibility lead not found' });
    }

    res.json({ success: true, lead });
  } catch (error) {
    console.error('Update Eligibility Lead Error:', error);
    res.status(500).json({ message: 'Failed to update lead' });
  }
});

// @route   DELETE /api/eligibility/:id
// @desc    Delete an eligibility lead
// @access  Private (Admin only)
router.delete('/:id', protect, async (req, res) => {
  try {
    const lead = await EligibilityLead.findByIdAndDelete(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: 'Eligibility lead not found' });
    }

    res.json({ success: true, message: 'Eligibility lead deleted successfully' });
  } catch (error) {
    console.error('Delete Eligibility Lead Error:', error);
    res.status(500).json({ message: 'Failed to delete lead' });
  }
});

module.exports = router;
