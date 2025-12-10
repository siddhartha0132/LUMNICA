// src/components/Footer.jsx

import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F6F4] text-[#1E3A34] border-t border-[#EBE8E4] py-16 md:py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

        {/* Brand + Newsletter */}
        <div className="col-span-2 lg:col-span-2 space-y-4">
          <Link to="/" className="text-3xl font-serif tracking-widest font-semibold text-[#1E3A34]">
            LUMNICA
          </Link>

          <p className="text-sm max-w-xs leading-relaxed text-[#1E3A34]/80">
            Timeless beauty, delivered. Join our community for exclusive insights and new collection launches.
          </p>

          {/* Newsletter Input */}
          <form className="flex mt-4 pt-2">
            <input
              type="email"
              placeholder="Email Address"
              className="py-3 px-4 w-2/3 border-b border-[#EBE8E4] bg-transparent outline-none placeholder:text-[#1E3A34]/50 text-sm focus:border-[#A68A6A]"
            />
            <button 
              type="submit"
              className="py-3 px-4 w-1/3 text-sm font-medium uppercase tracking-wider text-[#A68A6A] border-b border-[#A68A6A] hover:text-[#1E3A34] transition duration-300"
            >
              Join
            </button>
          </form>
        </div>

        {/* Shop */}
        <div className="space-y-4">
          <h3 className="text-lg font-serif mb-4 text-[#A68A6A]">Shop</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/products" className="hover:text-[#A68A6A] transition text-[#1E3A34]/80">Shop All</Link></li>
            <li><Link to="/products/serums" className="hover:text-[#A68A6A] transition text-[#1E3A34]/80">Serums</Link></li>
            <li><Link to="/products/creams" className="hover:text-[#A68A6A] transition text-[#1E3A34]/80">Creams & Oils</Link></li>
            <li><Link to="/best-sellers" className="hover:text-[#A68A6A] transition text-[#1E3A34]/80">Best Sellers</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h3 className="text-lg font-serif mb-4 text-[#A68A6A]">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-[#A68A6A] transition text-[#1E3A34]/80">Our Philosophy</Link></li>
            <li><Link to="/contact" className="hover:text-[#A68A6A] transition text-[#1E3A34]/80">Contact & FAQ</Link></li>
            <li><Link to="/returns" className="hover:text-[#A68A6A] transition text-[#1E3A34]/80">Shipping & Returns</Link></li>
            <li><Link to="/privacy" className="hover:text-[#A68A6A] transition text-[#1E3A34]/80">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social – Only Instagram, Facebook, YouTube */}
        <div className="space-y-4">
          <h3 className="text-lg font-serif mb-4 text-[#A68A6A]">Follow</h3>

          <ul className="space-y-4 text-2xl">

            {/* Instagram */}
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A68A6A] transition text-[#1E3A34]/80 flex items-center gap-3"
              >
                <span>📸</span> <span className="text-sm">Instagram</span>
              </a>
            </li>

            {/* Facebook */}
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A68A6A] transition text-[#1E3A34]/80 flex items-center gap-3"
              >
                <span>📘</span> <span className="text-sm">Facebook</span>
              </a>
            </li>

            {/* YouTube */}
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A68A6A] transition text-[#1E3A34]/80 flex items-center gap-3"
              >
                <span>▶️</span> <span className="text-sm">YouTube</span>
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-[#EBE8E4] text-center text-sm text-[#1E3A34]/60">
        &copy; {currentYear} LUMNICA Skincare. All Rights Reserved.
      </div>
    </footer>
  );
}
