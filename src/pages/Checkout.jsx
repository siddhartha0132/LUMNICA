import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://lumnica-backend.onrender.com/api";

export default function Checkout() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(`${API}/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCart(res.data.cart);
      } catch {
        setMsg("Failed to load cart");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const confirmOrder = async () => {
    if (
      !address.fullName ||
      !address.phone ||
      !address.street ||
      !address.city ||
      !address.state ||
      !address.pincode
    ) {
      setMsg("Please fill all address fields");
      return;
    }

    try {
      await axios.post(
        `${API}/orders/place`,
        {
          deliveryAddress: address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Order placed successfully 🎉");
      navigate("/dashboard");
    } catch (err) {
      console.log("ORDER ERROR:", err.response?.data);
      setMsg(err.response?.data?.message || "Order failed");
    }
  };

  if (!token) return <h2 className="pt-28 text-center">Please login</h2>;
  if (loading) return <h2 className="pt-28 text-center">Loading…</h2>;
  if (!cart || cart.items.length === 0)
    return <h2 className="pt-28 text-center">Cart empty</h2>;

  return (
    <div className="max-w-4xl mx-auto pt-28 px-6 pb-20">
      <h1 className="text-3xl mb-6">CHECKOUT</h1>

      {msg && <p className="text-red-600 mb-4">{msg}</p>}

      <h2 className="text-xl mb-3">Delivery Address</h2>

      {Object.keys(address).map((key) => (
        <input
          key={key}
          placeholder={key.toUpperCase()}
          className="border p-2 rounded mb-3 w-full"
          value={address[key]}
          onChange={(e) =>
            setAddress({ ...address, [key]: e.target.value })
          }
        />
      ))}

      <h2 className="text-xl mb-3">Order Summary</h2>

      {cart.items.map((item) => (
        <div key={item.product._id} className="flex justify-between">
          <span>
            {item.product.name} × {item.quantity}
          </span>
          <span>₹{item.product.price * item.quantity}</span>
        </div>
      ))}

      <div className="text-xl my-4">
        Total: <b>₹{cart.total}</b>
      </div>

      <button
        onClick={confirmOrder}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Confirm Order
      </button>
    </div>
  );
}

