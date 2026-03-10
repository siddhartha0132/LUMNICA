import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingBag,
  User,
  Sparkles,
  Flower2,
  Bath,
  Scissors,
  Gift,
  User2,
  Crown,
  Search,
  X,
  ChevronDown,
} from "lucide-react";
import logo from "../assets/Logolumnica.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const searchRef = useRef(null);
  const dropdownTimerRef = useRef(null);

  /* ── your original: body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  /* ── your original: scroll effect ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── focus search on open ── */
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  /* ── your original pages ── */
  const pages = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Philosophy" },
    { path: "/products", label: "Collection" },
    { path: "/contact", label: "Contact" },
  ];

  /* ── your original categories ── */
  const categories = [
    { path: "/customized", label: "Customized Skincare" },
    { path: "/face", label: "Face" },
    { path: "/bath-body", label: "Bath & Body" },
    { path: "/gifting", label: "Gifting" },
    { path: "/men", label: "Men" },
    { path: "/about", label: "About Us" },
    { path: "/exclusives", label: "Exclusives" },
  ];

  /* ── your original icon association ── */
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

  /* ── your original cart logic ── */
  const cartData = JSON.parse(localStorage.getItem("cart"));
  const cartCount =
    cartData?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  /* ── your original linkStyle ── */
  const linkStyle = ({ isActive }) =>
    `text-[11px] uppercase tracking-[0.22em] transition-colors duration-200 ${
      isActive ? "text-[#C8A96A]" : "text-black hover:text-[#C8A96A]"
    }`;

  /* ── dropdown hover with delay to prevent flicker ── */
  const handleMouseEnter = (label) => {
    clearTimeout(dropdownTimerRef.current);
    setActiveDropdown(label);
  };
  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      {/* ══════════════════════════════════════════
          SEARCH OVERLAY
      ══════════════════════════════════════════ */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-black/70 flex items-start justify-center pt-[15vh]">
          <div className="w-full max-w-2xl mx-4">
            <div className="flex items-center bg-white">
              <Search size={18} className="ml-5 text-black/40 shrink-0" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, ingredients, rituals…"
                className="flex-1 px-4 py-5 text-base outline-none bg-transparent placeholder-black/30"
              />
              <button
                onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                className="px-5 text-black/40 hover:text-black transition"
              >
                <X size={18} />
              </button>
            </div>
            <div className="mt-3 flex gap-2 flex-wrap">
              {["Hair Oil", "Face Cleanser", "Body Wash", "Glow Kit"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSearchQuery(s)}
                  className="bg-white/10 text-white text-[10px] tracking-widest uppercase px-4 py-2 border border-white/20 hover:bg-white/20 transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 w-full z-40 backdrop-blur-xl transition-all duration-300
        ${
          scrolled
            ? "bg-[#FAF9F6]/95 shadow-sm border-b border-black/5"
            : "bg-[#FAF9F6]/80 border-b border-black/5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5">

          {/* TOP ROW */}
          <div className="relative h-16 md:h-20 flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4">

              {/* Mobile hamburger — your original trigger, new styled button */}
              <button
                className="md:hidden flex flex-col gap-[5px] p-1"
                onClick={() => setOpen(true)}
              >
                <span className="w-6 h-[1.5px] bg-black block" />
                <span className="w-4 h-[1.5px] bg-black block" />
                <span className="w-6 h-[1.5px] bg-black block" />
              </button>

              {/* Desktop nav — your original pages */}
              <nav className="hidden md:flex items-center gap-10">
                {pages.map((p) => (
                  <NavLink key={p.path} to={p.path} className={linkStyle}>
                    {p.label}
                  </NavLink>
                ))}

                {/* Shop dropdown using your categories data */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("Shop")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="text-[11px] uppercase tracking-[0.22em] transition-colors duration-200 text-black hover:text-[#C8A96A] flex items-center gap-1">
                    Shop
                    <ChevronDown
                      size={11}
                      className={`transition-transform duration-200 ${
                        activeDropdown === "Shop" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === "Shop" && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white border border-black/8 shadow-xl min-w-[210px] py-3 z-50"
                      onMouseEnter={() => handleMouseEnter("Shop")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-black/8 rotate-45" />
                      {/* Your original categories array rendered here */}
                      {categories.map((c) => {
                        const Icon = categoryIcons[c.label];
                        return (
                          <Link
                            key={c.path}
                            to={c.path}
                            className="flex items-center gap-3 px-5 py-3 text-[11px] tracking-widest uppercase text-black/60 hover:text-black hover:bg-[#FAF9F6] transition"
                          >
                            {Icon && (
                              <Icon size={13} strokeWidth={1.5} className="text-[#C8A96A]" />
                            )}
                            {c.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* CENTER LOGO — your original */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <img
                src={logo}
                alt="Lumnica"
                className="h-12 md:h-[70px] w-auto transition-transform duration-300 hover:scale-[1.02]"
              />
            </Link>

            {/* RIGHT ICONS — your original + search added */}
            <div className="flex items-center gap-5">
              <button
                onClick={() => setSearchOpen(true)}
                className="hover:text-[#C8A96A] transition"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link to="/cart" className="relative hover:text-[#C8A96A] transition">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 min-w-[14px] h-[14px] flex items-center justify-center rounded-full bg-[#C8A96A] text-white text-[9px]">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link to="/account" className="hover:text-[#C8A96A] transition">
                <User className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* CATEGORY LINE — your original logic, refined active style */}
          <div className="hidden md:flex justify-center gap-8 pb-3 border-t border-black/5 pt-2">
            {categories.map((c) => (
              <NavLink
                key={c.path}
                to={c.path}
                className={({ isActive }) =>
                  `text-[10px] uppercase tracking-[0.25em] transition-colors duration-200 pb-1 border-b border-transparent ${
                    isActive
                      ? "text-[#C8A96A] border-[#C8A96A]"
                      : "text-black/50 hover:text-black"
                  }`
                }
              >
                {c.label}
              </NavLink>
            ))}
          </div>

        </div>
      </header>

      {/* ══════════════════════════════════════════
          MOBILE DRAWER — your original structure, new design
      ══════════════════════════════════════════ */}

      {/* Overlay — your original */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer — your original left drawer with smooth slide */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white z-[51] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="p-5 border-b border-black/5 flex items-center justify-between">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src={logo} alt="Lumnica" className="h-9 w-auto" />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-black/40 hover:text-black transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile search bar */}
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center border border-black/15 px-4 py-3 gap-2">
            <Search size={14} className="text-black/30" />
            <input
              type="text"
              placeholder="Search…"
              className="flex-1 text-[13px] outline-none bg-transparent placeholder-black/30"
            />
          </div>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1">

          {/* Your original pages */}
          <div className="space-y-4 text-[14px] pb-4 border-b border-black/5">
            {pages.map((p) => (
              <Link
                key={p.path}
                to={p.path}
                onClick={() => setOpen(false)}
                className="block text-[13px] uppercase tracking-widest text-black/70 hover:text-black transition"
              >
                {p.label}
              </Link>
            ))}
          </div>

          {/* Your original categories with icons — accordion */}
          <div className="pt-3">
            <button
              onClick={() =>
                setMobileExpanded(mobileExpanded === "cat" ? null : "cat")
              }
              className="w-full flex items-center justify-between py-2 text-[13px] uppercase tracking-widest text-black/70 hover:text-black transition"
            >
              Shop by Category
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  mobileExpanded === "cat" ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileExpanded === "cat" && (
              <div className="pt-3 border-t border-black/5 space-y-1">
                {/* Your original categories with icons logic */}
                {categories.map((c) => {
                  const Icon = categoryIcons[c.label];
                  return (
                    <Link
                      key={c.path}
                      to={c.path}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 text-[13px] py-2.5 text-black/50 hover:text-black transition"
                    >
                      {Icon && <Icon size={16} strokeWidth={1.5} className="text-[#C8A96A]" />}
                      <span>{c.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

        </div>

        {/* Drawer footer with account + cart */}
        <div className="px-5 py-5 border-t border-black/5 flex items-center justify-between">
          <Link
            to="/account"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-[12px] uppercase tracking-widest text-black/50 hover:text-black transition"
          >
            <User size={15} /> Account
          </Link>
          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-[12px] uppercase tracking-widest text-black/50 hover:text-black transition"
          >
            <ShoppingBag size={15} /> Cart
            {cartCount > 0 && (
              <span className="bg-[#C8A96A] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}