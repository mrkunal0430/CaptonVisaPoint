const express = require('express');
const Lead = require('../models/Lead');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/leads
// @desc    Create a new lead (from website form)
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Name, email, and phone are required' });
    }

    const lead = await Lead.create({
      name,
      email,
      phone,
      service: service || 'Study Abroad',
      message: message || ''
    });

    res.status(201).json({
      success: true,
      message: 'Thank you! We will contact you shortly.',
      lead
    });
  } catch (error) {
    console.error('Lead Creation Error:', error);
    res.status(500).json({ message: 'Failed to submit form. Please try again.' });
  }
});

// @route   GET /api/leads
// @desc    Get all leads with filters
// @access  Private (Admin only)
router.get('/', protect, async (req, res) => {
  try {
    const { service, status, startDate, endDate, search, page = 1, limit = 20 } = req.query;

    // Build filter query
    const filter = {};

    if (service && service !== 'all') {
      filter.service = service;
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

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [leads, total] = await Promise.all([
      Lead.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit)),
      Lead.countDocuments(filter)
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
    console.error('Get Leads Error:', error);
    res.status(500).json({ message: 'Failed to fetch leads' });
  }
});

// @route   PUT /api/leads/:id
// @desc    Update lead status
// @access  Private (Admin only)
router.put('/:id', protect, async (req, res) => {
  try {
    const { status } = req.body;

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
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

// @route   DELETE /api/leads/:id
// @desc    Delete a lead
// @access  Private (Admin only)
router.delete('/:id', protect, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.json({ success: true, message: 'Lead deleted successfully' });
  } catch (error) {
    console.error('Delete Lead Error:', error);
    res.status(500).json({ message: 'Failed to delete lead' });
  }
});

// @route   GET /api/leads/stats
// @desc    Get lead statistics
// @access  Private (Admin only)
router.get('/stats', protect, async (req, res) => {
  try {
    const [total, newLeads, contacted, converted] = await Promise.all([
      Lead.countDocuments(),
      Lead.countDocuments({ status: 'new' }),
      Lead.countDocuments({ status: 'contacted' }),
      Lead.countDocuments({ status: 'converted' })
    ]);

    // Service breakdown
    const serviceStats = await Lead.aggregate([
      { $group: { _id: '$service', count: { $sum: 1 } } }
    ]);

    res.json({
      success: true,
      stats: {
        total,
        new: newLeads,
        contacted,
        converted,
        byService: serviceStats
      }
    });
  } catch (error) {
    console.error('Stats Error:', error);
    res.status(500).json({ message: 'Failed to fetch stats' });
  }
});

module.exports = router;
