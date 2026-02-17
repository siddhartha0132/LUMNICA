import React from "react";

export default function NaturalDetoxAyurveda() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1a1a1a] px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
          Ayurveda • Purification & Balance
        </p>

        <h1 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
          Natural Detox in Ayurveda – Gentle Purification for Lasting Vitality
        </h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Ayurveda approaches detoxification not as an extreme intervention,
          but as a gradual restoration of balance. Rather than aggressive
          cleansing, it emphasises supporting the body’s innate capacity to
          eliminate waste and maintain equilibrium through daily habits,
          nourishment, and mindful living.
        </p>

        <Section title="🔥 Understanding Ama – The Root of Imbalance">
          Ayurveda describes toxins as Ama, a byproduct of impaired digestion
          and metabolic inefficiency. Accumulated Ama is traditionally linked
          to sluggishness, dullness, and various imbalances.
        </Section>

        <Section title="💧 Daily Detox Through Simple Rituals">
          Small, consistent practices — such as drinking warm water, mindful
          eating, and proper sleep — play a central role in preventing toxin
          buildup and maintaining physiological clarity.
        </Section>

        <Section title="🥗 Nourishment Over Deprivation">
          Detoxification in Ayurveda does not require starvation or harsh
          restriction. Easily digestible, warm, and seasonal foods naturally
          assist purification while sustaining energy.
        </Section>

        <Section title="🧘 Movement & Circulation">
          Gentle physical activity stimulates circulation and lymphatic flow,
          encouraging efficient waste removal and metabolic vitality.
        </Section>

        <Section title="🌿 Role of Digestive Fire (Agni)">
          Strengthening Agni is considered the most effective detox strategy.
          Efficient digestion prevents toxin formation and optimises nutrient
          assimilation.
        </Section>

        <Section title="😌 Emotional & Mental Detox">
          Ayurveda recognises that mental disturbances can burden the system.
          Practices promoting calmness and clarity indirectly support internal
          purification.
        </Section>

        <Section title="✨ Sustainable Purification Philosophy">
          True detoxification is viewed as a continuous lifestyle rather than a
          temporary regimen. Stability and moderation preserve long-term
          wellbeing.
        </Section>

        <p className="text-lg text-gray-700 mt-12 leading-relaxed">
          By aligning with Ayurvedic wisdom, detox becomes a gentle,
          sustainable process that nurtures vitality instead of depleting it.
          Balance, not extremity, remains the guiding principle.
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
