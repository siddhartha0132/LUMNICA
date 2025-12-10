// src/pages/Products.jsx

import { Link } from "react-router-dom";

const products = [
  {
    name: "Hydrating Aloe Essence",
    img: "https://images.unsplash.com/photo-1593890784046-26b96c308e79?q=80&w=2000&auto=format&fit=crop",
    slug: "aloe-essence"
  },
  {
    name: "Vitamin C Radiance Serum",
    img: "https://images.unsplash.com/photo-1600180758890-d8286b9fcf5f?q=80&w=2000&auto=format&fit=crop",
    slug: "radiance-serum"
  },
  {
    name: "Botanical Face Cleanser",
    img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2000&auto=format&fit=crop",
    slug: "face-cleanser"
  },
  {
    name: "Overnight Renewal Cream",
    img: "https://images.unsplash.com/photo-1620916654780-e71a073587b4?q=80&w=2000&auto=format&fit=crop",
    slug: "renewal-cream"
  },
  {
    name: "Rosehip Toning Mist",
    img: "https://images.unsplash.com/photo-1590480922894-6720f4c1737f?q=80&w=2000&auto=format&fit=crop",
    slug: "toning-mist"
  },
];

export default function Products() {

  return (
    <div className="min-h-screen bg-[#F8F6F4] text-[#1E3A34] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
            <h1 className="font-serif text-6xl md:text-7xl mb-4 text-[#1E3A34] tracking-tighter">
              The LUMNICA Collection
            </h1>
            <p className="text-xl font-light italic text-[#A68A6A] mb-8">
              Curated Essentials for Timeless Radiance — Launching Soon.
            </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">

          {products.map((p, i) => (
            <div 
                key={i}
                className="group block transition duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl bg-[#F8F6F4]"
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />

                {/* Launching Soon Label */}
                <span className="absolute top-4 left-4 text-xs uppercase tracking-widest px-3 py-1 text-[#A68A6A] border border-[#A68A6A] bg-white/80 backdrop-blur-sm">
                  Launching Soon
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6 text-center">
                <h2 className="font-serif text-2xl text-[#1E3A34] mt-2 group-hover:text-[#A68A6A] transition">
                    {p.name}
                </h2>

                {/* No Price */}
                {/* No Quick View */}
              </div>
            </div>
          ))}

          {/* Future Product Slot */}
          <div className="hidden lg:block col-span-1 p-4">
            <div className="h-full border border-dashed border-[#EBE8E4] flex flex-col justify-center items-center p-8 text-center">
                <p className="text-xl font-serif text-[#A68A6A] mb-3">More Coming Soon</p>
                <p className="text-sm text-[#1E3A34]/70">New formulations are currently in development.</p>
                <Link 
                  to="/contact" 
                  className="mt-4 text-sm underline text-[#1E3A34] hover:text-[#A68A6A]"
                >
                  Get Notified
                </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
