import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "Philosophy" },
    { path: "/products", name: "Collection" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F6F3]/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* Brand */}
        <Link
          to="/"
          className="font-serif text-2xl tracking-[0.35em] text-[#1E2D2B]"
        >
          LUMNICA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-12 text-[11px] tracking-[0.3em] uppercase text-[#1E2D2B]/80">
          {routes.map((r) => (
            <NavLink
              key={r.path}
              to={r.path}
              className={({ isActive }) =>
                `relative pb-2 transition ${
                  isActive ? "text-[#A38E6A]" : "hover:text-[#A38E6A]"
                }`
              }
            >
              {r.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl text-[#1E2D2B]"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#F8F6F3] border-t border-black/5">
          <nav className="flex flex-col px-8 py-6 space-y-6 text-[12px] tracking-[0.3em] uppercase">
            {routes.map((r) => (
              <Link
                key={r.path}
                to={r.path}
                onClick={() => setOpen(false)}
                className="text-[#1E2D2B]/80 hover:text-[#A38E6A]"
              >
                {r.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
