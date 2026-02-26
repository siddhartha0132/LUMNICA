import React from "react";

export default function Dinacharya() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1a1a1a] px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
          Ayurveda • Daily Rituals
        </p>

        <h1 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
          Dinacharya – The Ayurvedic Daily Routine for a Balanced Life
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Dinacharya, a foundational concept in Ayurveda, refers to the ideal
          daily routine designed to align the body with nature’s cycles. These
          timeless practices help maintain physical health, mental clarity, and
          emotional stability by harmonising our internal rhythms.
        </p>

        <Section title="🌅 Wake Up Early (Brahma Muhurta)">
          Ayurveda recommends waking before sunrise when the environment is
          calm and sattvic. This time promotes mental clarity, creativity,
          and vitality throughout the day.
        </Section>

        <Section title="🪥 Oral & Cleansing Rituals">
          Begin with tongue scraping and brushing to remove toxins (ama).
          Follow with warm water to stimulate digestion and internal cleansing.
        </Section>

        <Section title="🧘 Movement & Breath">
          Gentle yoga, stretching, or pranayama awakens circulation and
          balances the doshas. Even 10–15 minutes can significantly enhance
          energy levels.
        </Section>

        <Section title="🍵 Nourishing Breakfast">
          Eat warm, light, and easily digestible foods. Ayurveda discourages
          skipping meals, as it disrupts metabolic balance.
        </Section>

        <Section title="💼 Focused Work Period">
          Morning hours are ideal for deep, concentrated work. Mental
          sharpness is naturally higher during this period.
        </Section>

        <Section title="🍛 Main Meal at Midday">
          Digestive fire (Agni) peaks around noon. Consuming your largest
          meal now improves nutrient absorption and energy.
        </Section>

        <Section title="🌇 Evening Wind-Down">
          Reduce stimulation as sunset approaches. Light meals, relaxation,
          and minimal screen exposure support restorative sleep.
        </Section>

        <Section title="🌙 Sleep & Restoration">
          Sleeping before 10–11 PM aligns the body with natural repair
          cycles. Proper rest is essential for immunity and longevity.
        </Section>

        <p className="text-lg text-gray-700 mt-12 leading-relaxed">
          Consistently following Dinacharya cultivates resilience, improves
          digestion, stabilises mood, and enhances overall wellbeing. Small,
          mindful rituals practiced daily can profoundly transform health.
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
