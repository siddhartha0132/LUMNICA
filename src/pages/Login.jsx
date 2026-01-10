import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const API = "http://localhost:5000/api"; // change if backend URL is different

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });

      // Save token
      localStorage.setItem("token", res.data.accessToken);

      setMsg("Login successful ✓");
      navigate("/products"); // redirect after login
    } catch (err) {
      setMsg("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F6F3]">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
        <h1 className="text-2xl font-semibold mb-6 text-center tracking-widest">
          LOGIN
        </h1>

        {msg && (
          <p className="text-center text-sm mb-4 text-[#A38E6A]">{msg}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="w-full border px-4 py-2 rounded-lg mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="w-full border px-4 py-2 rounded-lg mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E2D2B] text-white py-2 rounded-lg tracking-widest"
          >
            Login
          </button>
        </form>

        {/* signup link */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#A38E6A] underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
