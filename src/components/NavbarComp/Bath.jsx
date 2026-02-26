import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import prode from "./image.png"
// Mock Data for 1 Product (You can map this later)
const products = [
  {
    id: 1,
    name: "Amrita Saar Body Wash",
    price: "149",
    image: prode, // Replace with your actual product image
    tag: "Best Seller",
    size: "200ml",
    rating: 4.8
  },
];

const BathAndBody = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#FAF9F6]">
      {/* 1. SECTION HEADER (Forest Essentials Style) */}
      <div className="text-center py-12 px-5 max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl text-[#2D2926] tracking-wide">
          Bath & Body
        </h1>
        <div className="w-16 h-[1px] bg-[#C8A96A] mx-auto my-6"></div>
        <p className="text-[13px] uppercase tracking-[0.2em] text-gray-500 leading-relaxed">
          Infuse your daily ritual with the essence of pure botanicals and 
          ancient Ayurvedic wisdom.
        </p>
      </div>

      {/* 2. PRODUCT FILTER BAR (Simple & Clean) */}
      <div className="max-w-[1400px] mx-auto border-y border-black/5 py-4 px-10 flex justify-between items-center bg-white/50">
        <span className="text-[11px] uppercase tracking-widest text-gray-400">
          {products.length} Products Found
        </span>
        <div className="flex gap-8 text-[11px] uppercase tracking-widest font-medium">
          <button className="hover:text-[#C8A96A] transition-colors">Filter</button>
          <button className="hover:text-[#C8A96A] transition-colors">Sort By</button>
        </div>
      </div>

      {/* 3. PRODUCT GRID */}
      <div className="max-w-[1400px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F3F3F3]">
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 bg-[#C8A96A] text-white text-[9px] uppercase tracking-widest px-3 py-1">
                    {product.tag}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover Quick Add */}
                <button className="absolute bottom-0 left-0 w-full bg-black/80 text-white py-4 text-[11px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Quick Add +
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-6 text-center">
                <div className="flex justify-center items-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-[#C8A96A] text-[#C8A96A]" />
                  <span className="text-[10px] text-gray-500">{product.rating}</span>
                </div>
                
                <h3 className="font-serif text-lg text-[#2D2926] leading-tight group-hover:text-[#C8A96A] transition-colors px-4">
                  {product.name}
                </h3>
                
                <p className="text-[11px] text-gray-400 mt-2 tracking-widest uppercase">
                  {product.size}
                </p>
                
                <p className="mt-3 font-medium text-[14px] text-gray-800 tracking-wider">
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* 4. BRAND PROMISE SECTION */}
      <div className="bg-[#F9F8F3] py-20 mt-10">
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="space-y-3">
            <h4 className="font-serif italic text-xl">Pure & Natural</h4>
            <p className="text-[12px] text-gray-500 leading-relaxed">Hand-pressed oils and steam-distilled floral waters.</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif italic text-xl">Ayurvedic Heritage</h4>
            <p className="text-[12px] text-gray-500 leading-relaxed">Traditional formulations passed down through generations.</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif italic text-xl">Cruelty Free</h4>
            <p className="text-[12px] text-gray-500 leading-relaxed">Responsibly sourced and never tested on animals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BathAndBody;