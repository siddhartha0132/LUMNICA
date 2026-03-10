import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, CheckCircle2, SlidersHorizontal, X, Search } from "lucide-react";

import Product1 from "../assets/PRODUCT1.png";
import Product2 from "../assets/PRODUCT2.png";
import Product3 from "../assets/PRODUCT3.png";
import Product4 from "../assets/PRODUCT4.png";
import Product5 from "../assets/PRODUCT5.png";

/* ── your original constants ── */
const API = "https://lumnica-backend.onrender.com/api";

const productImages = {
  "PRODUCT1.png": Product1,
  "PRODUCT2.png": Product2,
  "PRODUCT3.png": Product3,
  "PRODUCT4.png": Product4,
  "PRODUCT5.png": Product5,
};

/* ── filter data ── */
const CATEGORIES = ["All", "Hair Care", "Face Care", "Bath & Body", "Gifting"];
const CONCERNS   = ["All Concerns", "Hair Fall", "Dryness", "Acne", "Brightening", "Scalp Care", "Anti-Ageing"];
const SORT_OPTIONS = [
  { label: "Featured",    value: "featured" },
  { label: "Price: Low → High", value: "price_asc" },
  { label: "Price: High → Low", value: "price_desc" },
  { label: "Best Rated", value: "rating" },
];

/* ── static enrichment (key ingredients + concern per product name) ── */
const PRODUCT_META = {
  default: {
    concern: "All Skin Types",
    ingredients: ["Bhringraj", "Ashwagandha", "Neem"],
    badge: null,
  },
  "Amrita Kesh": {
    concern: "Hair Fall",
    ingredients: ["Bhringraj", "Amla", "Coconut Oil"],
    badge: "Best Seller",
    category: "Hair Care",
  },
  "Amrita Snan": {
    concern: "Dryness",
    ingredients: ["Sandalwood", "Rose Water", "Aloe Vera"],
    badge: "New",
    category: "Bath & Body",
  },
  "Amrita Mridu": {
    concern: "Scalp Care",
    ingredients: ["Reetha", "Shikakai", "Hibiscus"],
    badge: "Top Rated",
    category: "Hair Care",
  },
};

const getMeta = (name) => PRODUCT_META[name] || PRODUCT_META.default;

/* ── star rating ── */
const StarRating = ({ rating = 4.8, count = 42 }) => (
  <div className="flex items-center gap-2 text-[11px]">
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={11}
          className={i < Math.round(rating) ? "fill-[#C8A96A] text-[#C8A96A]" : "text-black/20"}
        />
      ))}
      <span className="font-semibold ml-1 text-black/70">{rating}</span>
    </div>
    <span className="text-black/30">·</span>
    <div className="flex items-center gap-1 text-[#1E2D2B]/50">
      <CheckCircle2 size={11} className="fill-[#1E2D2B]/20 text-[#1E2D2B]" />
      <span>{count} reviews</span>
    </div>
  </div>
);

export default function Products() {
  /* ── your original state ── */
  const [products, setProducts]   = useState([]);
  const [loading, setLoading]     = useState(true);
  const [msg, setMsg]             = useState("");
  const [error, setError]         = useState("");

  /* ── new filter state ── */
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeConcern, setActiveConcern]   = useState("All Concerns");
  const [sortBy, setSortBy]                 = useState("featured");
  const [searchQuery, setSearchQuery]       = useState("");
  const [filtersOpen, setFiltersOpen]       = useState(false);
  const [wishlist, setWishlist]             = useState([]);

  const token = localStorage.getItem("token");

  /* ── your original fetch ── */
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/products`);
      setProducts(res.data.products || []);
    } catch {
      setError("Unable to load products.");
    } finally {
      setLoading(false);
    }
  };

  /* ── your original addToCart ── */
  const addToCart = async (productId, productName) => {
    try {
      await axios.post(
        `${API}/cart/add`,
        { productId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMsg(`${productName} added to cart ✦`);
      setTimeout(() => setMsg(""), 3000);
    } catch {
      setError("Please login to add to cart");
      setTimeout(() => setError(""), 3000);
    }
  };

  const toggleWishlist = (id) =>
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  useEffect(() => { fetchProducts(); }, []);

  /* ── derived filtered + sorted list ── */
  const filtered = products
    .filter((p) => {
      const meta = getMeta(p.name);
      const matchCat     = activeCategory === "All" || meta.category === activeCategory;
      const matchConcern = activeConcern === "All Concerns" || meta.concern === activeConcern;
      const matchSearch  = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchConcern && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price_asc")  return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      return 0;
    });

  /* ── loading state ── */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <div className="text-center">
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="font-serif italic text-3xl text-[#1E2D2B]/40 mb-4"
          >
            Preparing your rituals…
          </motion.div>
          <div className="w-16 h-[1px] bg-[#C8A96A] mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#FAF9F6] min-h-screen">

      {/* ═══════════════════════════════════════
          PAGE HERO BANNER
      ═══════════════════════════════════════ */}
      <section className="bg-[#1E2D2B] pt-32 pb-16 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] tracking-[0.5em] uppercase text-[#C8A96A] mb-4"
        >
          Est. 2024 — Botanical Alchemy
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl italic text-white mb-4"
        >
          Our Collection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-sm max-w-md mx-auto"
        >
          Ayurvedic formulations crafted for real skin, real lives.
        </motion.p>
      </section>

      {/* ═══════════════════════════════════════
          TOAST MESSAGES
      ═══════════════════════════════════════ */}
      <AnimatePresence>
        {(msg || error) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 px-8 py-4 text-[12px] tracking-widest uppercase shadow-lg ${
              error ? "bg-red-600 text-white" : "bg-[#1E2D2B] text-[#C8A96A]"
            }`}
          >
            {msg || error}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">

        {/* ═══════════════════════════════════════
            FILTERS BAR
        ═══════════════════════════════════════ */}
        <div className="mb-10">

          {/* Search + Sort + Filter toggle */}
          <div className="flex flex-wrap gap-3 items-center justify-between mb-6">

            {/* Search */}
            <div className="flex items-center border border-black/15 bg-white px-4 py-2.5 gap-2 w-full md:w-64">
              <Search size={14} className="text-black/30" />
              <input
                type="text"
                placeholder="Search products…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-[13px] outline-none bg-transparent placeholder-black/30"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")}>
                  <X size={12} className="text-black/30 hover:text-black transition" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-black/15 bg-white px-4 py-2.5 text-[11px] tracking-widest uppercase outline-none cursor-pointer"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>

              {/* Filter toggle (mobile) */}
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="md:hidden flex items-center gap-2 border border-black/15 bg-white px-4 py-2.5 text-[11px] tracking-widest uppercase"
              >
                <SlidersHorizontal size={13} /> Filters
              </button>
            </div>
          </div>

          {/* Category pills */}
          <div className="flex gap-2 flex-wrap mb-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-[10px] tracking-[0.3em] uppercase transition border ${
                  activeCategory === cat
                    ? "bg-[#1E2D2B] text-white border-[#1E2D2B]"
                    : "bg-white text-black/50 border-black/15 hover:border-black/40 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Concern pills — hidden on mobile unless filtersOpen */}
          <div className={`flex gap-2 flex-wrap ${filtersOpen ? "flex" : "hidden md:flex"}`}>
            {CONCERNS.map((c) => (
              <button
                key={c}
                onClick={() => setActiveConcern(c)}
                className={`px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase transition border rounded-full ${
                  activeConcern === c
                    ? "bg-[#C8A96A] text-white border-[#C8A96A]"
                    : "bg-transparent text-black/40 border-black/15 hover:border-[#C8A96A] hover:text-[#C8A96A]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-[11px] text-black/30 tracking-widest uppercase mt-5">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* ═══════════════════════════════════════
            PRODUCT GRID
        ═══════════════════════════════════════ */}
        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <p className="font-serif italic text-3xl text-black/30 mb-4">No products found</p>
            <button
              onClick={() => { setActiveCategory("All"); setActiveConcern("All Concerns"); setSearchQuery(""); }}
              className="text-[11px] tracking-widest uppercase text-[#C8A96A] hover:underline"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
            {filtered.map((p, i) => {
              const meta = getMeta(p.name);
              const isWishlisted = wishlist.includes(p._id);

              return (
                <motion.div
                  key={p._id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] bg-[#F3EBDD] overflow-hidden mb-5">

                    {/* Badge */}
                    {meta.badge && (
                      <span className="absolute top-3 left-3 z-10 bg-[#1E2D2B] text-white text-[9px] tracking-[0.3em] uppercase px-3 py-1">
                        {meta.badge}
                      </span>
                    )}

                    {/* Wishlist */}
                    <button
                      onClick={() => toggleWishlist(p._id)}
                      className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 flex items-center justify-center hover:bg-white transition"
                    >
                      <Heart
                        size={14}
                        className={isWishlisted ? "fill-red-500 text-red-500" : "text-black/40"}
                      />
                    </button>

                    {/* Out of stock overlay */}
                    {p.stock === 0 && (
                      <div className="absolute inset-0 bg-white/60 z-10 flex items-center justify-center">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-black/40">Out of Stock</span>
                      </div>
                    )}

                    <img
                      src={productImages[p.image] || Product1}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-108"
                    />

                    {/* Quick add overlay on hover */}
                    {p.stock > 0 && (
                      <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                        <button
                          onClick={() => addToCart(p._id, p.name)}
                          className="w-full bg-[#1E2D2B] text-white py-3 text-[10px] tracking-[0.4em] uppercase hover:bg-[#C8A96A] transition"
                        >
                          Quick Add
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col px-1 flex-1">

                    {/* Concern tag */}
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#C8A96A] mb-2">
                      {meta.concern}
                    </span>

                    {/* Name */}
                    <h3 className="font-serif text-lg md:text-xl mb-1 text-[#1E2D2B]">
                      {p.name}
                    </h3>

                    {/* Key ingredients */}
                    <p className="text-[10px] text-black/35 tracking-wide mb-3">
                      {meta.ingredients.join(" · ")}
                    </p>

                    {/* Rating */}
                    <div className="mb-4">
                      <StarRating />
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-serif text-xl text-[#1E2D2B]">
                        ₹{p.price}
                      </span>

                      {p.stock === 0 ? (
                        <span className="text-[10px] tracking-widest uppercase text-black/30">
                          Sold Out
                        </span>
                      ) : (
                        <button
                          onClick={() => addToCart(p._id, p.name)}
                          className="bg-[#1E2D2B] text-white px-5 py-2.5 text-[10px] tracking-[0.3em] uppercase hover:bg-[#C8A96A] transition"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>

      {/* ═══════════════════════════════════════
          BOTTOM TRUST BAR
      ═══════════════════════════════════════ */}
      <div className="border-t border-black/8 bg-white mt-20 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          {[
            "Free Shipping Above ₹499",
            "Vegan & Cruelty Free",
            "Easy Returns",
            "Secure Payments",
          ].map((t) => (
            <span key={t} className="text-[10px] tracking-[0.35em] uppercase text-black/40">
              ✦ {t}
            </span>
          ))}
        </div>
      </div>

    </main>
  );
}