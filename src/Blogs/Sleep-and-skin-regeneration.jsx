import React from "react";

export default function SleepAndSkinRegeneration() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1a1a1a] px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
          Ayurveda • Restoration & Renewal
        </p>

        <h1 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
          Sleep & Skin Regeneration – The Nighttime Renewal Cycle
        </h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Ayurveda considers sleep (Nidra) one of the three pillars of health,
          alongside nourishment and balanced energy. During rest, the body
          undergoes profound repair and rejuvenation processes that directly
          influence skin vitality, clarity, and resilience.
        </p>

        <Section title="🌙 The Biological Repair Window">
          Nighttime is when cellular restoration intensifies. Tissue recovery,
          metabolic recalibration, and systemic detoxification naturally
          accelerate during deep sleep.
        </Section>

        <Section title="✨ Skin Regeneration & Renewal">
          Skin cells follow circadian rhythms. Adequate rest supports collagen
          synthesis, barrier repair, and hydration balance — essential for a
          healthy, luminous complexion.
        </Section>

        <Section title="🔥 Sleep & Dosha Balance">
          Proper sleep stabilises Vata and Pitta doshas, both closely linked
          to dryness, sensitivity, inflammation, and premature ageing when
          disturbed.
        </Section>

        <Section title="😌 Consequences of Sleep Deprivation">
          Insufficient rest disrupts hormonal and metabolic balance. Ayurveda
          associates poor sleep with dullness, uneven texture, fatigue-related
          changes, and reduced skin resilience.
        </Section>

        <Section title="🧘 Preparing the Body for Rest">
          Evening rituals — light meals, reduced stimulation, calming practices,
          and consistent sleep timing — enhance sleep quality and restorative
          depth.
        </Section>

        <Section title="💧 Hydration & Overnight Recovery">
          Internal hydration and balanced nutrition influence how effectively
          tissues regenerate overnight. Skin health remains closely tied to
          systemic nourishment.
        </Section>

        <Section title="🌿 Sleep as a Beauty Ritual">
          Ayurveda views sleep not merely as inactivity but as a deeply active
          healing state. Consistent, quality rest is among the most powerful
          rejuvenation practices.
        </Section>

        <p className="text-lg text-gray-700 mt-12 leading-relaxed">
          By honouring natural sleep cycles, the body’s regenerative
          intelligence is supported. Radiance, clarity, and vitality often
          emerge as visible reflections of restorative rest.
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
