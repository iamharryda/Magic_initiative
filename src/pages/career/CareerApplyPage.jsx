import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function CareerApplyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loadingJob, setLoadingJob] = useState(true);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resumeUrl: "",
    coverLetter: "",
    portfolioUrl: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  const fetchJobDetails = async () => {
    setLoadingJob(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";
      const res = await fetch(`${API_URL}/api/v1/career/${id}`);
      const result = await res.json();
      if (result.status && result.data) {
        setJob(result.data);
      } else if (result.title) {
        setJob(result);
      }
    } catch (err) {
      console.error("Error loading job details:", err);
    } finally {
      setLoadingJob(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");
    setSuccessMsg("");

    if (!formData.fullName || !formData.email || !formData.phone || !formData.resumeUrl) {
      setErrorMsg("Please fill in all required fields (Full Name, Email, Phone, Resume URL).");
      setSubmitting(false);
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";
      const res = await fetch(`${API_URL}/api/v1/career/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          careerId: id,
          ...formData
        })
      });

      const result = await res.json();

      if (res.ok || result.status || result.data) {
        setSuccessMsg("Your application has been submitted successfully! Our HR team will review your profile.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          resumeUrl: "",
          coverLetter: "",
          portfolioUrl: ""
        });
      } else {
        setErrorMsg(result.message || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting application:", err);
      setErrorMsg("Network error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f8f5f3] min-h-screen text-[#4a0e0e] pt-12 pb-24 font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link
          to="/career"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#7b1e1e] hover:text-[#5a0000] uppercase tracking-wider mb-6 transition"
        >
          <FaArrowLeft /> Back to Careers
        </Link>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-lg"
        >
          <div className="border-b border-stone-100 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7b1e1e] bg-[#f9efef] px-3 py-1 rounded-full">
              Job Application
            </span>
            <h1 className="text-3xl font-extrabold text-[#4a0e0e] mt-3">
              {loadingJob ? "Apply for Position" : `Apply for: ${job?.title || "Career Position"}`}
            </h1>
            {job && (
              <p className="text-stone-500 text-sm mt-1">
                Department: {job.department || "General"} | Location: {job.location || "Remote"}
              </p>
            )}
          </div>

          {/* Notifications */}
          {successMsg && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
              <FaCheckCircle className="text-lg shrink-0 text-emerald-600" />
              <div>{successMsg}</div>
            </div>
          )}

          {errorMsg && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-3">
              <FaExclamationCircle className="text-lg shrink-0 text-red-600" />
              <div>{errorMsg}</div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-[#f9efef]/50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-[#f9efef]/50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1700-000000"
                  className="w-full px-4 py-3 bg-[#f9efef]/50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Resume / CV URL (PDF Link or Edge Store URL) *
              </label>
              <input
                type="url"
                name="resumeUrl"
                required
                value={formData.resumeUrl}
                onChange={handleChange}
                placeholder="https://drive.google.com/file/... or EdgeStore URL"
                className="w-full px-4 py-3 bg-[#f9efef]/50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Portfolio Website (Optional)
              </label>
              <input
                type="url"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleChange}
                placeholder="https://myportfolio.com"
                className="w-full px-4 py-3 bg-[#f9efef]/50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Cover Letter / Why do you want to join us? (Optional)
              </label>
              <textarea
                name="coverLetter"
                rows={5}
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Briefly describe your experience and passion..."
                className="w-full px-4 py-3 bg-[#f9efef]/50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-[#7b1e1e] hover:bg-[#5a0000] text-white font-bold text-sm uppercase tracking-wider rounded-xl transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <FaSpinner className="animate-spin text-lg" /> Submitting Application...
                </>
              ) : (
                <>
                  Submit Application <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
