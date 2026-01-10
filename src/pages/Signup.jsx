import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api";

export default function Signup() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");

  const sendOtp = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/otp/send`, {
        name,
        email,
        password,
      });

      setMsg("OTP sent to email");
      setStep(2);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error sending OTP");
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/otp/verify`, {
        name,
        email,
        password,
        otp,
      });

      setMsg("Account created!");
      navigate("/login");
    } catch (err) {
      setMsg(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F6F3]">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
        <h1 className="text-2xl font-semibold mb-6 text-center tracking-widest">
          CREATE ACCOUNT
        </h1>

        {msg && <p className="text-center text-sm mb-4 text-[#A38E6A]">{msg}</p>}

        {step === 1 && (
          <form onSubmit={sendOtp} className="space-y-5">
            <input
              placeholder="Name"
              className="w-full border p-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              placeholder="Email"
              className="w-full border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              placeholder="Password"
              type="password"
              className="w-full border p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="w-full bg-black text-white py-2 rounded">
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={verifyOtp} className="space-y-5">
            <input
              placeholder="Enter OTP"
              className="w-full border p-2 rounded"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />

            <button className="w-full bg-black text-white py-2 rounded">
              Verify & Create Account
            </button>
          </form>
        )}

        <p className="text-center text-sm mt-4">
          Already have account?{" "}
          <Link className="text-[#A38E6A]" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
