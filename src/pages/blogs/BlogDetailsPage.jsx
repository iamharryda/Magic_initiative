import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag, FaSpinner } from "react-icons/fa";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogDetails();
  }, [id]);

  const fetchBlogDetails = async () => {
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";
      const res = await fetch(`${API_URL}/api/v1/blog/${id}`);
      const result = await res.json();

      if (result.status && result.data) {
        setBlog(result.data);
      } else if (result.title) {
        setBlog(result);
      } else {
        setError("Blog post not found.");
      }
    } catch (err) {
      console.error("Error fetching blog post", err);
      setError("Failed to load blog post.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#f8f5f3] min-h-screen flex justify-center items-center py-20 text-[#7b1e1e]">
        <FaSpinner className="animate-spin text-4xl" />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="bg-[#f8f5f3] min-h-screen py-20 text-center px-4">
        <h2 className="text-2xl font-bold text-stone-700 mb-4">{error || "Blog Not Found"}</h2>
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 bg-[#7b1e1e] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#5a0000] transition"
        >
          <FaArrowLeft /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f5f3] min-h-screen text-[#4a0e0e] pt-8 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#7b1e1e] hover:text-[#5a0000] uppercase tracking-wider mb-6 transition"
        >
          <FaArrowLeft /> Back to All Blogs
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-lg"
        >
          {/* Hero Banner Image */}
          {blog.coverPhoto && (
            <div className="h-72 sm:h-96 w-full bg-stone-100 relative">
              <img
                src={blog.coverPhoto}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6 sm:p-10 lg:p-12">
            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-stone-500 mb-6">
              <span className="flex items-center gap-1.5 bg-[#f9efef] text-[#7b1e1e] px-3 py-1 rounded-full font-semibold">
                <FaUser className="text-[11px]" />
                {blog.author || "Admin"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-[11px] text-[#7b1e1e]" />
                {new Date(blog.createdAt || Date.now()).toLocaleDateString()}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4a0e0e] tracking-tight leading-tight mb-8">
              {blog.title}
            </h1>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-100 pb-6">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 bg-stone-100 text-stone-700 text-xs px-3 py-1 rounded-md font-medium"
                  >
                    <FaTag className="text-[9px] text-[#7b1e1e]" /> #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Body Content */}
            <div className="text-stone-800 text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-4">
              {blog.body}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
