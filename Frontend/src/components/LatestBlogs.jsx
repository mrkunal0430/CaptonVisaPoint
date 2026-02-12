import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCalendar, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { getBlogImageUrl } from "../utils/blog";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API_URL}/blogs`);
        setBlogs(res.data.blogs.slice(0, 6));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load articles.");
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center py-12">
            <div className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (error || blogs.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Latest Articles
          </h2>
          <p className="text-slate-500 mb-6">New content coming soon!</p>
          <Link
            to="/blog"
            className="text-blue-500 font-semibold hover:underline"
          >
            Visit Blog →
          </Link>
        </div>
      </section>
    );
  }

  // Split blogs: first 2 for cards, rest for ticker
  const cardBlogs = blogs.slice(0, 2);
  const tickerBlogs = blogs.slice(2);

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-3">
              Blog & Updates
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              Latest Insights
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-blue-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all group"
          >
            View all{" "}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Main Layout: Cards Left + Ticker Right */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* LEFT SIDE - Blog Cards (3/5 width) */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {cardBlogs.map((blog, index) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${blog._id}`}
                  className="group block bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all h-full"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={getBlogImageUrl(
                        blog,
                        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600"
                      )}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <FiCalendar />
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="text-blue-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <FiArrowUpRight className="text-xs" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE - Sliding Ticker (2/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-slate-900 rounded-2xl p-6 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            {/* Header */}
            <div className="relative z-10 mb-6">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Trending Now
              </h3>
            </div>

            {/* Scrolling Ticker */}
            <div className="relative z-10 h-64 overflow-hidden">
              <div className="ticker-scroll space-y-4">
                {/* First set of items */}
                {tickerBlogs.map((blog, index) => (
                  <Link
                    key={blog._id}
                    to={`/blog/${blog._id}`}
                    className="block p-4 bg-white/10 backdrop-blur rounded-xl hover:bg-white/20 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-bold text-blue-400 opacity-50">
                        0{index + 1}
                      </span>
                      <div className="flex-1">
                        <span className="text-xs text-blue-400 uppercase tracking-wide font-semibold">
                          {blog.category}
                        </span>
                        <h4 className="text-white font-semibold text-sm mt-1 line-clamp-2 group-hover:text-blue-300 transition-colors">
                          {blog.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}

                {/* Duplicate for seamless loop */}
                {tickerBlogs.map((blog, index) => (
                  <Link
                    key={`dup-${blog._id}`}
                    to={`/blog/${blog._id}`}
                    className="block p-4 bg-white/10 backdrop-blur rounded-xl hover:bg-white/20 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-bold text-blue-400 opacity-50">
                        0{index + 1}
                      </span>
                      <div className="flex-1">
                        <span className="text-xs text-blue-400 uppercase tracking-wide font-semibold">
                          {blog.category}
                        </span>
                        <h4 className="text-white font-semibold text-sm mt-1 line-clamp-2 group-hover:text-blue-300 transition-colors">
                          {blog.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* View More */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
              <Link
                to="/blog"
                className="text-blue-400 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all hover:text-blue-300"
              >
                View all articles <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for Ticker Animation */}
      <style jsx>{`
        .ticker-scroll {
          animation: scroll-up 15s linear infinite;
        }

        .ticker-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default LatestBlogs;
