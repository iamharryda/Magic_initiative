import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5006/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const result = await res.json();

      if (result.status && result.data?.user?.role === "ADMIN") {
        localStorage.setItem("magic_admin_auth", result.data.accessToken);
        navigate("/admin/dashboard");
      } else if (result.status) {
        setError("You do not have admin privileges.");
      } else {
        setError(result.message || "Invalid credentials.");
      }
    } catch (err) {
      console.error(err);
      setError("Error connecting to server.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f5f3] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-[#4a0e0e] text-center mb-6">Admin Login</h2>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4a0e0e]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4a0e0e]"
              required
            />
          </div>
          
          <button 
            type="submit"
            className="w-full py-3 bg-[#4a0e0e] hover:bg-[#310909] text-white font-bold rounded-full transition-colors mt-2"
          >
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
