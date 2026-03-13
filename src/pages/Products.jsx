import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, CheckCircle2, X, Search, ChevronDown, ChevronUp } from "lucide-react";

import Product1 from "../assets/PRODUCT1.png";
import Product2 from "../assets/PRODUCT2.png";
import Product3 from "../assets/PRODUCT3.png";
import Product4 from "../assets/PRODUCT4.png";
import Product5 from "../assets/PRODUCT5.png";

const API = "https://lumnica-backend.onrender.com/api";

const productImages = {
  "PRODUCT1.png": Product1,
  "PRODUCT2.png": Product2,
  "PRODUCT3.png": Product3,
  "PRODUCT4.png": Product4,
  "PRODUCT5.png": Product5,
};

/* ─── Only categories that actually exist across 5 products ─── */
const CATEGORIES = ["All", "Hair Care", "Bath & Body"];

/* ─── Only concerns that map to real products ─── */
const CONCERNS = ["All Concerns", "Hair Fall", "Scalp Care", "Dryness"];

const SORT_OPTIONS = [
  { label: "Featured",          value: "featured"   },
  { label: "Price: Low → High", value: "price_asc"  },
  { label: "Price: High → Low", value: "price_desc" },
  { label: "Best Rated",        value: "rating"     },
];

/* ─── Rich metadata for all 5 products ─── */
const PRODUCT_META = {
  "Amrita Kesh": {
    concern:     "Hair Fall",
    category:    "Hair Care",
    badge:       "Best Seller",
    ingredients: ["Bhringraj", "Amla", "Coconut Oil"],
    benefits:    ["Reduces hair fall", "Strengthens roots", "Nourishes scalp"],
    skinType:    "All hair types — especially thin or fall-prone hair",
    howToUse:    "Apply 4–6 drops to scalp, massage gently. Leave for 30 mins or overnight. Wash with Amrita Mridu.",
    description: "A deeply nourishing hair elixir rooted in classical Ayurvedic tradition. Bhringraj — revered as the king of herbs for hair — works with Amla's Vitamin C richness to strengthen follicles from root to tip.",
    rating:      4.9,
    reviews:     58,
  },
  "Amrita Snan": {
    concern:     "Dryness",
    category:    "Bath & Body",
    badge:       "New",
    ingredients: ["Sandalwood", "Rose Water", "Aloe Vera"],
    benefits:    ["Deep moisturisation", "Soothes dry skin", "Calming fragrance"],
    skinType:    "All skin types — especially dry and sensitive skin",
    howToUse:    "Apply to damp skin during bathing. Lather gently and rinse. Use daily for best results.",
    description: "A luxurious body ritual inspired by ancient Snan ceremonies. Sandalwood calms the nervous system while Rose Water hydrates and Aloe Vera seals in moisture for silky, nourished skin.",
    rating:      4.7,
    reviews:     34,
  },
  "Amrita Mridu": {
    concern:     "Scalp Care",
    category:    "Hair Care",
    badge:       "Top Rated",
    ingredients: ["Reetha", "Shikakai", "Hibiscus"],
    benefits:    ["Gentle cleansing", "Balances scalp oil", "Adds natural shine"],
    skinType:    "All hair types — especially oily or flaky scalp",
    howToUse:    "Wet hair thoroughly. Apply and lather from roots. Rinse well. Use 2–3 times per week.",
    description: "A gentle, soap-free hair cleanser that draws from the ancient trio — Reetha, Shikakai, and Hibiscus — to cleanse the scalp without stripping its natural oils or disrupting the hair's pH balance.",
    rating:      4.8,
    reviews:     42,
  },
  "Amrita Tej": {
    concern:     "Hair Fall",
    category:    "Hair Care",
    badge:       null,
    ingredients: ["Kumkumadi", "Saffron", "Turmeric"],
    benefits:    ["Brightens scalp skin", "Reduces dandruff", "Promotes thickness"],
    skinType:    "Normal to dry hair — best for lifeless, dull hair",
    howToUse:    "Apply 2–3 drops to scalp. Massage in circular motions. Leave for 20 mins before washing.",
    description: "Inspired by the legendary Kumkumadi formulation, Amrita Tej brings the golden radiance ritual to your hair care. Saffron and turmeric work together to revive dull, lifeless strands.",
    rating:      4.6,
    reviews:     21,
  },
  "Amrita Tvacha": {
    concern:     "Dryness",
    category:    "Bath & Body",
    badge:       null,
    ingredients: ["Ashwagandha", "Vetiver", "Jojoba Oil"],
    benefits:    ["Deep repair overnight", "Anti-stress botanicals", "Softens rough skin"],
    skinType:    "Dry, stressed, or mature skin",
    howToUse:    "Apply generously after bathing. Massage in upward strokes. Best used before sleep.",
    description: "A calming body ritual for skin that carries the weight of daily stress. Ashwagandha's adaptogenic properties work with Vetiver's grounding scent to restore balance and deep nourishment overnight.",
    rating:      4.5,
    reviews:     17,
  },
};

const getMeta = (name) =>
  PRODUCT_META[name] || {
    concern:     "All Skin Types",
    category:    "Bath & Body",
    badge:       null,
    ingredients: ["Bhringraj", "Ashwagandha", "Neem"],
    benefits:    ["Nourishes skin", "Ayurvedic formula", "Natural ingredients"],
    skinType:    "All skin types",
    howToUse:    "Apply as directed on packaging.",
    description: "An Ayurvedic formulation crafted for your skin's unique story.",
    rating:      4.5,
    reviews:     10,
  };

/* ─── Star Rating ─── */
const StarRating = ({ rating = 4.8, count = 42, small = false }) => (
  <div className={`flex items-center gap-2 ${small ? "text-[10px]" : "text-[11px]"}`}>
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={small ? 10 : 11}
          className={i < Math.round(rating) ? "fill-[#C8A96A] text-[#C8A96A]" : "text-black/20"}
        />
      ))}
      <span className="font-semibold ml-1 text-black/70">{rating}</span>
    </div>
    <span className="text-black/25">·</span>
    <div className="flex items-center gap-1 text-[#1E2D2B]/40">
      <CheckCircle2 size={small ? 10 : 11} className="fill-[#1E2D2B]/10 text-[#1E2D2B]" />
      <span>{count} reviews</span>
    </div>
  </div>
);

/* ─── Expandable product detail accordion ─── */
const Accordion = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-black/8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-3 text-[11px] tracking-[0.3em] uppercase text-black/60 hover:text-black transition"
      >
        {label}
        {open ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-[13px] text-black/55 leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Product Detail Modal ─── */
const ProductModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;
  const meta = getMeta(product.name);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[998] bg-black/70 flex items-center justify-center px-4 py-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#FAF9F6] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <X size={14} />
          </button>

          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="aspect-square bg-[#F3EBDD] overflow-hidden">
              <img
                src={productImages[product.image] || Product1}
                alt={`Lumnica ${product.name} — ${meta.concern} Ayurvedic formula`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-8 flex flex-col">
              {meta.badge && (
                <span className="inline-block bg-[#1E2D2B] text-white text-[9px] tracking-[0.3em] uppercase px-3 py-1 mb-4 w-fit">
                  {meta.badge}
                </span>
              )}
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#C8A96A] mb-2">{meta.concern}</p>
              <h2 className="font-serif text-3xl mb-2 text-[#1E2D2B]">{product.name}</h2>
              <div className="mb-4">
                <StarRating rating={meta.rating} count={meta.reviews} />
              </div>
              <p className="font-serif text-2xl text-[#1E2D2B] mb-4">₹{product.price}</p>
              <p className="text-[13px] text-black/55 leading-relaxed mb-5">{meta.description}</p>

              {/* Benefits */}
              <div className="mb-5">
                {meta.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] flex-shrink-0" />
                    <span className="text-[12px] text-black/65">{b}</span>
                  </div>
                ))}
              </div>

              {/* Skin type */}
              <p className="text-[10px] tracking-wide text-black/40 mb-6">
                <span className="uppercase tracking-[0.3em]">Best for:</span> {meta.skinType}
              </p>

              {/* Accordions */}
              <Accordion label="Key Ingredients">
                <div className="flex flex-wrap gap-2 pt-1">
                  {meta.ingredients.map((ing) => (
                    <span key={ing} className="border border-[#C8A96A]/40 px-3 py-1 text-[11px] text-[#1E2D2B]">
                      {ing}
                    </span>
                  ))}
                </div>
              </Accordion>
              <Accordion label="How to Use">
                <p>{meta.howToUse}</p>
              </Accordion>

              {/* CTA */}
              <button
                onClick={() => { onAddToCart(product._id, product.name); onClose(); }}
                className="mt-6 w-full bg-[#1E2D2B] text-white py-4 text-[11px] tracking-[0.4em] uppercase hover:bg-[#C8A96A] transition"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Customer reviews stub */}
          <div className="border-t border-black/8 p-8">
            <h3 className="font-serif text-xl mb-6 text-[#1E2D2B]">Customer Reviews</h3>
            <div className="space-y-5">
              {[
                { name: "Priya R.", city: "Mumbai", text: "Absolutely transformed my hair — noticed a difference within two weeks.", rating: 5 },
                { name: "Kavitha M.", city: "Chennai", text: "The scent alone is worth it. Pure, natural, and lasts all day.", rating: 5 },
              ].map((r, i) => (
                <div key={i} className="border-b border-black/5 pb-5">
                  <StarRating rating={r.rating} count={null} small />
                  <p className="font-serif italic text-[14px] text-black/65 mt-2 mb-1">"{r.text}"</p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-black/30">{r.name} — {r.city}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function Products() {
  const [products, setProducts]     = useState([]);
  const [loading, setLoading]       = useState(true);
  const [msg, setMsg]               = useState("");
  const [error, setError]           = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeConcern, setActiveConcern]   = useState("All Concerns");
  const [sortBy, setSortBy]                 = useState("featured");
  const [searchQuery, setSearchQuery]       = useState("");
  const [wishlist, setWishlist]             = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const token = localStorage.getItem("token");

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

  const addToCart = async (productId, productName) => {
    try {
      await axios.post(
        `${API}/cart/add`,
        { productId },
        { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } }
      );
      setMsg(`${productName} added to cart ✦`);
      setTimeout(() => setMsg(""), 3000);
    } catch {
      setError("Please login to add to cart");
      setTimeout(() => setError(""), 3000);
    }
  };

  const toggleWishlist = (id) =>
    setWishlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  useEffect(() => { fetchProducts(); }, []);

  /* ─── Filtering — uses actual 5-product categories only ─── */
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
      if (sortBy === "rating")     return getMeta(b.name).rating - getMeta(a.name).rating;
      return 0;
    });

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

      {/* ─── SEO ─── */}
      <Helmet>
        <title>Shop Ayurvedic Skincare & Hair Care — Lumnica Collection</title>
        <meta
          name="description"
          content="Shop Lumnica's complete collection of natural Ayurvedic skincare and hair care products. Amrita Kesh hair elixir, Amrita Snan body ritual, Amrita Mridu hair cleanser and more. Vegan, cruelty-free, GMP certified."
        />
        <meta name="keywords" content="buy Ayurvedic skincare India, natural hair oil online, Bhringraj hair oil, Kumkumadi serum, vegan body wash India, Lumnica products" />
        <link rel="canonical" href="https://lumnica.in/products" />
      </Helmet>

      {/* ─── Product Detail Modal ─── */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {/* ─── Toast ─── */}
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

      {/* ─── Hero ─── */}
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
          Ayurvedic formulations crafted for real skin, real lives — small batch, maximum potency.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">

        {/* ─── Filters ─── */}
        <div className="mb-10">

          {/* Search + Sort row */}
          <div className="flex flex-wrap gap-3 items-center justify-between mb-6">
            <div className="flex items-center border border-black/15 bg-white px-4 py-2.5 gap-2 w-full md:w-64">
              <Search size={14} className="text-black/30 flex-shrink-0" />
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

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-black/15 bg-white px-4 py-2.5 text-[11px] tracking-widest uppercase outline-none cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Category tabs — only 3 real categories */}
          <div className="flex gap-2 flex-wrap mb-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setActiveConcern("All Concerns"); }}
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

          {/* Concern pills — only shows concerns relevant to active category */}
          <div className="flex gap-2 flex-wrap">
            {CONCERNS
              .filter((c) => {
                if (c === "All Concerns") return true;
                if (activeCategory === "Hair Care") return ["Hair Fall", "Scalp Care"].includes(c);
                if (activeCategory === "Bath & Body") return ["Dryness"].includes(c);
                return true;
              })
              .map((c) => (
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

          <p className="text-[11px] text-black/30 tracking-widest uppercase mt-5">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* ─── Product Grid ─── */}
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
                  <div
                    className="relative aspect-[3/4] bg-[#F3EBDD] overflow-hidden mb-5 cursor-pointer"
                    onClick={() => setSelectedProduct(p)}
                  >
                    {meta.badge && (
                      <span className="absolute top-3 left-3 z-10 bg-[#1E2D2B] text-white text-[9px] tracking-[0.3em] uppercase px-3 py-1">
                        {meta.badge}
                      </span>
                    )}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleWishlist(p._id); }}
                      className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 flex items-center justify-center hover:bg-white transition"
                      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart
                        size={14}
                        className={isWishlisted ? "fill-red-500 text-red-500" : "text-black/40"}
                      />
                    </button>

                    {p.stock === 0 && (
                      <div className="absolute inset-0 bg-white/60 z-10 flex items-center justify-center">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-black/40">Out of Stock</span>
                      </div>
                    )}

                    <img
                      src={productImages[p.image] || Product1}
                      alt={`Lumnica ${p.name} — Ayurvedic ${meta.concern} formula`}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />

                    {/* View details overlay */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                      <div className="w-full bg-white/90 text-[#1E2D2B] py-2.5 text-[10px] tracking-[0.3em] uppercase text-center">
                        View Details
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col px-1 flex-1">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#C8A96A] mb-2">
                      {meta.concern}
                    </span>
                    <h2 className="font-serif text-lg md:text-xl mb-1 text-[#1E2D2B]">
                      {p.name}
                    </h2>
                    <p className="text-[10px] text-black/35 tracking-wide mb-3">
                      {meta.ingredients.join(" · ")}
                    </p>
                    <div className="mb-4">
                      <StarRating rating={meta.rating} count={meta.reviews} />
                    </div>

                    {/* Price + Add to Cart — always visible */}
                    <div className="flex items-center justify-between mt-auto gap-3">
                      <span className="font-serif text-xl text-[#1E2D2B] flex-shrink-0">
                        ₹{p.price}
                      </span>
                      {p.stock === 0 ? (
                        <span className="text-[10px] tracking-widest uppercase text-black/30">Sold Out</span>
                      ) : (
                        <button
                          onClick={() => addToCart(p._id, p.name)}
                          className="bg-[#1E2D2B] text-white px-4 py-2.5 text-[10px] tracking-[0.25em] uppercase hover:bg-[#C8A96A] transition flex-shrink-0"
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

        {/* ─── Related / You May Also Like (shown when filtered) ─── */}
        {activeCategory !== "All" && filtered.length > 0 && (
          <div className="mt-24 pt-16 border-t border-black/8">
            <p className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-3">You May Also Like</p>
            <h3 className="font-serif text-2xl italic text-[#1E2D2B] mb-10">
              More from {activeCategory === "Hair Care" ? "Bath & Body" : "Hair Care"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8">
              {products
                .filter((p) => getMeta(p.name).category !== activeCategory)
                .slice(0, 3)
                .map((p, i) => {
                  const meta = getMeta(p.name);
                  return (
                    <motion.div
                      key={p._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedProduct(p)}
                    >
                      <div className="relative aspect-[3/4] bg-[#F3EBDD] overflow-hidden mb-4">
                        <img
                          src={productImages[p.image] || Product1}
                          alt={`Lumnica ${p.name}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />
                      </div>
                      <p className="text-[9px] tracking-[0.3em] uppercase text-[#C8A96A] mb-1">{meta.concern}</p>
                      <h4 className="font-serif text-lg text-[#1E2D2B] mb-1">{p.name}</h4>
                      <p className="font-serif text-base text-black/50">₹{p.price}</p>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        )}
      </div>

      {/* ─── Bottom Trust Bar ─── */}
      <div className="border-t border-black/8 bg-white mt-20 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          {[
            "Free Shipping Above ₹499",
            "Vegan & Cruelty Free",
            "15-Day Easy Returns",
            "Secure Payments",
            "GMP Certified",
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