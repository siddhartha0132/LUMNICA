import React from "react";

export default function Men() {
  return (
    <div className="bg-[#FAF9F6] text-[#1E2D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl mb-6">
          Elevated Grooming Rituals for Men
        </h1>

        <p className="text-black/70 text-[15px] leading-relaxed max-w-3xl">
          Discover performance-driven formulations designed to cleanse,
          protect, and revitalise. Rooted in Ayurvedic intelligence and refined
          with modern actives, Lumnica’s men’s essentials deliver precision care.
        </p>
      </section>

      {/* ================= FEATURED STORY ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl md:text-3xl mb-6">
            Skincare Designed for Modern Lifestyles
          </h2>

          <p className="text-black/70 leading-relaxed mb-6">
            Daily exposure to stress, pollution, and environmental aggressors
            demands intelligent care. Our men’s formulations combine deeply
            purifying botanicals with targeted actives for visible results.
          </p>

          <button className="mt-6 px-8 py-3 bg-[#1E2D2B] text-white tracking-wide">
            Explore Essentials
          </button>
        </div>
      </section>

      {/* ================= FEATURED CATEGORIES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-2xl mb-10">Men’s Care Categories</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Facial Cleansers",
              desc: "Gentle yet effective cleansers crafted to purify and refresh without disrupting balance.",
            },
            {
              title: "Moisturisers",
              desc: "Lightweight hydration formulas designed to protect and maintain skin resilience.",
            },
            {
              title: "Shaving & Beard Care",
              desc: "Precision grooming essentials that soothe, condition and refine.",
            },
          ].map((item) => (
            <div key={item.title} className="border p-6 bg-white">
              <h3 className="text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-black/60 mb-4">{item.desc}</p>
              <button className="text-sm tracking-wide">SHOP NOW</button>
            </div>
          ))}

        </div>
      </section>

      {/* ================= ICONIC PRODUCTS ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl">Iconic Men’s Essentials</h2>
            <button className="text-sm">View All</button>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="border p-6">
              <h3 className="text-lg mb-2">
                Purifying Facial Cleanser
              </h3>
              <p className="text-sm text-black/60 mb-4">
                A refreshing formulation designed to remove impurities,
                balance excess oil, and energise the skin.
              </p>
              <p className="text-xs text-black/50">
                Purifying | Balancing | Revitalising
              </p>
              <button className="mt-4 text-sm">SHOP NOW</button>
            </div>

            <div className="border p-6">
              <h3 className="text-lg mb-2">
                Hydrating Daily Moisturiser
              </h3>
              <p className="text-sm text-black/60 mb-4">
                A lightweight hydration essential that protects, softens,
                and strengthens the skin barrier.
              </p>
              <p className="text-xs text-black/50">
                Hydrating | Protective | Conditioning
              </p>
              <button className="mt-4 text-sm">SHOP NOW</button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY TEXT ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-[15px] leading-relaxed text-black/70">
        <p>
          Ayurveda views grooming as an extension of well-being and discipline.
          Balanced formulations support clarity, vitality, and long-term skin
          health while respecting the body’s natural intelligence.
        </p>

        <button className="mt-6 text-sm">Read More</button>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-[#1E2D2B] text-white py-20 px-6 text-center">
        <h3 className="text-xl mb-4">Stay up to date</h3>
        <p className="text-white/70 mb-6">
          Receive updates on new launches, rituals & exclusive offers.
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