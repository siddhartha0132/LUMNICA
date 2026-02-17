import React from "react";

export default function AbhyangaOilMassageBenefits() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1a1a1a] px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
          Ayurveda • Self Care Rituals
        </p>

        <h1 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
          Abhyanga – The Transformative Benefits of Ayurvedic Oil Massage
        </h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Abhyanga, the traditional Ayurvedic practice of warm oil massage,
          is far more than a relaxation technique. It is a deeply therapeutic
          ritual designed to nourish tissues, calm the nervous system, and
          restore energetic balance. Practiced regularly, Abhyanga becomes a
          powerful tool for longevity and vitality.
        </p>

        <Section title="💆‍♀️ Nervous System Relaxation">
          Warm oil combined with gentle massage helps ground the body and
          soothe the nervous system. This reduces stress, anxiety, and mental
          fatigue while promoting a profound sense of calm.
        </Section>

        <Section title="🌿 Deep Cellular Nourishment">
          Oils penetrate the skin and deliver lipid-based nutrition to deeper
          tissues. This supports tissue repair, improves skin texture, and
          enhances natural glow.
        </Section>

        <Section title="🩸 Improved Circulation">
          Massage stimulates blood flow and lymphatic movement, assisting in
          detoxification and nutrient distribution throughout the body.
        </Section>

        <Section title="🔥 Balancing the Doshas">
          Abhyanga is especially beneficial for pacifying Vata dosha, which is
          associated with dryness, restlessness, and premature ageing. Proper
          oil selection can balance all constitutions.
        </Section>

        <Section title="💧 Skin Hydration & Protection">
          Regular oiling strengthens the skin barrier, preventing dryness and
          environmental damage. It enhances elasticity and softness.
        </Section>

        <Section title="🛌 Enhanced Sleep Quality">
          Evening Abhyanga rituals can significantly improve sleep by calming
          excess mental activity and relaxing muscular tension.
        </Section>

        <Section title="✨ Slowing the Ageing Process">
          Ayurveda considers daily oil massage one of the most effective
          rejuvenation (Rasayana) practices. It preserves vitality, flexibility,
          and youthful energy.
        </Section>

        <p className="text-lg text-gray-700 mt-12 leading-relaxed">
          In Ayurveda, Abhyanga is regarded as an act of self-reverence.
          A few mindful minutes each day can profoundly influence physical,
          emotional, and energetic wellbeing.
        </p>

      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-3">
        {title}
      </h2>
      <p className="text-gray-700 leading-relaxed">
        {children}
      </p>
    </div>
  );
}
