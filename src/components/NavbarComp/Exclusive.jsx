import React from "react";

export default function Exclusive() {
  return (
    <div className="bg-[#FAF9F6] text-[#1E2D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl mb-6">
          Online Exclusives
        </h1>

        <p className="text-black/70 text-[15px] leading-relaxed max-w-3xl">
          Discover rare formulations, limited creations and distinctive rituals
          available only through Lumnica’s online boutique. Crafted for those
          who seek refinement beyond the ordinary.
        </p>
      </section>

      {/* ================= FEATURED STORY ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl md:text-3xl mb-6">
            Crafted in Limited Quantities
          </h2>

          <p className="text-black/70 leading-relaxed mb-6">
            Our exclusive creations are produced in small batches to preserve
            ingredient potency, formulation integrity and artisanal precision.
            Each piece reflects thoughtful craftsmanship.
          </p>

          <button className="mt-6 px-8 py-3 bg-[#1E2D2B] text-white tracking-wide">
            Explore Exclusives
          </button>
        </div>
      </section>

      {/* ================= FEATURED CATEGORIES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-2xl mb-10">Featured Exclusives</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Limited Edition Rituals",
              desc: "Seasonal creations crafted with rare botanicals and distinctive textures.",
            },
            {
              title: "Advanced Actives Collection",
              desc: "High-performance formulations designed for precision results and visible transformation.",
            },
            {
              title: "Signature Online Sets",
              desc: "Curated combinations available exclusively through our digital boutique.",
            },
          ].map((item) => (
            <div key={item.title} className="border p-6 bg-white">
              <h3 className="text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-black/60 mb-4">{item.desc}</p>
              <button className="text-sm tracking-wide">DISCOVER</button>
            </div>
          ))}

        </div>
      </section>

      {/* ================= ICONIC PRODUCTS ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl">Exclusive Highlights</h2>
            <button className="text-sm">View All</button>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="border p-6">
              <h3 className="text-lg mb-2">
                Radiance Renewal Serum
              </h3>
              <p className="text-sm text-black/60 mb-4">
                A concentrated blend of botanical extracts and modern actives
                designed to illuminate and revitalise tired skin.
              </p>
              <p className="text-xs text-black/50">
                Illuminating | Refining | Restorative
              </p>
              <button className="mt-4 text-sm">SHOP NOW</button>
            </div>

            <div className="border p-6">
              <h3 className="text-lg mb-2">
                Rejuvenating Night Elixir
              </h3>
              <p className="text-sm text-black/60 mb-4">
                An indulgent overnight treatment crafted to support repair,
                hydration and skin resilience.
              </p>
              <p className="text-xs text-black/50">
                Nourishing | Revitalising | Age-Defying
              </p>
              <button className="mt-4 text-sm">SHOP NOW</button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BRAND PHILOSOPHY ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-[15px] leading-relaxed text-black/70">
        <p>
          Exclusivity is not defined by rarity alone, but by intention,
          craftsmanship and the experience it offers. Each formulation is
          created to deliver distinction, refinement and sensory pleasure.
        </p>

        <button className="mt-6 text-sm">Read More</button>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-[#1E2D2B] text-white py-20 px-6 text-center">
        <h3 className="text-xl mb-4">Stay up to date</h3>
        <p className="text-white/70 mb-6">
          Receive updates on limited releases, rare rituals & exclusive drops.
        </p>

        <div className="flex justify-center gap-2">
          <input
            placeholder="Email"
            className="px-4 py-2 text-black w-64"
          />
          <button className="px-6 bg-white text-black">
            Subscribe
          </button>
        </div>
      </section>

    </div>
  );
}