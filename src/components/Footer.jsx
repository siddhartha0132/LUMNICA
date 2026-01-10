// src/components/Footer.jsx

import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF6EF] text-[#1E3A34] border-t border-[#E8E2DA] pt-20 pb-12 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12">

        {/* Brand + Newsletter */}
        <div className="col-span-2 lg:col-span-2 space-y-4">
          <Link
            to="/"
            className="text-4xl font-serif tracking-widest font-semibold text-[#1E3A34]"
          >
            LUMNICA
          </Link>

          <p className="text-sm max-w-sm leading-relaxed text-[#1E3A34]/80">
            Ayurvedic luxury skincare crafted with botanicals, science and ritual.
          </p>

          {/* Newsletter */}
          <div className="mt-3">
            <p className="uppercase text-[10px] tracking-[0.3em] text-[#1E3A34]/60 mb-2">
              Join our newsletter
            </p>

            <form className="flex border-b border-[#CDBBA5] max-w-sm">
              <input
                type="email"
                placeholder="Email Address"
                className="py-3 px-2 w-full bg-transparent outline-none text-sm placeholder:text-[#1E3A34]/50"
              />
              <button
                type="submit"
                className="text-sm uppercase tracking-wider text-[#A68A6A] hover:text-[#1E3A34] transition"
              >
                Join →
              </button>
            </form>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-serif mb-4 text-[#A68A6A]">Shop</h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/products" className="hover:text-[#A68A6A]">Shop All</Link></li>
            <li><Link to="/products/serums" className="hover:text-[#A68A6A]">Serums</Link></li>
            <li><Link to="/products/creams" className="hover:text-[#A68A6A]">Creams & Oils</Link></li>
            <li><Link to="/best-sellers" className="hover:text-[#A68A6A]">Best Sellers</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-serif mb-4 text-[#A68A6A]">Company</h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-[#A68A6A]">Our Philosophy</Link></li>
            <li><Link to="/contact" className="hover:text-[#A68A6A]">Contact & FAQ</Link></li>
            <li><Link to="/returns" className="hover:text-[#A68A6A]">Shipping & Returns</Link></li>
            <li><Link to="/privacy" className="hover:text-[#A68A6A]">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto mt-16 border-t border-[#E8E2DA] pt-8 text-center">

        <p className="uppercase text-[10px] tracking-[0.3em] text-[#1E3A34]/60 mb-2">
          Made with care in India 🇮🇳
        </p>

        <p className="text-sm text-[#1E3A34]/70">
          &copy; {currentYear} Lumnica Skincare — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
