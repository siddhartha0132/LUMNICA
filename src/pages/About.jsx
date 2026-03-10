import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ShieldCheck, Leaf, Rabbit, Award } from "lucide-react";
import HeroImage from "../assets/AboutBanner.png";

/* ======================================================
   REUSABLE ANIMATED COMPONENTS (your originals)
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

      {/* ═══════════════════════════════════════
          HERO (your original)
      ═══════════════════════════════════════ */}
      <section className="relative h-[100svh] flex items-center overflow-hidden bg-[#E7E3DB]">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src={HeroImage}
            className="w-full h-full object-cover brightness-[0.78] contrast-[0.95] scale-105"
            alt="Lumnica Ritual"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Eyebrow>Our Philosophy</Eyebrow>
            <h1 className="font-serif text-5xl md:text-[7.5rem] leading-[0.95] mb-14 tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              Less reaction. <br />
              <span className="italic text-[#F5EFE6] font-light">More relationship.</span>
            </h1>
            <p className="max-w-md text-base md:text-lg text-white/70 leading-[1.9] border-l border-[#C8A96A]/40 pl-8">
              LUMNICA exists to support the skin's natural intelligence — through restraint,
              balance, and thoughtful formulation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BELIEF (your original)
      ═══════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════
          FOUNDER STORY — NEW
      ═══════════════════════════════════════ */}
      <section className="py-40 bg-[#F3EBDD]">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

          {/* Text */}
          <div>
            <Reveal>
              <Eyebrow>The Founder</Eyebrow>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-10 tracking-tight">
                Born from a <br />
                <span className="italic font-light">personal ritual.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="space-y-8 text-lg leading-[1.9] text-[#1E2D2B]/65 font-light max-w-lg">
                <p>
                  Lumnica was founded in 2024 with a simple frustration — every "natural" brand
                  on the shelf was either watered-down or unaffordable. There had to be a middle path.
                </p>
                <p>
                  Inspired by generational Ayurvedic rituals passed down through family, and guided
                  by modern cosmetic science, Lumnica was born in small batches — for real skin, real lives.
                </p>
                <p>
                  Every formulation is a direct reflection of that original intent: nothing unnecessary,
                  everything intentional.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-12 pt-10 border-t border-[#C8A96A]/30">
                <p className="font-serif italic text-2xl text-[#1E2D2B]/80 mb-2">
                  "Skincare should feel like a homecoming — not a correction."
                </p>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#A38E6A]">
                  — Lumnica Founder
                </span>
              </div>
            </Reveal>
          </div>

          {/* Stats panel */}
          <Reveal delay={0.2}>
            <div className="bg-[#1E2D2B] text-white p-12 md:p-16 space-y-12">
              {[
                { num: "2024", label: "Year Founded" },
                { num: "12+", label: "Sacred Botanicals Sourced" },
                { num: "200+", label: "Happy Customers" },
                { num: "100%", label: "Vegan & Cruelty Free" },
              ].map((stat, i) => (
                <div key={i} className="border-b border-white/10 pb-12 last:border-0 last:pb-0">
                  <div className="font-serif text-5xl text-[#C8A96A] mb-2">{stat.num}</div>
                  <div className="text-[11px] tracking-[0.4em] uppercase text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          APPROACH (your original)
      ═══════════════════════════════════════ */}
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
              { n: "01", t: "Ayurvedic Harmony", d: "Rooted in balance, compatibility, and long-term wellbeing." },
              { n: "02", t: "Modern Precision", d: "Formulated to meet today's standards of safety and stability." },
              { n: "03", t: "Conscious Restraint", d: "Nothing unnecessary. Only what skin truly needs." },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 0.1}>
                <div className="border-b border-white/10 pb-20">
                  <span className="block mb-8 tracking-[0.4em] text-[#A38E6A] text-xs font-bold">
                    {item.n}
                  </span>
                  <h3 className="font-serif text-4xl mb-8">{item.t}</h3>
                  <p className="text-white/50 max-w-xl leading-relaxed">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CERTIFICATIONS & TRUST — NEW
      ═══════════════════════════════════════ */}
      <section className="py-40 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-8">
          <Reveal>
            <Eyebrow>Why Trust Us</Eyebrow>
            <h2 className="font-serif text-4xl md:text-[4.5rem] leading-[1.05] mb-20 tracking-tight">
              Commitments we <br />
              <span className="italic font-light">never compromise on.</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf size={28} strokeWidth={1.2} />,
                title: "SLS & Paraben Free",
                desc: "Every formula is free from sulphates, parabens, and synthetic fillers.",
              },
              {
                icon: <Rabbit size={28} strokeWidth={1.2} />,
                title: "Vegan & Cruelty Free",
                desc: "No animal-derived ingredients. Never tested on animals — ever.",
              },
              {
                icon: <ShieldCheck size={28} strokeWidth={1.2} />,
                title: "IFRA Certified",
                desc: "All fragrances comply with IFRA safety standards for skin safety.",
              },
              {
                icon: <Award size={28} strokeWidth={1.2} />,
                title: "Dermatologist Tested",
                desc: "Tested and approved for all skin types including sensitive skin.",
              },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border border-[#E7DCC6] p-8 group hover:border-[#C8A96A] transition duration-500">
                  <div className="text-[#A38E6A] mb-6 group-hover:scale-110 transition duration-300">
                    {c.icon}
                  </div>
                  <h3 className="font-serif text-xl mb-4">{c.title}</h3>
                  <p className="text-[#1E2D2B]/55 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT DETAILS — NEW
      ═══════════════════════════════════════ */}
      <section className="py-40 bg-[#1E2D2B] text-white">
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-start">

          <div>
            <Reveal>
              <Eyebrow>Get In Touch</Eyebrow>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-10 tracking-tight">
                We'd love to <br />
                <span className="italic font-light text-[#C8A96A]">hear from you.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/50 text-lg leading-[1.9] max-w-md mb-14">
                Whether you have a question about your skin, an order, or a B2B inquiry —
                we're here and happy to help.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-8">
                {[
                  {
                    icon: <Mail size={16} />,
                    label: "Email Us",
                    value: "hello@lumnica.in",
                    href: "mailto:hello@lumnica.in",
                  },
                  {
                    icon: <Phone size={16} />,
                    label: "Call Us",
                    value: "+91 98765 43210",
                    href: "tel:+919876543210",
                  },
                  {
                    icon: <MessageCircle size={16} />,
                    label: "WhatsApp",
                    value: "Chat with us",
                    href: "https://wa.me/919876543210",
                  },
                  {
                    icon: <MapPin size={16} />,
                    label: "Based In",
                    value: "India",
                    href: null,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#C8A96A] group-hover:border-[#C8A96A] transition">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.35em] uppercase text-white/30 mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="text-white/80 hover:text-[#C8A96A] transition text-base"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white/80 text-base">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Quick contact form */}
          <Reveal delay={0.2}>
            <div className="bg-white/5 border border-white/8 p-10 md:p-12">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#A38E6A] mb-8">
                Send a Message
              </p>
              <div className="space-y-5">
                {[
                  { placeholder: "Your Name", type: "text" },
                  { placeholder: "Email Address", type: "email" },
                  { placeholder: "Phone Number (optional)", type: "tel" },
                ].map((f, i) => (
                  <input
                    key={i}
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full bg-transparent border border-white/15 px-5 py-4 text-sm text-white placeholder-white/30 outline-none focus:border-[#C8A96A] transition"
                  />
                ))}
                <textarea
                  rows={4}
                  placeholder="Your message…"
                  className="w-full bg-transparent border border-white/15 px-5 py-4 text-sm text-white placeholder-white/30 outline-none focus:border-[#C8A96A] transition resize-none"
                />
                <button className="w-full bg-[#C8A96A] text-white py-4 text-[11px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition">
                  Send Message
                </button>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA (your original)
      ═══════════════════════════════════════ */}
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