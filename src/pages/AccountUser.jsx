import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = "https://lumnica-backend.onrender.com/api";

export default function AccountUser() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get(`${API}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => navigate("/login"));
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen relative px-4 pt-32 overflow-hidden">

      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F3] via-[#EFE9DF] to-[#E6DDCF]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D8C6A5]/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#CBB89A]/30 rounded-full blur-3xl" />

      {/* Account Card */}
      <div className="relative max-w-xl mx-auto bg-[#FAF9F6]/90 backdrop-blur-xl border border-black/10 rounded-2xl px-8 py-10">

        {/* Heading */}
        <h1 className="text-center text-[22px] tracking-[0.35em] uppercase text-[#1A1A1A] mb-2">
          My Account
        </h1>
        <p className="text-center text-sm text-black/60 mb-10">
          Your personal details
        </p>

        {/* User Info */}
        <div className="space-y-6 text-sm">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-black/60 mb-1">
              Full Name
            </p>
            <p className="border-b border-black/20 pb-2">
              {user.name}
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-widest text-black/60 mb-1">
              Email Address
            </p>
            <p className="border-b border-black/20 pb-2">
              {user.email}
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-widest text-black/60 mb-1">
              Phone Number
            </p>
            <p className="border-b border-black/20 pb-2">
              {user.phone}
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="w-full mt-12 bg-[#1A1A1A] text-[#F8F6F3] py-3 text-[11px] tracking-[0.35em] uppercase hover:bg-black transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

