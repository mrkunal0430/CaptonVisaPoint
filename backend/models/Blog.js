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
  tags: {
    type: [String],
    default: []
  },
  author: {
    type: String,
    required: true,
    default: 'Admin'
  },
  image: {
    url: {
      type: String,
      default: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800'
    },
    publicId: {
      type: String,
      default: null
    }
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
blogSchema.index({ tags: 1 });

// Virtual for backward compatibility: old blogs stored image as plain string
blogSchema.virtual('imageUrl').get(function() {
  if (typeof this.image === 'string') {
    return this.image;
  }
  return this.image?.url || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800';
});

blogSchema.set('toJSON', { virtuals: true });
blogSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Blog', blogSchema);
