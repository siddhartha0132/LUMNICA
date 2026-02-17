import React from "react";

export default function GutHealthAndSkinAyurveda() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1a1a1a] px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
          Ayurveda • Inner Balance
        </p>

        <h1 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
          Gut Health & Skin in Ayurveda – Beauty Begins Within
        </h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Ayurveda teaches that radiant skin is not created solely through
          external care but through internal harmony. Central to this wisdom
          is the concept of Agni — the digestive fire responsible for
          transformation, absorption, and nourishment. When digestion is
          balanced, skin naturally reflects vitality and clarity.
        </p>

        <Section title="🔥 Agni – The Foundation of Health">
          Strong digestive fire ensures nutrients are properly assimilated
          while preventing toxin accumulation. Impaired Agni leads to Ama
          (toxins), which Ayurveda associates with dullness, congestion,
          and skin disturbances.
        </Section>

        <Section title="🌿 Ama & Skin Imbalances">
          Toxin buildup disrupts physiological balance and often manifests
          through the skin. Breakouts, uneven texture, and lack of glow are
          traditionally linked to internal digestive inefficiencies.
        </Section>

        <Section title="💧 Nutrient Absorption & Glow">
          Even the most luxurious skincare cannot replace proper nutrition.
          Efficient digestion allows tissues to receive essential building
          blocks for repair, hydration, and resilience.
        </Section>

        <Section title="🍵 Dietary Rhythms & Simplicity">
          Ayurveda emphasises warm, freshly prepared meals, mindful eating,
          and appropriate food combinations. These practices support digestive
          stability and reduce metabolic stress.
        </Section>

        <Section title="🧘 Stress, Digestion & Skin">
          Mental turbulence directly weakens digestion. Chronic stress may
          disturb gut function, indirectly affecting skin clarity, sensitivity,
          and ageing patterns.
        </Section>

        <Section title="🌞 Daily Rituals for Digestive Balance">
          Simple practices such as drinking warm water, eating at consistent
          times, and favouring easily digestible foods help maintain Agni and
          overall equilibrium.
        </Section>

        <Section title="✨ Holistic Beauty Perspective">
          Ayurveda views beauty as a byproduct of systemic balance. Supporting
          gut health enhances not only skin appearance but also energy,
          immunity, and mental clarity.
        </Section>

        <p className="text-lg text-gray-700 mt-12 leading-relaxed">
          By nurturing digestion and respecting the body’s natural rhythms,
          skincare evolves from surface treatment into a deeply integrative
          ritual. True radiance is cultivated from within.
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
