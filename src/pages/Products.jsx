import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, CheckCircle2 } from "lucide-react";

// Importing the 5 images as requested
import img1 from "../assets/PRODUCT1.png"; 
import img2 from "../assets/PRODUCT2.png"; 
import img3 from "../assets/PRODUCT3.png"; 
import img4 from "../assets/PRODUCT4.png"; 
import img5 from "../assets/PRODUCT5.png"; 

export default function Products() {
  const products = [
    { id: 1, name: "AMRITA KESH SHAMPOO", rating: 5.0, reviews: 124, isNew: true, image: img1 },
    { id: 2, name: "AMRITA SNAN BODY WASH", rating: 4.8, reviews: 42, isNew: false, image: img2 },
    { id: 3, name: "AMRITA MRIDU CONDITIONER", rating: 4.7, reviews: 12, isNew: true, image: img3 },
    { id: 4, name: "AMRITA MUKHA FACE WASH", rating: 4.9, reviews: 89, isNew: false, image: img4 },
    { id: 5, name: "AMRITA SAAR MOISURIZER", rating: 4.6, reviews: 24, isNew: true, image: img5 }, // Using img1 as a placeholder for the 6th
  ];

  return (
    <main className="bg-white min-h-screen pt-36 pb-20">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* ===== 6 PRODUCT GRID (KIMIRICA FORMAT) ===== */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-10 md:gap-y-16">
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[1/1.1] bg-[#F9F9F9] overflow-hidden mb-5 flex items-center justify-center">
                {/* New Launch Badge */}
                {product.isNew && (
                  <div className="absolute top-0 left-0 bg-black text-white text-[9px] font-bold px-3 py-1.5 z-10 uppercase tracking-widest shadow-sm">
                    New Launch
                  </div>
                )}
                
                {/* Wishlist Heart */}
                <button className="absolute top-3 right-3 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-all duration-300 shadow-sm border border-gray-100">
                  <Heart size={16} className="text-gray-500 hover:text-red-500 transition-colors" />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[85%] h-[85%] object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* PRODUCT INFO */}
              <div className="flex flex-col items-start px-1">
                <h3 className="text-[12px] md:text-[13px] font-semibold tracking-[0.1em] text-gray-800 uppercase mb-3 leading-snug min-h-[35px]">
                  {product.name}
                </h3>

                {/* RATINGS & REVIEWS (KIMIRICA BLUE CHECK STYLE) */}
                <div className="flex items-center gap-2 text-[11px]">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-bold">{product.rating}</span>
                  </div>
                  
                  <div className="w-[1px] h-3 bg-gray-300 mx-1" />
                  
                  <div className="flex items-center gap-1.5 text-[#00AEEF] font-medium hover:underline cursor-pointer">
                    <CheckCircle2 size={13} className="fill-[#00AEEF] text-white" />
                    <span>{product.reviews} Reviews</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}