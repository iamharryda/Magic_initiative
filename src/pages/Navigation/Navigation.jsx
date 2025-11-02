"use client";

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// --- ICONS ---
const MenuIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const XIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
const ChevronDownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const dropdownRefs = useRef({});

  const navLinks = [
    {
      label: "About Us",
      dropdown: [
        { href: "/mission", label: "Mission & Vision" },
        { href: "/values", label: "Core Values" },
        { href: "/team", label: "Meet the Team" },
      ],
    },
    {
      label: "Programs",
      dropdown: [
        { href: "/magic", label: "Magic Board School" },
        { href: "/climate", label: "Climate Action" },
        { href: "/vocational", label: "Vocational Training" },
        { href: "/research", label: "Research & Innovation" },
        { href: "/women", label: "Women Empowerment" },
        { href: "/health", label: "Health & Well-being" },
      ],
    },
    {
      href: "/impact",
      label: "Impact",
    },
    {
      label: "Get Involved",
      dropdown: [
        { href: "/volunteer", label: "Volunteer" },
        { href: "/partner", label: "Partner With Us" },
      ],
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.entries(dropdownRefs.current).forEach(([label, ref]) => {
        if (ref && !ref.contains(event.target)) {
          setOpenDropdown((current) => (current === label ? null : current));
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileDropdown = (label) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  return (
    <header className="bg-stone-50/95 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-stone-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* --- LOGO --- */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
  <img
    src="https://i.ibb.co/PskQqh3B/Magic-Initiative-Logo-PNG.png"
    alt="MAGIC Initiative Logo"
    className="h-28 w-auto object-contain"
  />
</a>


          {/* --- DESKTOP NAV --- */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" ref={(el) => (dropdownRefs.current[link.label] = el)}>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#7b1e1e] transition-colors duration-300 focus:outline-none"
                  >
                    {link.label}
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute top-full mt-2 w-56 bg-white border border-stone-200 rounded-md shadow-lg transition-all duration-300 ${
                      openDropdown === link.label
                        ? "opacity-100 visible pointer-events-auto"
                        : "opacity-0 invisible pointer-events-none"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setTimeout(() => setOpenDropdown(null), 50)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f8f5f3] hover:text-[#7b1e1e]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#7b1e1e] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* --- DONATE BUTTON --- */}
            <Link
              to= "/volunteer"
              className="ml-4 inline-flex items-center justify-center rounded-full bg-[#7b1e1e] hover:bg-[#611515] text-white font-semibold px-4 py-2 transition-all duration-300 shadow-sm"
            >
              Donate
            </Link>
          </nav>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#7b1e1e] hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#7b1e1e]"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50 shadow-inner" id="mobile-menu">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => toggleMobileDropdown(link.label)}
                    className="w-full flex justify-between items-center text-gray-700 hover:text-[#7b1e1e] px-3 py-2 rounded-md text-base font-medium"
                  >
                    {link.label}
                    <ChevronDownIcon
                      className={`h-5 w-5 transition-transform duration-300 ${
                        openMobileDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === link.label && (
                    <div className="pl-4 pt-2 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="text-gray-600 hover:bg-stone-100 hover:text-[#7b1e1e] block px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-gray-700 hover:bg-stone-100 hover:text-[#7b1e1e] block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/volunteer"
              className="block text-center mt-4 bg-[#7b1e1e] hover:bg-[#611515] text-white font-semibold px-4 py-2 rounded-full shadow-sm"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header2;
