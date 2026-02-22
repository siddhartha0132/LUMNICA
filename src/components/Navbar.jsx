import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import logo from "../assets/Logolumnica.png";
import { User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(() => {
    const token = localStorage.getItem("token");
    return !!token;
  });

  const navigate = useNavigate();

  const pages = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Philosophy" },
    { path: "/products", label: "Collection" },
    { path: "/contact", label: "Contact" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/login");
  };

  const accountPath = loggedIn ? "/account" : "/login";

  /* ---------- CART COUNT (NO LOGIC CHANGE) ---------- */
  const cartData = JSON.parse(localStorage.getItem("cart"));
  const cartCount =
    cartData?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top strip */}
      {/* <div className="bg-[#1A1A1A] text-[#D4AF37] text-[10px] tracking-[0.35em] text-center py-2 uppercase">
        We Deliver Across India & Internationally
      </div> */}

      {/* Navbar */}
      <div className="bg-[#FAF9F6]/95 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-4 h-20 flex items-center justify-between">

          {/* Mobile Menu */}
          <button className="md:hidden text-xl" onClick={() => setOpen(true)}>
            ☰
          </button>

         {/* Logo */}
<Link to="/" className="absolute left-1/2 -translate-x-1/2">
  <img src={logo} alt="Lumnica" className="h-18 w-auto" />
</Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.35em]">
            {pages.map((p) => (
              <NavLink key={p.path} to={p.path}>
                {p.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-6 text-[18px]">
            
            {/* Cart – Forest Essentials Style */}
            <Link to="/cart" className="relative group">
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 min-w-[14px] h-[14px] 
                  flex items-center justify-center rounded-full 
                  bg-[#1E2D2B] text-white text-[9px] tracking-wide">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link to={accountPath} className="tracking-wide">
  <User className="w-5 h-5 stroke-[1.25]" />
</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-[#FAF9F6] z-50 flex flex-col items-center justify-center space-y-10 uppercase tracking-[0.35em]">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-2xl"
          >
            ✕
          </button>

          {pages.map((p) => (
            <Link key={p.path} to={p.path} onClick={() => setOpen(false)}>
              {p.label}
            </Link>
          ))}

          {loggedIn && (
            <button
              onClick={() => {
                handleLogout();
                setOpen(false);
              }}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
