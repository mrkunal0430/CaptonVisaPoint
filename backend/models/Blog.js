const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
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
  altTag: {
    type: String,
    trim: true,
    default: ''
  },
  metaTitle: {
    type: String,
    trim: true,
    default: ''
  },
  metaDescription: {
    type: String,
    trim: true,
    default: ''
  },
  isPublished: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Auto-generate slug from title before validation
blogSchema.pre('validate', function (next) {
  if (this.title && (!this.slug || this.isModified('title'))) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')   // remove special chars
      .replace(/\s+/g, '-')            // spaces to hyphens
      .replace(/-+/g, '-')             // collapse multiple hyphens
      .replace(/^-|-$/g, '');          // trim leading/trailing hyphens
  }
  next();
});

// Ensure slug uniqueness by appending a suffix if needed
blogSchema.pre('save', async function (next) {
  if (this.isModified('slug')) {
    let baseSlug = this.slug;
    let counter = 1;
    while (true) {
      const existing = await mongoose.model('Blog').findOne({
        slug: this.slug,
        _id: { $ne: this._id }
      });
      if (!existing) break;
      this.slug = `${baseSlug}-${counter}`;
      counter++;
    }
  }
  next();
});

// Indexes
blogSchema.index({ createdAt: -1 });
blogSchema.index({ category: 1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ slug: 1 }, { unique: true });

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
