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
  const [openMobileProgram, setOpenMobileProgram] = useState(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState(null);
  const dropdownRefs = useRef({});
  const timeoutRef = useRef(null);

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
        { 
          href: "", 
          label: "Quality Education (SDG 4)",
          subMenu: [
            { 
              label: "Projects",
              items: [
                // TO ADD PROJECTS: Add items here with href and label
                { href: "/magic", label: "Magic Board School" },
              ]
            },
            { 
              label: "Events",
              items: [
                // TO ADD EVENTS: Add items here with href and label
                //{ href: "/magic/event1", label: "Education Summit 2024" },
              ]
            }
          ]
        },
        { 
          href: "/climate", 
          label: "Climate Action (SDG 13)",
          subMenu: [
            { 
              label: "Projects",
              items: [
                //{ href: "/climate/project1", label: "Tree Planting Drive" },
              ]
            },
            { 
              label: "Events",
              items: [
                //{ href: "/climate/event1", label: "Climate Awareness Week" },
              ]
            }
          ]
        },
        { 
          href: "/vocational", 
          label: "Decent Work & Economic Growth (SDG 8)",
          subMenu: [
            { 
              label: "Projects",
              items: []
            },
            { 
              label: "Events",
              items: []
            }
          ]
        },
        { 
          href: "/research", 
          label: "Industry, Innovation & Infrastructure (SDG 9)",
          subMenu: [
            { 
              label: "Projects",
              items: []
            },
            { 
              label: "Events",
              items: []
            }
          ]
        },
        { 
          href: "/women", 
          label: "Gender Equality (SDG 5)",
          subMenu: [
            { 
              label: "Projects",
              items: []
            },
            { 
              label: "Events",
              items: []
            }
          ]
        },
        { 
          href: "/health", 
          label: "Good Health & Well-being (SDG 3)",
          subMenu: [
            { 
              label: "Projects",
              items: []
            },
            { 
              label: "Events",
              items: []
            }
          ]
        },
        { 
          href: "/volunteer", 
          label: "Peace, Justice & Strong Institutions (SDG 16)",
          subMenu: [
            { 
              label: "Projects",
              items: []
            },
            { 
              label: "Events",
              items: []
            }
          ]
        },
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
        { href: "/career", label: "Career" },
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

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const toggleMobileDropdown = (label) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
    setOpenMobileProgram(null);
    setOpenMobileSubMenu(null);
  };

  const toggleMobileProgram = (label) => {
    setOpenMobileProgram(openMobileProgram === label ? null : label);
    setOpenMobileSubMenu(null);
  };

  const toggleMobileSubMenu = (label) => {
    setOpenMobileSubMenu(openMobileSubMenu === label ? null : label);
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
                <div 
                  key={link.label} 
                  className="relative" 
                  ref={(el) => (dropdownRefs.current[link.label] = el)}
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#7b1e1e] transition-colors duration-300 focus:outline-none"
                  >
                    {link.label}
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-300 ${
                      openDropdown === link.label
                        ? "opacity-100 visible pointer-events-auto"
                        : "opacity-0 invisible pointer-events-none"
                    }`}
                  >
                    {link.label === "Programs" ? (
                      // MEGA MENU for Programs
                      <div className="bg-white border border-stone-200 rounded-lg shadow-xl p-6 w-[900px] max-h-[500px] overflow-y-auto">
                        <div className="grid grid-cols-2 gap-6">
                          {link.dropdown.map((program) => (
                            <div key={program.label} className="space-y-2">
                              {/* Program Title */}
                              <Link
                                to={program.href}
                                className="block text-base font-bold text-[#7b1e1e] hover:text-[#611515] pb-2 border-b border-stone-200"
                              >
                                {program.label}
                              </Link>

                              {/* Projects & Events */}
                              {program.subMenu && (
                                <div className="grid grid-cols-2 gap-4 pl-2">
                                  {program.subMenu.map((subItem) => (
                                    <div key={subItem.label}>
                                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                                        {subItem.label}
                                      </h4>
                                      {subItem.items && subItem.items.length > 0 ? (
                                        <ul className="space-y-1">
                                          {subItem.items.map((item) => (
                                            <li key={item.label}>
                                              <Link
                                                to={item.href}
                                                className="text-sm text-gray-700 hover:text-[#7b1e1e] hover:underline block"
                                              >
                                                {item.label}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      ) : (
                                        <p className="text-xs text-gray-400 italic">No items yet</p>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Regular dropdown for other menus
                      <div className="bg-white border border-stone-200 rounded-md shadow-lg w-56">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f8f5f3] hover:text-[#7b1e1e] first:rounded-t-md last:rounded-b-md"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
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
              to="/volunteer"
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
        <div className="md:hidden border-t border-stone-200 bg-stone-50 shadow-inner max-h-[80vh] overflow-y-auto" id="mobile-menu">
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
                      {link.label === "Programs" ? (
                        // Programs with nested menu
                        link.dropdown.map((item) => (
                          <div key={item.label}>
                            <button
                              onClick={() => toggleMobileProgram(item.label)}
                              className="w-full flex justify-between items-center text-gray-600 hover:bg-stone-100 hover:text-[#7b1e1e] px-3 py-2 rounded-md text-sm font-medium"
                            >
                              {item.label}
                              <ChevronDownIcon
                                className={`h-4 w-4 transition-transform duration-300 ${
                                  openMobileProgram === item.label ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {openMobileProgram === item.label && item.subMenu && (
                              <div className="pl-4 pt-1 space-y-1">
                                {item.subMenu.map((subItem) => (
                                  <div key={subItem.label}>
                                    <button
                                      onClick={() => toggleMobileSubMenu(subItem.label)}
                                      className="w-full flex justify-between items-center text-gray-600 hover:bg-stone-100 hover:text-[#7b1e1e] px-3 py-2 rounded-md text-sm"
                                    >
                                      {subItem.label}
                                      {subItem.items && subItem.items.length > 0 && (
                                        <ChevronDownIcon
                                          className={`h-4 w-4 transition-transform duration-300 ${
                                            openMobileSubMenu === subItem.label ? "rotate-180" : ""
                                          }`}
                                        />
                                      )}
                                    </button>
                                    {openMobileSubMenu === subItem.label && subItem.items && subItem.items.length > 0 && (
                                      <div className="pl-4 pt-1 space-y-1">
                                        {subItem.items.map((finalItem) => (
                                          <Link
                                            key={finalItem.label}
                                            to={finalItem.href}
                                            className="block text-gray-500 hover:bg-stone-100 hover:text-[#7b1e1e] px-3 py-2 rounded-md text-sm"
                                          >
                                            {finalItem.label}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        // Regular dropdown items
                        link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="text-gray-600 hover:bg-stone-100 hover:text-[#7b1e1e] block px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item.label}
                          </Link>
                        ))
                      )}
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