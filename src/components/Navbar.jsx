import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pages = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Philosophy" },
    { path: "/products", label: "Collection" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Announcement bar */}
      <div className="w-full bg-[#1A1A1A] text-[#D4AF37] text-[9px] tracking-[0.35em] text-center py-2 uppercase">
        We Deliver Across India & Internationally
      </div>

      {/* Main Navbar */}
      <div className="bg-[#FAF9F6]/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between relative">
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[20px] text-black z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>

          {/* Desktop Menu - Left Side */}
          <nav className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.25em]">
             {pages.slice(0, 2).map((p) => (
              <NavLink
                key={p.path}
                to={p.path}
                className={({ isActive }) =>
                  `transition-all duration-300 ${
                    isActive ? "text-[#C9A24D]" : "text-black/60 hover:text-black"
                  }`
                }
              >
                {p.label}
              </NavLink>
            ))}
          </nav>

          {/* Center Logo - Text based like Kimirica */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center select-none group"
          >
            <span className="text-2xl md:text-3xl font-serif tracking-[0.5em] uppercase text-black transition-colors duration-500">
              Lumnica
            </span>
            <span className="hidden md:block text-[7px] tracking-[0.6em] uppercase text-black/40 mt-1 font-light">
              Skin Care with Nature’s Luxury
            </span>
          </Link>

          {/* Desktop Menu - Right Side */}
          <nav className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.25em]">
            {pages.slice(2).map((p) => (
              <NavLink
                key={p.path}
                to={p.path}
                className={({ isActive }) =>
                  `transition-all duration-300 ${
                    isActive ? "text-[#C9A24D]" : "text-black/60 hover:text-black"
                  }`
                }
              >
                {p.label}
              </NavLink>
            ))}
          </nav>

          {/* Icons placeholder to match Kimirica layout (Search/Wishlist/Cart) */}
          <div className="flex items-center gap-4 text-black/70">
             {/* You can add your Lucide icons here later */}
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-[#FAF9F6] z-40 pt-32">
          <nav className="flex flex-col space-y-12 text-[14px] uppercase tracking-[0.4em] text-center">
            {pages.map((p) => (
              <Link
                key={p.path}
                to={p.path}
                onClick={() => setOpen(false)}
                className="text-black/70 hover:text-black transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}