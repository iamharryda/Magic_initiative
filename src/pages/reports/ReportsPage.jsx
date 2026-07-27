import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaDownload, FaFileAlt, FaSpinner, FaExternalLinkAlt } from "react-icons/fa";

export default function ReportsPage() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchReports();
  }, [page]);

  const fetchReports = async () => {
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "9"
      });
      if (searchTerm) params.append("search", searchTerm);

      const res = await fetch(`${API_URL}/api/v1/report?${params.toString()}`);
      const result = await res.json();

      if (result.status || result.data) {
        const list = result.data?.data || (Array.isArray(result.data) ? result.data : result.reports || []);
        const total = result.data?.meta?.totalPages || result.totalPages || 1;
        setReports(list);
        setTotalPages(total);
      }
    } catch (err) {
      console.error("Error fetching reports:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchReports();
  };

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
            Publications & Accountability
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#4a0e0e] mt-4 mb-3 tracking-tight">
            Official Reports
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Access and download our annual financial disclosures, impact evaluations, and official organizational reports.
          </p>
        </motion.div>
      </section>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex justify-center">
          <form onSubmit={handleSearchSubmit} className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] shadow-sm transition"
            />
            <FaSearch className="absolute left-3.5 top-4 text-stone-400 text-xs" />
          </form>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex justify-center items-center py-20 text-[#7b1e1e]">
            <FaSpinner className="animate-spin text-3xl" />
          </div>
        ) : reports.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200 shadow-sm max-w-lg mx-auto">
            <FaFileAlt className="mx-auto text-4xl text-stone-300 mb-3" />
            <h3 className="text-lg font-semibold text-stone-700">No Reports Available</h3>
            <p className="text-xs text-stone-500 mt-1">Report publications will appear here once uploaded.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((item) => (
              <motion.div
                key={item._id || item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Cover Image or File Header */}
                <div className="relative h-44 bg-stone-100 overflow-hidden flex items-center justify-center">
                  {item.coverPhoto ? (
                    <img
                      src={item.coverPhoto}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-stone-400">
                      <FaFileAlt className="text-5xl text-[#7b1e1e]/40 mb-2" />
                      <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">PDF Report</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#4a0e0e] group-hover:text-[#7b1e1e] transition-colors line-clamp-2 mb-2">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-stone-100">
                    <a
                      href={item.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#7b1e1e] hover:bg-[#5a0000] text-white font-semibold text-xs px-4 py-3 rounded-xl transition shadow-sm"
                    >
                      <FaDownload className="text-xs" /> Download / View Report
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 bg-white border border-stone-200 text-stone-700 rounded-lg text-sm disabled:opacity-50 hover:bg-stone-50"
          >
            Previous
          </button>
          <span className="text-xs text-stone-600 font-medium px-2">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 bg-white border border-stone-200 text-stone-700 rounded-lg text-sm disabled:opacity-50 hover:bg-stone-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
