import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Star, Heart, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import axios from "axios";

import Product1 from "../../assets/PRODUCT1.png";
import Product2 from "../../assets/PRODUCT2.png";
import Product3 from "../../assets/PRODUCT3.png";
import Product4 from "../../assets/PRODUCT4.png";
import Product5 from "../../assets/PRODUCT5.png";
import prode from "./image.png";

/* ── your original mock data (kept as fallback) ── */
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Amrita Saar Body Wash",
    price: "149",
    image: prode,
    tag: "Best Seller",
    size: "200ml",
    rating: 4.8,
    concern: "Dryness",
    ingredients: ["Sandalwood", "Aloe Vera", "Rose Water"],
    description: "A luxurious Ayurvedic body wash that deeply cleanses while nourishing skin with sacred botanicals.",
  },
];

const API = "https://lumnica-backend.onrender.com/api";

const productImages = {
  "PRODUCT1.png": Product1,
  "PRODUCT2.png": Product2,
  "PRODUCT3.png": Product3,
  "PRODUCT4.png": Product4,
  "PRODUCT5.png": Product5,
};

/* ── filter data ── */
const SORT_OPTIONS = [
  { label: "Featured",          value: "featured"   },
  { label: "Price: Low → High", value: "price_asc"  },
  { label: "Price: High → Low", value: "price_desc" },
  { label: "Best Rated",        value: "rating"     },
];

const CONCERNS = ["All", "Dryness", "Brightening", "Sensitive Skin", "Anti-Ageing"];

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.215, 0.61, 0.355, 1] }}
  >
    {children}
  </motion.div>
);

const StarRow = ({ rating = 4.8 }) => (
  <div className="flex items-center justify-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.round(rating) ? "fill-[#C8A96A] text-[#C8A96A]" : "text-black/15"}`}
      />
    ))}
    <span className="text-[10px] text-black/40 ml-1">{rating}</span>
  </div>
);

export default function BathAndBody() {
  /* ── state ── */
  const [products, setProducts]         = useState(MOCK_PRODUCTS);
  const [loading, setLoading]           = useState(true);
  const [msg, setMsg]                   = useState("");
  const [sortBy, setSortBy]             = useState("featured");
  const [activeConcern, setActiveConcern] = useState("All");
  const [sortOpen, setSortOpen]         = useState(false);
  const [filtersOpen, setFiltersOpen]   = useState(false);
  const [wishlist, setWishlist]         = useState([]);

  const token = localStorage.getItem("token");

  /* ── fetch (tries API, falls back to mock) ── */
  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get(`${API}/products?category=bath-body`);
        const data = res.data.products;
        if (data && data.length > 0) setProducts(data);
      } catch {
        /* silently use mock data */
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  /* ── add to cart ── */
  const addToCart = async (product) => {
    try {
      if (product._id) {
        await axios.post(
          `${API}/cart/add`,
          { productId: product._id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      setMsg(`${product.name} added to cart ✦`);
      setTimeout(() => setMsg(""), 3000);
    } catch {
      setMsg("Please login to add to cart");
      setTimeout(() => setMsg(""), 3000);
    }
  };

  const toggleWishlist = (id) =>
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  /* ── filtered + sorted ── */
  const filtered = products
    .filter((p) => activeConcern === "All" || p.concern === activeConcern)
    .sort((a, b) => {
      if (sortBy === "price_asc")  return Number(a.price) - Number(b.price);
      if (sortBy === "price_desc") return Number(b.price) - Number(a.price);
      if (sortBy === "rating")     return (b.rating || 0) - (a.rating || 0);
      return 0;
    });

  /* ── loading ── */
  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center">
        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="font-serif italic text-2xl text-[#1E2D2B]/40"
        >
          Preparing your rituals…
        </motion.p>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-[#FAF9F6]">

      {/* ═══════════════════════════════════════
          TOAST
      ═══════════════════════════════════════ */}
      <AnimatePresence>
        {msg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#1E2D2B] text-[#C8A96A] px-8 py-4 text-[11px] tracking-widest uppercase shadow-lg"
          >
            {msg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════ */}
      <section className="bg-[#1E2D2B] py-20 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] tracking-[0.5em] uppercase text-[#C8A96A] mb-4"
        >
          Sacred Rituals
        </motion.p>
        {/* your original h1 — restyled */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl italic text-white mb-5 tracking-tight"
        >
          Bath & Body
        </motion.h1>
        {/* your original subtitle — restyled */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[12px] uppercase tracking-[0.25em] text-white/40 max-w-md mx-auto leading-relaxed"
        >
          Infuse your daily ritual with the essence of pure botanicals
          and ancient Ayurvedic wisdom.
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-16 h-[1px] bg-[#C8A96A] mx-auto mt-8"
        />
      </section>

      {/* ═══════════════════════════════════════
          FILTER BAR (your original structure upgraded)
      ═══════════════════════════════════════ */}
      <div className="sticky top-[64px] md:top-[88px] z-30 bg-white/95 backdrop-blur-md border-b border-black/6 shadow-sm">
        <div className="max-w-[1400px] mx-auto py-4 px-6 md:px-10 flex flex-wrap gap-4 justify-between items-center">

          {/* your original count */}
          <span className="text-[11px] uppercase tracking-widest text-black/40">
            {filtered.length} Product{filtered.length !== 1 ? "s" : ""}
          </span>

          <div className="flex items-center gap-4">
            {/* Concern filter */}
            <div className="hidden md:flex gap-2 flex-wrap">
              {CONCERNS.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveConcern(c)}
                  className={`px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase border rounded-full transition ${
                    activeConcern === c
                      ? "bg-[#C8A96A] text-white border-[#C8A96A]"
                      : "border-black/15 text-black/40 hover:border-[#C8A96A] hover:text-[#C8A96A]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="md:hidden flex items-center gap-2 border border-black/15 px-4 py-2 text-[11px] uppercase tracking-widest"
            >
              <SlidersHorizontal size={12} /> Filter
            </button>

            {/* Sort dropdown — your original "Sort By" */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 border border-black/15 px-5 py-2 text-[11px] uppercase tracking-widest hover:border-[#C8A96A] transition"
              >
                Sort By <ChevronDown size={11} className={`transition-transform ${sortOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="absolute right-0 top-full mt-2 bg-white border border-black/8 shadow-lg w-48 py-2 z-50"
                  >
                    {SORT_OPTIONS.map((o) => (
                      <button
                        key={o.value}
                        onClick={() => { setSortBy(o.value); setSortOpen(false); }}
                        className={`w-full text-left px-5 py-3 text-[11px] tracking-widest uppercase transition hover:bg-[#FAF9F6] ${
                          sortBy === o.value ? "text-[#C8A96A]" : "text-black/60"
                        }`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile concern pills */}
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-black/5 md:hidden"
            >
              <div className="flex gap-2 flex-wrap px-6 py-4">
                {CONCERNS.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setActiveConcern(c); setFiltersOpen(false); }}
                    className={`px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase border rounded-full transition ${
                      activeConcern === c
                        ? "bg-[#C8A96A] text-white border-[#C8A96A]"
                        : "border-black/15 text-black/40"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ═══════════════════════════════════════
          PRODUCT GRID (your original layout preserved)
      ═══════════════════════════════════════ */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">

        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <p className="font-serif italic text-3xl text-black/25 mb-4">No products found</p>
            <button
              onClick={() => setActiveConcern("All")}
              className="text-[11px] tracking-widest uppercase text-[#C8A96A] hover:underline"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          /* your original grid classes */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {filtered.map((product, i) => {
              const imgSrc = product.image
                ? (productImages[product.image] || product.image)
                : prode;
              const pid = product._id || product.id;
              const isWishlisted = wishlist.includes(pid);

              return (
                <motion.div
                  key={pid}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  /* your original class */
                  className="group cursor-pointer"
                >
                  {/* your original image container structure */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F3EBDD]">

                    {/* your original tag badge */}
                    {product.tag && (
                      <span className="absolute top-4 left-4 z-10 bg-[#1E2D2B] text-white text-[9px] uppercase tracking-widest px-3 py-1">
                        {product.tag}
                      </span>
                    )}

                    {/* Wishlist */}
                    <button
                      onClick={() => toggleWishlist(pid)}
                      className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 flex items-center justify-center hover:bg-white transition"
                    >
                      <Heart
                        size={14}
                        className={isWishlisted ? "fill-red-500 text-red-500" : "text-black/40"}
                      />
                    </button>

                    {/* Concern tag */}
                    {product.concern && (
                      <span className="absolute bottom-14 left-4 z-10 text-[9px] tracking-[0.3em] uppercase text-white/70">
                        {product.concern}
                      </span>
                    )}

                    <img
                      src={imgSrc}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* your original Quick Add hover button — restyled */}
                    <button
                      onClick={() => addToCart(product)}
                      className="absolute bottom-0 left-0 w-full bg-[#1E2D2B]/90 text-white py-4 text-[11px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#C8A96A]"
                    >
                      Quick Add +
                    </button>
                  </div>

                  {/* your original product info — center aligned */}
                  <div className="mt-6 text-center">

                    {/* your original star row */}
                    <div className="mb-2">
                      <StarRow rating={product.rating || 4.8} />
                    </div>

                    {/* your original name */}
                    <h3 className="font-serif text-lg text-[#2D2926] leading-tight group-hover:text-[#C8A96A] transition-colors px-4">
                      {product.name}
                    </h3>

                    {/* Key ingredients */}
                    {product.ingredients && (
                      <p className="text-[10px] text-black/30 tracking-wide mt-1.5 px-2">
                        {product.ingredients.join(" · ")}
                      </p>
                    )}

                    {/* your original size */}
                    <p className="text-[11px] text-gray-400 mt-2 tracking-widest uppercase">
                      {product.size}
                    </p>

                    {/* your original price */}
                    <p className="mt-3 font-serif text-[16px] text-gray-800 tracking-wider">
                      ₹{product.price}
                    </p>

                    {/* Add to cart button */}
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-4 w-full border border-[#1E2D2B]/20 py-3 text-[10px] tracking-[0.35em] uppercase hover:bg-[#1E2D2B] hover:text-white transition duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════
          BRAND PROMISE (your original section, restyled)
      ═══════════════════════════════════════ */}
      <div className="bg-[#1E2D2B] py-24 mt-10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              title: "Pure & Natural",
              desc: "Hand-pressed oils and steam-distilled floral waters.",
            },
            {
              title: "Ayurvedic Heritage",
              desc: "Traditional formulations passed down through generations.",
            },
            {
              title: "Cruelty Free",
              desc: "Responsibly sourced and never tested on animals.",
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="space-y-4 group">
                <div className="w-8 h-[1px] bg-[#C8A96A] mx-auto" />
                {/* your original italic serif titles */}
                <h4 className="font-serif italic text-xl text-white">{item.title}</h4>
                <p className="text-[12px] text-white/40 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </div>
  );
}