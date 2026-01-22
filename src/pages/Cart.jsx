import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://lumnica-backend.onrender.com/api";

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchCart = async () => {
      try {
        const res = await axios.get(`${API}/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (isMounted) {
          setCart(res.data.cart || { items: [], total: 0 });
        }
      } catch (err) {
        if (isMounted) {
          setMessage("Please login to view your cart");
        }
      }
    };

    if (token) fetchCart();

    return () => {
      isMounted = false;
    };
  }, [token]);

  const removeItem = async (productId) => {
    await axios.post(
      `${API}/cart/remove`,
      { productId },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    // re-fetch safely
    try {
      const res = await axios.get(`${API}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data.cart || { items: [], total: 0 });
    } catch {}
  };

  /* ---------- AUTH STATES ---------- */

  if (!token) {
    return (
      <div className="pt-32 text-center text-sm tracking-wide text-gray-600">
        Please login to view your cart.
      </div>
    );
  }

  if (!cart) {
    return (
      <div className="pt-32 text-center text-sm tracking-wide text-gray-500">
        Loading your cart…
      </div>
    );
  }

  /* ---------- MAIN UI ---------- */

  return (
    <div className="max-w-5xl mx-auto pt-28 px-6 pb-24">
      <h1 className="text-3xl tracking-[0.25em] mb-10 text-center">
        YOUR CART
      </h1>

      {message && (
        <p className="text-center text-sm text-red-500 mb-6">{message}</p>
      )}

      {cart.items.length === 0 ? (
        <p className="text-center text-gray-500 tracking-wide">
          Your cart is currently empty.
        </p>
      ) : (
        <>
          <div className="divide-y">
            {cart.items.map((item) => (
              <div
                key={item.product._id}
                className="flex justify-between py-6"
              >
                <div className="space-y-1">
                  <p className="tracking-wide text-sm font-medium">
                    {item.product.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    ₹{item.product.price}
                  </p>
                  <p className="text-xs text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.product._id)}
                  className="text-xs tracking-wider text-gray-500 hover:text-red-600 transition"
                >
                  REMOVE
                </button>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="flex justify-between mt-10 text-lg tracking-wide">
            <span>Total</span>
            <span className="font-medium">₹{cart.total}</span>
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <button
              onClick={() => navigate("/checkout")}
              className="bg-[#1E2D2B] text-white px-14 py-4 tracking-[0.2em] text-sm rounded-lg hover:opacity-90 transition"
            >
              PROCEED TO CHECKOUT
            </button>

            <p className="mt-4 text-xs tracking-wide text-gray-500">
              Cash on Delivery Available
            </p>
          </div>
        </>
      )}
    </div>
  );
}
