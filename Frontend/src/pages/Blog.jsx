import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API_URL}/blogs`);
        setBlogs(res.data.blogs);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load news. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Latest News & Updates
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest immigration news, university admission
            trends, and exam tips.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-500">{error}</div>
          ) : blogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((post) => (
                <article
                  key={post._id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={
                        post.image ||
                        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800"
                      }
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold rounded-full text-brand-blue uppercase">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <FiCalendar />{" "}
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiUser /> {post.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all mt-auto"
                    >
                      Read Full Story <FiArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500">
              No news updates available at the moment.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
