import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaPinterestP,
  FaPaperPlane
} from "react-icons/fa";
import { FiHome, FiMail, FiPhone, FiClock, FiCheckCircle } from "react-icons/fi";

const socialLinks = [
  { name: "Facebook",  href: "https://facebook.com", Icon: FaFacebookF },
  { name: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { name: "LinkedIn",  href: "https://linkedin.com", Icon: FaLinkedinIn },
  { name: "YouTube",   href: "https://youtube.com", Icon: FaYoutube },
  { name: "Twitter",   href: "https://twitter.com", Icon: FaTwitter },
  { name: "Pinterest", href: "https://pinterest.com", Icon: FaPinterestP },
];

const contactCards = [
  {
    Icon: FiHome,
    title: "Head Office Address",
    details: ["Ground Floor, Khadiza Bhaban", "North Rumaliarchara, Main Road", "Sadar, Cox's Bazar - 4700, Bangladesh"],
    subText: "Opposite Cox's Bazar Hashemia Master's Madrasa"
  },
  {
    Icon: FiMail,
    title: "Email Support",
    details: ["info@magicinitiative.org", "contact@magicinitiative.org"],
    subText: "We reply within 24 business hours"
  },
  {
    Icon: FiPhone,
    title: "Phone Lines",
    details: ["+880 1643-196126", "+880 1878-554154"],
    subText: "Mon - Sat: 9:00 AM - 6:00 PM"
  },
  {
    Icon: FiClock,
    title: "Working Hours",
    details: ["Monday - Saturday", "9:00 AM - 6:00 PM (GMT+6)"],
    subText: "Emergency response team on-call 24/7"
  }
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all required fields (Name, Email, Message).");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";
      const res = await fetch(`${API_URL}/api/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const result = await res.json();
      if (res.ok || result.status || result.data) {
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        setSubmit(true);
        setTimeout(() => setSubmit(false), 5000);
      } else {
        setError(result.message || "Failed to send message.");
      }
    } catch (err) {
      console.error("Error submitting contact form", err);
      setError("Failed to connect to backend server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-[#f8f5f3] font-sans text-[#4a0e0e]">

      {/* Header Banner */}
      <div className="text-center px-5 pt-12 pb-10 max-w-4xl mx-auto">
        <span className="inline-block border border-[#7b1e1e]/30 text-[#7b1e1e] bg-[#f9efef] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4a0e0e] tracking-tight leading-tight">
          Contact <span className="text-[#7b1e1e]">MAGIC Initiative</span>
        </h1>
        <p className="mt-3 text-stone-600 text-base max-w-lg mx-auto leading-relaxed">
          We are here to answer your questions, partner with organizations, and drive sustainable community impact.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map(({ Icon, title, details, subText }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f9efef] text-[#7b1e1e] flex items-center justify-center text-xl mb-4">
                  <Icon />
                </div>
                <h3 className="text-lg font-bold text-[#4a0e0e] mb-2">{title}</h3>
                <div className="space-y-1 text-sm text-stone-700 font-medium">
                  {details.map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
                </div>
              </div>
              <p className="text-xs text-stone-400 mt-4 pt-3 border-t border-stone-100">{subText}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form & Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 flex flex-col lg:flex-row">

          {/* Left panel: Info & Socials */}
          <div className="p-8 sm:p-12 lg:w-5/12 bg-gradient-to-br from-[#7b1e1e] via-[#631414] to-[#4a0e0e] text-white flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-amber-200">
                Direct Contact
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
                Let's start a conversation.
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Whether you have questions about our programs in Nazirartek, sponsorship options, or volunteer opportunities, reach out to our team directly.
              </p>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <FiMail className="text-amber-300 text-lg shrink-0" />
                  <span>info@magicinitiative.org</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiPhone className="text-amber-300 text-lg shrink-0" />
                  <span>+880 1643-196126 / +880 1878-554154</span>
                </div>
              </div>
            </div>

            {/* Social media links */}
            <div className="pt-8">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-200 mb-3">Connect With Us</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition hover:scale-105"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="p-8 sm:p-12 lg:w-7/12 bg-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#4a0e0e] mb-1">Send Us a Message</h2>
              <p className="text-xs text-stone-500 mb-6">Fill in the fields below and we'll get back to you shortly.</p>

              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-semibold">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                  <FiCheckCircle className="text-lg text-emerald-600" />
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={onChange}
                      className="w-full px-4 py-3 bg-[#f9efef]/50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={onChange}
                      className="w-full px-4 py-3 bg-[#f9efef]/50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+880 1700-000000"
                      value={form.phone}
                      onChange={onChange}
                      className="w-full px-4 py-3 bg-[#f9efef]/50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      placeholder="Inquiry regarding..."
                      value={form.subject}
                      onChange={onChange}
                      className="w-full px-4 py-3 bg-[#f9efef]/50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Write your message or inquiry here..."
                    value={form.message}
                    onChange={onChange}
                    className="w-full px-4 py-3 bg-[#f9efef]/50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-[#7b1e1e] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#7b1e1e] hover:bg-[#5a0000] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? "Sending Message..." : <>Send Message <FaPaperPlane /></>}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}