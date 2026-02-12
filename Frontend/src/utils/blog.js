const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800';

// Resolves image URL from blog object, handles both old (string) and new (object) format
export const getBlogImageUrl = (blog, fallback = DEFAULT_IMAGE) => {
  if (!blog) return fallback;
  if (typeof blog.image === 'string' && blog.image) return blog.image;
  if (blog.image?.url) return blog.image.url;
  if (blog.imageUrl) return blog.imageUrl;
  return fallback;
};
