import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaDollarSign, FaChevronDown, FaChevronUp, FaPaperPlane, FaSpinner, FaSearch } from "react-icons/fa";

export default function CareerPage() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";
      const res = await fetch(`${API_URL}/api/v1/career?status=open`);
      const result = await res.json();

      if (result.status || result.data) {
        const list = result.data?.data || (Array.isArray(result.data) ? result.data : result.careers || []);
        setCareers(list);
      }
    } catch (err) {
      console.error("Error fetching career opportunities:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredCareers = careers.filter((c) => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      c.title?.toLowerCase().includes(term) ||
      c.department?.toLowerCase().includes(term) ||
      c.description?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="bg-[#f8f5f3] min-h-screen text-[#4a0e0e] pt-12 pb-24 font-sans">
      {/* Header */}
      <section className="py-12 sm:py-16 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold tracking-widest text-[#7b1e1e] uppercase bg-[#f0e4e4] px-4 py-1.5 rounded-full">
            Join Our Team
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#4a0e0e] mt-4 mb-3 tracking-tight">
            Career Opportunities
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Build your career while making a lasting social impact across vulnerable communities.
          </p>
        </motion.div>
      </section>

      {/* Search */}
      <section className="max-w-5xl mx-auto px-4 mb-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by job title or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-white border border-stone-200 rounded-2xl text-sm focus:outline-none focus:border-[#7b1e1e] shadow-sm transition"
          />
          <FaSearch className="absolute left-4 top-4 text-stone-400 text-sm" />
        </div>
      </section>

      {/* Horizontal List of Openings */}
      <section className="max-w-5xl mx-auto px-4">
        {loading ? (
          <div className="flex justify-center items-center py-20 text-[#7b1e1e]">
            <FaSpinner className="animate-spin text-3xl" />
          </div>
        ) : filteredCareers.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200 shadow-sm">
            <FaBriefcase className="mx-auto text-4xl text-stone-300 mb-3" />
            <h3 className="text-lg font-semibold text-stone-700">No Open Positions Currently</h3>
            <p className="text-xs text-stone-500 mt-1">Please check back soon for new job postings.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredCareers.map((job) => {
              const isExpanded = expandedId === (job._id || job.id);
              return (
                <motion.div
                  key={job._id || job.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  {/* Job Header Strip (Horizontal) */}
                  <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-[#f9efef] text-[#7b1e1e] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {job.department || "General"}
                        </span>
                        <span className="bg-stone-100 text-stone-700 text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                          {job.jobType || "Full-Time"}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-[#4a0e0e]">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-stone-500">
                        <span className="flex items-center gap-1.5">
                          <FaMapMarkerAlt className="text-[#7b1e1e]" />
                          {job.location || "Remote / Field"}
                        </span>
                        {job.salaryRange && (
                          <span className="flex items-center gap-1.5">
                            <FaDollarSign className="text-[#7b1e1e]" />
                            {job.salaryRange}
                          </span>
                        )}
                        {job.experienceLevel && (
                          <span className="flex items-center gap-1.5">
                            <FaClock className="text-[#7b1e1e]" />
                            {job.experienceLevel}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : (job._id || job.id))}
                        className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs rounded-xl transition flex items-center gap-1.5"
                      >
                        {isExpanded ? "Hide Details" : "View Details"}
                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                      </button>

                      <Link
                        to={`/career/apply/${job._id || job.id}`}
                        className="px-6 py-2.5 bg-[#7b1e1e] hover:bg-[#5a0000] text-white font-bold text-xs rounded-xl transition shadow-sm flex items-center gap-2"
                      >
                        Apply Now <FaPaperPlane className="text-[10px]" />
                      </Link>
                    </div>
                  </div>

                  {/* Expandable Details Section */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-stone-100 bg-stone-50/50 p-6 sm:p-8 space-y-6"
                      >
                        <div>
                          <h4 className="text-sm font-bold text-[#4a0e0e] uppercase tracking-wider mb-2">
                            Job Description
                          </h4>
                          <p className="text-stone-700 text-sm leading-relaxed whitespace-pre-line">
                            {job.description}
                          </p>
                        </div>

                        {job.requirements && job.requirements.length > 0 && (
                          <div>
                            <h4 className="text-sm font-bold text-[#4a0e0e] uppercase tracking-wider mb-2">
                              Requirements
                            </h4>
                            <ul className="list-disc list-inside text-sm text-stone-700 space-y-1">
                              {job.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {job.responsibilities && job.responsibilities.length > 0 && (
                          <div>
                            <h4 className="text-sm font-bold text-[#4a0e0e] uppercase tracking-wider mb-2">
                              Key Responsibilities
                            </h4>
                            <ul className="list-disc list-inside text-sm text-stone-700 space-y-1">
                              {job.responsibilities.map((resp, idx) => (
                                <li key={idx}>{resp}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="pt-4 flex justify-end">
                          <Link
                            to={`/career/apply/${job._id || job.id}`}
                            className="px-8 py-3 bg-[#7b1e1e] hover:bg-[#5a0000] text-white font-bold text-xs rounded-full transition shadow-md flex items-center gap-2"
                          >
                            Proceed to Application Form <FaPaperPlane />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
