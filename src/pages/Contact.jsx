import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Clock, ChevronRight } from "lucide-react";

const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: [0.215, 0.61, 0.355, 1] }}
  >
    {children}
  </motion.div>
);

export default function Contact() {
  /* ── your original state ── */
  const [status, setStatus] = useState(null); // success | error

  /* ── your original submit handler ── */
  const handleSubmit = (e) => {
    setStatus("success");
    setTimeout(() => { e.target.reset(); }, 100);
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1E2D2B]">

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="bg-[#1E2D2B] pt-36 pb-20 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] tracking-[0.5em] uppercase text-[#C8A96A] mb-5"
        >
          We'd Love to Hear From You
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl italic text-white mb-5 tracking-tight"
        >
          Connect With Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-base max-w-sm mx-auto"
        >
          Whether it's a skin query, an order, or a B2B partnership — we're here.
        </motion.p>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT CARDS ROW
      ═══════════════════════════════════════ */}
      <section className="py-16 px-6 border-b border-black/8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <Mail size={20} strokeWidth={1.3} />,
              label: "Email",
              value: "contact@lumnica.com",
              href: "mailto:contact@lumnica.com",
            },
            {
              icon: <Phone size={20} strokeWidth={1.3} />,
              label: "Phone",
              value: "+91 63764 14576",
              href: "tel:+916376414576",
            },
            {
              icon: <MessageCircle size={20} strokeWidth={1.3} />,
              label: "WhatsApp",
              value: "Chat Now",
              href: "https://wa.me/916376414576",
            },
            {
              icon: <MapPin size={20} strokeWidth={1.3} />,
              label: "Location",
              value: "Jaipur, Rajasthan",
              href: null,
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="flex flex-col items-center text-center p-6 border border-black/8 group hover:border-[#C8A96A] transition duration-400">
                <div className="text-[#C8A96A] mb-4 group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
                <p className="text-[9px] tracking-[0.4em] uppercase text-black/30 mb-2">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-[13px] text-[#1E2D2B] hover:text-[#C8A96A] transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-[13px] text-[#1E2D2B]">{item.value}</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MAIN CONTENT — INFO + FORM
      ═══════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT — Contact Info */}
          <div>
            <Reveal>
              <p className="text-[10px] tracking-[0.5em] uppercase text-[#C8A96A] mb-5">
                General Enquiry
              </p>
              <h2 className="font-serif text-4xl md:text-5xl italic mb-10 tracking-tight text-[#1E2D2B]">
                Our Main Branch
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-8 mb-14">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-black/10 flex items-center justify-center text-[#C8A96A] shrink-0 mt-0.5">
                    <MapPin size={15} strokeWidth={1.3} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.35em] uppercase text-black/30 mb-1">Address</p>
                    <p className="text-[#1E2D2B]/70 leading-relaxed">Jaipur, Rajasthan, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-black/10 flex items-center justify-center text-[#C8A96A] shrink-0 mt-0.5">
                    <Mail size={15} strokeWidth={1.3} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.35em] uppercase text-black/30 mb-1">Email</p>
                    <a href="mailto:contact@lumnica.com" className="text-[#1E2D2B]/70 hover:text-[#C8A96A] transition">
                      contact@lumnica.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-black/10 flex items-center justify-center text-[#C8A96A] shrink-0 mt-0.5">
                    <Phone size={15} strokeWidth={1.3} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.35em] uppercase text-black/30 mb-1">Phone</p>
                    <a href="tel:+916376414576" className="text-[#1E2D2B]/70 hover:text-[#C8A96A] transition">
                      +91 63764 14576
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-black/10 flex items-center justify-center text-[#C8A96A] shrink-0 mt-0.5">
                    <Clock size={15} strokeWidth={1.3} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.35em] uppercase text-black/30 mb-1">Response Time</p>
                    <p className="text-[#1E2D2B]/70">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* WhatsApp CTA */}
            <Reveal delay={0.2}>
              <a
                href="https://wa.me/916376414576"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-4 text-[11px] tracking-[0.35em] uppercase hover:bg-[#1ebe5a] transition mb-10"
              >
                <MessageCircle size={15} /> Chat on WhatsApp
              </a>
            </Reveal>

            {/* B2B callout */}
            <Reveal delay={0.25}>
              <div className="border border-[#C8A96A]/30 bg-[#F3EBDD] p-7">
                <p className="text-[9px] tracking-[0.4em] uppercase text-[#C8A96A] mb-3">
                  Hotels & Spas
                </p>
                <h3 className="font-serif text-2xl italic mb-3 text-[#1E2D2B]">
                  B2B & Hospitality Enquiries
                </h3>
                <p className="text-sm text-[#1E2D2B]/60 leading-relaxed mb-5">
                  Looking for bulk Ayurvedic amenities for your property?
                  We offer custom dispenser solutions and tailored hotel kits.
                </p>
                <a
                  href="mailto:contact@lumnica.com?subject=Hospitality%20B2B%20Enquiry"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-[#1E2D2B] hover:text-[#C8A96A] transition font-medium"
                >
                  Email for B2B <ChevronRight size={12} />
                </a>
              </div>
            </Reveal>

            {/* Social */}
            <Reveal delay={0.3}>
              <div className="mt-10 pt-8 border-t border-black/8 flex items-center gap-4">
                <p className="text-[10px] tracking-[0.4em] uppercase text-black/30">Follow</p>
                <a
                  href="https://instagram.com/lumnicaskincare"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[12px] text-[#1E2D2B]/60 hover:text-[#C8A96A] transition"
                >
                  <Instagram size={15} /> @lumnicaskincare
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — your original form, restyled */}
          <Reveal delay={0.15}>
            <div className="bg-white border border-black/8 p-10 md:p-12">
              <p className="text-[10px] tracking-[0.5em] uppercase text-[#C8A96A] mb-4">
                Send a Message
              </p>
              <h2 className="font-serif text-3xl italic mb-8 text-[#1E2D2B]">
                We'll get back to you <br />
                <span className="font-light">within 24 hours.</span>
              </h2>

              {/* ── your original status messages ── */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 px-5 py-4 bg-[#F3EBDD] border border-[#C8A96A]/30 text-sm text-[#1E2D2B]/70 tracking-wide"
                  >
                    ✦ Your message has been received. We'll connect with you shortly.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 px-5 py-4 bg-red-50 border border-red-200 text-sm text-red-600"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── your original form — action, method, target, field names all preserved ── */}
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSfzE6oxw-bVQf4Tx82ZLcQg2TI_-j24uMlleFd_9w9EqEVoxQ/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] tracking-[0.35em] uppercase text-black/30">Full Name</label>
                  <input
                    name="entry.1751266335"
                    type="text"
                    placeholder="Your name"
                    className="bg-transparent border-b border-black/15 py-3 outline-none placeholder:text-black/25 focus:border-[#C8A96A] transition text-[14px]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] tracking-[0.35em] uppercase text-black/30">Email Address</label>
                  <input
                    name="entry.925844560"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-transparent border-b border-black/15 py-3 outline-none placeholder:text-black/25 focus:border-[#C8A96A] transition text-[14px]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] tracking-[0.35em] uppercase text-black/30">Phone (optional)</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="bg-transparent border-b border-black/15 py-3 outline-none placeholder:text-black/25 focus:border-[#C8A96A] transition text-[14px]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] tracking-[0.35em] uppercase text-black/30">Your Message</label>
                  <textarea
                    name="entry.1409352556"
                    placeholder="Tell us how we can help…"
                    rows={5}
                    className="bg-transparent border-b border-black/15 py-3 outline-none placeholder:text-black/25 focus:border-[#C8A96A] transition resize-none text-[14px]"
                    required
                  />
                </div>

                <button className="mt-4 py-4 uppercase tracking-[0.4em] text-[11px] font-medium bg-[#1E2D2B] text-white hover:bg-[#C8A96A] transition duration-300">
                  Submit Request
                </button>
              </form>

              {/* ── your original hidden iframe ── */}
              <iframe name="hidden_iframe" style={{ display: "none" }} />
            </div>
          </Reveal>

        </div>
      </section>

    </div>
  );
}