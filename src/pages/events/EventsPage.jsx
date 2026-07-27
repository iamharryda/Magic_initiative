import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaTimes, FaSpinner, FaCalendarCheck } from "react-icons/fa";

const EVENT_STATUS_OPTIONS = ['all', 'upcoming', 'ongoing', 'completed', 'cancelled'];

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("upcoming");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchEvents();
  }, [selectedStatus, page]);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "9"
      });
      if (selectedStatus && selectedStatus !== 'all') params.append("status", selectedStatus);
      if (searchTerm) params.append("search", searchTerm);

      const res = await fetch(`${API_URL}/api/v1/event?${params.toString()}`);
      const result = await res.json();

      if (result.status || result.data) {
        const list = result.data?.data || (Array.isArray(result.data) ? result.data : result.events || []);
        const total = result.data?.meta?.totalPages || result.totalPages || 1;
        setEvents(list);
        setTotalPages(total);
      }
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchEvents();
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-emerald-600 text-white";
      case "ongoing":
        return "bg-amber-600 text-white";
      case "completed":
        return "bg-stone-600 text-white";
      case "cancelled":
        return "bg-red-600 text-white";
      default:
        return "bg-[#7b1e1e] text-white";
    }
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
            Gatherings & Workshops
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#4a0e0e] mt-4 mb-3 tracking-tight">
            Events & Activities
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Join our upcoming events, community forums, and workshops driving empowerment and sustainable impact.
          </p>
        </motion.div>
      </section>

      {/* Filter and Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <form onSubmit={handleSearchSubmit} className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] shadow-sm transition"
            />
            <FaSearch className="absolute left-3.5 top-3.5 text-stone-400 text-xs" />
          </form>

          {/* Status Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {EVENT_STATUS_OPTIONS.map((st) => (
              <button
                key={st}
                onClick={() => { setSelectedStatus(st); setPage(1); }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                  selectedStatus === st
                    ? "bg-[#7b1e1e] text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex justify-center items-center py-20 text-[#7b1e1e]">
            <FaSpinner className="animate-spin text-3xl" />
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200 shadow-sm max-w-lg mx-auto">
            <FaCalendarCheck className="mx-auto text-4xl text-stone-300 mb-3" />
            <h3 className="text-lg font-semibold text-stone-700">No Events Found</h3>
            <p className="text-xs text-stone-500 mt-1">Try switching status filters or checking back later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <motion.div
                key={event._id || event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Cover Image */}
                <div className="relative h-48 sm:h-52 bg-stone-100 overflow-hidden">
                  <img
                    src={event.coverPhoto || "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs ${getStatusBadge(event.status)}`}>
                    {event.status || "Upcoming"}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col gap-1.5 text-xs text-stone-600 mb-3">
                      <span className="flex items-center gap-1.5 font-semibold text-[#7b1e1e]">
                        <FaCalendarAlt className="text-[11px]" />
                        {event.eventDate ? new Date(event.eventDate).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : "Date TBD"}
                      </span>
                      {event.location && (
                        <span className="flex items-center gap-1.5 text-stone-500">
                          <FaMapMarkerAlt className="text-[11px] text-stone-400" />
                          {event.location}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#4a0e0e] group-hover:text-[#7b1e1e] transition-colors line-clamp-2 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                      {event.body}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#7b1e1e] hover:text-[#5a0000] uppercase tracking-wider transition"
                    >
                      View Details &rarr;
                    </button>
                    {event.registrationLink && (
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 bg-[#7b1e1e] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#5a0000] transition"
                      >
                        Register <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )}
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

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition"
              >
                <FaTimes />
              </button>

              <div className="h-64 sm:h-72 bg-stone-100 relative">
                <img
                  src={selectedEvent.coverPhoto || "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${getStatusBadge(selectedEvent.status)}`}>
                    {selectedEvent.status || "Upcoming"}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4a0e0e] mb-4">
                  {selectedEvent.title}
                </h2>

                <div className="bg-[#f9efef] p-4 rounded-xl mb-6 space-y-2 text-xs sm:text-sm text-[#7b1e1e]">
                  <div className="flex items-center gap-2 font-semibold">
                    <FaCalendarAlt /> {selectedEvent.eventDate ? new Date(selectedEvent.eventDate).toLocaleString() : "Date TBD"}
                  </div>
                  {selectedEvent.location && (
                    <div className="flex items-center gap-2 font-semibold">
                      <FaMapMarkerAlt /> {selectedEvent.location}
                    </div>
                  )}
                </div>

                <div className="text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-line mb-6">
                  {selectedEvent.body}
                </div>

                {selectedEvent.registrationLink && (
                  <div className="pt-4 border-t border-stone-100 flex justify-end">
                    <a
                      href={selectedEvent.registrationLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#7b1e1e] hover:bg-[#5a0000] text-white font-bold text-xs px-6 py-3 rounded-full transition shadow-md"
                    >
                      Register for Event <FaExternalLinkAlt />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
