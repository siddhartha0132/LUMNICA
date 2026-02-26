import React from "react";

export default function Customized() {
  return (
    <div className="bg-[#FAF9F6] text-[#1E2D2B]">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-3xl md:text-5xl tracking-wide mb-6">
          A Ritual As Unique As Your Skin
        </h1>
        <p className="text-[15px] leading-relaxed text-black/70">
          Every skin, like every work of art, is entirely its own. At Lumnica,
          the creation of personalised formulations blends ancient Ayurvedic
          wisdom with meticulous craftsmanship.
        </p>
      </section>

      {/* STORY SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-24 space-y-10 text-[15px] leading-relaxed text-black/70">
        <p>
          Every brushstroke on a canvas is intentional. Every handful of clay a
          potter shapes is measured. Each formulation begins with a careful
          consultation, where our experts assess your unique constitution
          (Prakriti) and specific concerns.
        </p>

        <h2 className="text-2xl text-black mt-10">
          A Healing Ritual, Not Just Skincare
        </h2>

        <div className="space-y-6">
          <p>
            <strong>Thoughtful Ingredient Curation</strong><br />
            Every ingredient is chosen with intention — freshly harvested
            botanicals, cold-pressed oils, mineral-rich extracts and potent
            actives sourced for purity.
          </p>

          <p>
            <strong>Infusion & Blending with Rhythm</strong><br />
            Herbs are slowly infused into base oils over gentle heat, allowing
            therapeutic properties to meld. Each blend is hand-stirred with
            patience and precision.
          </p>

          <p>
            <strong>Customised For Your Dosha</strong><br />
            Drawing upon centuries-old Ayurvedic texts and individual analysis,
            a harmonious blend is formulated exclusively for you.
          </p>

          <p>
            <strong>Final Packaging With An Invocation</strong><br />
            Once perfected, your formulation is sealed in glass to preserve
            freshness. A final blessing is offered, invoking balance and
            well-being.
          </p>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="bg-white py-24 px-6 text-center">
        <h2 className="text-2xl md:text-3xl mb-6">
          Sometimes Generic Skincare Doesn’t Work
        </h2>
        <p className="text-black/70 mb-10">
          You may have more unique concerns. Your skin deserves precision.
        </p>

        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-10 text-sm">
          <div>
            <p className="text-black/50">Conventional routines contain</p>
            <p className="text-xl mt-2">5–10 targeted actives</p>
          </div>

          <div>
            <p className="text-black/50">Lumnica Customised Skincare contains</p>
            <p className="text-xl mt-2">35–50 targeted actives</p>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="max-w-5xl mx-auto px-6 py-24 space-y-10">
        <h2 className="text-2xl text-center mb-10">
          Remarkable Transformations
        </h2>

        <div className="space-y-6 text-[15px] text-black/70">
          <p>
            <strong>Experienced Hydrated Skin — 98%*</strong><br />
            *Based on clinical observations conducted over controlled testing
            periods.
          </p>

          <p>
            <strong>Visibly Smoother Wrinkles & Lifted Skin — 96%*</strong>
          </p>

          <p>
            <strong>Improved Elasticity & Firmer Skin — 94%*</strong>
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-white py-24 px-6">
        <h2 className="text-2xl text-center mb-16">
          How To Customise?
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-sm">
          {[
            "Book Your Consultation",
            "Take Our Skin Analysis",
            "Expert Connects With You",
            "Creating The Formula",
            "Formula Presented",
            "Delivered To Your Door",
          ].map((step, i) => (
            <div key={i} className="border p-6">
              <p className="text-black/40 mb-2">Step {i + 1}</p>
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-10 py-3 bg-[#1E2D2B] text-white tracking-wide">
            Book Your Consultation
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-24 space-y-6">
        <h2 className="text-2xl mb-6">FAQs</h2>

        <div className="space-y-4 text-[15px] text-black/70">
          <p><strong>What is a Customised Cream?</strong></p>
          <p>
            Each skin type is unique. Our personalised formulations are crafted
            after understanding your skin’s distinct needs.
          </p>

          <p><strong>Why choose customised skincare?</strong></p>
          <p>
            Because precision leads to better results. Your formulation evolves
            with your skin.
          </p>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#1E2D2B] text-white py-20 px-6 text-center">
        <h3 className="text-xl mb-4">Stay up to date</h3>
        <p className="text-white/70 mb-6">
          Receive updates on new previews, rituals & exclusive launches.
        </p>

        <div className="flex justify-center gap-2">
          <input
            placeholder="Email"
            className="px-4 py-2 text-black w-64"
          />
          <button className="px-6 bg-white text-black">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}