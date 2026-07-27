import React, { useState } from "react";
import { FaCloudUploadAlt, FaSpinner, FaTrash, FaImage, FaCheckCircle } from "react-icons/fa";

export default function ImageUploadInput({ label, value, onChange, placeholder = "Upload cover photo or image" }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";
      const formData = new FormData();
      formData.append("file", file);

      const token = localStorage.getItem("magic_admin_auth");
      const res = await fetch(`${API_URL}/api/v1/upload`, {
        method: "POST",
        headers: token ? { "Authorization": `Bearer ${token}` } : {},
        body: formData,
      });

      const result = await res.json();

      if (res.ok && result.url) {
        onChange(result.url);
      } else {
        setError(result.message || "Failed to upload file");
      }
    } catch (err) {
      console.error("Upload error", err);
      setError("Network error uploading file.");
    } finally {
      setUploading(false);
    }
  };

  const handleClear = () => {
    onChange("");
    setError("");
  };

  return (
    <div className="space-y-2 font-sans">
      {label && (
        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
          {label}
        </label>
      )}

      {value ? (
        <div className="relative group rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 p-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <img
              src={value}
              alt="Uploaded Preview"
              className="w-14 h-14 object-cover rounded-xl border border-stone-200 shrink-0"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=300";
              }}
            />
            <div className="overflow-hidden">
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
                <FaCheckCircle className="text-[11px]" /> Image Uploaded
              </span>
              <p className="text-[11px] text-stone-500 truncate max-w-xs mt-0.5">{value}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClear}
            className="p-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl transition text-xs flex items-center gap-1 font-semibold"
            title="Remove picture"
          >
            <FaTrash /> Remove
          </button>
        </div>
      ) : (
        <div className="relative">
          <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-[#7b1e1e]/30 hover:border-[#7b1e1e] bg-[#f9efef]/40 hover:bg-[#f9efef]/80 rounded-2xl cursor-pointer transition p-4 text-center">
            {uploading ? (
              <div className="flex flex-col items-center text-[#7b1e1e]">
                <FaSpinner className="animate-spin text-2xl mb-2" />
                <span className="text-xs font-bold">Uploading picture...</span>
              </div>
            ) : (
              <div className="flex flex-col items-center text-stone-600">
                <FaCloudUploadAlt className="text-3xl text-[#7b1e1e] mb-1.5" />
                <span className="text-xs font-bold text-[#4a0e0e] mb-0.5">
                  Click or drag image file here to upload
                </span>
                <span className="text-[11px] text-stone-500">
                  {placeholder} (PNG, JPG, WEBP, GIF up to 10MB)
                </span>
              </div>
            )}
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              disabled={uploading}
              className="hidden"
            />
          </label>
          {error && (
            <p className="text-[11px] text-red-600 font-semibold mt-1">{error}</p>
          )}
        </div>
      )}
    </div>
  );
}
