import React from "react";

export default function ModernLifestyleAyurveda() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1a1a1a] px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
          Ayurveda • Contemporary Living
        </p>

        <h1 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
          Modern Lifestyle & Ayurveda – Finding Balance in a Fast-Paced World
        </h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          While Ayurveda emerged thousands of years ago, its principles remain
          remarkably relevant. Today’s world is defined by speed, overstimulation,
          irregular routines, and chronic stress — factors that Ayurveda
          recognises as primary drivers of imbalance. Integrating ancient wisdom
          into modern living offers a pathway to stability and resilience.
        </p>

        <Section title="⚡ The Challenge of Modern Rhythms">
          Artificial lighting, digital exposure, and unpredictable schedules
          disrupt natural biological cycles. Ayurveda emphasises the importance
          of aligning daily activities with innate physiological rhythms.
        </Section>

        <Section title="🧠 Mental Overload & Nervous Balance">
          Constant information flow and multitasking strain the nervous system.
          Ayurvedic practices encourage grounding rituals that calm excessive
          mental activity and restore clarity.
        </Section>

        <Section title="🔥 Irregular Habits & Digestive Health">
          Skipped meals, late eating, and processed foods weaken digestive fire
          (Agni). Ayurveda views digestive stability as foundational for energy,
          immunity, and skin vitality.
        </Section>

        <Section title="💤 Sleep Disruption & Recovery">
          Late nights and screen exposure impair restorative sleep. Consistent
          sleep cycles are central to regeneration, hormonal balance, and
          cognitive function.
        </Section>

        <Section title="🌿 Small Rituals, Profound Impact">
          Ayurveda does not demand drastic lifestyle changes. Simple, repeatable
          practices — mindful eating, adequate rest, gentle movement — gradually
          cultivate equilibrium.
        </Section>

        <Section title="🧘 Restoring Connection With Nature">
          Exposure to natural light, seasonal foods, and rhythmic routines help
          counterbalance modern environmental stressors. Harmony with nature
          remains a core Ayurvedic theme.
        </Section>

        <Section title="✨ Sustainable Balance Philosophy">
          Rather than rejecting modernity, Ayurveda provides adaptive tools.
          Balance is achieved through awareness, moderation, and consistency.
        </Section>

        <p className="text-lg text-gray-700 mt-12 leading-relaxed">
          In a world of accelerating pace, Ayurvedic wisdom offers stillness,
          rhythm, and resilience. Even modest integration of these principles
          can significantly enhance wellbeing and vitality.
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
