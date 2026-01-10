import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api";

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  // 👇 useNavigate MUST BE INSIDE COMPONENT
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${API}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCart(res.data.cart || { items: [], total: 0 });
    } catch (err) {
      setMessage("Login required to view cart");
    }
  };

  const removeItem = async (productId) => {
    await axios.post(
      `${API}/cart/remove`,
      { productId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (!token) {
    return (
      <h2 className="text-center mt-20">
        Please login to view your cart.
      </h2>
    );
  }

  if (!cart) {
    return (
      <h2 className="text-center mt-20">
        Loading cart…
      </h2>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pt-28 px-4 pb-20">
      <h1 className="text-3xl tracking-widest mb-6">YOUR CART</h1>

      {message && <p>{message}</p>}

      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.items.map((item) => (
              <div
                key={item.product._id}
                className="flex justify-between border-b pb-3"
              >
                <div>
                  <p className="font-medium">{item.product.name}</p>
                  <p>₹{item.product.price}</p>
                  <p>Qty: {item.quantity}</p>
                </div>

                <button
                  onClick={() => removeItem(item.product._id)}
                  className="text-sm text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-xl">
            <p>
              Total: <b>₹{cart.total}</b>
            </p>
          </div>

          <button
            className="mt-6 bg-[#1E2D2B] text-white px-6 py-3 rounded-lg tracking-widest"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout (COD)
          </button>
        </>
      )}
    </div>
  );
}
