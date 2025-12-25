/* ======================================================
   LUMNICA — HOME
   STAGE 1 (UI/UX PERFECTION, IMAGE-READY)
====================================================== */

const Eyebrow = ({ children }) => (
  <span className="block mb-8 text-[11px] tracking-[0.45em] uppercase text-[#A38E6A]">
    {children}
  </span>
);

const Section = ({ eyebrow, title, children, center = false }) => (
  <section className={`py-44 ${center ? "text-center" : ""}`}>
    <div className="max-w-6xl mx-auto px-8">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-20">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="bg-[#FAF8F5] text-[#1E2D2B] antialiased">

      {/* ======================================================
         HERO — QUIET CONFIDENCE
         (IMAGE WILL BE ADDED LATER)
      ====================================================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-8">

          <Eyebrow>Skin care with nature’s luxury</Eyebrow>

          <h1 className="font-serif text-6xl md:text-[7.2rem] leading-[0.95] mb-20">
            Care that feels <br />
            <span className="italic text-[#A38E6A]">considered</span>, not crafted
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-[#1E2D2B]/70 leading-relaxed">
            Ayurvedic skincare created through restraint,
            balance, and respect for the skin’s natural intelligence.
          </p>
        </div>
      </section>

      {/* ======================================================
         PHILOSOPHY — BRAND SOUL
         (TEXT-ONLY BY DESIGN)
      ====================================================== */}
      <Section
        eyebrow="Our Philosophy"
        title={
          <>
            Less reaction. <br />
            More relationship.
          </>
        }
      >
        <div className="max-w-3xl space-y-12 text-xl leading-relaxed text-[#1E2D2B]/70">
          <p>
            LUMNICA was created from the belief that skincare
            should work with the skin — not against it.
          </p>

          <p>
            Modern routines often overwhelm the skin with excess.
            We choose clarity over clutter, and intention over impulse.
          </p>

          <p>
            What remains is care that feels steady, predictable,
            and quietly effective over time.
          </p>
        </div>
      </Section>

      {/* ======================================================
         APPROACH — STRUCTURED DEPTH
      ====================================================== */}
      <section className="py-44 bg-[#1E2D2B] text-white">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-24">

          <div className="lg:col-span-4">
            <h2 className="font-serif text-5xl leading-tight sticky top-32">
              Our approach <br />
              to <span className="italic text-[#A38E6A]">care</span>
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-32">
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
            ].map((item) => (
              <div key={item.n} className="border-b border-white/10 pb-24">
                <span className="block mb-8 tracking-[0.3em] text-[#A38E6A]">
                  {item.n}
                </span>
                <h3 className="font-serif text-3xl mb-10">
                  {item.t}
                </h3>
                <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
         FORMULATION — TRUST & CREDIBILITY
      ====================================================== */}
      <Section
        eyebrow="Formulation"
        title={
          <>
            Designed for skin <br />
            that thinks long-term
          </>
        }
        center
      >
        <div className="grid md:grid-cols-2 gap-24 text-left max-w-5xl mx-auto">

          <div className="p-16 bg-[#F3F1EC]">
            <h4 className="font-serif text-2xl mb-8">
              Ingredient Integrity
            </h4>
            <p className="text-[#1E2D2B]/70 leading-relaxed text-lg">
              Clean profiles, transparent sourcing, and compatibility
              with sensitive and reactive skin types.
            </p>
          </div>

          <div className="p-16 bg-[#ECEBE4]">
            <h4 className="font-serif text-2xl mb-8">
              Daily Sustainability
            </h4>
            <p className="text-[#1E2D2B]/70 leading-relaxed text-lg">
              Formulated to be used consistently, gently,
              and without creating dependency or fatigue.
            </p>
          </div>
        </div>
      </Section>

      {/* ======================================================
         CTA — CALM CONVERSION
      ====================================================== */}
      <section className="py-56 bg-white text-center">
        <div className="max-w-4xl mx-auto px-8">

          <span className="block mx-auto w-px h-28 bg-[#A38E6A] mb-20" />

          <h2 className="font-serif text-5xl md:text-7xl mb-24 leading-tight">
            Begin a quieter <br /> relationship with your skin
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-14">
            <a
              href="/products"
              className="px-20 py-7 bg-[#1E2D2B] text-white uppercase tracking-[0.35em] text-[10px] hover:bg-[#A38E6A] transition"
            >
              View Collection
            </a>

            <a
              href="/about"
              className="text-[10px] uppercase tracking-[0.35em] hover:text-[#A38E6A]"
            >
              Read Our Philosophy
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
         FOOTER
      ====================================================== */}
      <footer className="py-16 border-t border-black/10 text-center text-[9px] uppercase tracking-[0.45em] opacity-40">
        © 2025 LUMNICA — Skin care with nature’s luxury
      </footer>
    </main>
  );
}
