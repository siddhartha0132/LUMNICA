import React from "react";

export default function Gifting() {
  return (
    <div className="bg-[#FAF9F6] text-[#1E2D2B]">

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-3xl md:text-5xl mb-6">
          The Art of Thoughtful Gifting
        </h1>

        <p className="text-black/70 text-[15px] leading-relaxed max-w-3xl">
          Discover luxurious gifting rituals designed to celebrate moments,
          express gratitude, and offer the experience of mindful self-care.
          Each Lumnica creation is crafted to delight the senses.
        </p>
      </section>

      {/* ================= FEATURED STORY ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl md:text-3xl mb-6">
            Gifts That Embody Care & Elegance
          </h2>

          <p className="text-black/70 leading-relaxed mb-6">
            A meaningful gift is more than a gesture — it is an experience.
            Lumnica’s curated collections combine refined formulations,
            exquisite textures, and timeless presentation.
          </p>

          <button className="mt-6 px-8 py-3 bg-[#1E2D2B] text-white tracking-wide">
            Explore Gifting
          </button>
        </div>
      </section>

      {/* ================= FEATURED CATEGORIES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-2xl mb-10">Featured Gifting Collections</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Facial Care Gifts",
              desc: "Curated skincare rituals designed to illuminate, hydrate and restore balance.",
            },
            {
              title: "Bath & Body Gifts",
              desc: "Indulgent cleansing and nourishment rituals for moments of daily luxury.",
            },
            {
              title: "Complete Ritual Sets",
              desc: "A harmonious selection of essentials crafted for a holistic self-care experience.",
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
            <h2 className="text-2xl">Our Most Loved Gifts</h2>
            <button className="text-sm">View All</button>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="border p-6">
              <h3 className="text-lg mb-2">
                Luminous Skincare Ritual
              </h3>
              <p className="text-sm text-black/60 mb-4">
                A luxurious pairing of hydration and radiance essentials,
                crafted to transform everyday skincare into a refined ritual.
              </p>
              <p className="text-xs text-black/50">
                Radiance | Nourishment | Balance
              </p>
              <button className="mt-4 text-sm">SHOP NOW</button>
            </div>

            <div className="border p-6">
              <h3 className="text-lg mb-2">
                Indulgent Body Care Collection
              </h3>
              <p className="text-sm text-black/60 mb-4">
                A sensorial body care experience designed to cleanse,
                soften and envelop the skin in delicate botanical aromas.
              </p>
              <p className="text-xs text-black/50">
                Softening | Revitalising | Aromatic
              </p>
              <button className="mt-4 text-sm">SHOP NOW</button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY TEXT ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-[15px] leading-relaxed text-black/70">
        <p>
          In Ayurveda, gifting is seen as an offering of intention and
          well-being. A thoughtfully chosen ritual reflects care, harmony,
          and the timeless beauty of mindful living.
        </p>

        <button className="mt-6 text-sm">Read More</button>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-[#1E2D2B] text-white py-20 px-6 text-center">
        <h3 className="text-xl mb-4">Stay up to date</h3>
        <p className="text-white/70 mb-6">
          Receive updates on exclusive collections, seasonal rituals & offers.
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