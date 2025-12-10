import banner from "../assets/LUMNICA1.png";

export default function Home() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans">

      {/* HERO */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-14 items-center">

          {/* TEXT */}
          <div className="md:col-span-5 space-y-7 text-center md:text-left">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-tight text-[#1E2D2B]">
              Serving Luxury to  
              World-Class Hospitality
            </h1>

            <p className="text-lg md:text-xl italic text-[#A38E6A]">
              Premium Guest Experiences — Elevated by Design.
            </p>

            <p className="text-[#1E2D2B]/80 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              LUMNICA crafts refined luxury care essentials for hotels, resorts, and premium accommodations —
              enhancing every guest touchpoint with elegance, quality, and unforgettable comfort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a
                href="/products"
                className="px-10 py-3 bg-white border border-[#1E2D2B] text-[#1E2D2B] hover:bg-[#A38E6A] hover:text-white transition uppercase tracking-widest text-sm shadow-md text-center"
              >
                View Hotel Collection
              </a>

              <a
                href="/story"
                className="text-[#1E2D2B]/70 hover:text-[#A38E6A] transition uppercase tracking-widest text-sm px-6 py-3 text-center"
              >
                Our Luxury Vision
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="md:col-span-7 relative flex justify-center">
            <img
              src={banner}
              alt="LUMNICA Luxury Hospitality Hero"
              className="w-full max-w-md md:max-w-full object-cover rounded-sm shadow-xl"
            />

            <div className="absolute -bottom-4 -right-4 w-14 h-14 border-b border-r border-[#A38E6A] hidden md:block" />
          </div>

        </div>
      </section>

      {/* BRAND PHILOSOPHY */}
      <section className="py-24 bg-[#EBEBE3] border-y border-[#E0DED7]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-serif text-4xl text-[#1E2D2B]">
            Where Hospitality Meets Timeless Luxury
          </h2>

          <p className="text-[#1E2D2B]/70 max-w-3xl mx-auto leading-relaxed">
            LUMNICA partners with premium hotels and boutique accommodations to deliver thoughtfully designed,
            high-quality guest essentials that elevate brand perception and unforgettable stay experiences.
          </p>
        </div>
      </section>

      {/* OUR STANDARDS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-14 text-center">

          <div>
            <span className="text-4xl text-[#A38E6A]">&#x1F3E8;</span>
            <h3 className="mt-4 text-xl font-medium text-[#1E2D2B]">Hotel-Grade Quality</h3>
            <p className="text-[#1E2D2B]/70 text-sm mt-2">
              Crafted for premium hospitality environments.
            </p>
          </div>

          <div>
            <span className="text-4xl text-[#A38E6A]">&#x1F48E;</span>
            <h3 className="mt-4 text-xl font-medium text-[#1E2D2B]">Luxury Formulations</h3>
            <p className="text-[#1E2D2B]/70 text-sm mt-2">
              Designed for memorable guest experiences.
            </p>
          </div>

          <div>
            <span className="text-4xl text-[#A38E6A]">&#x1F9EA;</span>
            <h3 className="mt-4 text-xl font-medium text-[#1E2D2B]">Clean & Safe</h3>
            <p className="text-[#1E2D2B]/70 text-sm mt-2">
              Free from harsh chemicals and irritants.
            </p>
          </div>

          <div>
            <span className="text-4xl text-[#A38E6A]">&#x267B;</span>
            <h3 className="mt-4 text-xl font-medium text-[#1E2D2B]">Luxury Packaging</h3>
            <p className="text-[#1E2D2B]/70 text-sm mt-2">
              Designed to match five-star interiors.
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
            Hospitality brands need more than products — they need experiences.
            LUMNICA exists to help hotels create moments guests never forget.
          </p>
        </div>
      </section>

      {/* CRAFTED WITH PURPOSE */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-serif text-4xl text-[#1E2D2B]">
            Crafted for Memorable Stays
          </h2>

          <p className="text-[#1E2D2B]/70 max-w-2xl mx-auto leading-relaxed">
            Every detail is crafted to strengthen guest satisfaction, brand loyalty,
            and premium market positioning for luxury hospitality partners.
          </p>
        </div>
      </section>

    </div>
  );
}
