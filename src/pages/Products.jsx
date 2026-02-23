import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Heart, Star, CheckCircle2 } from "lucide-react";

import Product1 from "../assets/PRODUCT1.png";
import Product2 from "../assets/PRODUCT2.png";
import Product3 from "../assets/PRODUCT3.png";
import Product4 from "../assets/PRODUCT4.png";
import Product5 from "../assets/PRODUCT5.png";

const API = "https://lumnica-backend.onrender.com/api";

// Image mapping (luxury brand style)
const productImages = {
  "PRODUCT1.png": Product1,
  "PRODUCT2.png": Product2,
  "PRODUCT3.png": Product3,
  "PRODUCT4.png": Product4,
  "PRODUCT5.png": Product5,
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/products`);
      setProducts(res.data.products || []);
    } catch (e) {
      setError("Unable to load products.");
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId) => {
    try {
      await axios.post(
        `${API}/cart/add`,
        { productId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMsg("Added to cart");
    } catch {
      setError("Please login to add to cart");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="tracking-widest text-gray-600">LOADING PRODUCTS…</p>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen pt-22 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <h1 className="text-3xl tracking-[0.25em] mb-12 uppercase">
          Our Collection
        </h1>

        {msg && <p className="mb-6 text-[#A38E6A]">{msg}</p>}
        {error && <p className="mb-6 text-red-600">{error}</p>}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-10 md:gap-y-16">
          {products.map((p) => (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[1/1.1] bg-[#F9F9F9] overflow-hidden mb-5 flex items-center justify-center">
                <button className="absolute top-3 right-3 z-10 p-2 bg-white/60 rounded-full">
                  <Heart size={16} className="text-gray-500 hover:text-red-500" />
                </button>

                <img
                  src={productImages[p.image] || Product1}
                  alt={p.name}
                  className="w-[85%] h-[85%] object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col items-start px-1">
                <h3 className="text-[12px] md:text-[13px] font-semibold tracking-[0.1em] uppercase mb-3 min-h-[35px]">
                  {p.name}
                </h3>

                <p className="text-sm opacity-60 mb-2">
                  ₹{p.price}
                </p>

                <div className="flex items-center gap-2 text-[11px] mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-bold">4.8</span>
                  </div>
                  <div className="w-[1px] h-3 bg-gray-300" />
                  <div className="flex items-center gap-1.5 text-[#00AEEF]">
                    <CheckCircle2 size={13} className="fill-[#00AEEF] text-white" />
                    <span>42 Reviews</span>
                  </div>
                </div>

                {p.stock === 0 ? (
                  <button
                    disabled
                    className="w-full bg-gray-400 text-white py-2 rounded-lg"
                  >
                    Out of Stock
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(p._id)}
                    className="w-full bg-[#1E2D2B] text-white py-2 rounded-lg tracking-widest hover:bg-black transition"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
