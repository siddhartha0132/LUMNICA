import React from "react";
import { Link } from "react-router-dom";
// Icons for trust badges (You can replace these with your own SVG files)
import { Leaf, Rabbit, MapPin, Globe, ShieldCheck, Droplets } from "lucide-react";

import HeroImage from "../assets/HeroBhai.png";
import product1 from "../assets/Hero2_1.png";
import product2 from "../assets/product1_1.png";
import product3 from "../assets/product3.jpeg";
import userProfile from "../assets/product3.jpeg"; // Add the user image here

export default function Home() {
  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] font-light overflow-x-hidden">

      {/* ===== HERO ===== */}
      <section className="relative w-full h-[100svh] overflow-hidden">
        <img
          src={HeroImage}
          alt="Lumnica"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-6">
          <p className="uppercase text-[10px] tracking-[0.45em] mb-10 text-white/70">
            Est. 2024 — Botanical Alchemy
          </p>

          <h1 className="font-serif text-[52px] md:text-[120px] leading-[0.95] mb-12">
            Sacred <br />
            <span className="italic font-light">Skincare</span>
          </h1>

          <Link to="/products">
            <button className="border border-white/40 px-14 py-5 text-[11px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition">
              Explore Rituals
            </button>
          </Link>
        </div>
      </section>

      {/* ===== BRAND STORY ===== */}
      <section className="bg-white py-32 px-6 text-center">
        <p className="text-[11px] tracking-[0.45em] uppercase text-[#C9A24D] mb-8">
          The Lumnica Philosophy
        </p>
        <h2 className="font-serif text-4xl md:text-6xl italic mb-10">
          Where Ayurveda meets modern luxury
        </h2>
        <p className="max-w-3xl mx-auto text-black/60 text-[16px] leading-relaxed">
          Every Lumnica formula is crafted in small batches using ancient Ayurvedic
          wisdom blended with modern cosmetic science.
        </p>
      </section>

      {/* ===== IMAGE + STORY ===== */}
      <section className="bg-[#FAF9F6] py-32 px-6">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#C9A24D] mb-6">
              The Source
            </p>
            <h2 className="font-serif text-4xl md:text-6xl italic mb-8">
              Raw. Potent. Pure.
            </h2>
            <p className="text-black/60 text-[16px] leading-relaxed mb-10">
              Our herbs are wild-harvested from sacred Indian soil and cold-pressed
              to preserve their vibrational potency.
            </p>
          </div>

          <div className="relative h-[70vh] rounded-xl overflow-hidden shadow-2xl">
            <img src={product1} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ===== COLLECTION ===== */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-6xl italic mb-6">
          Seasonal Rituals
        </h2>
        <p className="text-[11px] tracking-[0.4em] uppercase text-black/40 mb-20">
          Curated botanical elixirs
        </p>

        <div className="grid md:grid-cols-3 gap-20">
          {[ 
            { img: product1, name: "Amrita Mridu", cat: "Hair Elixir", price: "₹475" },
            { img: product2, name: "Amrita Snan", cat: "Body Ritual", price: "₹525" },
            { img: product3, name: "Vata Shanti", cat: "Face Cleanser", price: "₹495" }
          ].map((p, i) => (
            <div key={i}>
              <div className="aspect-[3/4] bg-[#EEE] mb-8 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition duration-700" />
              </div>
              <h3 className="font-serif text-2xl mb-2">{p.name}</h3>
              <p className="text-[11px] tracking-[0.3em] uppercase text-black/40 mb-2">
                {p.cat}
              </p>
              <p className="italic text-[18px]">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TRUST BADGES (KIMIRICA STYLE) ===== */}
      <section className="bg-white py-32 px-6 border-t border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl tracking-widest uppercase mb-4">Thoughtful Commitments</h2>
          <p className="text-gray-500 mb-20 max-w-2xl mx-auto text-sm">A yes to conscious choices. Our commitment extends to People, Planet, & Pets, driving every decision we make.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
            {[
              { icon: <Droplets strokeWidth={1} />, title: "CLEAN FORMULATIONS", sub: "SLS & Paraben Free" },
              { icon: <Rabbit strokeWidth={1} />, title: "ALWAYS VEGAN", sub: "Vegan & Cruelty Free" },
              { icon: <MapPin strokeWidth={1} />, title: "MADE IN INDIA", sub: "Made Locally, Served Globally" },
              { icon: <Leaf strokeWidth={1} />, title: "SUSTAINABLE SOURCING", sub: "Fairtrade, Natural Origin" },
              { icon: <ShieldCheck strokeWidth={1} />, title: "IFRA CERTIFIED", sub: "Natural Extracts, Safe Fragrances" },
              { icon: <Globe strokeWidth={1} />, title: "DERMATOLOGICALLY TESTED", sub: "Suitable For Every Skin Type" },
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="mb-6 text-gray-700 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(badge.icon, { size: 40 })}
                </div>
                <h4 className="text-[12px] font-bold tracking-[0.2em] uppercase mb-2">{badge.title}</h4>
                <p className="text-[12px] text-gray-400 font-light">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL (KIMIRICA STYLE) ===== */}
      <section className="bg-[#FAF9F6] py-32 px-6 text-center">
        <h2 className="text-[12px] tracking-[0.5em] uppercase text-gray-400 mb-16">
          Testimonials
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-1 text-[#D4AF37] text-sm mb-10">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>

          <div className="px-4">
            <p className="font-serif text-[20px] md:text-[28px] leading-relaxed text-gray-700 mb-6 italic">
              "Obsessed with the Ultimate Hydration Set! The hydration boost duo is like a saviour for my skin. The hyaluronic acid in the serum is pure magic, and the gel seals in all that goodness."
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-loose mb-12 max-w-xl mx-auto">
              My skin's never been this happy and hydrated!
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
                alt="Simran Sethi Bedi" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] tracking-[0.4em] font-semibold uppercase text-gray-800">
              Simran Sethi Bedi
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}