const express = require('express');
const Blog = require('../models/Blog');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const cloudinary = require('../config/cloudinary');

const router = express.Router();

// Helper: upload buffer to Cloudinary using a stream
const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'blog-images',
        resource_type: 'image',
        transformation: [
          { width: 1200, height: 630, crop: 'limit', quality: 'auto', format: 'auto' }
        ]
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(fileBuffer);
  });
};

// Helper: delete image from Cloudinary
const deleteFromCloudinary = async (publicId) => {
  if (!publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Cloudinary delete error:', error.message);
  }
};

// Helper: parse tags from form data (JSON string array or comma-separated)
const parseTags = (tagsInput) => {
  if (!tagsInput) return [];
  if (Array.isArray(tagsInput)) return tagsInput.map(t => t.trim()).filter(Boolean);
  try {
    const parsed = JSON.parse(tagsInput);
    if (Array.isArray(parsed)) return parsed.map(t => t.trim()).filter(Boolean);
  } catch {
    // Not JSON, treat as comma-separated
  }
  return tagsInput.split(',').map(t => t.trim()).filter(Boolean);
};

// @route   GET /api/blogs
// @desc    Get all published blogs (Public)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, tag, limit = 50 } = req.query;

    const filter = { isPublished: true };
    if (category && category !== 'all') {
      filter.category = category;
    }
    if (tag) {
      filter.tags = tag;
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
router.post('/', protect, upload.single('image'), async (req, res) => {
  try {
    const { title, excerpt, content, category, author, isPublished } = req.body;
    const tags = parseTags(req.body.tags);

    // Validate required fields
    if (!title || !excerpt || !content) {
      return res.status(400).json({ message: 'Title, excerpt, and content are required' });
    }

    // Handle image
    let imageData = {
      url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
      publicId: null
    };

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      imageData = { url: result.secure_url, publicId: result.public_id };
    }

    const blog = await Blog.create({
      title,
      excerpt,
      content,
      category: category || 'General',
      tags,
      author: author || 'Admin',
      image: imageData,
      isPublished: isPublished !== 'false' && isPublished !== false
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
router.put('/:id', protect, upload.single('image'), async (req, res) => {
  try {
    const existingBlog = await Blog.findById(req.params.id);
    if (!existingBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    const { title, excerpt, content, category, author, isPublished } = req.body;
    const tags = parseTags(req.body.tags);

    const updateData = {
      title,
      excerpt,
      content,
      category,
      tags,
      author,
      isPublished: isPublished !== 'false' && isPublished !== false,
    };

    // Handle image update
    if (req.file) {
      // New file uploaded: upload to Cloudinary, then delete old one
      const result = await uploadToCloudinary(req.file.buffer);
      updateData.image = { url: result.secure_url, publicId: result.public_id };

      // Delete old Cloudinary image if it had a publicId
      const oldPublicId = existingBlog.image?.publicId;
      if (oldPublicId) {
        await deleteFromCloudinary(oldPublicId);
      }
    }
    // If no file provided, image stays unchanged

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

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
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Delete Cloudinary image if it has a publicId
    const publicId = blog.image?.publicId;
    if (publicId) {
      await deleteFromCloudinary(publicId);
    }

    await Blog.findByIdAndDelete(req.params.id);

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
