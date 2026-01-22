import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API = "https://lumnica-backend.onrender.com/api";

export default function Signup() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");

  // ================= SEND OTP =================
  const sendOtp = async (e) => {
    e.preventDefault();

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setMsg("Enter a valid 10-digit phone number");
      return;
    }

    try {
      await axios.post(`${API}/otp/send`, {
        name,
        email,
        password,
        phone,
      });

      setMsg("OTP sent to email");
      setStep(2);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error sending OTP");
    }
  };

  // ================= VERIFY OTP =================
  const verifyOtp = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/otp/verify`, {
        name,
        email,
        password,
        phone,
        otp,
      });

      setMsg("Account created!");
      navigate("/login");
    } catch (err) {
      setMsg(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">

      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F3] via-[#EFE9DF] to-[#E6DDCF]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D8C6A5]/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#CBB89A]/30 rounded-full blur-3xl" />

      {/* Card */}
      <div className="relative w-full max-w-md bg-[#FAF9F6]/90 backdrop-blur-xl border border-black/10 rounded-2xl px-8 py-10">

        {/* Heading */}
        <h1 className="text-center text-[22px] tracking-[0.35em] uppercase text-[#1A1A1A] mb-2">
          Create Account
        </h1>
        <p className="text-center text-sm text-black/60 mb-8">
          Begin your Lumnica journey
        </p>

        {/* Message */}
        {msg && (
          <p className="text-center text-sm mb-6 text-[#A38E6A]">
            {msg}
          </p>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={sendOtp} className="space-y-6">
            {[
              { label: "Full Name", value: name, set: setName },
              { label: "Email Address", value: email, set: setEmail, type: "email" },
              { label: "Phone Number", value: phone, set: setPhone },
              { label: "Password", value: password, set: setPassword, type: "password" },
            ].map((field, i) => (
              <div key={i}>
                <label className="block text-[11px] tracking-widest uppercase mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type || "text"}
                  className="w-full bg-transparent border-b border-black/30 py-2 focus:outline-none focus:border-black transition"
                  value={field.value}
                  onChange={(e) => field.set(e.target.value)}
                  required
                />
              </div>
            ))}

            <button className="w-full mt-6 bg-[#1A1A1A] text-[#F8F6F3] py-3 text-[11px] tracking-[0.35em] uppercase hover:bg-black transition">
              Send OTP
            </button>
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form onSubmit={verifyOtp} className="space-y-6">
            <div>
              <label className="block text-[11px] tracking-widest uppercase mb-2">
                Enter OTP
              </label>
              <input
                className="w-full bg-transparent border-b border-black/30 py-2 focus:outline-none focus:border-black transition text-center tracking-[0.4em]"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>

            <button className="w-full mt-6 bg-[#1A1A1A] text-[#F8F6F3] py-3 text-[11px] tracking-[0.35em] uppercase hover:bg-black transition">
              Verify & Create Account
            </button>
          </form>
        )}

        {/* Footer */}
        <p className="text-center text-sm mt-8 text-black/70">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline underline-offset-4 text-[#A38E6A]"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
