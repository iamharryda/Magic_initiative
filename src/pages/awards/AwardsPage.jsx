import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaSearch, FaTimes, FaSpinner, FaTrophy, FaCalendarAlt, FaBuilding } from "react-icons/fa";

export default function AwardsPage() {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAward, setSelectedAward] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchAwards();
  }, [page]);

  const fetchAwards = async () => {
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "9"
      });
      if (searchTerm) params.append("search", searchTerm);

      const res = await fetch(`${API_URL}/api/v1/award?${params.toString()}`);
      const result = await res.json();

      if (result.status || result.data) {
        const list = result.data?.awards || result.awards || result.data?.data || (Array.isArray(result.data) ? result.data : []);
        const total = result.data?.pagination?.totalPages || result.pagination?.totalPages || result.data?.meta?.totalPages || 1;
        setAwards(list);
        setTotalPages(total);
      }
    } catch (err) {
      console.error("Error fetching awards:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchAwards();
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
            Honors & Accolades
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#4a0e0e] mt-4 mb-3 tracking-tight">
            Awards & Recognitions
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Celebrating global recognition and honors awarded to MAGIC Initiative for impact and innovation.
          </p>
        </motion.div>
      </section>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex justify-center">
          <form onSubmit={handleSearchSubmit} className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search awards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] shadow-xs transition"
            />
            <FaSearch className="absolute left-3.5 top-4 text-stone-400 text-xs" />
          </form>
        </div>
      </section>

      {/* Award Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex justify-center items-center py-20 text-[#7b1e1e]">
            <FaSpinner className="animate-spin text-3xl" />
          </div>
        ) : awards.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200 shadow-xs max-w-lg mx-auto">
            <FaTrophy className="mx-auto text-4xl text-stone-300 mb-3" />
            <h3 className="text-lg font-semibold text-stone-700">No Awards Found</h3>
            <p className="text-xs text-stone-500 mt-1">Recognitions will appear here as awarded.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award) => (
              <motion.div
                key={award._id || award.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedAward(award)}
                className="group bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/80 hover:border-[#7b1e1e]/40 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Inner Cover Photo Frame */}
                  <div className="relative h-52 sm:h-60 rounded-2xl overflow-hidden bg-stone-100 mb-4 border border-stone-100 flex items-center justify-center">
                    {award.coverPhoto ? (
                      <img
                        src={award.coverPhoto}
                        alt={award.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-stone-400">
                        <FaAward className="text-5xl text-[#7b1e1e]/40 mb-2" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Honor Award</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#4a0e0e] group-hover:text-[#7b1e1e] transition-colors leading-snug mb-3 line-clamp-2">
                    {award.title}
                  </h3>

                  {/* Body Snippet */}
                  <p className="text-stone-600 text-sm leading-relaxed line-clamp-3 mb-4 font-normal">
                    {award.description}
                  </p>

                  {/* Warm Maroon Pill Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {award.issuer && (
                      <span className="bg-[#f9efef] text-[#7b1e1e] border border-[#7b1e1e]/15 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        {award.issuer}
                      </span>
                    )}
                    {award.year && (
                      <span className="bg-[#f9efef] text-[#7b1e1e] border border-[#7b1e1e]/15 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Year {award.year}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedAward(award)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#7b1e1e] hover:text-[#5a0000] uppercase tracking-wider transition cursor-pointer"
                  >
                    <span>View Award Honor</span>
                    &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-4 py-2 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 disabled:opacity-40 font-medium text-xs text-stone-700 cursor-pointer"
            >
              Previous
            </button>
            <span className="text-xs font-semibold text-stone-600">
              {page} / {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-4 py-2 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 disabled:opacity-40 font-medium text-xs text-stone-700 cursor-pointer"
            >
              Next
            </button>
          </div>
        )}
      </section>

      {/* Modal Details */}
      <AnimatePresence>
        {selectedAward && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedAward(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <FaTimes />
              </button>

              <div className="h-56 rounded-2xl overflow-hidden bg-stone-100 mb-6 flex items-center justify-center">
                {selectedAward.coverPhoto ? (
                  <img
                    src={selectedAward.coverPhoto}
                    alt={selectedAward.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaTrophy className="text-6xl text-[#7b1e1e]/40" />
                )}
              </div>

              <span className="text-xs font-semibold text-[#7b1e1e] bg-[#f9efef] px-3 py-1 rounded-full uppercase tracking-wider">
                Award Recognition {selectedAward.year ? `(${selectedAward.year})` : ""}
              </span>

              <h2 className="text-2xl font-bold text-[#4a0e0e] mt-3 mb-2">
                {selectedAward.title}
              </h2>

              {selectedAward.issuer && (
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <FaBuilding className="text-[#7b1e1e]" /> Issued by {selectedAward.issuer}
                </p>
              )}

              <div className="text-stone-700 text-sm leading-relaxed whitespace-pre-line">
                {selectedAward.description}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
