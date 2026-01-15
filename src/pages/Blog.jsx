import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";

const blogs = [
  {
    title: "New Visa Rules for UK Students in 2026",
    excerpt:
      "The UK government has announced new changes to the PSW visa. Here is what you need to know before applying.",
    date: "Jan 05, 2026",
    author: "Admin",
    category: "Visa Updates",
    image:
      "https://images.unsplash.com/photo-1526304640152-d4619684e484?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "Why Germany is the Best Destination for Engineers",
    excerpt:
      "With zero tuition fees and a high demand for skilled engineers, Germany offers the best ROI for engineering students.",
    date: "Dec 28, 2025",
    author: "Kaushik",
    category: "Study Abroad",
    image:
      "https://images.unsplash.com/photo-1599946347371-88a3143c79f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "MBBS in Russia vs Uzbekistan: Comprehensive Comparison",
    excerpt:
      "Confused between Russia and Uzbekistan? We compare fees, climate, FMGE passing rates, and student life.",
    date: "Dec 15, 2025",
    author: "Dr. A. Sharma",
    category: "MBBS",
    image:
      "https://images.unsplash.com/photo-1576091160550-21733e99dbb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "How to Score 8.0 in IELTS Writing Task 2",
    excerpt:
      "Tips and tricks to master the essay writing section of IELTS. Structure, vocabulary, and common mistakes to avoid.",
    date: "Dec 10, 2025",
    author: "Language Team",
    category: "Coaching",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
];

const Blog = () => {
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
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
                      <FiCalendar /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiUser /> {post.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 flex-grow">
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
        </div>
      </section>
    </div>
  );
};

export default Blog;
