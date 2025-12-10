import banner from "../assets/imagebannerLUMNICA.png";

export default function Home() {

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans">

      {/* HERO */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-20 items-center">

          {/* TEXT */}
          <div className="md:col-span-5 space-y-8">
            <h1 className="font-serif text-5xl sm:text-7xl leading-tight text-[#1E2D2B]">
              Skincare Rooted in Ancient Purity
            </h1>

            <p className="text-xl italic text-[#A38E6A]">
              Ayurveda. Science. Results — Refined for the Modern Ritual.
            </p>

            <p className="text-[#1E2D2B]/80 text-lg leading-relaxed max-w-md">
              Crafted with ethically sourced botanicals and clinically validated actives,
              LUMNICA represents a new era of intentional, conscious skincare.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="/products"
                className="px-10 py-3 bg-white border border-[#1E2D2B] text-[#1E2D2B] hover:bg-[#A38E6A] hover:text-white transition uppercase tracking-widest text-sm shadow-md"
              >
                Explore Collection
              </a>

              <a
                href="/story"
                className="text-[#1E2D2B]/70 hover:text-[#A38E6A] transition uppercase tracking-widest text-sm px-6 py-3"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="md:col-span-7 relative">
            <img
              src={banner}
              alt="LUMNICA Hero"
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-14 h-14 border-b border-r border-[#A38E6A]" />
          </div>
        </div>
      </section>

      {/* BRAND PHILOSOPHY */}
      <section className="py-24 bg-[#EBEBE3] border-y border-[#E0DED7]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-serif text-4xl text-[#1E2D2B]">
            Where Tradition Meets Modern Skin Science
          </h2>

          <p className="text-[#1E2D2B]/70 max-w-3xl mx-auto leading-relaxed">
            LUMNICA blends Ayurvedic wisdom with clinically proven formulations —
            creating skincare that is pure, effective, and deeply respectful of the planet.
          </p>
        </div>
      </section>

      {/* OUR STANDARDS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-14 text-center">

          <div>
            <span className="text-4xl text-[#A38E6A]">&#x2741;</span>
            <h3 className="mt-4 text-xl font-medium text-[#1E2D2B]">Pure & Ethical</h3>
            <p className="text-[#1E2D2B]/70 text-sm mt-2">
              100% natural, clinically active ingredients.
            </p>
          </div>

          <div>
            <span className="text-4xl text-[#A38E6A]">&#x1FAD7;</span>
            <h3 className="mt-4 text-xl font-medium text-[#1E2D2B]">Ayurvedic Precision</h3>
            <p className="text-[#1E2D2B]/70 text-sm mt-2">
              Fast-acting, science-backed formulations.
            </p>
          </div>

          <div>
            <span className="text-4xl text-[#A38E6A]">&#x2728;</span>
            <h3 className="mt-4 text-xl font-medium text-[#1E2D2B]">Zero Toxins</h3>
            <p className="text-[#1E2D2B]/70 text-sm mt-2">
              No parabens, sulfates, or synthetic fragrance.
            </p>
          </div>

          <div>
            <span className="text-4xl text-[#A38E6A]">&#x267B;</span>
            <h3 className="mt-4 text-xl font-medium text-[#1E2D2B]">Eco-Luxury</h3>
            <p className="text-[#1E2D2B]/70 text-sm mt-2">
              Sustainable, premium packaging.
            </p>
          </div>

        </div>
      </section>

      {/* WHY LUMNICA */}
      <section className="py-20 bg-[#F3F1EC]">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-3xl font-serif text-[#1E2D2B]">
            Why LUMNICA Exists
          </h2>

          <p className="text-[#1E2D2B]/70 max-w-2xl mx-auto">
            Consumers today demand transparent, clean, effective skincare.
          </p>
        </div>
      </section>

      {/* CRAFTED WITH PURPOSE */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-serif text-4xl text-[#1E2D2B]">
            Crafted With Purpose
          </h2>

          <p className="text-[#1E2D2B]/70 max-w-2xl mx-auto leading-relaxed">
            Made for conscious users who seek authenticity and visible results.
          </p>
        </div>
      </section>

    </div>
  );
}
