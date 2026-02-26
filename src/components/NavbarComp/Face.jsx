import React from "react";

export default function Face() {
  return (
    <div className="bg-[#FAF9F6] text-[#1E2D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl mb-6">
          Discover Our Facial Care Range
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm mt-10">
          {[
            "Moisturizers",
            "Cleansers",
            "Exfoliators",
            "Ubtans",
            "Masques & Leps",
            "Mists & Toners",
            "Serums",
            "Under Eye Care",
            "Lip Care",
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
            Discover Our New Launch: Varuna & Samsara Face Serums
          </h2>

          <p className="text-black/70 mb-6 leading-relaxed">
            A revolutionary age-defying face serum duo designed to deliver
            visible results with precision and potency.
          </p>

          <div className="space-y-4 text-black/70 text-[15px] leading-relaxed">
            <p>
              <strong>Step 1:</strong> Varuna Exceptional Repair Night Serum —
              delivers gentle nano-actives deep into the skin, improving
              firmness & elasticity.
            </p>

            <p>
              <strong>Step 2:</strong> Samsara Miraculous Glow Booster Day Serum —
              plumps & lifts the skin while adding a luminous glow.
            </p>
          </div>

          <button className="mt-10 px-8 py-3 bg-[#1E2D2B] text-white tracking-wide">
            Discover Now
          </button>
        </div>
      </section>

      {/* ================= FEATURED CATEGORIES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-2xl mb-10">Featured Categories</h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="border p-6 bg-white">
            <h3 className="text-lg mb-2">Facial Moisturisers</h3>
            <p className="text-black/60 text-sm mb-4">
              Award-winning face creams crafted using time-tested Ayurvedic
              recipes and superior botanical actives.
            </p>
            <button className="text-sm tracking-wide">SHOP NOW</button>
          </div>

          <div className="border p-6 bg-white">
            <h3 className="text-lg mb-2">Facial Cleansers</h3>
            <p className="text-black/60 text-sm mb-4">
              A gently purifying cleanse designed to begin your ritual with
              balance and clarity.
            </p>
            <button className="text-sm tracking-wide">SHOP NOW</button>
          </div>

        </div>
      </section>

      {/* ================= ICONIC PRODUCTS ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl">Our Iconic Products</h2>
            <button className="text-sm">View All</button>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="border p-6">
              <h3 className="text-lg mb-2">
                Delicate Facial Cleanser
              </h3>
              <p className="text-sm text-black/60 mb-4">
                An exceptional formulation infused with purifying botanicals
                designed to cleanse and balance delicate skin.
              </p>
              <p className="text-xs text-black/50">
                Purifying | Balancing | Clarifying
              </p>
              <button className="mt-4 text-sm">SHOP NOW</button>
            </div>

            <div className="border p-6">
              <h3 className="text-lg mb-2">
                Radiance Day Cream
              </h3>
              <p className="text-sm text-black/60 mb-4">
                A luxurious formula enriched with precious botanical extracts
                to unveil luminous, youthful skin.
              </p>
              <p className="text-xs text-black/50">
                Age-Defying | Illuminating | Transformative
              </p>
              <button className="mt-4 text-sm">SHOP NOW</button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= AYURVEDA TEXT ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-[15px] leading-relaxed text-black/70">
        <p>
          Ayurveda highlights that facial care products made of living
          substances such as plants and botanical extracts carry nature’s
          intrinsic intelligence. These formulations work in harmony with the
          skin, preserving balance, vitality and radiance.
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