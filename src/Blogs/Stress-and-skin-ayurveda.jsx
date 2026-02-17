import React from "react";

export default function StressAndSkinAyurveda() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1a1a1a] px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
          Ayurveda • Mind-Body Balance
        </p>

        <h1 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
          Stress & Skin in Ayurveda – The Invisible Connection
        </h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Ayurveda recognises skin as a sensitive indicator of internal and
          emotional states. Persistent stress disturbs physiological balance,
          weakens digestion, and disrupts hormonal harmony — all of which
          influence skin clarity, sensitivity, and ageing patterns.
        </p>

        <Section title="🧠 The Mind–Skin Relationship">
          In Ayurvedic philosophy, the mind and body function as an integrated
          system. Emotional disturbances directly influence bodily processes,
          often manifesting through the skin.
        </Section>

        <Section title="🔥 Stress & Dosha Imbalance">
          Chronic stress commonly aggravates Vata and Pitta doshas. This may
          contribute to dryness, inflammation, reactivity, or unpredictable
          skin behaviour.
        </Section>

        <Section title="💨 Nervous System & Skin Response">
          Heightened nervous activity alters circulation and metabolic
          efficiency, potentially accelerating sensitivity, dullness, or
          premature ageing.
        </Section>

        <Section title="🍵 Digestion Under Stress">
          Mental strain weakens Agni (digestive fire), impairing nutrient
          assimilation and encouraging toxin accumulation — both essential
          factors in skin health.
        </Section>

        <Section title="🧘 Restorative Rituals">
          Ayurveda emphasises calming practices such as meditation,
          breathwork, Abhyanga (oil massage), and adequate rest to stabilise
          the nervous system.
        </Section>

        <Section title="🌿 Adaptogenic Support">
          Certain Ayurvedic herbs traditionally support resilience against
          stress, helping maintain systemic equilibrium that indirectly
          benefits skin vitality.
        </Section>

        <Section title="✨ Holistic Beauty Perspective">
          Rather than viewing skin concerns as isolated events, Ayurveda
          encourages addressing underlying lifestyle and emotional influences
          for lasting radiance.
        </Section>

        <p className="text-lg text-gray-700 mt-12 leading-relaxed">
          By managing stress and cultivating mental steadiness, the skin is
          allowed to function optimally. Inner calm often becomes visibly
          reflected as clarity and glow.
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
