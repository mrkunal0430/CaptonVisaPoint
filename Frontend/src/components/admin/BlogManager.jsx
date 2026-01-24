import { useState, useEffect } from "react";
import axios from "axios";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiX,
  FiCheck,
  FiEye,
  FiEyeOff,
  FiCalendar,
  FiUser,
  FiImage,
  FiFileText,
  FiRefreshCw,
  FiAlertCircle,
  FiLink,
} from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL;

const BlogManager = ({ token }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formError, setFormError] = useState("");
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "General",
    author: "Admin",
    image: "",
    isPublished: true,
  });

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/blogs/admin`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(res.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      alert("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        await axios.delete(`${API_URL}/blogs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchBlogs();
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("Failed to delete blog");
      }
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      author: blog.author,
      image: blog.image || "",
      isPublished: blog.isPublished,
    });
    setFormError("");
    setImageError(false);
    setImageLoading(false);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "General",
      author: "Admin",
      image: "",
      isPublished: true,
    });
    setFormError("");
    setImageError(false);
    setImageLoading(false);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setSaving(true);

    try {
      if (editingBlog) {
        await axios.put(`${API_URL}/blogs/${editingBlog._id}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post(`${API_URL}/blogs`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setShowModal(false);
      fetchBlogs();
    } catch (error) {
      console.error("Error saving blog:", error);
      const errorMessage = error.response?.data?.message ||
                          error.response?.data?.error ||
                          "Failed to save blog. Please check all fields and try again.";
      setFormError(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  const handleImageChange = (url) => {
    setFormData({ ...formData, image: url });
    setImageError(false);
    setImageLoading(true);
  };

  const togglePublishStatus = async (blog) => {
    try {
      await axios.put(
        `${API_URL}/blogs/${blog._id}`,
        { ...blog, isPublished: !blog.isPublished },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchBlogs();
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update blog status");
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">
            Blog Management
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {blogs.length} total posts
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchBlogs}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-600"
          >
            <FiRefreshCw className={loading ? "animate-spin" : ""} size={18} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <button
            onClick={handleAddNew}
            className="flex items-center gap-2 px-4 py-2.5 bg-brand-blue text-white rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
          >
            <FiPlus size={18} />
            <span>New Post</span>
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      {loading ? (
        <div className="bg-white rounded-xl p-12 text-center">
          <div className="inline-block w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mb-3"></div>
          <p className="text-slate-500">Loading blogs...</p>
        </div>
      ) : blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="h-40 sm:h-44 overflow-hidden relative">
                <img
                  src={
                    blog.image ||
                    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400"
                  }
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => togglePublishStatus(blog)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-full backdrop-blur transition-colors ${
                      blog.isPublished
                        ? "bg-green-100/90 text-green-700 hover:bg-green-200"
                        : "bg-red-100/90 text-red-600 hover:bg-red-200"
                    }`}
                    title={
                      blog.isPublished ? "Click to unpublish" : "Click to publish"
                    }
                  >
                    {blog.isPublished ? (
                      <>
                        <FiEye size={12} /> Published
                      </>
                    ) : (
                      <>
                        <FiEyeOff size={12} /> Draft
                      </>
                    )}
                  </button>
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-blue/90 backdrop-blur text-white px-2.5 py-1 text-xs font-bold rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-slate-800 mb-2 line-clamp-2 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <FiCalendar size={12} />
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiUser size={12} />
                    {blog.author}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-brand-blue bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <FiEdit2 size={16} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-red-500 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-12 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiFileText className="text-slate-400 text-2xl" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            No Blog Posts Yet
          </h3>
          <p className="text-slate-500 mb-6">
            Create your first blog post to get started.
          </p>
          <button
            onClick={handleAddNew}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-xl hover:bg-blue-600 transition-colors"
          >
            <FiPlus size={18} /> Create First Post
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full sm:w-auto sm:max-w-2xl sm:mx-4 sm:rounded-2xl rounded-t-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="p-4 md:p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800">
                  {editingBlog ? "Edit Blog Post" : "Create New Post"}
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  {editingBlog
                    ? "Update your blog post details"
                    : "Fill in the details below"}
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <form
              onSubmit={handleSubmit}
              className="p-4 md:p-6 space-y-4 overflow-y-auto flex-1"
            >
              {/* Error Message */}
              {formError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <FiAlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-red-700 font-medium">Failed to save blog</p>
                    <p className="text-red-600 text-sm mt-1">{formError}</p>
                  </div>
                </div>
              )}

              {/* Title */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter blog title..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>

              {/* Category & Author - Side by Side on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">
                    Category
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue bg-white transition-all"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    <option value="General">General</option>
                    <option value="Visa Updates">Visa Updates</option>
                    <option value="Study Abroad">Study Abroad</option>
                    <option value="MBBS">MBBS</option>
                    <option value="Coaching">Coaching</option>
                    <option value="Immigration">Immigration</option>
                    <option value="Scholarships">Scholarships</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">
                    Author *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Author name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    value={formData.author}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Excerpt (Short Description) *
                  </label>
                  <span className={`text-xs ${formData.excerpt.length > 500 ? 'text-orange-500' : 'text-slate-400'}`}>
                    {formData.excerpt.length} characters
                  </span>
                </div>
                <textarea
                  required
                  rows="3"
                  placeholder="Brief summary of the blog post. This will be shown in blog listings..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-y min-h-[80px]"
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                ></textarea>
              </div>

              {/* Content */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Content * <span className="text-slate-400 font-normal">(URLs will be clickable)</span>
                  </label>
                  <span className="text-xs text-slate-400">
                    {formData.content.split(/\s+/).filter(Boolean).length} words
                  </span>
                </div>
                <textarea
                  required
                  rows="10"
                  placeholder="Write your blog content here. Any URLs or email addresses will automatically become clickable links.

You can write multiple paragraphs by pressing Enter twice.

The content can be as long as you need - there's no character limit."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue font-mono text-sm transition-all resize-y min-h-[200px]"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                ></textarea>
              </div>

              {/* Image URL */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <FiImage size={16} /> Image URL
                </label>
                <div className="relative">
                  <FiLink className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="text"
                    placeholder="https://images.unsplash.com/photo-xxxxx or any image URL"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    value={formData.image}
                    onChange={(e) => handleImageChange(e.target.value)}
                  />
                </div>
                <p className="text-xs text-slate-400">
                  Paste any public image URL. Leave empty to use default image.
                </p>

                {/* Image Preview */}
                {formData.image && (
                  <div className="mt-3 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                    {imageLoading && !imageError && (
                      <div className="h-40 flex items-center justify-center">
                        <div className="w-8 h-8 border-3 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    {imageError ? (
                      <div className="h-40 flex flex-col items-center justify-center text-center p-4">
                        <FiAlertCircle className="text-red-400 mb-2" size={32} />
                        <p className="text-red-500 font-medium text-sm">Failed to load image</p>
                        <p className="text-slate-400 text-xs mt-1">
                          Check if the URL is correct and publicly accessible
                        </p>
                      </div>
                    ) : (
                      <img
                        src={formData.image}
                        alt="Preview"
                        className={`w-full h-40 object-cover ${imageLoading ? 'hidden' : 'block'}`}
                        onLoad={() => {
                          setImageLoading(false);
                          setImageError(false);
                        }}
                        onError={() => {
                          setImageLoading(false);
                          setImageError(true);
                        }}
                      />
                    )}
                    {!imageLoading && !imageError && (
                      <div className="px-3 py-2 bg-green-50 border-t border-green-100 flex items-center gap-2 text-green-600 text-xs">
                        <FiCheck size={14} /> Image loaded successfully
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Publish Toggle */}
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                <input
                  type="checkbox"
                  id="isPublished"
                  className="w-5 h-5 text-brand-blue rounded border-slate-300 focus:ring-brand-blue cursor-pointer"
                  checked={formData.isPublished}
                  onChange={(e) =>
                    setFormData({ ...formData, isPublished: e.target.checked })
                  }
                />
                <label
                  htmlFor="isPublished"
                  className="flex-1 cursor-pointer"
                >
                  <span className="font-medium text-slate-700">
                    Publish immediately
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {formData.isPublished
                      ? "This post will be visible to everyone"
                      : "This post will be saved as a draft"}
                  </p>
                </label>
              </div>

              {/* Actions */}
              <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 sm:flex-none px-6 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-brand-blue text-white hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {saving ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <FiCheck size={18} />
                      {editingBlog ? "Update Post" : "Create Post"}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogManager;
