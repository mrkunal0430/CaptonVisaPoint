const express = require('express');
const Blog = require('../models/Blog');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/blogs
// @desc    Get all published blogs (Public)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, limit = 50 } = req.query;

    const filter = { isPublished: true };
    if (category && category !== 'all') {
      filter.category = category;
    }

    const blogs = await Blog.find(filter)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit));

    res.json({ success: true, blogs });
  } catch (error) {
    console.error('Get Blogs Error:', error);
    res.status(500).json({ message: 'Failed to fetch blogs' });
  }
});

// @route   GET /api/blogs/admin
// @desc    Get all blogs (including unpublished) for admin
// @access  Private
router.get('/admin', protect, async (req, res) => {
  try {
    const blogs = await Blog.find()
      .sort({ createdAt: -1 });

    res.json({ success: true, blogs });
  } catch (error) {
    console.error('Get Admin Blogs Error:', error);
    res.status(500).json({ message: 'Failed to fetch blogs' });
  }
});

// @route   GET /api/blogs/:id
// @desc    Get single blog
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({ success: true, blog });
  } catch (error) {
    console.error('Get Blog Error:', error);
    res.status(500).json({ message: 'Failed to fetch blog' });
  }
});

// @route   POST /api/blogs
// @desc    Create a new blog
// @access  Private (Admin only)
router.post('/', protect, async (req, res) => {
  try {
    const { title, excerpt, content, category, author, image, isPublished } = req.body;

    // Validate required fields
    if (!title || !excerpt || !content) {
      return res.status(400).json({ message: 'Title, excerpt, and content are required' });
    }

    const blog = await Blog.create({
      title,
      excerpt,
      content,
      category: category || 'General',
      author: author || 'Admin',
      image: image || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
      isPublished: isPublished !== false
    });

    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      blog
    });
  } catch (error) {
    console.error('Create Blog Error:', error);
    res.status(500).json({ message: 'Failed to create blog' });
  }
});

// @route   PUT /api/blogs/:id
// @desc    Update a blog
// @access  Private (Admin only)
router.put('/:id', protect, async (req, res) => {
  try {
    const { title, excerpt, content, category, author, image, isPublished } = req.body;

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title,
        excerpt,
        content,
        category,
        author,
        image,
        isPublished,
        updatedAt: Date.now()
      },
      { new: true, runValidators: true }
    );

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({
      success: true,
      message: 'Blog updated successfully',
      blog
    });
  } catch (error) {
    console.error('Update Blog Error:', error);
    res.status(500).json({ message: 'Failed to update blog' });
  }
});

// @route   DELETE /api/blogs/:id
// @desc    Delete a blog
// @access  Private (Admin only)
router.delete('/:id', protect, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Delete Blog Error:', error);
    res.status(500).json({ message: 'Failed to delete blog' });
  }
});

module.exports = router;
