import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api";

export default function Checkout() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // fetch cart for order summary
  const fetchCart = async () => {
    try {
      const res = await axios.get(`${API}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCart(res.data.cart || { items: [], total: 0 });
    } catch (err) {
      setMsg("Failed to load cart");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // place order
  const confirmOrder = async () => {
    const ok = window.confirm("Are you sure you want to place this order?");
    if (!ok) return;

    try {
      await axios.post(
        `${API}/orders/place`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Order placed successfully 🎉");
      navigate("/dashboard");
    } catch (err) {
      setMsg("Order failed. Try again.");
    }
  };

  if (!token) {
    return (
      <h2 className="pt-28 text-center">
        Please login to continue checkout.
      </h2>
    );
  }

  if (loading) {
    return (
      <h2 className="pt-28 text-center">
        Loading checkout…
      </h2>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <h2 className="pt-28 text-center">
        Your cart is empty.
      </h2>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pt-28 px-6 pb-20">
      <h1 className="text-3xl tracking-widest mb-6">
        CHECKOUT
      </h1>

      {msg && <p className="text-red-600 mb-4">{msg}</p>}

      <h2 className="text-xl font-semibold mb-3">
        Order Summary
      </h2>

      <div className="space-y-4 mb-6">
        {cart.items.map((item) => (
          <div
            key={item.product._id}
            className="flex justify-between border-b pb-2"
          >
            <span>
              {item.product.name} × {item.quantity}
            </span>

            <span>₹{item.product.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="text-xl mb-6">
        Total Amount:
        <b> ₹{cart.total}</b>
      </div>

      <h2 className="text-xl font-semibold mb-3">
        Payment Method
      </h2>

      <p className="mb-6">Cash on Delivery (COD)</p>

      <button
        className="bg-[#1E2D2B] text-white px-6 py-3 rounded-xl tracking-widest"
        onClick={confirmOrder}
      >
        Confirm Order
      </button>
    </div>
  );
}

