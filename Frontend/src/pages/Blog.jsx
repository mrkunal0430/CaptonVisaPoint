import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import { getBlogImageUrl } from "../utils/blog";
import {
  FiCalendar,
  FiUser,
  FiArrowRight,
  FiSearch,
  FiGlobe,
  FiBookOpen,
  FiTrendingUp,
} from "react-icons/fi";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const categories = [
  { id: "all", name: "All Articles", icon: FiBookOpen },
  { id: "Visa Updates", name: "Visa Updates", icon: FiGlobe },
  { id: "Study Abroad", name: "Study Abroad", icon: FiTrendingUp },
  { id: "MBBS", name: "MBBS Abroad", icon: FiBookOpen },
  { id: "Coaching", name: "Test Prep", icon: FiBookOpen },
  { id: "Immigration", name: "Immigration", icon: FiGlobe },
  { id: "Scholarships", name: "Scholarships", icon: FiTrendingUp },
];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();
  const tagFromUrl = searchParams.get("tag");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API_URL}/blogs`);
        setBlogs(res.data.blogs);
        setFilteredBlogs(res.data.blogs);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load articles. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    let result = blogs;

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter((blog) => blog.category === activeCategory);
    }

    // Filter by tag from URL
    if (tagFromUrl) {
      result = result.filter(
        (blog) => blog.tags && blog.tags.includes(tagFromUrl),
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.excerpt.toLowerCase().includes(query) ||
          blog.category.toLowerCase().includes(query) ||
          (blog.tags &&
            blog.tags.some((tag) => tag.toLowerCase().includes(query))),
      );
    }

    setFilteredBlogs(result);
  }, [activeCategory, searchQuery, blogs, tagFromUrl]);

  const featuredBlog = filteredBlogs[0];
  const remainingBlogs = filteredBlogs.slice(1);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Blog"
        description="Read the latest articles on MBBS abroad, MBBS in India, NEET preparation, Ausbildung in Germany, study abroad tips, visa guidance, scholarship guides, FMGE & NEXT exam coaching, and career advice from Capton Visa Point experts."
        keywords="study abroad blog, MBBS abroad tips, MBBS India blog, NEET preparation tips, Ausbildung blog, visa guidance articles, education blog, Capton Visa Point blog, MBBS admission guidance, MBBS abroad complete information, MBBS admission India complete guide, medical education complete guide, MBBS study complete guide, MBBS career complete guide, FMGE exam tips, NEXT exam tips, scholarship guides"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-medium mb-6">
              <FiGlobe className="animate-pulse" />
              Your Gateway to Global Education
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Insights & Updates for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                {" "}
                Global Aspirants
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Expert guidance on study abroad, visa processes, scholarships, and
              immigration news from around the world.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
              <input
                type="text"
                placeholder="Search articles by title, topic, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/95 backdrop-blur text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 shadow-2xl transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-brand-blue text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <category.icon size={16} />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-slate-500">Loading articles...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiGlobe className="text-red-500 text-3xl" />
              </div>
              <p className="text-red-500 text-lg">{error}</p>
            </div>
          ) : filteredBlogs.length > 0 ? (
            <>
              {/* Featured Article */}
              {featuredBlog && (
                <div className="mb-12">
                  <h2 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-6 flex items-center gap-2">
                    <FiTrendingUp /> Featured Article
                  </h2>
                  <Link
                    to={`/blog/${featuredBlog._id}`}
                    className="group block bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
                  >
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="h-64 lg:h-96 overflow-hidden relative">
                        <img
                          src={getBlogImageUrl(featuredBlog)}
                          alt={featuredBlog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                        <span className="absolute top-6 left-6 bg-brand-blue text-white px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                          {featuredBlog.category}
                        </span>
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                          <span className="flex items-center gap-1.5">
                            <FiCalendar />
                            {new Date(
                              featuredBlog.createdAt,
                            ).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FiUser />
                            {featuredBlog.author}
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                          {featuredBlog.title}
                        </h3>
                        {featuredBlog.tags && featuredBlog.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {featuredBlog.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-blue-50 text-brand-blue px-3 py-1 rounded-full font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <p className="text-slate-600 mb-6 line-clamp-3 text-lg">
                          {featuredBlog.excerpt}
                        </p>
                        <div className="inline-flex items-center gap-2 text-brand-blue font-semibold group-hover:gap-4 transition-all">
                          Read Full Article{" "}
                          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Articles Grid */}
              {remainingBlogs.length > 0 && (
                <>
                  <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                    <FiBookOpen /> Latest Articles
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {remainingBlogs.map((post) => (
                      <Link
                        key={post._id}
                        to={`/blog/${post._id}`}
                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
                      >
                        <div className="h-52 overflow-hidden relative">
                          <img
                            src={getBlogImageUrl(post)}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <span className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 text-xs font-bold rounded-full text-brand-blue uppercase tracking-wide shadow">
                            {post.category}
                          </span>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                            <span className="flex items-center gap-1">
                              <FiCalendar />
                              {new Date(post.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                },
                              )}
                            </span>
                            <span className="flex items-center gap-1">
                              <FiUser />
                              {post.author}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h3>
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                              {post.tags.length > 3 && (
                                <span className="text-xs text-slate-400">
                                  +{post.tags.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                          <p className="text-slate-500 text-sm mb-4 flex-grow line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:gap-3 transition-all mt-auto pt-4 border-t border-slate-100">
                            Read More <FiArrowRight />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiBookOpen className="text-slate-400 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                No Articles Found
              </h3>
              <p className="text-slate-500 max-w-md mx-auto">
                {searchQuery
                  ? `No results for "${searchQuery}". Try a different search term.`
                  : "No articles available in this category yet. Check back soon!"}
              </p>
              {(searchQuery || activeCategory !== "all") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-6 px-4 sm:px-6 py-2.5 bg-brand-blue text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
                >
                  View All Articles
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
