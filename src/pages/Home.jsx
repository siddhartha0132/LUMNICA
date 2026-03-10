import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Leaf, Rabbit, MapPin, Globe, ShieldCheck, Droplets, Star, ChevronRight, Instagram, Mail, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Main from "../assets/Hero_Main_Low.png";
import product1 from "../assets/PRODUCT1.png";
import product2 from "../assets/PRODUCT2.png";
import product3 from "../assets/PRODUCT3.png";
import HeroVideo from "../assets/HeroBanner.mp4";
import Lumnicaest from "../assets/Lumnicaest.png";
import Disp from "../assets/Dispenser.MP4";

/* ─── helpers ─────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const StarRating = ({ rating = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={12}
        className={i < rating ? "fill-[#C9A24D] text-[#C9A24D]" : "text-black/20"}
      />
    ))}
  </div>
);

/* ─── data ────────────────────────────────────────────────── */
const PRODUCTS = [
  { img: product1, name: "Amrita Kesh", cat: "Hair Elixir", price: "₹199", concern: "Hair Fall", badge: "Best Seller" },
  { img: product2, name: "Amrita Snan", cat: "Body Ritual", price: "₹140", concern: "Dryness", badge: "New" },
  { img: product3, name: "Amrita Mridu", cat: "Hair Cleanser", price: "₹229", concern: "Scalp Care", badge: "Top Rated" },
];

const SKIN_CONCERNS = [
  { emoji: "✨", label: "Brightening", color: "#FFF3CD" },
  { emoji: "💧", label: "Hydration", color: "#D6EAF8" },
  { emoji: "🌿", label: "Acne Care", color: "#D5F5E3" },
  { emoji: "🛡️", label: "Anti-Ageing", color: "#FDEBD0" },
  { emoji: "🌸", label: "Sensitive Skin", color: "#FDEDEC" },
  { emoji: "☀️", label: "Sun Damage", color: "#FEF9E7" },
];

const TESTIMONIALS = [
  {
    name: "Simran Sethi",
    city: "Jaipur",
    rating: 5,
    text: "Lumnica feels less like skincare and more like a daily meditation. My skin has never felt calmer, softer, or more alive.",
  },
  {
    name: "Priya Nair",
    city: "Bangalore",
    rating: 5,
    text: "I've tried dozens of Ayurvedic brands. Lumnica is the only one that genuinely transformed my hair texture within weeks.",
  },
  {
    name: "Ananya Sharma",
    city: "Mumbai",
    rating: 5,
    text: "The ritual aspect is real — it's not just a product, it's an experience. My morning routine is now something I look forward to.",
  },
];

const INGREDIENTS = [
  { name: "Bhringraj", origin: "Eastern India", benefit: "Root-strengthening botanical revered for centuries of hair vitality" },
  { name: "Kumkumadi", origin: "Kerala", benefit: "Saffron-infused elixir for luminous, even-toned radiance" },
  { name: "Ashwagandha", origin: "Rajasthan", benefit: "Adaptogenic root that balances stressed skin and scalp" },
  { name: "Neem", origin: "Pan-India", benefit: "Antimicrobial purifier that clarifies and soothes inflammation" },
];

/* ─── component ───────────────────────────────────────────── */
export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  /* Show newsletter popup after 4 s */
  useEffect(() => {
    const t = setTimeout(() => setPopupOpen(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="bg-[#FAF9F6] text-black overflow-hidden">

      {/* ══════════════════════════════════════════════
          NEWSLETTER POPUP
      ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#FAF9F6] max-w-md w-full p-10 relative text-center"
            >
              <button
                onClick={() => setPopupOpen(false)}
                className="absolute top-4 right-4 text-black/40 hover:text-black transition"
              >
                <X size={18} />
              </button>

              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A24D] mb-3">
                Welcome Gift
              </p>
              <h3 className="font-serif text-3xl italic mb-3 text-black">
                10% Off Your <br /> First Ritual
              </h3>
              <p className="text-black/50 text-sm mb-7">
                Join the Lumnica circle and receive exclusive offers, ingredient stories & early access.
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-black/20 px-4 py-3 text-sm bg-white outline-none focus:border-[#C9A24D] transition"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white py-3 text-[11px] tracking-[0.4em] uppercase hover:bg-[#C9A24D] transition"
                  >
                    Claim My Discount
                  </button>
                </form>
              ) : (
                <p className="text-[#1F3D36] font-serif italic text-lg">
                  Welcome to the circle ✦
                </p>
              )}

              <button
                onClick={() => setPopupOpen(false)}
                className="mt-5 text-[10px] text-black/30 tracking-widest uppercase hover:text-black/60 transition"
              >
                No thanks
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={HeroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase text-[10px] md:text-[12px] tracking-[0.5em] mb-6 text-white/80"
          >
            Est. 2024 — Botanical Alchemy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-[50px] md:text-[110px] leading-[1] mb-6 text-white drop-shadow-lg"
          >
            Sacred <br />
            <span className="italic font-light">Skincare</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/70 text-sm md:text-base mb-10 max-w-md"
          >
            Ayurvedic wisdom meets modern luxury — crafted for your skin's unique story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <Link to="/products">
              <button className="bg-white text-black px-10 py-4 text-[11px] tracking-[0.4em] uppercase hover:bg-[#C9A24D] hover:text-white transition-all duration-500">
                Shop Now
              </button>
            </Link>
            <Link to="/about">
              <button className="border border-white/60 px-10 py-4 text-[11px] tracking-[0.4em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500">
                Our Story
              </button>
            </Link>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="w-[1px] h-8 bg-white/30"
            />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ANNOUNCEMENT BAR
      ══════════════════════════════════════════════ */}
      <div className="bg-[#1F3D36] text-white text-[10px] tracking-[0.4em] uppercase py-3 text-center overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {["Free Shipping on Orders Above ₹499", "✦ Vegan & Cruelty Free", "✦ Ayurvedic Formulations", "✦ Free Shipping on Orders Above ₹499", "✦ Vegan & Cruelty Free", "✦ Ayurvedic Formulations"].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          BRAND INTRO
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.p {...fadeUp()} className="text-[10px] tracking-[0.35em] uppercase text-[#C9A24D] mb-6">
            The Lumnica Philosophy
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-serif text-4xl md:text-6xl italic mb-8 text-black leading-tight">
            Where Ayurveda meets <br className="hidden md:block" /> Modern Luxury
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-black/60 text-[16px] md:text-[18px] leading-[2] font-light mb-8">
            Every Lumnica formula is crafted in small batches using ancient Ayurvedic wisdom blended with
            modern cosmetic science. We believe skincare is not a chore, but a sacred dialogue between you and nature.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="flex gap-10 justify-center">
            {[["200+", "Happy Customers"], ["12+", "Sacred Botanicals"], ["3", "Formulations"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-serif text-3xl text-[#C9A24D] mb-1">{num}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-black/50">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BEST SELLERS
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A24D] mb-3">Our Rituals</p>
          <h2 className="font-serif text-4xl md:text-6xl italic text-black">Seasonal Bestsellers</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {PRODUCTS.map((p, i) => (
            <Link key={i} to="/products">
              <motion.div
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] bg-[#F3EBDD] mb-6 overflow-hidden rounded-sm shadow-sm">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-[1.5s]"
                  />
                  <span className="absolute top-4 left-4 bg-[#1F3D36] text-white text-[9px] tracking-[0.3em] uppercase px-3 py-1">
                    {p.badge}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-black/0 group-hover:bg-black/20 transition duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                    <span className="bg-white text-black text-[10px] tracking-[0.3em] uppercase px-6 py-2">
                      Add to Cart
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl mb-1 text-black">{p.name}</h3>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A24D] mb-1">{p.cat}</p>
                    <p className="text-[11px] text-black/40 uppercase tracking-widest">For {p.concern}</p>
                  </div>
                  <p className="font-serif text-xl text-black/70">{p.price}</p>
                </div>
                <StarRating />
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/products">
            <button className="border border-black px-10 py-4 text-[11px] tracking-[0.4em] uppercase hover:bg-black hover:text-white transition">
              View Full Collection
            </button>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CUSTOM FORMULA
      ══════════════════════════════════════════════ */}
      <section className="w-full bg-[#1F3D36] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A24D] mb-5">Personalised Skincare</p>
              <h2 className="text-3xl md:text-4xl tracking-wide uppercase mb-6 text-white">
                The Perfect Formula. <br /> Uniquely Yours.
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-8 max-w-md">
                Discover customised skincare designed for your unique skin concerns.
                Each formulation is thoughtfully prepared to work in harmony with your skin.
              </p>
              <button className="border border-white/40 px-8 py-3 text-sm tracking-wide text-white hover:bg-white hover:text-black transition">
                Customise Now →
              </button>
            </div>
            <div className="relative w-full aspect-video bg-black overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                <source src={Disp} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SHOP BY SKIN CONCERN
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p {...fadeUp()} className="text-[10px] tracking-[0.4em] uppercase text-[#C9A24D] mb-3">
            Find Your Ritual
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-serif text-4xl md:text-5xl italic mb-14 text-black">
            Shop by Skin Concern
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SKIN_CONCERNS.map((c, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                whileHover={{ scale: 1.04 }}
                style={{ backgroundColor: c.color }}
                className="group cursor-pointer rounded-sm py-8 px-4 flex flex-col items-center gap-3 transition duration-300"
              >
                <span className="text-3xl">{c.emoji}</span>
                <span className="text-[11px] tracking-[0.3em] uppercase text-black/70 font-medium">{c.label}</span>
                <span className="text-[10px] text-black/30 group-hover:text-[#C9A24D] transition flex items-center gap-1">
                  Shop <ArrowRight size={10} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          INGREDIENT SPOTLIGHT
      ══════════════════════════════════════════════ */}
      <section className="bg-[#F3EBDD] py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A24D] mb-5">The Source</p>
              <h2 className="font-serif text-4xl md:text-5xl italic mb-6 text-black">Raw. Potent. Pure.</h2>
              <p className="text-black/60 text-[15px] leading-[1.9] mb-8">
                Our herbs are wild-harvested from sacred Indian soil and cold-pressed to preserve their
                vibrational potency. We honor the cycles of the moon to ensure every drop contains
                the maximum life-force of the plant.
              </p>
              <div className="h-[1px] w-20 bg-[#C9A24D]" />
            </div>
            <div className="relative h-[55vh] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={Lumnicaest}
                alt="Botanical Source"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
            </div>
          </div>

          {/* Ingredient grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {INGREDIENTS.map((ing, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="bg-white p-6 border border-[#E7DCC6]"
              >
                <p className="font-serif text-xl italic text-black mb-1">{ing.name}</p>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#C9A24D] mb-4">{ing.origin}</p>
                <p className="text-black/55 text-[13px] leading-relaxed">{ing.benefit}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/ingredients">
              <button className="border border-black/40 px-8 py-3 text-[11px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition">
                Our Ingredient Philosophy →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BUNDLES / KITS
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p {...fadeUp()} className="text-[10px] tracking-[0.4em] uppercase text-[#C9A24D] mb-3">
            Save More
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-serif text-4xl md:text-5xl italic mb-4 text-black">
            Curated Ritual Kits
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-black/50 text-sm mb-14 max-w-lg mx-auto">
            Thoughtfully bundled to address specific concerns at a better value.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "The Glow Kit", desc: "Brightening & even-tone ritual", saving: "Save ₹80", items: "3 products", bg: "#FFF3CD" },
              { name: "The Scalp Reset", desc: "Complete hair wellness ritual", saving: "Save ₹100", items: "3 products", bg: "#D5F5E3" },
              { name: "The Body Ritual", desc: "Head-to-toe nourishment bundle", saving: "Save ₹70", items: "2 products", bg: "#FDEBD0" },
            ].map((kit, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -6 }}
                style={{ backgroundColor: kit.bg }}
                className="p-8 text-left cursor-pointer group"
              >
                <p className="text-[9px] tracking-[0.35em] uppercase text-[#C9A24D] mb-3">{kit.items}</p>
                <h3 className="font-serif text-2xl italic text-black mb-2">{kit.name}</h3>
                <p className="text-black/50 text-sm mb-6">{kit.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#1F3D36] text-[11px] font-bold tracking-widest uppercase">{kit.saving}</span>
                  <ChevronRight size={16} className="text-black/30 group-hover:text-black transition" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HOSPITALITY / B2B TEASER
      ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1F3D36] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.p {...fadeUp()} className="text-[10px] tracking-[0.4em] uppercase text-[#C9A24D] mb-4">
            For Hotels & Spas
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-serif text-4xl md:text-5xl italic mb-6">
            Lumnica Hospitality Solutions
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-white/60 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Elevate your guests' experience with our premium Ayurvedic amenity range. From custom-dispensed
            body washes to individual guest kits — tailored for 5-star hospitality.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="flex gap-4 justify-center flex-wrap">
            <Link to="/hospitality">
              <button className="bg-[#C9A24D] text-white px-10 py-4 text-[11px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition">
                Explore B2B Solutions
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-white/30 px-10 py-4 text-[11px] tracking-[0.4em] uppercase hover:bg-white/10 transition">
                Get a Quote
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TRUST BADGES
      ══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-gradient-to-b from-[#F3EBDD] via-[#FAF9F6] to-[#F3EBDD] border-t border-b border-[#E7DCC6]">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.h2 {...fadeUp()} className="font-serif text-3xl md:text-4xl tracking-widest uppercase mb-4 text-[#1F3D36]">
            Thoughtful Commitments
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-[#1F3D36]/60 mb-16 max-w-2xl mx-auto text-[15px] italic">
            "Rooted in purity. Guided by nature. Created with intention."
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16">
            {[
              { icon: <Droplets />, title: "CLEAN FORMULATIONS", sub: "SLS & Paraben Free" },
              { icon: <Rabbit />, title: "ALWAYS VEGAN", sub: "Vegan & Cruelty Free" },
              { icon: <MapPin />, title: "MADE IN INDIA", sub: "Ayurvedic Origins" },
              { icon: <Leaf />, title: "SUSTAINABLE", sub: "Earth Conscious" },
              { icon: <ShieldCheck />, title: "IFRA CERTIFIED", sub: "Safe Fragrances" },
              { icon: <Globe />, title: "DERM TESTED", sub: "All Skin Types" },
            ].map((badge, idx) => (
              <motion.div {...fadeUp(idx * 0.07)} key={idx} className="flex flex-col items-center group">
                <div className="mb-5 text-[#C9A24D] group-hover:text-[#C65A2E] group-hover:scale-110 transition duration-500">
                  {React.cloneElement(badge.icon, { size: 38, strokeWidth: 1 })}
                </div>
                <h4 className="text-[12px] font-bold tracking-[0.3em] uppercase mb-2 text-[#1F3D36]">{badge.title}</h4>
                <p className="text-[11px] text-[#1F3D36]/60 tracking-wider">{badge.sub}</p>
                <div className="mt-5 w-12 h-[1px] bg-[#C9A24D] opacity-30 group-hover:opacity-100 group-hover:w-20 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <section className="bg-[#FAF9F6] py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p {...fadeUp()} className="text-[10px] tracking-[0.6em] uppercase text-black/40 mb-14">
            LUMNICA Stories
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="bg-white p-8 border border-[#E7DCC6] text-left"
              >
                <StarRating rating={t.rating} />
                <p className="font-serif italic text-[16px] leading-[1.8] text-black/70 mt-5 mb-6">
                  "{t.text}"
                </p>
                <p className="text-[11px] tracking-[0.4em] uppercase text-black/50">
                  {t.name} — {t.city}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          INSTAGRAM SOCIAL PROOF
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="flex items-center justify-center gap-3 mb-3">
            <Instagram size={18} className="text-[#C9A24D]" />
            <p className="text-[10px] tracking-[0.4em] uppercase text-black/50">Follow Our Rituals</p>
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} className="font-serif text-3xl md:text-4xl italic mb-10 text-black">
            @lumnicaskincare
          </motion.h2>

          {/* Placeholder grid — replace with real Instagram feed */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square bg-[#F3EBDD] overflow-hidden group cursor-pointer">
                <img
                  src={i % 3 === 0 ? product1 : i % 3 === 1 ? product2 : product3}
                  alt={`Instagram ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} className="mt-8">
            <a
              href="https://instagram.com/lumnicaskincare"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-black/20 px-8 py-3 text-[11px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition"
            >
              <Instagram size={13} /> Follow on Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          NEWSLETTER SECTION (inline)
      ══════════════════════════════════════════════ */}
      <section className="bg-[#F3EBDD] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.p {...fadeUp()} className="text-[10px] tracking-[0.4em] uppercase text-[#C9A24D] mb-4">
            Join the Circle
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-serif text-3xl md:text-4xl italic mb-4 text-black">
            Receive Sacred Rituals & Offers
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-black/50 text-sm mb-8">
            Subscribe for ingredient stories, Ayurvedic skincare rituals, and exclusive first-access offers.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="flex gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-black/20 px-5 py-4 text-sm bg-white outline-none focus:border-[#C9A24D] transition"
            />
            <button className="bg-black text-white px-6 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[#C9A24D] transition flex items-center gap-2">
              <Mail size={14} /> Subscribe
            </button>
          </motion.div>
          <p className="text-[10px] text-black/30 mt-4 tracking-wider">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MARQUEE CSS
      ══════════════════════════════════════════════ */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

    </div>
  );
}