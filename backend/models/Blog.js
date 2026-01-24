const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  excerpt: {
    type: String,
    required: [true, 'Excerpt is required'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Visa Updates', 'Study Abroad', 'MBBS', 'Coaching', 'Immigration', 'Scholarships', 'General'],
    default: 'General'
  },
  author: {
    type: String,
    required: true,
    default: 'Admin'
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800'
  },
  isPublished: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for sorting by date
blogSchema.index({ createdAt: -1 });
blogSchema.index({ category: 1 });

module.exports = mongoose.model('Blog', blogSchema);
