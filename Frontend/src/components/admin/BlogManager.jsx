import { useState, useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { getBlogImageUrl } from "../../utils/blog";
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
  FiUpload,
  FiTag,
  FiChevronDown,
  FiChevronUp,
  FiSearch,
} from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL;
const TINYMCE_API_KEY = import.meta.env.VITE_TINYMCE_API_KEY;

// Auto-generate slug from a title
const slugify = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

// Strip HTML tags for word count
const stripHtml = (html) => {
  if (!html) return "";
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const BlogManager = ({ token }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formError, setFormError] = useState("");
  const [imageError, setImageError] = useState(false);
  const [showSeoFields, setShowSeoFields] = useState(false);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const editorRef = useRef(null);
  
  // Stabilize TinyMCE configuration
  const editorConfig = {
    height: 400,
    menubar: false,
    plugins: ["lists", "link", "autolink"],
    toolbar:
      "blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | link | removeformat",
    block_formats:
      "Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3",
    content_style: `
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 16px;
        line-height: 1.7;
        color: #334155;
        padding: 16px;
      }
      h1 { font-size: 1.875rem; font-weight: 800; color: #0f172a; margin: 1.5rem 0 0.75rem; }
      h2 { font-size: 1.5rem; font-weight: 700; color: #1e293b; margin: 1.25rem 0 0.625rem; }
      h3 { font-size: 1.25rem; font-weight: 600; color: #1e293b; margin: 1rem 0 0.5rem; }
      p { margin: 0 0 1rem; }
      a { color: #2563eb; text-decoration: underline; }
      ul, ol { padding-left: 1.5rem; margin-bottom: 1rem; }
      li { margin-bottom: 0.25rem; }
    `,
    placeholder: "Write your blog content here...",
    branding: false,
    statusbar: true,
    resize: true,
    skin: "oxide",
    promotion: false,
  };

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "General",
    author: "Admin",
    isPublished: true,
    tags: [],
    altTag: "",
    metaTitle: "",
    metaDescription: "",
    slug: "",
  });

  // Image states
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // Tag input state
  const [tagInput, setTagInput] = useState("");

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

  // Auto-generate slug from title
  useEffect(() => {
    if (!slugManuallyEdited && formData.title) {
      setFormData((prev) => ({ ...prev, slug: slugify(prev.title) }));
    }
  }, [formData.title, slugManuallyEdited]);

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
      isPublished: blog.isPublished,
      tags: blog.tags || [],
      altTag: blog.altTag || "",
      metaTitle: blog.metaTitle || "",
      metaDescription: blog.metaDescription || "",
      slug: blog.slug || "",
    });

    const imgUrl = getBlogImageUrl(blog, "");
    setImagePreview(imgUrl);
    setImageFile(null);
    setTagInput("");
    setFormError("");
    setImageError(false);
    setSlugManuallyEdited(!!blog.slug);
    setShowSeoFields(!!(blog.metaTitle || blog.metaDescription || blog.altTag));
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
      isPublished: true,
      tags: [],
      altTag: "",
      metaTitle: "",
      metaDescription: "",
      slug: "",
    });
    setImageFile(null);
    setImagePreview("");
    setTagInput("");
    setFormError("");
    setImageError(false);
    setSlugManuallyEdited(false);
    setShowSeoFields(false);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Get content from TinyMCE editor
    const editorContent = editorRef.current
      ? editorRef.current.getContent()
      : formData.content;

    if (!editorContent || stripHtml(editorContent).trim().length === 0) {
      setFormError("Content is required. Please write your blog post.");
      return;
    }

    setSaving(true);

    try {
      const submitData = new FormData();
      submitData.append("title", formData.title);
      submitData.append("excerpt", formData.excerpt);
      submitData.append("content", editorContent);
      submitData.append("category", formData.category);
      submitData.append("author", formData.author);
      submitData.append("isPublished", formData.isPublished);
      submitData.append("tags", JSON.stringify(formData.tags));
      submitData.append("slug", formData.slug);
      submitData.append("altTag", formData.altTag);
      submitData.append("metaTitle", formData.metaTitle);
      submitData.append("metaDescription", formData.metaDescription);

      if (imageFile) {
        submitData.append("image", imageFile);
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (editingBlog) {
        await axios.put(
          `${API_URL}/blogs/${editingBlog._id}`,
          submitData,
          config,
        );
      } else {
        await axios.post(`${API_URL}/blogs`, submitData, config);
      }
      setShowModal(false);
      fetchBlogs();
    } catch (error) {
      console.error("Error saving blog:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Failed to save blog. Please check all fields and try again.";
      setFormError(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  // Image file handler
  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      setFormError("Invalid file type. Only JPEG, PNG, and WebP are allowed.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setFormError("File too large. Maximum size is 5MB.");
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setImageError(false);
    setFormError("");
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview("");
    setImageError(false);
  };

  // Tag handlers
  const handleAddTag = () => {
    const tag = tagInput.trim();
    if (!tag) return;
    if (formData.tags.includes(tag)) {
      setTagInput("");
      return;
    }
    setFormData({ ...formData, tags: [...formData.tags, tag] });
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tagToRemove),
    });
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
    if (e.key === "," || e.key === "Tab") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const togglePublishStatus = async (blog) => {
    try {
      const submitData = new FormData();
      submitData.append("title", blog.title);
      submitData.append("excerpt", blog.excerpt);
      submitData.append("content", blog.content);
      submitData.append("category", blog.category);
      submitData.append("author", blog.author);
      submitData.append("isPublished", !blog.isPublished);
      submitData.append("tags", JSON.stringify(blog.tags || []));
      submitData.append("slug", blog.slug || "");
      submitData.append("altTag", blog.altTag || "");
      submitData.append("metaTitle", blog.metaTitle || "");
      submitData.append("metaDescription", blog.metaDescription || "");

      await axios.put(`${API_URL}/blogs/${blog._id}`, submitData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBlogs();
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update blog status");
    }
  };

  const contentWordCount = wordCount;

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
                  src={getBlogImageUrl(
                    blog,
                    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400",
                  )}
                  alt={blog.altTag || blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => togglePublishStatus(blog)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-full backdrop-blur transition-colors ${
                      blog.isPublished
                        ? "bg-blue-100/90 text-blue-800 hover:bg-blue-200"
                        : "bg-red-100/90 text-red-600 hover:bg-red-200"
                    }`}
                    title={
                      blog.isPublished
                        ? "Click to unpublish"
                        : "Click to publish"
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
                <p className="text-slate-500 text-sm mb-3 line-clamp-2 flex-grow">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="text-xs text-slate-400">
                        +{blog.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}

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
          <div className="bg-white w-full sm:w-auto sm:max-w-3xl sm:mx-4 sm:rounded-2xl rounded-t-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
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
                  <FiAlertCircle
                    className="text-red-500 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <div>
                    <p className="text-red-700 font-medium">
                      Failed to save blog
                    </p>
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

              {/* Slug (auto-generated) */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  URL Slug
                  <span className="text-xs text-slate-400 font-normal">
                    (auto-generated from title)
                  </span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-400 shrink-0">
                    /blog/
                  </span>
                  <input
                    type="text"
                    placeholder="auto-generated-slug"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-sm font-mono"
                    value={formData.slug}
                    onChange={(e) => {
                      setSlugManuallyEdited(true);
                      setFormData({
                        ...formData,
                        slug: slugify(e.target.value),
                      });
                    }}
                  />
                </div>
              </div>

              {/* Category & Author */}
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

              {/* Tags */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <FiTag size={14} /> Tags
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Add a tag and press Enter..."
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="px-4 py-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors font-medium text-sm"
                  >
                    Add
                  </button>
                </div>

                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-brand-blue text-sm font-medium rounded-full"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="hover:text-red-500 transition-colors"
                        >
                          <FiX size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-xs text-slate-400">
                  Press Enter, Tab, or comma to add a tag. Click x to remove.
                </p>
              </div>

              {/* Excerpt */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Excerpt (Short Description) *
                  </label>
                  <span
                    className={`text-xs ${formData.excerpt.length > 500 ? "text-orange-500" : "text-slate-400"}`}
                  >
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

              {/* Content — TinyMCE Editor */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Content *
                  </label>
                  <span className="text-xs text-slate-400">
                    {contentWordCount} words
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <Editor
                    apiKey={TINYMCE_API_KEY}
                    onInit={(_evt, editor) => {
                      editorRef.current = editor;
                      // Update word count on content changes without re-rendering the editor
                      editor.on("input keyup change", () => {
                        const text =
                          editor.getContent({ format: "text" }) || "";
                        setWordCount(text.split(/\s+/).filter(Boolean).length);
                      });
                      // Set initial word count
                      const initialText =
                        editor.getContent({ format: "text" }) || "";
                      setWordCount(
                        initialText.split(/\s+/).filter(Boolean).length,
                      );
                    }}
                    initialValue={formData.content}
                    init={editorConfig}
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <FiImage size={16} /> Blog Image
                </label>

                <div className="relative">
                  <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleImageFileChange}
                    className="hidden"
                    id="blog-image-upload"
                  />
                  <label
                    htmlFor="blog-image-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-brand-blue hover:bg-blue-50/50 transition-all"
                  >
                    <FiUpload className="text-slate-400 mb-2" size={24} />
                    <span className="text-sm text-slate-500 font-medium">
                      Click to upload image
                    </span>
                    <span className="text-xs text-slate-400 mt-1">
                      JPEG, PNG, or WebP (max 5MB)
                    </span>
                  </label>
                </div>

                {/* Image Preview */}
                {imagePreview && (
                  <div className="mt-3 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 relative">
                    {imageError ? (
                      <div className="h-40 flex flex-col items-center justify-center text-center p-4">
                        <FiAlertCircle
                          className="text-red-400 mb-2"
                          size={32}
                        />
                        <p className="text-red-500 font-medium text-sm">
                          Failed to load image
                        </p>
                      </div>
                    ) : (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-40 object-cover"
                        onError={() => setImageError(true)}
                      />
                    )}
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      title="Remove image"
                    >
                      <FiX size={14} />
                    </button>
                    {!imageError && (
                      <div className="px-3 py-2 bg-blue-50 border-t border-blue-100 flex items-center gap-2 text-blue-700 text-xs">
                        <FiCheck size={14} />
                        {imageFile
                          ? `Selected: ${imageFile.name}`
                          : "Current image"}
                      </div>
                    )}
                  </div>
                )}

                <p className="text-xs text-slate-400">
                  Upload a blog cover image. Leave empty to use default image.
                </p>
              </div>

              {/* Image Alt Tag */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  Image Alt Text
                  <span className="text-xs text-slate-400 font-normal">
                    (improves SEO &amp; accessibility)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Describe the image, e.g. 'Students studying abroad in Germany'"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  value={formData.altTag}
                  onChange={(e) =>
                    setFormData({ ...formData, altTag: e.target.value })
                  }
                />
              </div>

              {/* SEO Fields — Collapsible */}
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowSeoFields(!showSeoFields)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-medium text-slate-700"
                >
                  <span className="flex items-center gap-2">
                    <FiSearch size={16} />
                    SEO Settings
                    <span className="text-xs text-slate-400 font-normal">
                      (optional)
                    </span>
                  </span>
                  {showSeoFields ? (
                    <FiChevronUp size={18} />
                  ) : (
                    <FiChevronDown size={18} />
                  )}
                </button>

                {showSeoFields && (
                  <div className="p-4 space-y-4 border-t border-slate-200">
                    {/* Meta Title */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-slate-700">
                          Meta Title
                        </label>
                        <span
                          className={`text-xs ${formData.metaTitle.length > 60 ? "text-orange-500" : "text-slate-400"}`}
                        >
                          {formData.metaTitle.length}/60
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Custom SEO title (defaults to blog title)"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-sm"
                        value={formData.metaTitle}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            metaTitle: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Meta Description */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-slate-700">
                          Meta Description
                        </label>
                        <span
                          className={`text-xs ${formData.metaDescription.length > 160 ? "text-orange-500" : "text-slate-400"}`}
                        >
                          {formData.metaDescription.length}/160
                        </span>
                      </div>
                      <textarea
                        rows="2"
                        placeholder="Custom SEO description (defaults to excerpt)"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-sm resize-y min-h-[60px]"
                        value={formData.metaDescription}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            metaDescription: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>

                    {/* SEO Preview */}
                    <div className="p-3 bg-white rounded-lg border border-slate-100">
                      <p className="text-xs text-slate-400 mb-2 font-medium">
                        Google Search Preview
                      </p>
                      <p className="text-blue-700 text-base font-medium truncate">
                        {formData.metaTitle || formData.title || "Blog Title"} |
                        Capton Visa Point
                      </p>
                      <p className="text-green-700 text-xs truncate mt-0.5">
                        captonvisapoint.com/blog/
                        {formData.slug || "your-blog-slug"}
                      </p>
                      <p className="text-slate-500 text-xs mt-1 line-clamp-2">
                        {formData.metaDescription ||
                          formData.excerpt ||
                          "Your blog excerpt will appear here..."}
                      </p>
                    </div>
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
                <label htmlFor="isPublished" className="flex-1 cursor-pointer">
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
