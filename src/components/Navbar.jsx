import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingBag,
  User,
  Sparkles,
  Flower2,
  Bath,
  Scissors,
  Palette,
  Gift,
  User2,
  Crown,
} from "lucide-react";
import logo from "../assets/Logolumnica.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const pages = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Philosophy" },
    { path: "/products", label: "Collection" },
    { path: "/contact", label: "Contact" },
  ];

  const categories = [
    { path: "/customized", label: "Customized Skincare" },
    { path: "/face", label: "Face" },
    { path: "/bath-body", label: "Bath & Body" },
    { path: "/gifting", label: "Gifting" },
    { path: "/men", label: "Men" },
    { path: "/about", label: "About Us" },
    { path: "/exclusives", label: "Exclusives" },
  ];

  /* ✅ ICON ASSOCIATION */
  const categoryIcons = {
    "Customized Skincare": Sparkles,
    Face: Flower2,
    "Bath & Body": Bath,
    Hair: Scissors,
    Gifting: Gift,
    Men: User2,
    "About Us": Crown,
    Exclusives: Crown,
  };

  const cartData = JSON.parse(localStorage.getItem("cart"));
  const cartCount =
    cartData?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const linkStyle = ({ isActive }) =>
    `text-[11px] uppercase tracking-[0.22em] ${
      isActive ? "text-[#C8A96A]" : "text-black"
    }`;

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#FAF9F6]/90 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-5">

          <div className="relative h-16 md:h-20 flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4">
              <button
                className="md:hidden text-2xl"
                onClick={() => setOpen(true)}
              >
                ☰
              </button>

              <nav className="hidden md:flex items-center gap-10">
                {pages.map((p) => (
                  <NavLink key={p.path} to={p.path} className={linkStyle}>
                    {p.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* ✅ TRUE CENTER LOGO */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2"
            >
              <img
                src={logo}
                alt="Lumnica"
                className="h-11 md:h-16 w-auto"
              />
            </Link>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-5">
              <Link to="/cart" className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 min-w-[14px] h-[14px]
                    flex items-center justify-center rounded-full
                    bg-black text-white text-[9px]">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link to="/account">
                <User className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* CATEGORY LINE */}
          <div className="hidden md:flex justify-center gap-8 pb-3">
            {categories.map((c) => (
              <NavLink key={c.path} to={c.path} className={linkStyle}>
                {c.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER LEFT ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex">

          {/* Drawer */}
          <div className="w-[85%] max-w-[320px] bg-white h-full shadow-xl">

            <div className="p-5 border-b flex justify-end">
              <button onClick={() => setOpen(false)} className="text-2xl">
                ✕
              </button>
            </div>

            <div className="p-6 space-y-5">

              {/* Pages */}
              <div className="space-y-4 text-[14px]">
                {pages.map((p) => (
                  <Link
                    key={p.path}
                    to={p.path}
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>

              {/* Categories with Icons */}
              <div className="border-t pt-4 space-y-4">
                {categories.map((c) => {
                  const Icon = categoryIcons[c.label];

                  return (
                    <Link
                      key={c.path}
                      to={c.path}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 text-[13px]"
                    >
                      {Icon && <Icon size={16} strokeWidth={1.5} />}
                      <span>{c.label}</span>
                    </Link>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black/30"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}