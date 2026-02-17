import React from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const blogs = [
    {
      title: "Dinacharya – The Ayurvedic Daily Routine",
      slug: "dinacharya-ayurvedic-daily-routine",
      desc: "How aligning your daily habits with nature improves skin, digestion, and mental clarity."
    },
    {
      title: "Ayurvedic Skincare Principles",
      slug: "ayurvedic-skincare-principles",
      desc: "Understanding Vata, Pitta, and Kapha for naturally balanced, radiant skin."
    },
    {
      title: "The Power of Abhyanga (Oil Massage)",
      slug: "abhyanga-oil-massage-benefits",
      desc: "Why self-massage is considered one of Ayurveda’s most powerful rejuvenation rituals."
    },
    {
      title: "Herbs That Transform Skin Health",
      slug: "ayurvedic-herbs-for-skin",
      desc: "Exploring Kumkumadi, Neem, Sandalwood, and other botanical treasures."
    },
    {
      title: "Gut Health & Glowing Skin",
      slug: "gut-health-and-skin-ayurveda",
      desc: "How digestion and skin are deeply connected in Ayurvedic science."
    },
    {
      title: "Ritucharya – Seasonal Living",
      slug: "ritucharya-seasonal-ayurveda",
      desc: "Adapting diet and lifestyle with changing seasons for longevity and vitality."
    },
    {
      title: "Stress, Mind & Skin Connection",
      slug: "stress-and-skin-ayurveda",
      desc: "How mental balance directly influences inflammation and skin ageing."
    },
    {
      title: "Natural Detox in Ayurveda",
      slug: "natural-detox-ayurveda",
      desc: "Gentle, sustainable cleansing rituals without extreme dieting."
    },
    {
      title: "Sleep & Cellular Regeneration",
      slug: "sleep-and-skin-regeneration",
      desc: "Why quality sleep is Ayurveda’s ultimate beauty secret."
    },
    {
      title: "Modern Lifestyle Through Ayurvedic Wisdom",
      slug: "modern-lifestyle-ayurveda",
      desc: "Integrating ancient principles into fast-paced contemporary life."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A24D] mb-5">
            Lumnica Journal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl italic">
            Ayurveda • Rituals • Living
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {blogs.map((blog, i) => (
            <Link
              key={i}
              to={`/blogs/${blog.slug}`}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h2 className="font-serif text-2xl mb-3 group-hover:text-[#C9A24D] transition">
                {blog.title}
              </h2>
              <p className="text-black/60 text-sm leading-relaxed">
                {blog.desc}
              </p>
              <div className="mt-4 w-10 h-[2px] bg-[#C9A24D] opacity-40 group-hover:opacity-100 transition" />
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
