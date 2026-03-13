import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail, Phone, MapPin, MessageCircle,
  ShieldCheck, Leaf, Rabbit, Award,
  ArrowRight,
} from "lucide-react";
import HeroImage from "../assets/AboutBanner.png";

/* ══════════════════════════════════════════
   REUSABLE COMPONENTS (your originals kept)
══════════════════════════════════════════ */
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

const Eyebrow = ({ children, light = false }) => (
  <span
    className={`block mb-8 text-[10px] tracking-[0.5em] uppercase font-medium ${
      light ? "text-[#C8A96A]" : "text-[#A38E6A]"
    }`}
  >
    {children}
  </span>
);

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function About() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <main className="bg-[#FAF8F5] text-[#1E2D2B] antialiased overflow-x-hidden">

      {/* ══════════════════════════════
          SEO META TAGS
      ══════════════════════════════ */}
      <Helmet>
        <title>About Lumnica — Our Story, Philosophy & Ayurvedic Heritage</title>
        <meta
          name="description"
          content="Learn about Lumnica — an Ayurvedic skincare brand founded in 2024. Discover our founder story, ingredient philosophy, sustainability commitment, and why thousands trust our natural, vegan, cruelty-free formulations."
        />
        <meta name="keywords" content="Lumnica about us, Ayurvedic skincare brand India, natural skincare founder story, vegan cruelty free skincare India, Lumnica philosophy" />
        <meta property="og:title" content="About Lumnica — Sacred Ayurvedic Skincare" />
        <meta property="og:description" content="Founded in 2024 with a simple belief: skincare should feel like a homecoming, not a correction. Discover our story." />
        <link rel="canonical" href="https://lumnica.in/about" />
      </Helmet>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative h-[100svh] flex items-center overflow-hidden bg-[#E7E3DB]">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src={HeroImage}
            className="w-full h-full object-cover brightness-[0.78] contrast-[0.95] scale-105"
            alt="Lumnica Ayurvedic skincare rituals — about our brand"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Eyebrow light>Our Philosophy</Eyebrow>
            <h1 className="font-serif text-5xl md:text-[7.5rem] leading-[0.95] mb-14 tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              Less reaction. <br />
              <span className="italic text-[#F5EFE6] font-light">More relationship.</span>
            </h1>
            <p className="max-w-md text-base md:text-lg text-white/70 leading-[1.9] border-l border-[#C8A96A]/40 pl-8">
              LUMNICA exists to support the skin's natural intelligence — through restraint,
              balance, and thoughtful formulation rooted in Ayurvedic wisdom.
            </p>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-[1px] h-8 bg-white/20"
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════
          BELIEF
      ══════════════════════════════ */}
      <section className="py-36 md:py-52">
        <div className="max-w-6xl mx-auto px-8">
          <Reveal>
            <Eyebrow>Our Belief</Eyebrow>
            <h2 className="font-serif text-4xl md:text-[4.5rem] leading-[1.05] mb-20 tracking-tight">
              Skin should be <br /> understood, not controlled.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="max-w-3xl space-y-12 text-xl leading-[1.9] text-[#1E2D2B]/70 font-light">
              <p>
                Modern skincare often overwhelms the skin with aggressive intervention.
                We believe the skin thrives when it is supported, not corrected.
              </p>
              <p>
                Through Ayurveda and modern science, we create formulas that work in harmony
                with your biology — not against it. Each ingredient is chosen with intention.
                Each formulation is crafted with restraint.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════
          FOUNDER STORY
      ══════════════════════════════ */}
      <section className="py-40 bg-[#F3EBDD]">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-start">

          {/* Text */}
          <div>
            <Reveal>
              <Eyebrow>The Founder's Story</Eyebrow>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-10 tracking-tight">
                Born from a <br />
                <span className="italic font-light">personal ritual.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="space-y-7 text-lg leading-[1.9] text-[#1E2D2B]/65 font-light max-w-lg">
                <p>
                  Lumnica was founded in 2024 with a simple frustration — every "natural" brand
                  on the shelf was either watered-down, misleadingly labelled, or inaccessibly priced.
                  There had to be a middle path.
                </p>
                <p>
                  Inspired by generational Ayurvedic rituals passed down through family — the
                  Bhringraj oil massaged into hair every Sunday, the turmeric paste before every
                  important occasion, the neem used long before it was trendy — Lumnica was born.
                </p>
                <p>
                  Guided by modern cosmetic science and manufactured in small batches for freshness,
                  every formulation is a direct reflection of that original intent: nothing
                  unnecessary, everything intentional.
                </p>
                <p>
                  We believe in skincare that builds a relationship with your skin over time —
                  not instant fixes, but lasting transformation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-12 pt-10 border-t border-[#C8A96A]/30">
                <p className="font-serif italic text-2xl text-[#1E2D2B]/80 mb-3 leading-relaxed">
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
            <div className="bg-[#1E2D2B] text-white p-12 md:p-16 space-y-0">
              {[
                { num: "2024", label: "Year Founded" },
                { num: "12+", label: "Sacred Botanicals Sourced" },
                { num: "200+", label: "Customers Served" },
                { num: "100%", label: "Vegan & Cruelty Free" },
                { num: "GMP", label: "Certified Manufacturing" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="border-b border-white/10 py-10 last:border-0"
                >
                  <div className="font-serif text-5xl text-[#C8A96A] mb-2">{stat.num}</div>
                  <div className="text-[11px] tracking-[0.4em] uppercase text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════
          BRAND TIMELINE
      ══════════════════════════════ */}
      <section className="py-40 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-8">
          <Reveal>
            <Eyebrow>Our Journey</Eyebrow>
            <h2 className="font-serif text-4xl md:text-[4.5rem] leading-[1.05] mb-20 tracking-tight">
              From kitchen rituals <br />
              <span className="italic font-light">to conscious brand.</span>
            </h2>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-3 bottom-3 w-[1px] bg-[#C8A96A]/30 hidden md:block" />

            <div className="space-y-0">
              {[
                {
                  year: "2022",
                  title: "The Idea Takes Root",
                  desc: "Frustrated with the gap between 'natural' marketing and actual ingredient quality, our founder begins research into authentic Ayurvedic formulation.",
                },
                {
                  year: "2023",
                  title: "Formulation Begins",
                  desc: "Partnering with Ayurvedic herbalists and cosmetic scientists, the first three Lumnica formulations are developed, tested, and refined across 40+ iterations.",
                },
                {
                  year: "Early 2024",
                  title: "Lumnica is Born",
                  desc: "The brand launches with a small batch of products — Amrita Kesh, Amrita Snan, and Amrita Mridu — each named after Sanskrit traditions of sacred offering.",
                },
                {
                  year: "2024",
                  title: "Hospitality Expansion",
                  desc: "Hotels and wellness retreats begin partnering with Lumnica for guest amenities, recognising the value of authentic Ayurvedic formulations for luxury hospitality.",
                },
                {
                  year: "2025 →",
                  title: "The Road Ahead",
                  desc: "Expanding the product range, scaling sustainable packaging, and building a community of conscious skincare believers across India and beyond.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="flex gap-10 md:gap-16 pb-16 items-start group">
                    {/* Dot */}
                    <div className="relative flex-shrink-0 mt-2 hidden md:block">
                      <div className="w-4 h-4 rounded-full border-2 border-[#C8A96A] bg-[#FAF8F5] group-hover:bg-[#C8A96A] transition duration-300" />
                    </div>

                    <div className="flex-1 border-b border-[#E7DCC6] pb-16">
                      <span className="block text-[10px] tracking-[0.4em] uppercase text-[#A38E6A] mb-3 font-medium">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl mb-4 text-[#1E2D2B]">
                        {item.title}
                      </h3>
                      <p className="text-[#1E2D2B]/55 leading-[1.85] max-w-xl text-[15px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          APPROACH
      ══════════════════════════════ */}
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
                d: "Every formula starts with a dosha principle — understanding the root cause of a skin or hair concern before choosing botanicals. We do not prescribe solutions. We restore balance.",
              },
              {
                n: "02",
                t: "Modern Precision",
                d: "Formulated to meet today's standards of safety, stability, and efficacy. Our lab work ensures that ancient ingredients are delivered in bioavailable, stable forms that actually work.",
              },
              {
                n: "03",
                t: "Conscious Restraint",
                d: "Nothing unnecessary. Only what skin truly needs. No padding, no filler, no synthetic shortcuts. Each Lumnica product uses the minimum effective dose of the maximum quality ingredient.",
              },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 0.1}>
                <div className="border-b border-white/10 pb-20">
                  <span className="block mb-8 tracking-[0.4em] text-[#A38E6A] text-xs font-bold">
                    {item.n}
                  </span>
                  <h3 className="font-serif text-4xl mb-8">{item.t}</h3>
                  <p className="text-white/50 max-w-xl leading-relaxed text-[15px]">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CERTIFICATIONS & TRUST
      ══════════════════════════════ */}
      <section className="py-40 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-8">
          <Reveal>
            <Eyebrow>Why Trust Us</Eyebrow>
            <h2 className="font-serif text-4xl md:text-[4.5rem] leading-[1.05] mb-6 tracking-tight">
              Commitments we <br />
              <span className="italic font-light">never compromise on.</span>
            </h2>
            <p className="text-[#1E2D2B]/50 text-lg leading-relaxed mb-20 max-w-xl">
              These are not marketing claims. They are the baseline requirements every
              Lumnica formulation must meet before it ever reaches your skin.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Leaf size={28} strokeWidth={1.2} />,
                title: "SLS & Paraben Free",
                desc: "Every formula is free from sulphates, parabens, and synthetic fillers. Always.",
              },
              {
                icon: <Rabbit size={28} strokeWidth={1.2} />,
                title: "Vegan & Cruelty Free",
                desc: "No animal-derived ingredients. Never tested on animals at any stage.",
              },
              {
                icon: <ShieldCheck size={28} strokeWidth={1.2} />,
                title: "IFRA Certified",
                desc: "All fragrances comply with international IFRA safety standards for skin.",
              },
              {
                icon: <Award size={28} strokeWidth={1.2} />,
                title: "Dermatologist Tested",
                desc: "Tested and approved for all skin types, including sensitive and reactive skin.",
              },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border border-[#E7DCC6] p-8 group hover:border-[#C8A96A] transition duration-500 h-full">
                  <div className="text-[#A38E6A] mb-6 group-hover:scale-110 transition duration-300 inline-block">
                    {c.icon}
                  </div>
                  <h3 className="font-serif text-xl mb-4">{c.title}</h3>
                  <p className="text-[#1E2D2B]/55 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Certification badge strip */}
          <Reveal delay={0.2}>
            <div className="border-t border-[#E7DCC6] pt-14">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#A38E6A] mb-8 font-medium">
                Certifications & Compliance
              </p>
              <div className="flex flex-wrap gap-4">
                {["GMP Certified", "Ayurvedic Formulation", "Cruelty Free Int'l", "IFRA Certified", "ISO 22716", "Made in India"].map((cert) => (
                  <div
                    key={cert}
                    className="border border-[#C8A96A]/40 px-6 py-3 text-[11px] tracking-[0.2em] uppercase text-[#1E2D2B] hover:border-[#C8A96A] hover:bg-[#F3EBDD] transition duration-300 cursor-default"
                  >
                    ✦ {cert}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════
          INGREDIENT + SUSTAINABILITY TEASERS
      ══════════════════════════════ */}
      <section className="bg-[#1E2D2B] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

            {/* Ingredients teaser */}
            <Reveal>
              <Link to="/ingredients" className="block p-16 md:p-20 group h-full">
                <span className="block text-[10px] tracking-[0.4em] uppercase text-[#C8A96A] mb-6 font-medium">
                  Ingredient Philosophy
                </span>
                <h3 className="font-serif text-3xl md:text-4xl italic mb-6 leading-snug">
                  Raw. Potent. <br />Traceable.
                </h3>
                <p className="text-white/50 text-[15px] leading-relaxed mb-10 max-w-sm">
                  From Kumkumadi to Bhringraj — discover the sacred botanicals behind every
                  Lumnica formulation and the philosophy behind how we source them.
                </p>
                <div className="flex items-center gap-3 text-[#C8A96A] group-hover:gap-5 transition-all duration-300">
                  <span className="text-[11px] tracking-[0.3em] uppercase">Explore Ingredients</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            </Reveal>

            {/* Sustainability teaser */}
            <Reveal delay={0.1}>
              <Link to="/sustainability" className="block p-16 md:p-20 group h-full bg-[#1A2925]">
                <span className="block text-[10px] tracking-[0.4em] uppercase text-[#C8A96A] mb-6 font-medium">
                  Sustainability
                </span>
                <h3 className="font-serif text-3xl md:text-4xl italic mb-6 leading-snug">
                  Beauty that honours <br />the earth.
                </h3>
                <p className="text-white/50 text-[15px] leading-relaxed mb-10 max-w-sm">
                  From compostable mailers to solar-powered manufacturing — read about our
                  six sustainability commitments and the roadmap we hold ourselves to.
                </p>
                <div className="flex items-center gap-3 text-[#C8A96A] group-hover:gap-5 transition-all duration-300">
                  <span className="text-[11px] tracking-[0.3em] uppercase">Our Commitment</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CONTACT DETAILS
      ══════════════════════════════ */}
      <section className="py-40 bg-[#F3EBDD]">
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-start">

          <div>
            <Reveal>
              <Eyebrow>Get In Touch</Eyebrow>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-10 tracking-tight text-[#1E2D2B]">
                We'd love to <br />
                <span className="italic font-light">hear from you.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[#1E2D2B]/55 text-lg leading-[1.9] max-w-md mb-14">
                Whether you have a question about your skin, an order, or a bulk B2B inquiry —
                our team responds within 2 hours on weekdays.
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
                    label: "Call / WhatsApp",
                    value: "+91 XXXXX XXXXX",
                    href: "tel:+91XXXXXXXXXX",
                  },
                  {
                    icon: <MessageCircle size={16} />,
                    label: "WhatsApp Chat",
                    value: "Chat with us directly",
                    href: "https://wa.me/91XXXXXXXXXX",
                  },
                  {
                    icon: <MapPin size={16} />,
                    label: "Business Address",
                    value: "India — shipping PAN India & international",
                    href: null,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 group">
                    <div className="w-10 h-10 border border-[#C8A96A]/30 flex items-center justify-center text-[#A38E6A] group-hover:border-[#C8A96A] transition mt-0.5 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.35em] uppercase text-[#1E2D2B]/40 mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="text-[#1E2D2B]/80 hover:text-[#A38E6A] transition text-base"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[#1E2D2B]/80 text-base">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Business hours */}
            <Reveal delay={0.3}>
              <div className="mt-14 pt-10 border-t border-[#C8A96A]/20">
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#A38E6A] mb-5 font-medium">
                  Business Hours
                </p>
                <div className="space-y-2 text-[#1E2D2B]/60 text-sm">
                  <div className="flex justify-between max-w-xs">
                    <span>Monday – Friday</span>
                    <span>10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Saturday</span>
                    <span>10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Sunday</span>
                    <span className="italic">Closed</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Quick contact form */}
          <Reveal delay={0.2}>
            <div className="bg-[#1E2D2B] p-10 md:p-14">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8A96A] mb-8">
                Send a Message
              </p>
              <div className="space-y-5">
                {[
                  { placeholder: "Your Name", type: "text" },
                  { placeholder: "Email Address", type: "email" },
                  { placeholder: "Phone / WhatsApp (optional)", type: "tel" },
                ].map((f, i) => (
                  <input
                    key={i}
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full bg-transparent border border-white/15 px-5 py-4 text-sm text-white placeholder-white/30 outline-none focus:border-[#C8A96A] transition"
                  />
                ))}
                <select className="w-full bg-[#1E2D2B] border border-white/15 px-5 py-4 text-sm text-white/50 outline-none focus:border-[#C8A96A] transition appearance-none cursor-pointer">
                  <option value="">Topic — select one</option>
                  <option value="product">Product Query</option>
                  <option value="order">Order / Shipping</option>
                  <option value="b2b">B2B / Hospitality</option>
                  <option value="press">Press / Collaboration</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Your message…"
                  className="w-full bg-transparent border border-white/15 px-5 py-4 text-sm text-white placeholder-white/30 outline-none focus:border-[#C8A96A] transition resize-none"
                />
                <button className="w-full bg-[#C8A96A] text-white py-4 text-[11px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition">
                  Send Message
                </button>
                <p className="text-[10px] text-white/25 text-center tracking-wider">
                  We respond within 2 hours on weekdays.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ══════════════════════════════
          CTA
      ══════════════════════════════ */}
      <section className="py-56 bg-white text-center">
        <Reveal>
          <h2 className="font-serif text-5xl md:text-[6rem] mb-8 leading-[1.05]">
            Begin a quieter <br /> relationship with <br />
            <span className="italic">your skin</span>
          </h2>
          <p className="text-[#1E2D2B]/45 text-lg mb-16 max-w-md mx-auto leading-relaxed">
            Explore formulations built on 4,000 years of Ayurvedic wisdom —
            made for the way you live today.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/products"
              className="inline-block px-16 py-7 bg-[#1E2D2B] text-white uppercase tracking-[0.45em] text-[10px] font-semibold hover:bg-[#A38E6A] transition"
            >
              View Collection
            </Link>
            <Link
              to="/ingredients"
              className="inline-block px-16 py-7 border border-[#1E2D2B]/30 text-[#1E2D2B] uppercase tracking-[0.45em] text-[10px] hover:border-[#A38E6A] hover:text-[#A38E6A] transition"
            >
              Our Ingredients
            </Link>
          </div>
        </Reveal>
      </section>

    </main>
  );
}