import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHandHoldingHeart,
  FaUsers,
  FaFolderOpen,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaSearch,
  FaTimes,
  FaSignOutAlt,
  FaSpinner,
  FaEnvelope,
  FaBriefcase,
  FaNewspaper,
  FaBookOpen,
  FaCalendarCheck,
  FaFileAlt,
  FaBook,
  FaHandshake,
  FaAward,
  FaUserCheck,
  FaExternalLinkAlt,
  FaDownload
} from "react-icons/fa";

import ImageUploadInput from "../../components/upload/ImageUploadInput.jsx";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("donations");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Search & Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [subTab, setSubTab] = useState("postings"); // for career: 'postings' | 'applications'

  // Modals state
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [viewingItem, setViewingItem] = useState(null);
  const [deletingItem, setDeletingItem] = useState(null);

  // General Form state for create/edit
  const [formData, setFormData] = useState({});

  const [actionLoading, setActionLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState({ type: "", message: "" });

  useEffect(() => {
    // Check auth
    if (!localStorage.getItem("magic_admin_auth")) {
      navigate("/admin/login");
      return;
    }
    fetchData();
  }, [activeTab, page, statusFilter, subTab]);

  // Exact endpoint builder mapping every tab to backend route URL
  const getEntityApiBase = () => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";
    switch (activeTab) {
      case "donations":
        return `${API_URL}/api/v1/donation`;
      case "sponsorships":
        return `${API_URL}/api/v1/sponsorship`;
      case "projects":
        return `${API_URL}/api/v1/project`;
      case "contact":
        return `${API_URL}/api/v1/contact`;
      case "career":
        if (subTab === "applications") {
          return `${API_URL}/api/v1/career/applications`;
        }
        return `${API_URL}/api/v1/career`;
      case "news":
        return `${API_URL}/api/v1/news`;
      case "blogs":
        return `${API_URL}/api/v1/blog`;
      case "events":
        return `${API_URL}/api/v1/event`;
      case "reports":
        return `${API_URL}/api/v1/report`;
      case "yearbooks":
        return `${API_URL}/api/v1/yearbook`;
      case "volunteer":
        return `${API_URL}/api/v1/volunteer`;
      case "partner":
        return `${API_URL}/api/v1/partner`;
      case "awards":
        return `${API_URL}/api/v1/award`;
      default:
        return `${API_URL}/api/v1/${activeTab}`;
    }
  };

  const getEndpointWithParams = () => {
    const base = getEntityApiBase();
    const query = new URLSearchParams({ page: page.toString(), limit: "10" });
    if (statusFilter) query.append("status", statusFilter);
    if (searchTerm) query.append("search", searchTerm);
    return `${base}?${query.toString()}`;
  };

  // Universal GET response extractor for all backend controller shapes
  const extractListAndPages = (result) => {
    let list = [];
    let pages = 1;

    if (!result) return { list: [], pages: 1 };

    const root = result.data !== undefined ? result.data : result;

    if (Array.isArray(root)) {
      list = root;
    } else if (root && typeof root === "object") {
      if (Array.isArray(root.data)) list = root.data;
      else if (Array.isArray(root.news)) list = root.news;
      else if (Array.isArray(root.blogs)) list = root.blogs;
      else if (Array.isArray(root.events)) list = root.events;
      else if (Array.isArray(root.reports)) list = root.reports;
      else if (Array.isArray(root.yearbooks)) list = root.yearbooks;
      else if (Array.isArray(root.volunteers)) list = root.volunteers;
      else if (Array.isArray(root.partners)) list = root.partners;
      else if (Array.isArray(root.awards)) list = root.awards;
      else if (Array.isArray(root.contacts)) list = root.contacts;
      else if (Array.isArray(root.careers)) list = root.careers;
      else if (Array.isArray(root.applications)) list = root.applications;
      else if (Array.isArray(root.donations)) list = root.donations;
      else if (Array.isArray(root.sponsorships)) list = root.sponsorships;
      else {
        const arrKey = Object.keys(root).find((k) => Array.isArray(root[k]));
        if (arrKey) list = root[arrKey];
      }

      if (root.meta?.totalPages) pages = root.meta.totalPages;
      else if (root.pagination?.totalPages) pages = root.pagination.totalPages;
      else if (root.totalPages) pages = root.totalPages;
    }

    return { list, pages };
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const endpoint = getEndpointWithParams();
      const token = localStorage.getItem("magic_admin_auth");
      const res = await fetch(endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 401 || res.status === 403) {
        handleLogout();
        return;
      }

      const result = await res.json();
      const { list, pages } = extractListAndPages(result);

      setData(list);
      setTotalPages(pages || 1);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchData();
  };

  const handleLogout = () => {
    localStorage.removeItem("magic_admin_auth");
    navigate("/admin/login");
  };

  // Schema builder for entity modals
  const getInitialFormData = () => {
    switch (activeTab) {
      case "projects":
        return {
          title: "",
          body: "",
          coverPhoto: "",
          status: "ongoing",
          publishedDate: new Date().toISOString().substring(0, 16),
        };
      case "career":
        return {
          title: "",
          department: "",
          location: "Remote",
          jobType: "full-time",
          experienceLevel: "",
          salaryRange: "",
          description: "",
          requirements: "",
          responsibilities: "",
          status: "open",
        };
      case "news":
        return {
          title: "",
          picture: "",
          link: "",
          description: "",
          publishedDate: new Date().toISOString().substring(0, 10),
        };
      case "blogs":
        return {
          title: "",
          body: "",
          coverPhoto: "",
          author: "Admin",
          status: "published",
        };
      case "events":
        return {
          title: "",
          body: "",
          coverPhoto: "",
          eventDate: new Date().toISOString().substring(0, 16),
          location: "",
          registrationLink: "",
          status: "upcoming",
        };
      case "reports":
        return { title: "", coverPhoto: "", fileUrl: "", description: "" };
      case "yearbooks":
        return {
          title: "",
          coverPhoto: "",
          pdfUrl: "",
          year: new Date().getFullYear().toString(),
          description: "",
        };
      case "volunteer":
        return {
          companyName: "",
          email: "",
          phone: "",
          logo: "",
          description: "",
          website: "",
          status: "working",
        };
      case "partner":
        return {
          companyName: "",
          email: "",
          phone: "",
          logo: "",
          description: "",
          website: "",
          status: "active_partner",
        };
      case "awards":
        return {
          title: "",
          description: "",
          coverPhoto: "",
          year: new Date().getFullYear().toString(),
          issuer: "",
        };
      default:
        return {};
    }
  };

  const openCreateModal = () => {
    setFormData(getInitialFormData());
    setIsCreateOpen(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    let initial = { ...item };
    if (activeTab === "career") {
      initial.requirements = Array.isArray(item.requirements)
        ? item.requirements.join(", ")
        : item.requirements || "";
      initial.responsibilities = Array.isArray(item.responsibilities)
        ? item.responsibilities.join(", ")
        : item.responsibilities || "";
    }
    if (activeTab === "events" && item.eventDate) {
      initial.eventDate = new Date(item.eventDate)
        .toISOString()
        .substring(0, 16);
    }
    setFormData(initial);
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    try {
      const token = localStorage.getItem("magic_admin_auth");
      let payload = { ...formData };

      if (activeTab === "career") {
        if (typeof payload.requirements === "string") {
          payload.requirements = payload.requirements
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
        }
        if (typeof payload.responsibilities === "string") {
          payload.responsibilities = payload.responsibilities
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
        }
      }

      const res = await fetch(getEntityApiBase(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (res.ok && (result.status || result.data)) {
        setAlertMsg({ type: "success", message: "Created successfully!" });
        setIsCreateOpen(false);
        fetchData();
      } else {
        setAlertMsg({
          type: "error",
          message: result.message || "Failed to create item",
        });
      }
    } catch (err) {
      console.error("Create error", err);
      setAlertMsg({ type: "error", message: "Network error creating item" });
    } finally {
      setActionLoading(false);
      setTimeout(() => setAlertMsg({ type: "", message: "" }), 4000);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!editingItem) return;
    setActionLoading(true);
    try {
      const token = localStorage.getItem("magic_admin_auth");
      let payload = { ...formData };

      if (activeTab === "career") {
        if (typeof payload.requirements === "string") {
          payload.requirements = payload.requirements
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
        }
        if (typeof payload.responsibilities === "string") {
          payload.responsibilities = payload.responsibilities
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
        }
      }

      const res = await fetch(`${getEntityApiBase()}/${editingItem._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (res.ok && (result.status || result.data)) {
        setAlertMsg({ type: "success", message: "Updated successfully!" });
        setEditingItem(null);
        fetchData();
      } else {
        setAlertMsg({
          type: "error",
          message: result.message || "Failed to update item",
        });
      }
    } catch (err) {
      console.error("Update error", err);
      setAlertMsg({ type: "error", message: "Network error updating item" });
    } finally {
      setActionLoading(false);
      setTimeout(() => setAlertMsg({ type: "", message: "" }), 4000);
    }
  };

  const handleDeleteSubmit = async () => {
    if (!deletingItem) return;
    setActionLoading(true);
    try {
      const token = localStorage.getItem("magic_admin_auth");
      const res = await fetch(`${getEntityApiBase()}/${deletingItem._id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await res.json();

      if (res.ok && (result.status || result.data)) {
        setAlertMsg({ type: "success", message: "Deleted successfully!" });
        setDeletingItem(null);
        fetchData();
      } else {
        setAlertMsg({
          type: "error",
          message: result.message || "Failed to delete item",
        });
      }
    } catch (err) {
      console.error("Delete error", err);
      setAlertMsg({ type: "error", message: "Network error deleting item" });
    } finally {
      setActionLoading(false);
      setTimeout(() => setAlertMsg({ type: "", message: "" }), 4000);
    }
  };

  const tabsConfig = [
    { id: "donations", label: "Donations", icon: FaHandHoldingHeart },
    { id: "sponsorships", label: "Sponsorships", icon: FaUsers },
    { id: "projects", label: "Projects", icon: FaFolderOpen, hasCrud: true },
    { id: "contact", label: "Contact", icon: FaEnvelope },
    { id: "career", label: "Career & Apps", icon: FaBriefcase, hasCrud: true },
    { id: "news", label: "News", icon: FaNewspaper, hasCrud: true },
    { id: "blogs", label: "Blogs", icon: FaBookOpen, hasCrud: true },
    { id: "events", label: "Events", icon: FaCalendarCheck, hasCrud: true },
    { id: "reports", label: "Reports", icon: FaFileAlt, hasCrud: true },
    { id: "yearbooks", label: "Yearbooks", icon: FaBook, hasCrud: true },
    { id: "volunteer", label: "Volunteer", icon: FaUserCheck, hasCrud: true },
    { id: "partner", label: "Partner", icon: FaHandshake, hasCrud: true },
    { id: "awards", label: "Awards", icon: FaAward, hasCrud: true },
  ];

  const currentTabObj = tabsConfig.find((t) => t.id === activeTab);

  // Form field renderer with ImageUploadInput for cover photos / pictures
  const renderFormField = (key) => {
    const isImageKey = ["coverPhoto", "picture", "logo"].includes(key);

    if (isImageKey) {
      return (
        <ImageUploadInput
          key={key}
          label={key.replace(/([A-Z])/g, " $1")}
          value={formData[key] || ""}
          onChange={(uploadedUrl) =>
            setFormData({ ...formData, [key]: uploadedUrl })
          }
          placeholder={`Upload ${key.replace(/([A-Z])/g, " $1").toLowerCase()}`}
        />
      );
    }

    if (["_id", "__v", "createdAt", "updatedAt", "tags"].includes(key)) return null;

    return (
      <div key={key}>
        <label className="block text-xs font-bold text-[#7b1e1e] uppercase tracking-wider mb-1">
          {key.replace(/([A-Z])/g, " $1")}
        </label>
        {key === "body" || key === "description" ? (
          <textarea
            rows={4}
            value={formData[key] || ""}
            onChange={(e) =>
              setFormData({ ...formData, [key]: e.target.value })
            }
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e]"
          />
        ) : (
          <input
            type={key.includes("Date") ? "datetime-local" : "text"}
            value={formData[key] || ""}
            onChange={(e) =>
              setFormData({ ...formData, [key]: e.target.value })
            }
            className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e]"
          />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8f5f3] pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 bg-gradient-to-br from-[#7b1e1e] to-[#4a0e0e] rounded-3xl p-7 sm:p-8 shadow-xl">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              MAGIC Admin Control Center
            </h1>
            <p className="text-white/70 text-sm mt-1">
              Manage public entities, candidate applications, publications, and organization content.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white hover:bg-white/20 font-semibold rounded-full border border-white/20 backdrop-blur-sm transition cursor-pointer"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>

        {/* Global Toast Alert */}
        {alertMsg.message && (
          <div
            className={`mb-6 p-4 rounded-2xl font-semibold flex justify-between items-center shadow-sm ${
              alertMsg.type === "success"
                ? "bg-[#f9efef] text-[#7b1e1e] border border-[#7b1e1e]/20"
                : "bg-[#f9efef] text-[#7b1e1e] border border-[#7b1e1e]/20"
            }`}
          >
            <span>{alertMsg.message}</span>
            <button
              onClick={() => setAlertMsg({ type: "", message: "" })}
              className="opacity-60 hover:opacity-100 transition cursor-pointer"
            >
              <FaTimes />
            </button>
          </div>
        )}

        {/* Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto p-2 mb-6 bg-white rounded-2xl border border-[#7b1e1e]/10 shadow-sm scrollbar-none">
          {tabsConfig.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTab(t.id);
                  setPage(1);
                  setStatusFilter("");
                  setSearchTerm("");
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === t.id
                    ? "bg-gradient-to-br from-[#7b1e1e] to-[#4a0e0e] text-white shadow-sm"
                    : "text-stone-600 hover:text-[#7b1e1e] hover:bg-stone-50"
                }`}
              >
                <Icon />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Toolbar: Sub-tabs, Filters & Action Buttons */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#7b1e1e]/10 mb-6 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
          {/* Sub-tab for Career */}
          {activeTab === "career" && (
            <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-xl">
              <button
                onClick={() => {
                  setSubTab("postings");
                  setPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  subTab === "postings"
                    ? "bg-[#7b1e1e] text-white"
                    : "text-stone-600"
                }`}
              >
                Job Openings
              </button>
              <button
                onClick={() => {
                  setSubTab("applications");
                  setPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  subTab === "applications"
                    ? "bg-[#7b1e1e] text-white"
                    : "text-stone-600"
                }`}
              >
                Candidate Applications
              </button>
            </div>
          )}

          {/* Search Form */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-2 flex-1 max-w-md"
          >
            <div className="relative flex-1">
              <input
                type="text"
                placeholder={`Search ${currentTabObj?.label || "items"}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#7b1e1e]"
              />
              <FaSearch className="absolute left-3 top-3 text-stone-400 text-xs" />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-[#7b1e1e] text-white text-xs font-bold rounded-xl hover:bg-[#5a0000] transition cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Create Button */}
          {currentTabObj?.hasCrud &&
            !(activeTab === "career" && subTab === "applications") && (
              <button
                onClick={openCreateModal}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#7b1e1e] hover:bg-[#5a0000] text-white font-bold text-xs rounded-xl shadow transition cursor-pointer"
              >
                <FaPlus /> Add New {activeTab.slice(0, -1)}
              </button>
            )}
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#7b1e1e]/10 overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center py-20 text-[#7b1e1e]">
              <FaSpinner className="animate-spin text-3xl" />
            </div>
          ) : data.length === 0 ? (
            <div className="p-12 text-center text-stone-500">
              <p className="text-sm font-semibold">
                No records found for {activeTab}.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f9efef] text-[#7b1e1e] text-xs font-bold uppercase tracking-wider border-b border-stone-200">
                    {activeTab === "donations" && (
                      <>
                        <th className="py-4 px-6">Donor Name</th>
                        <th className="py-4 px-6">Email</th>
                        <th className="py-4 px-6">Amount</th>
                        <th className="py-4 px-6">Status</th>
                        <th className="py-4 px-6">Payment ID</th>
                        <th className="py-4 px-6">Date</th>
                      </>
                    )}
                    {activeTab === "sponsorships" && (
                      <>
                        <th className="py-4 px-6">Sponsor Name</th>
                        <th className="py-4 px-6">Email</th>
                        <th className="py-4 px-6">Child / Plan</th>
                        <th className="py-4 px-6">Amount</th>
                        <th className="py-4 px-6">Status</th>
                        <th className="py-4 px-6">Date</th>
                      </>
                    )}
                    {activeTab === "contact" && (
                      <>
                        <th className="py-4 px-6">Name</th>
                        <th className="py-4 px-6">Email / Phone</th>
                        <th className="py-4 px-6">Message</th>
                        <th className="py-4 px-6">Date</th>
                        <th className="py-4 px-6 text-right">Actions</th>
                      </>
                    )}
                    {activeTab === "career" && subTab === "applications" && (
                      <>
                        <th className="py-4 px-6">Candidate</th>
                        <th className="py-4 px-6">Contact Info</th>
                        <th className="py-4 px-6">Resume / Portfolio</th>
                        <th className="py-4 px-6">Applied Date</th>
                        <th className="py-4 px-6 text-right">Actions</th>
                      </>
                    )}
                    {activeTab === "career" && subTab === "postings" && (
                      <>
                        <th className="py-4 px-6">Title</th>
                        <th className="py-4 px-6">Department</th>
                        <th className="py-4 px-6">Location / Type</th>
                        <th className="py-4 px-6">Status</th>
                        <th className="py-4 px-6 text-right">Actions</th>
                      </>
                    )}
                    {[
                      "news",
                      "blogs",
                      "events",
                      "reports",
                      "yearbooks",
                      "volunteer",
                      "partner",
                      "awards",
                      "projects",
                    ].includes(activeTab) && (
                      <>
                        <th className="py-4 px-6">Title / Name</th>
                        <th className="py-4 px-6">Meta / Details</th>
                        <th className="py-4 px-6">Link / File</th>
                        <th className="py-4 px-6 text-right">Actions</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-xs sm:text-sm text-stone-700">
                  {data.map((item) => (
                    <tr
                      key={item._id || item.id}
                      className="hover:bg-stone-50 transition"
                    >
                      {activeTab === "donations" && (
                        <>
                          <td className="py-4 px-6 font-semibold text-[#4a0e0e]">
                            {item.donorName || "Anonymous Donor"}
                          </td>
                          <td className="py-4 px-6">
                            {item.donorEmail || item.email || "N/A"}
                          </td>
                          <td className="py-4 px-6 font-bold text-[#7b1e1e]">
                            {item.currency ? item.currency.toUpperCase() : "USD"}{" "}
                            ${item.amount}
                          </td>
                          <td className="py-4 px-6 font-bold uppercase text-[#7b1e1e]">
                            {item.status || "pending"}
                          </td>
                          <td className="py-4 px-6 font-mono text-xs text-stone-600">
                            {item.paymentIntentId ||
                              item.checkoutSessionId ||
                              "N/A"}
                          </td>
                          <td className="py-4 px-6 text-stone-500">
                            {new Date(
                              item.createdAt || Date.now()
                            ).toLocaleDateString()}
                          </td>
                        </>
                      )}

                      {activeTab === "sponsorships" && (
                        <>
                          <td className="py-4 px-6 font-semibold text-[#4a0e0e]">
                            {item.sponsorName || "Anonymous Sponsor"}
                          </td>
                          <td className="py-4 px-6">
                            {item.sponsorEmail || item.email || "N/A"}
                          </td>
                          <td className="py-4 px-6 font-medium">
                            {item.childName
                              ? `Child: ${item.childName}`
                              : item.childId || "Sponsorship Plan"}
                          </td>
                          <td className="py-4 px-6 font-bold text-[#7b1e1e]">
                            {item.currency ? item.currency.toUpperCase() : "USD"}{" "}
                            ${item.amount} / {item.interval || "month"}
                          </td>
                          <td className="py-4 px-6 font-bold uppercase text-[#7b1e1e]">
                            {item.status || "incomplete"}
                          </td>
                          <td className="py-4 px-6 text-stone-500">
                            {new Date(
                              item.createdAt || Date.now()
                            ).toLocaleDateString()}
                          </td>
                        </>
                      )}

                      {activeTab === "contact" && (
                        <>
                          <td className="py-4 px-6 font-semibold text-[#4a0e0e]">
                            {item.name}
                          </td>
                          <td className="py-4 px-6">
                            {item.email}
                            <br />
                            <span className="text-stone-400 text-xs">
                              {item.phone}
                            </span>
                          </td>
                          <td className="py-4 px-6 max-w-xs truncate">
                            {item.message}
                          </td>
                          <td className="py-4 px-6 text-stone-500">
                            {new Date(
                              item.createdAt || Date.now()
                            ).toLocaleDateString()}
                          </td>
                          <td className="py-4 px-6 text-right">
                            <button
                              onClick={() => setViewingItem(item)}
                              className="p-2 text-[#7b1e1e] hover:text-[#4a0e0e] cursor-pointer"
                            >
                              <FaEye />
                            </button>
                            <button
                              onClick={() => setDeletingItem(item)}
                              className="p-2 text-[#7b1e1e] hover:text-[#4a0e0e] cursor-pointer"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </>
                      )}

                      {activeTab === "career" && subTab === "applications" && (
                        <>
                          <td className="py-4 px-6 font-semibold text-[#4a0e0e]">
                            {item.fullName}
                          </td>
                          <td className="py-4 px-6">
                            {item.email}
                            <br />
                            <span className="text-stone-400 text-xs">
                              {item.phone}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            {item.resumeUrl && (
                              <a
                                href={item.resumeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-[#7b1e1e] font-bold hover:underline"
                              >
                                <FaDownload /> Resume
                              </a>
                            )}
                          </td>
                          <td className="py-4 px-6 text-stone-500">
                            {new Date(
                              item.createdAt || Date.now()
                            ).toLocaleDateString()}
                          </td>
                          <td className="py-4 px-6 text-right">
                            <button
                              onClick={() => setViewingItem(item)}
                              className="p-2 text-[#7b1e1e] hover:text-[#4a0e0e] cursor-pointer"
                            >
                              <FaEye />
                            </button>
                            <button
                              onClick={() => setDeletingItem(item)}
                              className="p-2 text-[#7b1e1e] hover:text-[#4a0e0e] cursor-pointer"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </>
                      )}

                      {activeTab === "career" && subTab === "postings" && (
                        <>
                          <td className="py-4 px-6 font-semibold text-[#4a0e0e]">
                            {item.title}
                          </td>
                          <td className="py-4 px-6">
                            {item.department || "General"}
                          </td>
                          <td className="py-4 px-6">
                            {item.location || "Remote"} ({item.jobType || "Full-Time"})
                          </td>
                          <td className="py-4 px-6 font-bold text-[#7b1e1e] uppercase">
                            {item.status || "open"}
                          </td>
                          <td className="py-4 px-6 text-right">
                            <button
                              onClick={() => openEditModal(item)}
                              className="p-2 text-[#7b1e1e] hover:text-[#4a0e0e] cursor-pointer"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => setDeletingItem(item)}
                              className="p-2 text-[#7b1e1e] hover:text-[#4a0e0e] cursor-pointer"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </>
                      )}

                      {[
                        "news",
                        "blogs",
                        "events",
                        "reports",
                        "yearbooks",
                        "volunteer",
                        "partner",
                        "awards",
                        "projects",
                      ].includes(activeTab) && (
                        <>
                          <td className="py-4 px-6 font-semibold text-[#4a0e0e] flex items-center gap-3">
                            {(item.coverPhoto ||
                              item.picture ||
                              item.logo) && (
                              <img
                                src={
                                  item.coverPhoto ||
                                  item.picture ||
                                  item.logo
                                }
                                alt=""
                                className="w-12 h-12 object-cover rounded-xl shrink-0 border border-stone-200"
                              />
                            )}
                            <div>
                              <div className="font-bold">
                                {item.title ||
                                  item.companyName ||
                                  item.donorName}
                              </div>
                              {item.year && (
                                <span className="text-[11px] text-stone-400">
                                  Year: {item.year}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-6 max-w-xs truncate">
                            {item.description ||
                              item.body ||
                              item.author ||
                              item.email ||
                              "N/A"}
                          </td>
                          <td className="py-4 px-6">
                            {(item.fileUrl ||
                              item.pdfUrl ||
                              item.registrationLink ||
                              item.link ||
                              item.website) && (
                              <a
                                href={
                                  item.fileUrl ||
                                  item.pdfUrl ||
                                  item.registrationLink ||
                                  item.link ||
                                  item.website
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#7b1e1e] font-bold hover:underline inline-flex items-center gap-1"
                              >
                                <FaExternalLinkAlt className="text-xs" /> View Link
                              </a>
                            )}
                          </td>
                          <td className="py-4 px-6 text-right">
                            <button
                              onClick={() => openEditModal(item)}
                              className="p-2 text-[#7b1e1e] hover:text-[#4a0e0e] cursor-pointer"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => setDeletingItem(item)}
                              className="p-2 text-[#7b1e1e] hover:text-[#4a0e0e] cursor-pointer"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination Footer */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-4 py-2 bg-white border border-stone-200 rounded-lg text-xs font-semibold disabled:opacity-50 text-[#7b1e1e] cursor-pointer"
            >
              Previous
            </button>
            <span className="text-xs text-stone-600 font-semibold px-2">
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 bg-white border border-stone-200 rounded-lg text-xs font-semibold disabled:opacity-50 text-[#7b1e1e] cursor-pointer"
            >
              Next
            </button>
          </div>
        )}

        {/* Create Modal */}
        {isCreateOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
              <button
                onClick={() => setIsCreateOpen(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <FaTimes />
              </button>

              <h2 className="text-xl font-bold text-[#4a0e0e] mb-6">
                Create New {activeTab}
              </h2>

              <form onSubmit={handleCreateSubmit} className="space-y-4">
                {Object.keys(formData).map((key) => renderFormField(key))}

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsCreateOpen(false)}
                    className="px-5 py-2 bg-stone-100 font-semibold text-xs rounded-xl text-stone-700 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading}
                    className="px-6 py-2 bg-[#7b1e1e] text-white font-bold text-xs rounded-xl hover:bg-[#5a0000] cursor-pointer disabled:opacity-50"
                  >
                    {actionLoading ? "Creating..." : "Save Record"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {editingItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
              <button
                onClick={() => setEditingItem(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <FaTimes />
              </button>

              <h2 className="text-xl font-bold text-[#4a0e0e] mb-6">
                Edit {activeTab}
              </h2>

              <form onSubmit={handleEditSubmit} className="space-y-4">
                {Object.keys(formData).map((key) => renderFormField(key))}

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingItem(null)}
                    className="px-5 py-2 bg-stone-100 font-semibold text-xs rounded-xl text-stone-700 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading}
                    className="px-6 py-2 bg-[#7b1e1e] text-white font-bold text-xs rounded-xl hover:bg-[#5a0000] cursor-pointer disabled:opacity-50"
                  >
                    {actionLoading ? "Updating..." : "Update Record"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* View Modal */}
        {viewingItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl relative">
              <button
                onClick={() => setViewingItem(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <FaTimes />
              </button>

              <h2 className="text-xl font-bold text-[#4a0e0e] mb-4">
                View Record Details
              </h2>

              <div className="space-y-3 text-sm text-stone-700">
                {Object.entries(viewingItem).map(([k, v]) => (
                  <div key={k} className="border-b border-stone-100 pb-2">
                    <strong className="text-[#7b1e1e] font-semibold capitalize">
                      {k}:{" "}
                    </strong>
                    <span>
                      {typeof v === "object" ? JSON.stringify(v) : String(v)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Delete Modal */}
        {deletingItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl text-center">
              <h3 className="text-lg font-bold text-[#4a0e0e] mb-2">
                Confirm Deletion
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Are you sure you want to delete this record? This action cannot be undone.
              </p>

              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setDeletingItem(null)}
                  className="px-5 py-2 bg-stone-100 text-xs font-semibold rounded-xl text-stone-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteSubmit}
                  disabled={actionLoading}
                  className="px-6 py-2 bg-[#7b1e1e] text-white text-xs font-bold rounded-xl hover:bg-[#5a0000] cursor-pointer disabled:opacity-50"
                >
                  {actionLoading ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}