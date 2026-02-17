import React from "react";

export default function AyurvedicHerbsForSkin() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1a1a1a] px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
          Ayurveda • Botanical Intelligence
        </p>

        <h1 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
          Ayurvedic Herbs for Skin – Nature’s Ancient Beauty Elixirs
        </h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Ayurveda has long relied on powerful botanicals to maintain skin
          vitality, clarity, and resilience. Unlike modern quick-fix solutions,
          Ayurvedic herbs work in harmony with the body, supporting natural
          repair and balance. These time-honoured ingredients continue to
          define holistic beauty rituals.
        </p>

        <Section title="🌿 Neem – The Purifier">
          Revered for its detoxifying and antibacterial qualities, Neem helps
          maintain clear skin and supports balance in acne-prone or reactive
          conditions. It is widely used for its cleansing and protective nature.
        </Section>

        <Section title="✨ Turmeric – The Radiance Enhancer">
          Turmeric is celebrated for promoting luminosity and even tone.
          Its antioxidant and soothing properties make it a cornerstone of
          traditional beauty formulations.
        </Section>

        <Section title="🌸 Sandalwood – The Cooling Soother">
          Known for its calming and cooling effects, Sandalwood is often used
          to comfort sensitive or overheated skin while imparting a refined,
          healthy glow.
        </Section>

        <Section title="🍃 Tulsi – The Rejuvenator">
          Holy Basil supports skin defence against environmental stressors.
          It is valued for its purifying, revitalising, and clarifying benefits.
        </Section>

        <Section title="💧 Aloe Vera – The Hydration Healer">
          A universal Ayurvedic favourite, Aloe Vera deeply hydrates,
          softens, and supports skin recovery. It is ideal for maintaining
          suppleness and comfort.
        </Section>

        <Section title="🌺 Manjistha – The Complexion Refiner">
          Traditionally associated with blood purification, Manjistha is used
          to enhance complexion clarity and support natural detox processes
          that influence skin appearance.
        </Section>

        <Section title="🌱 Ashwagandha – The Stress Shield">
          This adaptogenic herb helps counter the visible effects of stress
          and fatigue, supporting youthful, resilient skin through systemic
          balance.
        </Section>

        <p className="text-lg text-gray-700 mt-12 leading-relaxed">
          The wisdom of Ayurvedic herbs lies in their gentle yet profound
          action. By embracing botanical intelligence, skincare becomes a
          ritual of nourishment rather than correction.
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
