import React from "react";

export default function AyurvedicSkincarePrinciples() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1a1a1a] px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
          Ayurveda • Skincare Wisdom
        </p>

        <h1 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
          Ayurvedic Skincare Principles – Beauty Rooted in Balance
        </h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Ayurveda views skin as a reflection of internal harmony rather than
          a surface to be treated in isolation. True radiance emerges when the
          body, mind, and lifestyle are aligned with nature’s rhythms. These
          ancient principles emphasise nourishment, prevention, and balance.
        </p>

        <Section title="🌿 Skin as a Mirror of Health">
          In Ayurveda, skin health is deeply connected to digestion, sleep,
          stress levels, and toxin accumulation. External treatments alone
          cannot create lasting results without internal balance.
        </Section>

        <Section title="🔥 Role of the Doshas">
          Each skin type corresponds to Vata, Pitta, or Kapha dominance.
          Understanding your dosha helps tailor ingredients, routines, and
          lifestyle choices for optimal skin vitality.
        </Section>

        <Section title="🧴 Nourishment Over Correction">
          Ayurvedic skincare prioritises feeding and protecting the skin rather
          than aggressively stripping or suppressing symptoms. Oils, herbs,
          and gentle rituals restore the skin’s natural intelligence.
        </Section>

        <Section title="🌞 Aligning with Natural Cycles">
          Daily and seasonal routines (Dinacharya & Ritucharya) play a critical
          role. Hydration, cleansing, and nourishment shift with environmental
          changes to maintain equilibrium.
        </Section>

        <Section title="💧 Importance of Hydration & Oiling">
          Proper hydration and oil application prevent premature ageing,
          dryness, and sensitivity. Oils act as both protectors and carriers
          of botanical intelligence.
        </Section>

        <Section title="🧘 Stress & Emotional Balance">
          Mental disturbances directly influence skin conditions. Practices
          like meditation, breathwork, and adequate rest are considered
          essential beauty rituals.
        </Section>

        <Section title="✨ Prevention as the Ultimate Treatment">
          Rather than reacting to concerns, Ayurveda focuses on maintaining
          balance to prevent imbalances from manifesting as skin issues.
        </Section>

        <p className="text-lg text-gray-700 mt-12 leading-relaxed">
          By embracing Ayurvedic principles, skincare becomes a mindful ritual
          rather than a corrective routine. Consistency, gentleness, and
          alignment with nature cultivate long-term radiance.
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
