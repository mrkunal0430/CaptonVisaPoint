import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { getBlogImageUrl } from "../utils/blog";
import {
  FiCalendar,
  FiUser,
  FiArrowLeft,
  FiShare2,
  FiClock,
  FiTag,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Function to convert URLs in text to clickable links
const parseContent = (content) => {
  if (!content) return "";

  // Split content by paragraphs
  const paragraphs = content.split("\n\n");

  return paragraphs.map((paragraph, pIndex) => {
    // URL regex pattern
    const urlPattern =
      /(https?:\/\/[^\s<]+[^<.,:;"')\]\s])|(?:www\.[^\s<]+[^<.,:;"')\]\s])/gi;

    // Email pattern
    const emailPattern = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/gi;

    // Split paragraph into parts (text and URLs)
    const parts = [];
    let lastIndex = 0;
    let match;

    // Find URLs
    const allMatches = [];
    while ((match = urlPattern.exec(paragraph)) !== null) {
      allMatches.push({ type: "url", match: match[0], index: match.index });
    }

    // Find emails
    while ((match = emailPattern.exec(paragraph)) !== null) {
      allMatches.push({ type: "email", match: match[0], index: match.index });
    }

    // Sort by index
    allMatches.sort((a, b) => a.index - b.index);

    // Build parts array
    allMatches.forEach((item, i) => {
      if (item.index > lastIndex) {
        parts.push({
          type: "text",
          content: paragraph.slice(lastIndex, item.index),
        });
      }
      parts.push({ type: item.type, content: item.match });
      lastIndex = item.index + item.match.length;
    });

    if (lastIndex < paragraph.length) {
      parts.push({ type: "text", content: paragraph.slice(lastIndex) });
    }

    if (parts.length === 0) {
      parts.push({ type: "text", content: paragraph });
    }

    return (
      <p key={pIndex} className="mb-6 leading-relaxed">
        {parts.map((part, i) => {
          if (part.type === "url") {
            const href = part.content.startsWith("http")
              ? part.content
              : `https://${part.content}`;
            return (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-blue-700 underline decoration-blue-300 hover:decoration-blue-500 transition-colors font-medium"
              >
                {part.content}
              </a>
            );
          } else if (part.type === "email") {
            return (
              <a
                key={i}
                href={`mailto:${part.content}`}
                className="text-brand-blue hover:text-blue-700 underline decoration-blue-300 hover:decoration-blue-500 transition-colors font-medium"
              >
                {part.content}
              </a>
            );
          }
          return <span key={i}>{part.content}</span>;
        })}
      </p>
    );
  });
};

// Calculate reading time
const calculateReadingTime = (content) => {
  if (!content) return 1;
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/blogs/${id}`);
        setBlog(res.data.blog);

        // Fetch related blogs
        const allBlogsRes = await axios.get(`${API_URL}/blogs`);
        const related = allBlogsRes.data.blogs
          .filter(
            (b) =>
              b._id !== id &&
              (b.category === res.data.blog.category ||
                b.author === res.data.blog.author)
          )
          .slice(0, 3);
        setRelatedBlogs(related);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Article not found or failed to load.");
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog?.title || "";

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4 sm:px-6">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiTag className="text-red-500 text-4xl" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-3">
            Article Not Found
          </h1>
          <p className="text-slate-500 mb-6">{error}</p>
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-brand-blue text-white rounded-xl font-medium hover:bg-blue-600 transition-colors"
          >
            <FiArrowLeft /> Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const readingTime = calculateReadingTime(blog.content);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title={blog?.title || "Blog"}
        description={blog?.excerpt || "Read this article on Capton Visa Point blog for expert guidance on studying abroad, MBBS, and immigration."}
        keywords={`${blog?.category || "study abroad"}, ${(blog?.tags || []).join(", ")}, Capton Visa Point blog, education articles`}
      />
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src={getBlogImageUrl(
            blog,
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200"
          )}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

        {/* Back Button */}
        <Link
          to="/blog"
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-800 font-medium hover:bg-white transition-colors shadow-lg"
        >
          <FiArrowLeft /> Back to Blog
        </Link>

        {/* Category Badge */}
        <div className="absolute bottom-8 left-6 md:left-1/2 md:-translate-x-1/2">
          <span className="bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <article className="relative -mt-20 z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Article Header Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                {blog.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">
                <span className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <FiUser className="text-brand-blue" />
                  </div>
                  <span>
                    <span className="text-slate-400 text-xs block">
                      Written by
                    </span>
                    <span className="font-semibold text-slate-700">
                      {blog.author}
                    </span>
                  </span>
                </span>

                <span className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FiCalendar className="text-blue-700" />
                  </div>
                  <span>
                    <span className="text-slate-400 text-xs block">
                      Published
                    </span>
                    <span className="font-semibold text-slate-700">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </span>
                </span>

                <span className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FiClock className="text-blue-700" />
                  </div>
                  <span>
                    <span className="text-slate-400 text-xs block">
                      Reading time
                    </span>
                    <span className="font-semibold text-slate-700">
                      {readingTime} min read
                    </span>
                  </span>
                </span>
              </div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <FiTag className="text-slate-400" size={16} />
                  {blog.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog?tag=${encodeURIComponent(tag)}`}
                      className="text-sm bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full hover:bg-brand-blue hover:text-white transition-colors font-medium"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}

              {/* Excerpt */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-8 border-l-4 border-brand-blue">
                <p className="text-lg text-slate-700 italic leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none text-slate-700">
                {parseContent(blog.content)}
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <FiShare2 />
                    <span className="font-medium">Share this article:</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                      title="Share on Facebook"
                    >
                      <FaFacebookF />
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-10 h-10 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                      title="Share on Twitter"
                    >
                      <FaTwitter />
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-10 h-10 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                      title="Share on LinkedIn"
                    >
                      <FaLinkedinIn />
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                      title="Share on WhatsApp"
                    >
                      <FaWhatsapp />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                  {relatedBlogs.map((relatedBlog) => (
                    <Link
                      key={relatedBlog._id}
                      to={`/blog/${relatedBlog._id}`}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100"
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={getBlogImageUrl(
                            relatedBlog,
                            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400"
                          )}
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-xs font-bold text-brand-blue uppercase tracking-wide">
                          {relatedBlog.category}
                        </span>
                        <h3 className="font-bold text-slate-800 mt-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
                          {relatedBlog.title}
                        </h3>
                        <div className="flex items-center gap-1 text-brand-blue text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                          Read More <FiChevronRight />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-blue to-blue-700">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Get personalized guidance from our expert counselors. We've helped
              thousands of students achieve their dreams of studying abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-brand-blue rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Book Free Consultation
              </Link>
              <Link
                to="/blog"
                className="px-8 py-4 bg-transparent text-white border-2 border-white/50 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Explore More Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
