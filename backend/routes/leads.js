const express = require('express');
const Lead = require('../models/Lead');
const { protect } = require('../middleware/auth');
const { syncLeadInBackground, syncLead } = require('../services/telecrmService');
const { mapLead } = require('../services/telecrmMappers');

const router = express.Router();

// Website forms prefix the message with their origin, e.g. "[Welcome Popup]".
// ?form=<label> filters on that prefix.
const escapeRegex = (str) => String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const applyFormFilter = (filter, form) => {
  if (form && form !== 'all') {
    filter.message = { $regex: '^\\[' + escapeRegex(form) + '\\]' };
  }
};

// @route   POST /api/leads
// @desc    Create a new lead (from website form)
// @access  Public
router.post('/', async (req, res) => {
  try {
    const {
      name, email, phone, city, country, service, education, message,
      source, utmSource, utmMedium, utmCampaign, utmTerm, utmContent,
      landingPage, referrer
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Name, email, and phone are required' });
    }

    const lead = await Lead.create({
      name,
      email,
      phone,
      city: city || '',
      country: country || '',
      service: service || 'General Inquiry',
      education: education || '',
      message: message || '',
      source: source || 'Direct',
      utmSource: utmSource || '',
      utmMedium: utmMedium || '',
      utmCampaign: utmCampaign || '',
      utmTerm: utmTerm || '',
      utmContent: utmContent || '',
      landingPage: landingPage || '',
      referrer: referrer || ''
    });

    res.status(201).json({
      success: true,
      message: 'Thank you! We will contact you shortly.',
      lead
    });

    // Mirror to TeleCRM after responding so the visitor never waits on it
    syncLeadInBackground(Lead, lead, mapLead(lead));
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
    const { service, source, status, form, startDate, endDate, search, page = 1, limit = 20 } = req.query;

    // Build filter query
    const filter = {};

    if (service && service !== 'all') {
      filter.service = service;
    }

    if (source && source !== 'all') {
      filter.source = source;
    }

    if (status && status !== 'all') {
      filter.status = status;
    }

    applyFormFilter(filter, form);

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

    // Search by name, email, phone, city, or message
    if (search) {
      const term = escapeRegex(search);
      filter.$or = [
        { name: { $regex: term, $options: 'i' } },
        { email: { $regex: term, $options: 'i' } },
        { phone: { $regex: term, $options: 'i' } },
        { city: { $regex: term, $options: 'i' } },
        { message: { $regex: term, $options: 'i' } }
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

// =====================================================
// IMPORTANT: /export and /stats MUST come BEFORE /:id
// so Express doesn't match "export" or "stats" as an id
// =====================================================

// @route   GET /api/leads/export
// @desc    Export leads as CSV
// @access  Private (Admin only)
router.get('/export', protect, async (req, res) => {
  try {
    const { status, service, source, form, startDate, endDate } = req.query;

    const filter = {};
    applyFormFilter(filter, form);
    if (status && status !== 'all') filter.status = status;
    if (service && service !== 'all') filter.service = service;
    if (source && source !== 'all') filter.source = source;
    if (startDate || endDate) {
      filter.createdAt = {};
      if (startDate) filter.createdAt.$gte = new Date(startDate);
      if (endDate) filter.createdAt.$lte = new Date(endDate + 'T23:59:59.999Z');
    }

    const leads = await Lead.find(filter).sort({ createdAt: -1 });

    // Generate CSV — all fields from the Lead model
    const headers = [
      'Date',
      'Name',
      'Email',
      'Phone',
      'City',
      'Country',
      'Service',
      'Education / NEET Score',
      'Message',
      'Status',
      'Notes',
      'Source',
      'UTM Source',
      'UTM Medium',
      'UTM Campaign',
      'Landing Page',
      'Referrer'
    ];
    const csvRows = [headers.join(',')];

    leads.forEach(lead => {
      // Format date as YYYY-MM-DD for reliable display
      const d = new Date(lead.createdAt);
      const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

      const row = [
        date,
        `"${(lead.name || '').replace(/"/g, '""')}"`,
        `"${(lead.email || '').replace(/"/g, '""')}"`,
        `"${(lead.phone || '').replace(/"/g, '""')}"`,
        `"${(lead.city || '').replace(/"/g, '""')}"`,
        `"${(lead.country || '').replace(/"/g, '""')}"`,
        `"${(lead.service || '').replace(/"/g, '""')}"`,
        `"${(lead.education || '').replace(/"/g, '""')}"`,
        `"${(lead.message || '').replace(/"/g, '""')}"`,
        lead.status || '',
        `"${(lead.notes || '').replace(/"/g, '""')}"`,
        `"${(lead.source || '').replace(/"/g, '""')}"`,
        `"${(lead.utmSource || '').replace(/"/g, '""')}"`,
        `"${(lead.utmMedium || '').replace(/"/g, '""')}"`,
        `"${(lead.utmCampaign || '').replace(/"/g, '""')}"`,
        `"${(lead.landingPage || '').replace(/"/g, '""')}"`,
        `"${(lead.referrer || '').replace(/"/g, '""')}"`
      ];
      csvRows.push(row.join(','));
    });

    // Add UTF-8 BOM so Excel opens the CSV correctly
    const BOM = '\uFEFF';
    const csv = BOM + csvRows.join('\r\n');

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename=general-leads-${new Date().toISOString().split('T')[0]}.csv`);
    res.send(csv);
  } catch (error) {
    console.error('Export Error:', error);
    res.status(500).json({ message: 'Failed to export leads' });
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

// @route   PUT /api/leads/:id
// @desc    Update lead status and notes
// @access  Private (Admin only)
router.put('/:id', protect, async (req, res) => {
  try {
    const { status, notes } = req.body;
    const updateData = {};

    if (status) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;

    const lead = await Lead.findByIdAndUpdate(
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


// @route   POST /api/leads/:id/telecrm-retry
// @desc    Re-push a single lead to TeleCRM after a failed sync
// @access  Private (Admin only)
router.post('/:id/telecrm-retry', protect, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found' });

    const result = await syncLead(Lead, lead, mapLead(lead));

    return res.json({
      success: result.ok,
      message: result.ok ? 'Lead synced to TeleCRM' : (result.skipped ? 'TeleCRM is not configured' : 'TeleCRM sync failed'),
      telecrmStatus: result.ok ? 'synced' : (result.skipped ? 'skipped' : 'failed'),
      error: result.ok ? '' : result.error,
    });
  } catch (error) {
    console.error('TeleCRM Retry Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to retry TeleCRM sync' });
  }
});

module.exports = router;
