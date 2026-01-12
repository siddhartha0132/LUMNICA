import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logolumnica.png";

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

      {/* Announcement Bar */}
      <div className="bg-[#1A1A1A] text-[#D4AF37] text-[10px] tracking-[0.35em] text-center py-2 uppercase">
        We Deliver Across India & Internationally
      </div>

      {/* Navbar */}
      <div className="bg-[#FAF9F6]/90 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center">

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="flex-1 flex justify-center md:justify-start"
          >
            <img
              src={logo}
              alt="Lumnica"
              className="h-10 md:h-12 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.3em] text-black/70">
            {pages.map((p) => (
              <NavLink
                key={p.path}
                to={p.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#C9A24D]"
                    : "hover:text-black transition"
                }
              >
                {p.label}
              </NavLink>
            ))}
          </nav>

        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <div className="fixed inset-0 bg-[#FAF9F6] z-50 flex flex-col items-center justify-center space-y-10 text-[14px] uppercase tracking-[0.35em]">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-2xl"
          >
            ✕
          </button>

          {pages.map((p) => (
            <Link
              key={p.path}
              to={p.path}
              onClick={() => setOpen(false)}
              className="text-black/70 hover:text-black transition"
            >
              {p.label}
            </Link>
          ))}
        </div>
      )}

    </header>
  );
}
