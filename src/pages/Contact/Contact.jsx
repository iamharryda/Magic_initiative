import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const socials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1G66vFm4nf/",
      icon: "📘",
      color: "hover:bg-[#7b1e1e] hover:text-white border-[#7b1e1e]",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/magicinitiative/?utm_source=qr&igsh=MWtpczV0amtrdjEyYg%3D%3D#",
      icon: "📸",
      color: "hover:bg-[#7b1e1e] hover:text-white border-[#7b1e1e]",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: "💼",
      color: "hover:bg-[#7b1e1e] hover:text-white border-[#7b1e1e]",
    },
    {
      name: "Email",
      href: "mailto:info@magicinitiative.org",
      icon: "✉️",
      color: "hover:bg-[#7b1e1e] hover:text-white border-[#7b1e1e]",
    },
  ];

  return (
    <div className="relative bg-stone-50 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Orbs */}
      <motion.div
        className="absolute -top-10 -left-10 w-72 h-72 bg-[#7b1e1e]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#7b1e1e]/10 rounded-full blur-3xl"
        animate={{ scale: [1.1, 1.3, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-block mb-6 px-4 py-2 bg-[#7b1e1e]/10 border border-[#7b1e1e] rounded-full"
        >
          <span className="text-[#7b1e1e] font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#4a0e0e] mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact <span className="text-[#7b1e1e]">Us</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Our contact page is currently under development — but you can reach us
          through our social channels below!
        </motion.p>

        {/* Contact Info Section */}
        <motion.div
          className="space-y-3 mb-10 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-lg sm:text-xl font-medium">
            <span className="text-[#7b1e1e] font-semibold">📞 Contact:</span>{" "}
            +880&nbsp;1643-196126,&nbsp;+880&nbsp;1878-554154
          </p>
          <p className="text-lg sm:text-xl font-medium">
            <span className="text-[#7b1e1e] font-semibold">📍 Location:</span>{" "}
            Ground floor of Khadiza Bhaban, Rumairchora, Cox’s Bazar — opposite Cox’s Bazar Hashemia Kamil Master’s Madrasa.
          </p>
          <p className="text-lg sm:text-xl font-medium">
            <span className="text-[#7b1e1e] font-semibold">✉️ Email:</span>{" "}
            <a
              href="mailto:info@magicinitiative.org"
              className="text-[#7b1e1e] underline hover:text-[#4a0e0e] transition-colors"
            >
              info@magicinitiative.org
            </a>
          </p>
        </motion.div>

        {/* Social Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center bg-white border rounded-xl py-8 px-6 shadow-md transition-all duration-300 ${social.color}`}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 3,
                  duration: 2.5,
                }}
              >
                {social.icon}
              </motion.div>
              <p className="text-lg font-semibold text-[#4a0e0e]">
                {social.name}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Under Development Tag */}
        <motion.div
          className="mt-14 inline-block px-6 py-2 bg-[#7b1e1e]/10 border border-[#7b1e1e] rounded-full text-[#7b1e1e] font-semibold tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          🚧 Page Under Development
        </motion.div>

        {/* Back Home */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-[#7b1e1e] hover:text-[#4a0e0e] font-medium transition-colors"
          >
            <motion.span
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ←
            </motion.span>
            Back to Homepage
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
