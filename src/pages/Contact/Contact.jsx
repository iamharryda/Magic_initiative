import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import { FiHome, FiMail, FiPhone } from "react-icons/fi";

const socialLinks = [
  { name: "Facebook",  href: "#", Icon: FaFacebookF },
  { name: "Instagram", href: "#", Icon: FaInstagram },
  { name: "LinkedIn",  href: "#", Icon: FaLinkedinIn },
  { name: "YouTube",   href: "#", Icon: FaYoutube },
  { name: "Twitter",   href: "#", Icon: FaTwitter },
  { name: "Pinterest", href: "#", Icon: FaPinterestP },
];

const contactInfo = [
  {
    Icon: FiHome,
    text: "Ground floor of Khadiza Bhaban, Rumairchora, Cox's Bazar — opposite Cox's Bazar Hashemia Kamil Master's Madrasa.",
  },
  { Icon: FiMail,  text: "info@magicinitiative.org" },
  { Icon: FiPhone, text: "+880 1643-196126, +880 1878-554154" },
];

const fields = [
  { name: "name",    placeholder: "Your name",     type: "text",  mode: "text" },
  { name: "email",   placeholder: "Email address", type: "email", mode: "email" },
  { name: "phone",   placeholder: "Phone number",  type: "tel",   mode: "tel" },
];

export default function ContactPage() {
  const [form, setForm]       = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmit] = useState(false);
  const [focused, setFocused] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = () => {
    if (!form.name.trim() || !form.email.trim()) return;
    setForm({ name: "", email: "", phone: "", message: "" });
    setSubmit(true);
    setTimeout(() => setSubmit(false), 3500);
  };

  const inputBase =
    "w-full px-5 py-3.5 text-sm font-medium text-[#5a1a1a] placeholder-[#c4908f] bg-[#f9efef] outline-none transition-all duration-200 border-2";

  const ringClass = (field) =>
    focused === field
      ? "border-[#800000] shadow-[0_0_0_3px_rgba(128,0,0,0.1)]"
      : "border-[#e8c8c8]";

  return (
    <div className="min-h-screen pb-14 bg-gradient-to-br from-[#fdf0f0] via-[#fae8e8] to-[#f5e0e0] font-sans">

      {/* ── Heading ── */}
      <div className="text-center px-5 pt-10 pb-7 sm:pt-14 sm:pb-10">
        <span className="inline-block border border-[#800000]/40 text-[#800000] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-5">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#6b1515] tracking-tight leading-tight">
          Contact <span className="text-[#800000]">Us</span>
        </h1>
        <p className="mt-3 text-[#9b5050] text-sm sm:text-base max-w-sm sm:max-w-md mx-auto leading-relaxed">
          We are shaping a future where education, sustainability, and social cohesion work hand in hand.
        </p>
      </div>

      {/* ── Card ── */}
      <div className="mx-auto max-w-4xl w-[calc(100%-28px)] sm:w-[calc(100%-48px)] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_60px_rgba(128,0,0,0.15)] flex flex-col md:flex-row mb-10">

        {/* Left panel */}
        <div className="relative flex flex-col gap-6 px-7 py-9 sm:px-10 sm:py-12 md:w-[42%] overflow-hidden bg-gradient-to-br from-[#800000] via-[#6b0000] to-[#5a0000]">

          <p className="text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#f5c0c0]">
            Contact Information
          </p>

          {/* Info rows */}
          <ul className="flex flex-col gap-4 sm:gap-5 list-none">
            {contactInfo.map(({ Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon className="text-[#f5c0c0] mt-0.5 shrink-0 text-[17px]" aria-hidden="true" />
                <span className="text-[rgba(253,232,232,0.82)] text-xs sm:text-sm leading-relaxed">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex flex-wrap gap-2 pt-1">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[rgba(255,220,220,0.14)] text-[#fde0e0] transition-all duration-200 hover:bg-[rgba(255,220,220,0.32)] hover:scale-110 active:scale-95"
              >
                <Icon className="text-[16px]" aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -bottom-10 -right-10 w-36 h-36 rounded-full border-2 border-white/10" />
          <div className="pointer-events-none absolute bottom-4 right-4 w-16 h-16 rounded-full bg-white/10" />
        </div>

        {/* Right — form */}
        <div className="flex flex-col gap-5 px-7 py-9 sm:px-10 sm:py-12 flex-1 bg-[#fffafa]">

          <p className="text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#800000]">
            Send a Message
          </p>

          <div className="flex flex-col gap-3">
            {fields.map(({ name, placeholder, type, mode }) => (
              <input
                key={name}
                name={name}
                type={type}
                inputMode={mode}
                autoComplete={name}
                placeholder={placeholder}
                value={form[name]}
                onChange={onChange}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused("")}
                className={`${inputBase} rounded-full ${ringClass(name)}`}
              />
            ))}

            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              value={form.message}
              onChange={onChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused("")}
              className={`${inputBase} rounded-2xl resize-none ${ringClass("message")}`}
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 flex-wrap">
            <button
              onClick={onSubmit}
              className="w-full xs:w-auto rounded-full px-8 py-3.5 text-sm font-bold tracking-wide text-[#fde8e8] bg-gradient-to-br from-[#800000] to-[#6b0000] transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5 active:scale-[0.98] active:opacity-75 touch-manipulation"
            >
              Send Message
            </button>

            {submitted && (
              <div className="flex items-center gap-2 rounded-full border border-[#e8c8c8] bg-[#fff5f5] px-4 py-2.5 text-sm font-semibold text-[#800000]">
                <FiPhone className="hidden" aria-hidden="true" />
                {/* reuse FiMail as a checkmark substitute — use a tiny inline SVG instead */}
                <svg className="w-4 h-4 shrink-0 text-[#800000]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Message sent!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}