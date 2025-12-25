import React from "react";
import { Link } from "react-router-dom";
import ProductImage from "../assets/product.png";
import HeroImage from "../assets/HeroPagePhoto.png";

// Refined Section Component for Editorial feel
const PitchSection = ({ eyebrow, title, children, bg = "bg-transparent", dark = false }) => (
  <section className={`py-32 md:py-56 ${bg} ${dark ? "text-white" : "text-[#1E2D2B]"}`}>
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {eyebrow && (
        <span className="block mb-6 text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#A38E6A] font-bold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-5xl md:text-[5rem] leading-[1.1] mb-16 tracking-tighter">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="bg-[#FAF8F5] text-[#1E2D2B] antialiased selection:bg-[#A38E6A] selection:text-white">

      {/* ======================================================
          1. HERO SECTION
      ====================================================== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-[#EBEBE3] z-0">
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* ⭐ PRODUCT IMAGE (top, not overlapping text) */}
        <img
          src={ProductImage}
          alt="Lumnica Product"
          className="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 w-[200px] md:w-[330px] drop-shadow-2xl z-20 pointer-events-none"
        />

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center px-6 mt-48 md:mt-60">
          <span className="block mb-8 text-[10px] tracking-[0.6em] uppercase text-[#A38E6A] font-bold">
            LUMNICA — High-Performance Ayurveda
          </span>

          <h1 className="font-serif text-[12vw] md:text-[9rem] leading-[0.85] tracking-tighter mb-12">
            Pure <br />
            <span className="italic text-[#A38E6A]">Intent.</span>
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-[#1E2D2B]/70 font-light leading-relaxed mb-12">
            Designed for world-class hospitality, crafted with Ayurvedic discipline, and refined by modern skin science.
          </p>

          {/* BUTTONS WITH ROUTING */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">

            {/* → PRODUCTS PAGE */}
            <Link to="/products">
              <button className="px-12 py-5 bg-[#1E2D2B] text-white uppercase tracking-widest text-[10px] font-bold hover:bg-[#A38E6A] transition-all duration-500">
                The Collection
              </button>
            </Link>

            {/* → CONTACT PAGE */}
            <Link to="/contact">
              <button className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-[#1E2D2B]/20 pb-2 hover:border-[#A38E6A] transition-all">
                Partner with Us
              </button>
            </Link>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.4em] opacity-40">
          Scroll to explore
        </div>
      </section>

      {/* ======================================================
          2. THE SHIFT SECTION
      ====================================================== */}
      <PitchSection
        eyebrow="The Shift"
        title={<>Luxury is <span className="italic">quiet</span> integrity.</>}
      >
        <div className="grid lg:grid-cols-2 gap-20 items-end">

          <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-[#1E2D2B]/60 font-light">
            <p>
              Modern guests no longer seek excess. They seek <span className="text-[#1E2D2B] font-normal">integrity</span>.
              They notice the ingredients, the ethics, and the intention behind the care provided to them.
            </p>

            <p className="text-[#A38E6A] italic">
              LUMNICA bridges the gap between ancient ritual and 5-star performance.
            </p>
          </div>

          {/* ⭐ SECOND IMAGE IN RIGHT HOLDER */}
          <div className="aspect-[4/5] bg-[#EBEBE3] relative overflow-hidden">
            <img
              src={HeroImage}
              alt="Lumnica Visual"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </PitchSection>

      {/* ======================================================
          3. PILLARS SECTION
      ====================================================== */}
      <section className="py-32 md:py-56 bg-[#1E2D2B] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">

          <div className="lg:col-span-5">
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] sticky top-32">
              The <br /> Three <br /> <span className="italic text-[#A38E6A]">Pillars</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-1">
            {[
              { id: "01", t: "Authentic Heritage", d: "Pure Ayurvedic ingredients sourced from ethical growers in India." },
              { id: "02", t: "Scientific Precision", d: "Refined formulations ensuring safety and stability for global skin types." },
              { id: "03", t: "Restrained Design", d: "Packaging and sensory experiences that complement high-end interiors." }
            ].map((p) => (
              <div key={p.id} className="group py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors px-4">
                <span className="text-[#A38E6A] font-bold tracking-widest text-xs block mb-6">{p.id}</span>
                <h3 className="font-serif text-3xl md:text-5xl mb-6 group-hover:italic transition-all">{p.t}</h3>
                <p className="text-xl text-white/50 max-w-xl leading-relaxed font-light">{p.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 right-10 opacity-5 text-[10vw] font-serif pointer-events-none">
          LUMNICA
        </div>
      </section>

      {/* ======================================================
          4. HOSPITALITY SECTION
      ====================================================== */}
      <section className="py-32 md:py-56 bg-[#F3F1EC]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="text-[#A38E6A] uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">
            Global Partnerships
          </span>

          <h2 className="font-serif text-4xl md:text-6xl mb-12">
            Elevate the Guest Ritual
          </h2>

          <p className="text-xl text-[#1E2D2B]/60 leading-relaxed mb-20 max-w-3xl mx-auto">
            We partner with boutique hotels and luxury resorts to provide custom amenity solutions that guests remember long after checkout.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {["Custom Scenting", "Eco-Conscious Bulk", "Retail Integration"].map(item => (
              <div key={item} className="p-10 border border-[#1E2D2B]/5 bg-white shadow-sm hover:shadow-xl transition-shadow">
                <h5 className="font-serif text-lg italic">{item}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          5. FINAL CTA
      ====================================================== */}
      <section className="py-48 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <div className="mb-20">
            <h2 className="font-serif text-6xl md:text-[8rem] tracking-tighter leading-[0.85] mb-12">
              Luxury <br /> in <span className="italic text-[#A38E6A]">Silence.</span>
            </h2>

            <p className="text-[#1E2D2B]/50 uppercase tracking-[0.4em] text-[11px] font-bold">
              The Future of Ayurvedic Care
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12">

            <Link to="/contact">
              <button className="w-full md:w-auto px-20 py-6 bg-[#1E2D2B] text-white uppercase tracking-widest text-[11px] font-bold hover:bg-[#A38E6A] transition-all duration-500">
                Request a Pitch Deck
              </button>
            </Link>

            <Link to="/contact">
              <button className="text-[11px] uppercase tracking-[0.3em] font-bold opacity-60 hover:opacity-100 transition-opacity">
                Contact Founder
              </button>
            </Link>

          </div>
        </div>
      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}
      <footer className="py-12 border-t border-black/5 text-center text-[9px] uppercase tracking-[0.5em] opacity-40">
        LUMNICA CONSCIOUS CARE — EST. 2025
      </footer>
    </main>
  );
}
