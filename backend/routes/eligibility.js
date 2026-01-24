const express = require('express');
const EligibilityLead = require('../models/EligibilityLead');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/eligibility
// @desc    Submit MBBS eligibility check
// @access  Public
router.post('/', async (req, res) => {
  try {
    const {
      name,
      whatsapp,
      email,
      pcbScore,
      neetStatus,
      annualBudget,
      readiness,
      totalScore,
      eligibilityCategory,
      consentGiven
    } = req.body;

    // Validate required fields
    if (!name || !whatsapp || !email) {
      return res.status(400).json({ message: 'Name, WhatsApp number, and email are required' });
    }

    if (!pcbScore || !neetStatus || !annualBudget || !readiness) {
      return res.status(400).json({ message: 'All quiz answers are required' });
    }

    if (totalScore === undefined || !eligibilityCategory) {
      return res.status(400).json({ message: 'Score and eligibility category are required' });
    }

    if (!consentGiven) {
      return res.status(400).json({ message: 'Consent is required to proceed' });
    }

    const eligibilityLead = await EligibilityLead.create({
      name,
      whatsapp,
      email,
      pcbScore,
      neetStatus,
      annualBudget,
      readiness,
      totalScore,
      eligibilityCategory,
      consentGiven
    });

    res.status(201).json({
      success: true,
      message: 'Your eligibility check has been submitted. Our MBBS expert will contact you soon!',
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
      eligibilityCategory,
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

    if (eligibilityCategory && eligibilityCategory !== 'all') {
      filter.eligibilityCategory = eligibilityCategory;
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

    // Search by name, email, or whatsapp
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { whatsapp: { $regex: search, $options: 'i' } }
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

    // Category breakdown
    const categoryStats = await EligibilityLead.aggregate([
      { $group: { _id: '$eligibilityCategory', count: { $sum: 1 } } }
    ]);

    // Score distribution
    const scoreStats = await EligibilityLead.aggregate([
      {
        $bucket: {
          groupBy: '$totalScore',
          boundaries: [0, 4, 6, 8, 11],
          default: 'Other',
          output: { count: { $sum: 1 } }
        }
      }
    ]);

    // Average score
    const avgScoreResult = await EligibilityLead.aggregate([
      { $group: { _id: null, avgScore: { $avg: '$totalScore' } } }
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
        byCategory: categoryStats,
        byScore: scoreStats
      }
    });
  } catch (error) {
    console.error('Eligibility Stats Error:', error);
    res.status(500).json({ message: 'Failed to fetch stats' });
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
