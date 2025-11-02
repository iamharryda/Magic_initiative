"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Animated particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF size={20} />,
      href: "https://www.facebook.com/share/1G66vFm4nf/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={22} />,
      href: "https://www.instagram.com/magicinitiative/?utm_source=qr&igsh=MWtpczV0amtrdjEyYg%3D%3D#",
    },
    { name: "LinkedIn", icon: <FaLinkedinIn size={20} />, href: "#" },
    { name: "Twitter", icon: <FaTwitter size={20} />, href: "#" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-stone-100 via-[#f8f5f3] to-stone-50 overflow-hidden flex items-center justify-center py-20 sm:py-24 md:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-[#f8f5f3] to-stone-50"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(123,30,30,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(123,30,30,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#7b1e1e]/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#7b1e1e]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5a1414]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-[#7b1e1e]/10 to-[#5a1414]/10 rounded-3xl border-2 border-[#7b1e1e]/40 backdrop-blur-sm">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-8xl sm:text-9xl"
            >
              🚀
            </motion.div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 bg-[#7b1e1e]/10 border border-[#7b1e1e] rounded-full text-[#7b1e1e] font-semibold text-sm uppercase tracking-wider backdrop-blur-sm">
            Under Development
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#4a0e0e] mb-6 leading-tight"
        >
          Coming <span className="text-[#7b1e1e]">Soon</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          We're crafting something extraordinary
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          This page is currently under construction. Stay tuned for exciting
          updates from MAGIC Initiative!
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mb-12 max-w-md mx-auto"
        >
          <div className="bg-white/60 rounded-full h-3 overflow-hidden border border-[#7b1e1e]/30 backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-[#7b1e1e] to-[#5a1414]"
              initial={{ width: "0%" }}
              animate={{ width: "75%" }}
              transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
            />
          </div>
          <p className="text-[#7b1e1e] mt-3 text-sm font-semibold">
            75% Complete
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-gray-700 mb-4">Follow us for updates</p>
          <div className="flex justify-center gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 + index * 0.1 }}
                className="w-12 h-12 bg-[#7b1e1e]/10 hover:bg-[#7b1e1e] border border-[#7b1e1e]/40 rounded-full flex items-center justify-center text-[#7b1e1e] hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#7b1e1e] transition-colors duration-300 group"
          >
            <motion.span
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ←
            </motion.span>
            <span className="border-b border-transparent group-hover:border-[#7b1e1e] transition-all">
              Back to Homepage
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7b1e1e] to-transparent"></div>
    </div>
  );
};

export default ComingSoonPage;
