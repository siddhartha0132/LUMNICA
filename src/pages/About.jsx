import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroImage from "../assets/AboutBanner.png";

/* ======================================================
   REUSABLE ANIMATED COMPONENTS
====================================================== */

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.1, delay, ease: [0.215, 0.61, 0.355, 1] }}
  >
    {children}
  </motion.div>
);

const Eyebrow = ({ children }) => (
  <span className="block mb-8 text-[10px] tracking-[0.5em] uppercase text-[#A38E6A] font-medium">
    {children}
  </span>
);

const Section = ({ eyebrow, title, children, center = false }) => (
  <section className={`py-36 md:py-52 ${center ? "text-center" : ""}`}>
    <div className="max-w-6xl mx-auto px-8">
      <Reveal>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="font-serif text-4xl md:text-[4.5rem] leading-[1.05] mb-20 tracking-tight">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.2}>{children}</Reveal>
    </div>
  </section>
);

export default function About() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <main className="bg-[#FAF8F5] text-[#1E2D2B] antialiased overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[100svh] flex items-center overflow-hidden bg-[#E7E3DB]">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src={HeroImage}
            className="w-full h-full object-cover brightness-[0.9] scale-105"
            alt="Lumnica Ritual"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F1EC]/90 via-[#F4F1EC]/30 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Eyebrow>Our Philosophy</Eyebrow>

            <h1 className="font-serif text-5xl md:text-[7.5rem] leading-[0.95] mb-14 tracking-tight">
              Less reaction. <br />
              <span className="italic text-white font-light">
  More relationship.
</span>

            </h1>

            <p className="max-w-md text-base md:text-lg text-[#1E2D2B]/70 leading-[1.9] border-l border-[#A38E6A]/40 pl-8">
              LUMNICA exists to support the skin’s natural intelligence — through restraint,
              balance, and thoughtful formulation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= BELIEF ================= */}
      <Section
        eyebrow="Our Belief"
        title={<>Skin should be <br /> understood, not controlled.</>}
      >
        <div className="max-w-3xl space-y-12 text-xl leading-[1.9] text-[#1E2D2B]/70 font-light">
          <p>
            Modern skincare often overwhelms the skin with aggressive intervention.
            We believe the skin thrives when it is supported, not corrected.
          </p>
          <p>
            Through Ayurveda and modern science, we create formulas that work in harmony
            with your biology — not against it.
          </p>
        </div>
      </Section>

      {/* ================= APPROACH ================= */}
      <section className="py-40 bg-[#232E2C] text-white">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-5xl md:text-6xl leading-tight sticky top-44">
              Our approach <br />
              to <span className="italic text-[#A38E6A]">care</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-20">
            {[
              {
                n: "01",
                t: "Ayurvedic Harmony",
                d: "Rooted in balance, compatibility, and long-term wellbeing."
              },
              {
                n: "02",
                t: "Modern Precision",
                d: "Formulated to meet today’s standards of safety and stability."
              },
              {
                n: "03",
                t: "Conscious Restraint",
                d: "Nothing unnecessary. Only what skin truly needs."
              }
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 0.1}>
                <div className="border-b border-white/10 pb-20">
                  <span className="block mb-8 tracking-[0.4em] text-[#A38E6A] text-xs font-bold">
                    {item.n}
                  </span>
                  <h3 className="font-serif text-4xl mb-8">{item.t}</h3>
                  <p className="text-white/50 max-w-xl leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-56 bg-white text-center">
        <h2 className="font-serif text-5xl md:text-[6rem] mb-20">
          Begin a quieter <br /> relationship with <br /> <span className="italic">your skin</span>
        </h2>

        <Link
          to="/products"
          className="inline-block px-24 py-9 bg-[#1E2D2B] text-white uppercase tracking-[0.45em] text-[10px] font-semibold hover:bg-[#A38E6A] transition"
        >
          View Collection
        </Link>
      </section>

    </main>
  );
}
