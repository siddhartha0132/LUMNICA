import React from "react";

export default function Hair() {
  return (
    <div className="bg-[#FAF9F6] text-[#1E2D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl mb-6">
          Discover Our Hair Care Rituals
        </h1>

        <p className="text-black/70 text-[15px] leading-relaxed max-w-3xl">
          Rooted in Ayurvedic wisdom, Lumnica’s hair care formulations are
          designed to restore balance, strengthen strands, and revive natural
          vitality through potent botanicals and modern actives.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm mt-10">
          {[
            "Shampoos",
            "Conditioners",
            "Hair Oils",
            "Hair Cleansers",
            "Hair Masks",
            "Scalp Care",
            "Hair Serums",
            "Treatments",
            "Herbal Infusions",
          ].map((item) => (
            <div
              key={item}
              className="border px-4 py-3 bg-white hover:shadow-sm cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED STORY ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl md:text-3xl mb-6">
            The Power of Ayurvedic Scalp Therapy
          </h2>

          <p className="text-black/70 mb-6 leading-relaxed">
            Healthy hair begins at the roots. Our scalp-focused formulations
            combine deeply nourishing oils, strengthening herbs, and targeted
            actives to revitalise the hair ecosystem.
          </p>

          <div className="space-y-4 text-black/70 text-[15px] leading-relaxed">
            <p>
              <strong>Nourish & Strengthen:</strong> Botanical oils and herbal
              extracts help reinforce hair structure while promoting softness
              and resilience.
            </p>

            <p>
              <strong>Balance & Protect:</strong> Carefully chosen actives work
              to maintain scalp harmony, reducing dryness and excess buildup.
            </p>
          </div>

          <button className="mt-10 px-8 py-3 bg-[#1E2D2B] text-white tracking-wide">
            Explore Rituals
          </button>
        </div>
      </section>

      {/* ================= FEATURED CATEGORIES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-2xl mb-10">Featured Categories</h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="border p-6 bg-white">
            <h3 className="text-lg mb-2">Nourishing Hair Oils</h3>
            <p className="text-black/60 text-sm mb-4">
              Rich, slow-infused oils crafted with Ayurvedic herbs to deeply
              condition the scalp and restore natural shine.
            </p>
            <button className="text-sm tracking-wide">SHOP NOW</button>
          </div>

          <div className="border p-6 bg-white">
            <h3 className="text-lg mb-2">Gentle Hair Cleansers</h3>
            <p className="text-black/60 text-sm mb-4">
              Mild yet effective cleansers designed to purify without stripping
              the hair’s natural protective barrier.
            </p>
            <button className="text-sm tracking-wide">SHOP NOW</button>
          </div>

        </div>
      </section>

      {/* ================= ICONIC PRODUCTS ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl">Our Iconic Hair Essentials</h2>
            <button className="text-sm">View All</button>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="border p-6">
              <h3 className="text-lg mb-2">
                Revitalising Hair Cleanser
              </h3>
              <p className="text-sm text-black/60 mb-4">
                A gentle cleansing formulation enriched with botanical extracts
                to purify the scalp while preserving moisture balance.
              </p>
              <p className="text-xs text-black/50">
                Purifying | Strengthening | Balancing
              </p>
              <button className="mt-4 text-sm">SHOP NOW</button>
            </div>

            <div className="border p-6">
              <h3 className="text-lg mb-2">
                Intensive Repair Hair Oil
              </h3>
              <p className="text-sm text-black/60 mb-4">
                A luxurious infusion of nutrient-rich oils and Ayurvedic herbs
                designed to nourish roots and restore vitality.
              </p>
              <p className="text-xs text-black/50">
                Nourishing | Restorative | Conditioning
              </p>
              <button className="mt-4 text-sm">SHOP NOW</button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= AYURVEDA TEXT ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-[15px] leading-relaxed text-black/70">
        <p>
          Ayurveda regards hair as an extension of inner balance and vitality.
          Formulations derived from living botanicals and herbal infusions help
          maintain harmony between scalp health, strength, and natural lustre.
        </p>

        <button className="mt-6 text-sm">Read More</button>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-[#1E2D2B] text-white py-20 px-6 text-center">
        <h3 className="text-xl mb-4">Stay up to date</h3>
        <p className="text-white/70 mb-6">
          Receive updates on new previews, rituals & exclusive launches.
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