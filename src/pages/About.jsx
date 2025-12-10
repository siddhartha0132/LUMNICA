// src/pages/About.jsx

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F6F4] text-[#1E3A34] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ------------------------- HEADER ------------------------- */}
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-6xl md:text-7xl tracking-tight mb-6 text-[#1E3A34]">
            Our Philosophy
          </h1>

          <h2 className="text-2xl font-light italic text-[#A68A6A] mb-12">
            Purity, Intention, and the Art of Timeless Skincare.
          </h2>

          <p className="text-xl leading-relaxed max-w-4xl text-[#1E3A34]/90 mb-16">
            Lumnica was born from a singular commitment: to honor the restorative power of nature 
            while demanding the precision of modern science. Every formulation is a deliberate 
            blend of pure botanicals, clean actives, and ethical sourcing—crafted for those who 
            view skincare as a ritual, not a routine.
          </p>
        </div>

        <hr className="border-t border-[#1E3A34]/10 my-12" />

        {/* ------------------------- VISION + MISSION ------------------------- */}
        <div className="grid md:grid-cols-3 gap-14 mt-20">

          {/* Vision */}
          <div className="md:col-span-1 p-6 border-l-2 border-[#A68A6A] bg-[#F8F6F4]">
            <h3 className="font-serif text-3xl mb-4 text-[#A68A6A]">Our Vision</h3>
            <p className="text-lg leading-relaxed text-[#1E3A34]/80">
              To redefine minimal luxury skincare by merging modern efficiency with natural purity—
              creating an experience that feels premium, performs exceptionally, and inspires 
              conscious beauty.
            </p>
          </div>

          {/* Mission + Sourcing */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-10">

            <div className="p-8 border border-[#EBE8E4] shadow-sm bg-white">
              <h3 className="font-serif text-2xl text-[#1E3A34] mb-4">The Mission</h3>
              <p className="text-base leading-relaxed text-[#1E3A34]/70">
                To craft clean, effective, and transparent formulas supported by ethical sourcing.
                We design products that elevate daily rituals through intentional formulation &
                timeless aesthetics.
              </p>
            </div>

            <div className="p-8 border border-[#EBE8E4] shadow-sm bg-white">
              <h3 className="font-serif text-2xl text-[#1E3A34] mb-4">Sourcing & Purity</h3>
              <p className="text-base leading-relaxed text-[#1E3A34]/70">
                We prioritize potent botanicals harvested at peak purity. Every ingredient undergoes 
                rigorous testing to ensure it is free from parabens, sulfates, silicones, and synthetic 
                fillers—nothing unnecessary, nothing harmful.
              </p>
            </div>

          </div>
        </div>

        <hr className="border-t border-[#1E3A34]/10 my-16" />

        {/* ------------------------- BRAND ETHOS ------------------------- */}
        <section className="mt-20 max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl text-[#1E3A34] mb-8">
            A Philosophy Built on Conscious Luxury
          </h2>

          <p className="text-lg leading-relaxed text-[#1E3A34]/80 mb-10">
            Lumnica represents a deeper understanding of beauty—one that values balance, purity, 
            sustainability, and emotional well-being.
          </p>

          <div className="grid md:grid-cols-3 gap-12">

            <div>
              <h4 className="font-serif text-2xl text-[#A68A6A] mb-4">Purity</h4>
              <p className="text-[#1E3A34]/70 leading-relaxed">
                Every formulation starts with nature’s pure botanicals—intentional, potent, and 
                uncompromised.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-2xl text-[#A68A6A] mb-4">Intention</h4>
              <p className="text-[#1E3A34]/70 leading-relaxed">
                Each detail is refined with purpose—minimal yet powerful, modern yet rooted.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-2xl text-[#A68A6A] mb-4">Sustainability</h4>
              <p className="text-[#1E3A34]/70 leading-relaxed">
                Eco-luxury defines our process—from sourcing to packaging, every choice honors 
                the planet.
              </p>
            </div>

          </div>
        </section>

        {/* ------------------------- FOUNDER QUOTE (UNCHANGED) ------------------------- */}
        <section className="mt-24 max-w-4xl mx-auto bg-[#EAE8E5] p-10 md:p-16 border-l-8 border-[#A68A6A]">
          <p className="text-3xl font-serif italic text-[#1E3A34] leading-snug">
            “Skincare is not just a routine, it is a ritual of self-reverence. Lumnica is our promise 
            to make that ritual beautiful, effective, and deeply honest.”
          </p>
          <p className="mt-6 text-lg font-medium text-[#A68A6A]">
            — Akshat, Founder of Lumnica
          </p>
        </section>

        {/* ------------------------- NEW STATEMENT BELOW AKSHAT QUOTE ------------------------- */}
        <div className="max-w-4xl mx-auto mt-10">
          <p className="text-xl text-[#1E3A34]/80 font-light leading-relaxed italic text-center">
            Together with co-founders Rishi and Siddhartha, Lumnica continues to evolve—guided 
            by integrity, innovation, and the belief that true luxury begins with purpose.
          </p>
        </div>

      </div>
    </div>
  );
}

