import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const API = "https://lumnica-backend.onrender.com/api";

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

      const token = res.data.accessToken;
      localStorage.setItem("token", token);

      const decoded = jwtDecode(token);
      localStorage.setItem("user", JSON.stringify(decoded));

      setMsg("Login successful ✓");
      navigate("/products");
    } catch (err) {
      console.error(err);
      setMsg("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">

      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F3] via-[#EFE9DF] to-[#E6DDCF]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D8C6A5]/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#CBB89A]/30 rounded-full blur-3xl" />

      {/* Card */}
      <div className="relative w-full max-w-md bg-[#FAF9F6]/90 backdrop-blur-xl border border-black/10 rounded-2xl px-8 py-10 shadow-sm">

        {/* Heading */}
        <h1 className="text-center text-[22px] tracking-[0.35em] uppercase text-[#1A1A1A] mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-sm text-black/60 mb-8">
          Sign in to continue
        </p>

        {/* Message */}
        {msg && (
          <p className="text-center text-sm mb-6 text-[#A38E6A]">
            {msg}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[11px] tracking-widest uppercase mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-black/30 py-2 focus:outline-none focus:border-black transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-[11px] tracking-widest uppercase mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full bg-transparent border-b border-black/30 py-2 focus:outline-none focus:border-black transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-[#1A1A1A] text-[#F8F6F3] py-3 text-[11px] tracking-[0.35em] uppercase hover:bg-black transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-8 text-black/70">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="underline underline-offset-4 text-[#A38E6A]"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
