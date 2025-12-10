// src/components/Navbar.jsx

import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = [
    { path: "/", name: "HOME" },
    { path: "/about", name: "OUR PHILOSOPHY" },
    { path: "/products", name: "COLLECTION" },
    { path: "/contact", name: "CONTACT" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="
      fixed top-0 left-0 right-0 
      bg-[#F8F6F4]/95 backdrop-blur-sm 
      border-b border-[#EBE8E4] 
      shadow-sm z-50
    ">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 text-[#1E3A34] transition duration-300 hover:text-[#A68A6A]"
        >
          <span className="text-2xl font-serif tracking-widest font-semibold">
            LUMNICA
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#1E3A34] text-2xl z-50"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation */}
        <nav
          className={`
            hidden md:flex gap-10 text-sm tracking-widest uppercase
            ${isMenuOpen 
              ? "!flex flex-col absolute top-full left-0 w-full bg-[#F8F6F4] border-t border-[#EBE8E4] shadow-lg py-4"
              : ""}
          `}
        >
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              onClick={closeMenu}
              className={({ isActive }) => `
                transition duration-300 relative group pb-1 text-[#1E3A34] font-medium
                ${isMenuOpen ? "px-8 py-2 w-full text-base" : ""}
                ${isActive ? "text-[#A68A6A]" : ""}
              `}
            >
              {({ isActive }) => (
                <>
                  {route.name}
                  <span
                    className={`
                      absolute bottom-0 left-0 h-[2px] w-full transition-transform duration-300 origin-left border-b-2 border-dashed
                      ${isActive 
                        ? "scale-x-100 border-[#A68A6A]" 
                        : "scale-x-0 group-hover:scale-x-100 border-transparent group-hover:border-[#A68A6A]"
                      }
                    `}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}
