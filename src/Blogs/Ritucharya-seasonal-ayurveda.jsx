import React from "react";

export default function RitucharyaSeasonalAyurveda() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1a1a1a] px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
          Ayurveda • Seasonal Wisdom
        </p>

        <h1 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
          Ritucharya – Seasonal Living in Ayurveda for Lasting Balance
        </h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Ritucharya, a central Ayurvedic principle, refers to aligning lifestyle,
          diet, and daily habits with the changing seasons. As nature transforms,
          so do the influences on our body and mind. Adapting consciously
          preserves equilibrium, strengthens resilience, and prevents imbalance.
        </p>

        <Section title="🌍 Why Seasonal Alignment Matters">
          Each season carries distinct qualities — temperature, humidity,
          and environmental shifts that directly affect the doshas. Ignoring
          these transitions may gradually disturb internal harmony.
        </Section>

        <Section title="🔥 Dosha Fluctuations Across Seasons">
          Ayurveda explains that Vata, Pitta, and Kapha naturally accumulate,
          aggravate, and pacify at different times of the year. Seasonal routines
          help counteract these fluctuations before they manifest as discomfort.
        </Section>

        <Section title="🥗 Seasonal Nutrition & Digestion">
          Digestive strength varies with climate. Warmer foods may be needed
          during colder months, while lighter, cooling choices suit hotter
          periods. Food becomes medicine when aligned with nature.
        </Section>

        <Section title="💧 Skin & Environmental Changes">
          Skin responds dynamically to seasonal conditions. Dryness, sensitivity,
          or excess oiliness often reflect environmental influences rather than
          isolated concerns.
        </Section>

        <Section title="🧘 Lifestyle & Activity Adjustments">
          Energy levels and biological rhythms shift with daylight and
          temperature. Sleep patterns, exercise intensity, and self-care rituals
          benefit from seasonal adaptation.
        </Section>

        <Section title="🌿 Prevention Through Awareness">
          Ritucharya embodies Ayurveda’s preventive philosophy. Minor,
          mindful adjustments sustain vitality and reduce the likelihood of
          imbalance.
        </Section>

        <Section title="✨ Harmonising With Natural Cycles">
          Rather than resisting change, Ayurveda encourages fluidity. Living
          in rhythm with seasonal intelligence cultivates stability, clarity,
          and long-term wellbeing.
        </Section>

        <p className="text-lg text-gray-700 mt-12 leading-relaxed">
          By embracing Ritucharya, health becomes a continuous dialogue with
          nature. Small seasonal refinements create profound effects on body,
          mind, and skin.
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
