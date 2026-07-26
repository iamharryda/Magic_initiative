import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("donations");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Check auth
    if (!localStorage.getItem("magic_admin_auth")) {
      navigate("/admin/login");
      return;
    }
    fetchData();
  }, [activeTab, page]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const endpoint = activeTab === "donations" 
        ? `http://localhost:5006/api/v1/donation?page=${page}&limit=10`
        : `http://localhost:5006/api/v1/sponsorship?page=${page}&limit=10`;
      
      const token = localStorage.getItem("magic_admin_auth");
      const res = await fetch(endpoint, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      if (res.status === 401 || res.status === 403) {
        handleLogout();
        return;
      }
      
      const result = await res.json();
      
      setData(activeTab === "donations" ? result.donations : result.sponsorships);
      setTotalPages(result.totalPages || 1);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("magic_admin_auth");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#4a0e0e]">Admin Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-100 text-red-700 hover:bg-red-200 font-semibold rounded-lg transition"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => { setActiveTab("donations"); setPage(1); }}
            className={`px-6 py-3 rounded-t-lg font-bold transition-colors ${activeTab === "donations" ? "bg-white text-[#4a0e0e] border-t-4 border-[#4a0e0e] shadow-sm" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
          >
            One-Time Donations
          </button>
          <button
            onClick={() => { setActiveTab("sponsorships"); setPage(1); }}
            className={`px-6 py-3 rounded-t-lg font-bold transition-colors ${activeTab === "sponsorships" ? "bg-white text-[#4a0e0e] border-t-4 border-[#4a0e0e] shadow-sm" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
          >
            Monthly Sponsorships
          </button>
        </div>

        {/* Data Table Container */}
        <div className="bg-white rounded-b-lg rounded-tr-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 uppercase text-sm border-b border-gray-200">
                  {activeTab === "donations" ? (
                    <>
                      <th className="p-4 font-semibold">Date</th>
                      <th className="p-4 font-semibold">Donor</th>
                      <th className="p-4 font-semibold">Amount</th>
                      <th className="p-4 font-semibold">Status</th>
                      <th className="p-4 font-semibold">Message</th>
                    </>
                  ) : (
                    <>
                      <th className="p-4 font-semibold">Created</th>
                      <th className="p-4 font-semibold">Sponsor</th>
                      <th className="p-4 font-semibold">Child Details</th>
                      <th className="p-4 font-semibold">Amount/mo</th>
                      <th className="p-4 font-semibold">Status</th>
                      <th className="p-4 font-semibold">Next Billing</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="p-8 text-center text-gray-500 font-semibold">
                      Loading data...
                    </td>
                  </tr>
                ) : data && data.length > 0 ? (
                  data.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                      {activeTab === "donations" ? (
                        <>
                          <td className="p-4 text-sm text-gray-600">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-4">
                            <div className="font-semibold text-gray-900">{item.donorName || "Anonymous"}</div>
                            <div className="text-sm text-gray-500">{item.donorEmail || "No email"}</div>
                          </td>
                          <td className="p-4 font-bold text-green-600">
                            ${item.amount} {item.currency.toUpperCase()}
                          </td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              item.status === 'paid' ? 'bg-green-100 text-green-700' :
                              item.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {item.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="p-4 text-sm text-gray-600 italic">
                            {item.message || "-"}
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="p-4 text-sm text-gray-600">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-4">
                            <div className="font-semibold text-gray-900">{item.sponsorName || "Anonymous"}</div>
                            <div className="text-sm text-gray-500">{item.sponsorEmail}</div>
                          </td>
                          <td className="p-4">
                            <div className="font-semibold text-gray-900">{item.childName || "Unknown Child"}</div>
                            <div className="text-xs text-gray-500">ID: {item.childId || "N/A"}</div>
                          </td>
                          <td className="p-4 font-bold text-blue-600">
                            ${item.amount}
                          </td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              item.status === 'active' ? 'bg-green-100 text-green-700' :
                              item.status === 'past_due' ? 'bg-red-100 text-red-700' :
                              item.status === 'canceled' ? 'bg-gray-100 text-gray-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {item.status.toUpperCase()}
                            </span>
                          </td>
                          <td className="p-4 text-sm font-semibold text-gray-700">
                            {item.nextBillingDate ? new Date(item.nextBillingDate).toLocaleDateString() : "Not Set"}
                          </td>
                        </>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="p-8 text-center text-gray-500 font-semibold">
                      No records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50">
              <button 
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 font-semibold"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600 font-semibold">
                Page {page} of {totalPages}
              </span>
              <button 
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 font-semibold"
              >
                Next
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
