// src/components/Footer.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MessageCircle, Leaf, Rabbit, ShieldCheck, Globe, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-[#1E2D2B] text-white">

      {/* ══════════════════════════════════════════
          TOP TRUST BADGE STRIP
      ══════════════════════════════════════════ */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              { icon: <Leaf size={14} strokeWidth={1.5} />,      label: "SLS & Paraben Free"     },
              { icon: <Rabbit size={14} strokeWidth={1.5} />,    label: "Vegan & Cruelty Free"   },
              { icon: <ShieldCheck size={14} strokeWidth={1.5} />, label: "GMP Certified"        },
              { icon: <Globe size={14} strokeWidth={1.5} />,     label: "Dermatologist Tested"   },
              { icon: <MapPin size={14} strokeWidth={1.5} />,    label: "Made in India"          },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2">
                <span className="text-[#C8A96A]">{b.icon}</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MAIN FOOTER GRID
      ══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12">

          {/* ── Brand + Newsletter ── */}
          <div className="col-span-2 lg:col-span-2 space-y-5">
            <Link to="/" className="block">
              <span className="text-4xl font-serif tracking-widest font-semibold text-white hover:text-[#C8A96A] transition">
                LUMNICA
              </span>
            </Link>

            <p className="text-[14px] leading-[1.85] text-white/50 max-w-xs">
              Ayurvedic luxury skincare crafted with sacred botanicals, modern science, and ancient ritual.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://instagram.com/lumnicaskincare"
                target="_blank"
                rel="noreferrer"
                aria-label="Lumnica on Instagram"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-[#C8A96A] hover:text-[#C8A96A] transition"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with Lumnica on WhatsApp"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-[#C8A96A] hover:text-[#C8A96A] transition"
              >
                <MessageCircle size={14} />
              </a>
              <a
                href="mailto:hello@lumnica.in"
                aria-label="Email Lumnica"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-[#C8A96A] hover:text-[#C8A96A] transition"
              >
                <Mail size={14} />
              </a>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="uppercase text-[10px] tracking-[0.35em] text-white/40 mb-3">
                Join our newsletter
              </p>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex border-b border-white/20 max-w-xs focus-within:border-[#C8A96A] transition">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="py-3 px-2 w-full bg-transparent outline-none text-sm text-white placeholder:text-white/25"
                  />
                  <button
                    type="submit"
                    className="text-[11px] uppercase tracking-wider text-[#C8A96A] hover:text-white transition whitespace-nowrap pl-3"
                  >
                    Join →
                  </button>
                </form>
              ) : (
                <p className="font-serif italic text-[#C8A96A] text-sm">
                  Welcome to the circle ✦
                </p>
              )}
              <p className="text-[10px] text-white/20 mt-2 tracking-wide">
                10% off your first order. No spam.
              </p>
            </div>
          </div>

          {/* ── Shop ── */}
          <div>
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-[#C8A96A] mb-5 font-medium">Shop</h3>
            <ul className="space-y-3 text-[13px] text-white/55">
              <li><Link to="/products"   className="hover:text-white hover:text-[#C8A96A] transition">Shop All</Link></li>
              <li><Link to="/hair"       className="hover:text-[#C8A96A] transition">Hair Care</Link></li>
              <li><Link to="/face"       className="hover:text-[#C8A96A] transition">Face Care</Link></li>
              <li><Link to="/bath-body"  className="hover:text-[#C8A96A] transition">Bath & Body</Link></li>
              <li><Link to="/men"        className="hover:text-[#C8A96A] transition">For Men</Link></li>
              <li><Link to="/gifting"    className="hover:text-[#C8A96A] transition">Gifting</Link></li>
              <li><Link to="/exclusives" className="hover:text-[#C8A96A] transition">Exclusives</Link></li>
            </ul>
          </div>

          {/* ── Company ── */}
          <div>
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-[#C8A96A] mb-5 font-medium">Company</h3>
            <ul className="space-y-3 text-[13px] text-white/55">
              <li><Link to="/about"          className="hover:text-[#C8A96A] transition">Our Story</Link></li>
              <li><Link to="/ingredients"    className="hover:text-[#C8A96A] transition">Ingredients</Link></li>
              <li><Link to="/sustainability" className="hover:text-[#C8A96A] transition">Sustainability</Link></li>
              <li><Link to="/hospitality"    className="hover:text-[#C8A96A] transition">Hospitality B2B</Link></li>
              <li><Link to="/blogs"          className="hover:text-[#C8A96A] transition">Blog</Link></li>
              <li><Link to="/contact"        className="hover:text-[#C8A96A] transition">Contact Us</Link></li>
              <li><Link to="/faq"            className="hover:text-[#C8A96A] transition">FAQ</Link></li>
            </ul>
          </div>

          {/* ── Help & Contact ── */}
          <div>
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-[#C8A96A] mb-5 font-medium">Help</h3>
            <ul className="space-y-3 text-[13px] text-white/55 mb-8">
              <li><Link to="/shipping-policy" className="hover:text-[#C8A96A] transition">Shipping Policy</Link></li>
              <li><Link to="/returns"         className="hover:text-[#C8A96A] transition">Returns & Refunds</Link></li>
              <li><Link to="/privacy"         className="hover:text-[#C8A96A] transition">Privacy Policy</Link></li>
              <li><Link to="/privacy"         className="hover:text-[#C8A96A] transition">Terms of Service</Link></li>
              <li><Link to="/account"         className="hover:text-[#C8A96A] transition">My Account</Link></li>
              <li><Link to="/cart"            className="hover:text-[#C8A96A] transition">My Cart</Link></li>
            </ul>

            {/* Contact details */}
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-[#C8A96A] mb-4 font-medium">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@lumnica.in"
                className="flex items-center gap-2 text-[12px] text-white/45 hover:text-[#C8A96A] transition"
              >
                <Mail size={11} className="flex-shrink-0" />
                hello@lumnica.in
              </a>
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-2 text-[12px] text-white/45 hover:text-[#C8A96A] transition"
              >
                <Phone size={11} className="flex-shrink-0" />
                +91 XXXXX XXXXX
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[12px] text-white/45 hover:text-[#C8A96A] transition"
              >
                <MessageCircle size={11} className="flex-shrink-0" />
                WhatsApp Us
              </a>
              <div className="flex items-start gap-2 text-[12px] text-white/30">
                <MapPin size={11} className="flex-shrink-0 mt-0.5" />
                <span>India — Pan-India & International Shipping</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════
          PAYMENT BADGES
      ══════════════════════════════════════════ */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6">

            <p className="text-[10px] tracking-[0.3em] uppercase text-white/25">
              🔒 Secure Payments — SSL Encrypted
            </p>

            <div className="flex flex-wrap gap-3">
              {["UPI", "GPay", "PhonePe", "VISA", "Mastercard", "RuPay", "EMI", "COD"].map((method) => (
                <span
                  key={method}
                  className="border border-white/10 px-3 py-1.5 text-[10px] tracking-wide text-white/35 hover:border-white/25 hover:text-white/55 transition"
                >
                  {method}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CERTIFICATION BADGES
      ══════════════════════════════════════════ */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-wrap justify-center gap-4">
            {["GMP Certified", "Ayurvedic Formulation", "Cruelty Free Int'l", "IFRA Certified", "Made in India 🇮🇳"].map((cert) => (
              <span
                key={cert}
                className="text-[9px] tracking-[0.25em] uppercase text-white/25 flex items-center gap-1.5"
              >
                <span className="text-[#C8A96A] opacity-60">✦</span>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM BAR
      ══════════════════════════════════════════ */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-[11px] text-white/25 tracking-wide">
            © {currentYear} Lumnica Skincare — All Rights Reserved
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            {[
              { label: "Privacy Policy",   to: "/privacy"          },
              { label: "Terms of Service", to: "/privacy"          },
              { label: "Shipping Policy",  to: "/shipping-policy"  },
              { label: "Returns",          to: "/returns"          },
              { label: "Sitemap",          to: "/sitemap"          },
            ].map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-[10px] tracking-[0.2em] uppercase text-white/25 hover:text-white/60 transition"
              >
                {l.label}
              </Link>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}