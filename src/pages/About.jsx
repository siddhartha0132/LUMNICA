import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

// Asset Import (Ensure this path is correct)
import HeroImage from "../assets/AboutBanner.png";

/* ======================================================
   REUSABLE ANIMATED COMPONENTS
====================================================== */

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.9, delay, ease: [0.215, 0.61, 0.355, 1] }}
  >
    {children}
  </motion.div>
);

const Eyebrow = ({ children }) => (
  <span className="block mb-8 text-[11px] tracking-[0.5em] uppercase text-[#A38E6A] font-medium">
    {children}
  </span>
);

const Section = ({ eyebrow, title, children, center = false }) => (
  <section className={`py-44 md:py-64 ${center ? "text-center" : ""}`}>
    <div className="max-w-6xl mx-auto px-8">
      <Reveal>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="font-serif text-5xl md:text-[5rem] leading-[1.05] mb-20 tracking-tight">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.2}>{children}</Reveal>
    </div>
  </section>
);

export default function Home() {
  const { scrollY } = useScroll();
  // Sublte parallax effect for the hero image
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <main className="bg-[#FAF8F5] text-[#1E2D2B] antialiased overflow-x-hidden">
      
      {/* ======================================================
         HERO — IMMERSIVE & REFINED
      ====================================================== */}
      <section className="relative h-[110vh] flex items-center overflow-hidden bg-[#E5E2DA]">
        {/* Background Image with Parallax */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src={HeroImage} 
            className="w-full h-full object-cover brightness-[0.9] scale-105" 
            alt="Lumnica Lifestyle" 
          />
          {/* Soft gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/80 via-[#FAF8F5]/20 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Eyebrow>Skin care with nature’s luxury</Eyebrow>
            <h1 className="font-serif text-6xl md:text-[8.5rem] leading-[0.85] mb-16 tracking-tighter">
              Care that feels <br />
              <span className="italic text-[#A38E6A] font-light">considered</span>
            </h1>
            
            <p className="max-w-md text-lg md:text-xl text-[#1E2D2B]/80 leading-relaxed mb-16 border-l border-[#A38E6A] pl-8">
              Ayurvedic skincare created through restraint,
              balance, and respect for the skin’s natural intelligence.
            </p>

            <Link to="/products" className="group inline-flex items-center gap-6">
               <div className="w-16 h-16 rounded-full border border-[#1E2D2B] flex items-center justify-center group-hover:bg-[#1E2D2B] group-hover:text-white transition-all duration-500">
                  <span className="text-xl">→</span>
               </div>
               <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Discover Collection</span>
            </Link>
          </motion.div>
        </div>

        {/* Vertical Text Decoration */}
        <div className="absolute right-12 bottom-24 hidden md:block">
           <p className="vertical-text text-[9px] tracking-[0.8em] uppercase opacity-30 origin-bottom-right rotate-90">
             Scroll to explore — Lumnica Rituals
           </p>
        </div>
      </section>

      {/* ======================================================
         PHILOSOPHY — THE SOUL
      ====================================================== */}
      <Section
        eyebrow="Our Philosophy"
        title={<>Less reaction. <br /> More relationship.</>}
      >
        <div className="max-w-3xl space-y-12 text-2xl leading-relaxed text-[#1E2D2B]/80 font-light">
          <p>
            LUMNICA was created from the belief that skincare
            should work with the skin — not against it.
          </p>
          <p>
            Modern routines often overwhelm the skin with excess.
            We choose <span className="text-[#A38E6A] italic">clarity over clutter</span>, and intention over impulse.
          </p>
          <div className="pt-8">
             <div className="w-24 h-px bg-[#A38E6A]/30" />
          </div>
        </div>
      </Section>

      {/* ======================================================
         APPROACH — INTERACTIVE SCROLL
      ====================================================== */}
      <section className="py-44 bg-[#1E2D2B] text-white">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-6xl md:text-7xl leading-tight sticky top-44">
              Our approach <br />
              to <span className="italic text-[#A38E6A]">care</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-20">
            {[
              {
                n: "01",
                t: "Ayurvedic Harmony",
                d: "Rooted in time-tested principles that prioritise balance, compatibility, and long-term wellbeing."
              },
              {
                n: "02",
                t: "Modern Precision",
                d: "Refined through contemporary formulation standards to ensure stability, safety, and consistency."
              },
              {
                n: "03",
                t: "Conscious Restraint",
                d: "Only what the skin truly needs — nothing ornamental, nothing excessive."
              }
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 0.1}>
                <div className="group border-b border-white/10 pb-20 cursor-default">
                  <span className="block mb-8 tracking-[0.4em] text-[#A38E6A] font-bold text-xs transition-transform group-hover:translate-x-2 duration-500">
                    {item.n}
                  </span>
                  <h3 className="font-serif text-4xl mb-10 group-hover:italic transition-all duration-500">
                    {item.t}
                  </h3>
                  <p className="text-xl text-white/50 max-w-xl leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
         FORMULATION — THE TACTILE GRID
      ====================================================== */}
      <Section
        eyebrow="The Science of Slow"
        title={<>Designed for skin <br /> that thinks long-term</>}
        center
      >
        <div className="grid md:grid-cols-2 gap-12 text-left max-w-6xl mx-auto mt-32">
          <div className="group p-16 bg-white border border-black/5 hover:border-[#A38E6A]/30 transition-colors duration-700">
            <h4 className="font-serif text-3xl mb-8">Ingredient Integrity</h4>
            <p className="text-[#1E2D2B]/70 leading-relaxed text-xl font-light">
              Clean profiles, transparent sourcing, and compatibility
              with sensitive and reactive skin types.
            </p>
          </div>

          <div className="group p-16 bg-[#F3F1EC] hover:bg-[#ECEBE4] transition-colors duration-700">
            <h4 className="font-serif text-3xl mb-8">Daily Sustainability</h4>
            <p className="text-[#1E2D2B]/70 leading-relaxed text-xl font-light">
              Formulated to be used consistently, gently,
              and without creating dependency or fatigue.
            </p>
          </div>
        </div>
      </Section>

      {/* ======================================================
         CTA — THE FINAL INVITATION
      ====================================================== */}
      <section className="py-64 bg-white text-center relative">
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ height: 0 }} 
            whileInView={{ height: 112 }} 
            transition={{ duration: 1.5 }}
            className="mx-auto w-px bg-[#A38E6A] mb-20" 
          />

          <h2 className="font-serif text-6xl md:text-[6rem] mb-24 leading-[0.9] tracking-tighter">
            Begin a quieter <br /> relationship with <br /> <span className="italic">your skin</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-16">
            <Link
              to="/products"
              className="relative px-20 py-8 bg-[#1E2D2B] text-white uppercase tracking-[0.4em] text-[11px] font-bold overflow-hidden group"
            >
              <span className="relative z-10">View Collection</span>
              <div className="absolute inset-0 bg-[#A38E6A] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>

            <Link
              to="/about"
              className="text-[11px] uppercase tracking-[0.4em] font-bold border-b border-black/10 pb-2 hover:border-[#A38E6A] transition-colors"
            >
              Read Our Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================
         FOOTER
      ====================================================== */}
      <footer className="py-20 bg-[#FAF8F5] border-t border-black/5 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="font-serif text-2xl italic">Lumnica</span>
          <div className="text-[10px] uppercase tracking-[0.5em] opacity-40">
            © 2026 LUMNICA — All Rights Reserved
          </div>
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.2em] opacity-60">
             <a href="#" className="hover:text-[#A38E6A]">Instagram</a>
             <a href="#" className="hover:text-[#A38E6A]">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}