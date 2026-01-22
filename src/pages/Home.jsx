import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Rabbit, MapPin, Globe, ShieldCheck, Droplets } from "lucide-react";

import HeroImage from "../assets/herofinal.png";
import Main from "../assets/Hero_Main_Low.png";
import product1 from "../assets/PRODUCT1.png";
import product2 from "../assets/PRODUCT2.png";
import product3 from "../assets/PRODUCT3.png";

export default function Home() {
  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] font-light overflow-x-hidden">

      {/* ===== HERO ===== */}
      <section className="relative w-full h-[100svh] overflow-hidden">
        <img src={HeroImage} className="absolute inset-0 w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-6">
          <p className="uppercase text-[10px] tracking-[0.35em] mb-8 text-white/70">
            Est. 2024 — Botanical Alchemy
          </p>

          <h1 className="font-serif text-[44px] md:text-[96px] leading-[1] mb-10">
            Sacred <br />
            <span className="italic font-light">Skincare</span>
          </h1>

          <Link to="/products">
            <button className="border border-white/40 px-12 py-4 text-[10px] tracking-[0.35em] uppercase hover:bg-white hover:text-black transition">
              Explore Rituals
            </button>
          </Link>
        </div>
      </section>

      {/* ===== BRAND STORY ===== */}
      <section className="bg-white py-28 px-6 text-center">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A24D] mb-6">
          The Lumnica Philosophy
        </p>
        <h2 className="font-serif text-3xl md:text-5xl italic mb-8">
          Where Ayurveda meets modern Luxary
        </h2>
        <p className="max-w-3xl mx-auto text-black/60 text-[15px] leading-[1.9]">
          Every Lumnica formula is crafted in small batches using ancient Ayurvedic
          wisdom blended with modern cosmetic science.
        </p>
      </section>

      {/* ===== IMAGE + STORY ===== */}
      <section className="bg-[#FAF9F6] py-28 px-6">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A24D] mb-5">
              The Source
            </p>
            <h2 className="font-serif text-3xl md:text-5xl italic mb-6">
              Raw. Potent. Pure.
            </h2>
            <p className="text-black/60 text-[15px] leading-[1.9] mb-8">
              Our herbs are wild-harvested from sacred Indian soil and cold-pressed
              to preserve their vibrational potency.
            </p>
          </div>

          <div className="relative h-[65vh] rounded-xl overflow-hidden shadow-xl">
            <img src={Main} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ===== COLLECTION ===== */}
      <section className="py-28 px-6 max-w-[1400px] mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl italic mb-4">
          Seasonal Rituals
        </h2>
        <p className="text-[10px] tracking-[0.35em] uppercase text-black/40 mb-16">
          Curated botanical elixirs
        </p>

        <div className="grid md:grid-cols-3 gap-16">
          {[ 
            { img: product1, name: "Amrita Mridu", cat: "Hair Elixir", price: "₹475" },
            { img: product2, name: "Amrita Snan", cat: "Body Ritual", price: "₹525" },
            { img: product3, name: "Vata Shanti", cat: "Face Cleanser", price: "₹495" }
          ].map((p, i) => (
            <div key={i}>
              <div className="aspect-[3/4] bg-[#EEE] mb-6 overflow-hidden">
                <img src={p.img} className="w-full h-full object-cover hover:scale-105 transition duration-700" />
              </div>
              <h3 className="font-serif text-xl mb-1">{p.name}</h3>
              <p className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-1">
                {p.cat}
              </p>
              <p className="italic text-[16px]">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <section className="py-28 px-6 bg-gradient-to-b from-[#F3EBDD] via-[#FAF9F6] to-[#F3EBDD] border-t border-b border-[#E7DCC6]">
        <div className="max-w-[1200px] mx-auto text-center">

          <h2 className="font-serif text-2xl md:text-3xl tracking-widest uppercase mb-3 text-[#1F3D36]">
            Thoughtful Commitments
          </h2>

          <p className="text-[#1F3D36]/60 mb-16 max-w-2xl mx-auto text-sm">
            Rooted in purity. Guided by nature. Created with intention.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-20">
            {[
              { icon: <Droplets />, title: "CLEAN FORMULATIONS", sub: "SLS & Paraben Free" },
              { icon: <Rabbit />, title: "ALWAYS VEGAN", sub: "Vegan & Cruelty Free" },
              { icon: <MapPin />, title: "MADE IN INDIA", sub: "Ayurvedic Origins" },
              { icon: <Leaf />, title: "SUSTAINABLE", sub: "Earth Conscious" },
              { icon: <ShieldCheck />, title: "IFRA CERTIFIED", sub: "Safe Fragrances" },
              { icon: <Globe />, title: "DERM TESTED", sub: "All Skin Types" },
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="mb-6 text-[#C9A24D] group-hover:text-[#C65A2E] transition">
                  {React.cloneElement(badge.icon, { size: 34, strokeWidth: 1.2 })}
                </div>
                <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2 text-[#1F3D36]">
                  {badge.title}
                </h4>
                <p className="text-[11px] text-[#1F3D36]/60">
                  {badge.sub}
                </p>
                <div className="mt-4 w-12 h-[2px] bg-[#C9A24D] opacity-40 group-hover:opacity-100 transition" />
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
            <h2 className="font-serif text-3xl md:text-5xl italic mb-8">
              Harvested. Not manufactured.
            </h2>
            <p className="text-black/60 text-[15px] leading-[1.9]">
              Every LUMNICA formulation begins in the soil — not in a lab.
              We partner with organic farmers who grow herbs slowly,
              respecting both land and lunar cycles. Each ingredient
              is chosen for its energetic compatibility with the skin.
            </p>
          </div>

          <div className="h-[60vh] rounded-xl overflow-hidden shadow-xl">
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

          <h2 className="font-serif text-3xl md:text-5xl italic mb-16">
            Designed to be felt, not rushed
          </h2>

          <div className="grid md:grid-cols-3 gap-20 text-left">
            <div>
              <span className="text-[#C9A24D] tracking-[0.4em] text-[12px] block mb-4">01</span>
              <h3 className="font-serif text-xl mb-4">Cleanse</h3>
              <p className="text-black/60 leading-[1.9] text-[15px]">
                Begin by gently removing impurities while preserving the skin’s natural balance.
              </p>
            </div>

            <div>
              <span className="text-[#C9A24D] tracking-[0.4em] text-[12px] block mb-4">02</span>
              <h3 className="font-serif text-xl mb-4">Nourish</h3>
              <p className="text-black/60 leading-[1.9] text-[15px]">
                Feed the skin with botanical actives that restore hydration and cellular harmony.
              </p>
            </div>

            <div>
              <span className="text-[#C9A24D] tracking-[0.4em] text-[12px] block mb-4">03</span>
              <h3 className="font-serif text-xl mb-4">Protect</h3>
              <p className="text-black/60 leading-[1.9] text-[15px]">
                Seal the ritual with ingredients that strengthen the skin barrier and glow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Luxary TESTIMONIAL ===== */}
      <section className="bg-[#FAF9F6] py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-black/40 mb-12">
            LUMNICA Stories
          </p>

          <p className="font-serif italic text-[20px] md:text-[28px] leading-relaxed text-black/70 mb-10">
            “Lumnica feels less like skincare and more like a daily meditation.
            My skin has never felt calmer, softer, or more alive.”
          </p>

          <p className="text-[11px] tracking-[0.4em] uppercase text-black/60">
            Simran Sethi — Jaipur
          </p>
        </div>
      </section>

    </div>
  );
}
