import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Rabbit, MapPin, Globe, ShieldCheck, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import Main from "../assets/Hero_Main_Low.png"; 
import product1 from "../assets/PRODUCT1.png"; 
import product2 from "../assets/PRODUCT2.png"; 
import product3 from "../assets/PRODUCT3.png";
import HeroVideo from "../assets/HeroBanner.mp4";
import Lumnicaest from "../assets/Lumnicaest.png"
export default function Home() {
  return (
    <div className="bg-[#FAF9F6] text-black overflow-hidden">
      
      {/* ===== HERO SECTION (VIDEO ONLY) ===== */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={HeroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay - Prevents clashing and makes text pop */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Hero Content - Higher Z-index to stay on top */}
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
            className="font-serif text-[50px] md:text-[110px] leading-[1] mb-12 text-white drop-shadow-lg"
          >
            Sacred <br />
            <span className="italic font-light">Skincare</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link to="/products">
              <button className="border border-white/60 px-14 py-5 text-[10px] tracking-[0.4em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
                Explore Rituals
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== BRAND STORY ===== */}
      <section className="bg-white py-36 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A24D] mb-8">
            The Lumnica Philosophy
          </p>
          <h2 className="font-serif text-4xl md:text-6xl italic mb-10 text-black leading-tight">
            Where Ayurveda meets modern Luxury – <br className="hidden md:block"/> Beyond Luxury
          </h2>
          <p className="text-black/60 text-[16px] md:text-[18px] leading-[2] font-light">
            Every Lumnica formula is crafted in small batches using ancient Ayurvedic
            wisdom blended with modern cosmetic science. We believe skincare is not a 
            chore, but a sacred dialogue between you and nature.
          </p>
        </div>
      </section>

      {/* ===== IMAGE + STORY ===== */}
      <section className="bg-[#FAF9F6] py-28 px-6">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-15 items-center">
          <div className="order-2 md:order-1">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A24D] mb-5">
              The Source
            </p>
            <h2 className="font-serif text-3xl md:text-5xl italic mb-6 text-black">
              Raw. Potent. Pure.
            </h2>
            <p className="text-black/60 text-[15px] leading-[1.9] mb-8">
              Our herbs are wild-harvested from sacred Indian soil and cold-pressed
              to preserve their vibrational potency. We honor the cycles of the moon
              to ensure every drop contains the maximum life-force of the plant.
            </p>
            <div className="h-[1px] w-20 bg-[#C9A24D]" />
          </div>

          <div className="relative h-[60vh] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
            <img src={Lumnicaest} alt="Botanical Source" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
          </div>
        </div>
      </section>

      {/* ===== COLLECTION ===== */}
      <section className="py-29 px-6 max-w-[1400px] mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-6xl italic mb-4 text-black">
          Seasonal Rituals
        </h2>
        <p className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-20">
          Curated botanical elixirs for the soul
        </p>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {[ 
            { img: product1, name: "Amrita Kesh", cat: "Hair Elixir", price: "₹199" },
            { img: product2, name: "Amrita Snan", cat: "Body Ritual", price: "₹140" },
            { img: product3, name: "Amrita Mridu", cat: "Hair Cleanser", price: "₹229" }
          ].map((p, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-[#F3EBDD] mb-8 overflow-hidden rounded-sm shadow-sm">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-[1.5s]" />
              </div>
              <h3 className="font-serif text-2xl mb-2 text-black">{p.name}</h3>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A24D] mb-2 font-bold">
                {p.cat}
              </p>
              <p className="italic text-[18px] text-black/70 font-light">{p.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#F3EBDD] via-[#FAF9F6] to-[#F3EBDD] border-t border-b border-[#E7DCC6]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl tracking-widest uppercase mb-4 text-[#1F3D36]">
            Thoughtful Commitments
          </h2>
          <p className="text-[#1F3D36]/60 mb-20 max-w-2xl mx-auto text-[15px] italic">
            "Rooted in purity. Guided by nature. Created with intention."
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-24">
            {[
              { icon: <Droplets />, title: "CLEAN FORMULATIONS", sub: "SLS & Paraben Free" },
              { icon: <Rabbit />, title: "ALWAYS VEGAN", sub: "Vegan & Cruelty Free" },
              { icon: <MapPin />, title: "MADE IN INDIA", sub: "Ayurvedic Origins" },
              { icon: <Leaf />, title: "SUSTAINABLE", sub: "Earth Conscious" },
              { icon: <ShieldCheck />, title: "IFRA CERTIFIED", sub: "Safe Fragrances" },
              { icon: <Globe />, title: "DERM TESTED", sub: "All Skin Types" },
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="mb-8 text-[#C9A24D] group-hover:text-[#C65A2E] group-hover:scale-110 transition duration-500">
                  {React.cloneElement(badge.icon, { size: 40, strokeWidth: 1 })}
                </div>
                <h4 className="text-[12px] font-bold tracking-[0.3em] uppercase mb-3 text-[#1F3D36]">
                  {badge.title}
                </h4>
                <p className="text-[11px] text-[#1F3D36]/60 tracking-wider">
                  {badge.sub}
                </p>
                <div className="mt-6 w-16 h-[1px] bg-[#C9A24D] opacity-30 group-hover:opacity-100 group-hover:w-24 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INGREDIENT STORY ===== */}
      <section className="bg-[#FAF9F6] py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A24D] mb-6">
              Our Ingredients
            </p>
            <h2 className="font-serif text-4xl md:text-6xl italic mb-10 text-black leading-tight">
              Harvested. <br /> Not manufactured.
            </h2>
            <p className="text-black/60 text-[16px] leading-[2] font-light mb-8">
              Every LUMNICA formulation begins in the soil — not in a lab.
              We partner with organic farmers who grow herbs slowly,
              respecting both land and lunar cycles. Each ingredient
              is chosen for its energetic compatibility with the skin.
            </p>
            <button className="text-[11px] tracking-[0.3em] uppercase border-b border-[#C9A24D] pb-2 text-black hover:text-[#C9A24D] transition">
              Meet our ingredients
            </button>
          </div>

          <div className="h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
            <img src={product2} className="w-full h-full object-cover" alt="Lumnica Ingredients" />
          </div>
        </div>
      </section>

      {/* ===== THE LUMNICA RITUAL ===== */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A24D] mb-6">
            The Lumnica Ritual
          </p>

          <h2 className="font-serif text-4xl md:text-6xl italic mb-20 text-black">
            Designed to be felt, not rushed
          </h2>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-24 text-left">
            <div className="group">
              <span className="text-[#C9A24D] tracking-[0.4em] text-[14px] font-bold block mb-6 transition-transform group-hover:translate-x-2">01</span>
              <h3 className="font-serif text-2xl mb-5 text-black">Cleanse</h3>
              <p className="text-black/60 leading-[1.9] text-[15px] font-light">
                Begin by gently removing impurities while preserving the skin’s natural balance and microbiome.
              </p>
            </div>

            <div className="group">
              <span className="text-[#C9A24D] tracking-[0.4em] text-[14px] font-bold block mb-6 transition-transform group-hover:translate-x-2">02</span>
              <h3 className="font-serif text-2xl mb-5 text-black">Nourish</h3>
              <p className="text-black/60 leading-[1.9] text-[15px] font-light">
                Feed the skin with botanical actives that restore hydration and cellular harmony at a deep level.
              </p>
            </div>

            <div className="group">
              <span className="text-[#C9A24D] tracking-[0.4em] text-[14px] font-bold block mb-6 transition-transform group-hover:translate-x-2">03</span>
              <h3 className="font-serif text-2xl mb-5 text-black">Protect</h3>
              <p className="text-black/60 leading-[1.9] text-[15px] font-light">
                Seal the ritual with ingredients that strengthen the skin barrier and lock in the Lumnica glow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="bg-[#FAF9F6] py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.6em] uppercase text-black/40 mb-16">
            LUMNICA Stories
          </p>

          <p className="font-serif italic text-[24px] md:text-[36px] leading-[1.6] text-black/80 mb-12">
            “Lumnica feels less like skincare and more like a daily meditation.
            My skin has never felt calmer, softer, or more alive.”
          </p>

          <p className="text-[12px] tracking-[0.5em] uppercase text-black/60">
            Simran Sethi — Jaipur
          </p>
        </div>
      </section>

    </div>
  );
}