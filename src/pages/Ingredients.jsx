import { useState } from "react";

const ingredients = [
  {
    name: "Kumkumadi",
    sanskrit: "कुमकुमादि",
    origin: "Ancient Ayurvedic texts · Kerala",
    color: "#C4773A",
    bg: "#FDF0E4",
    icon: "🌼",
    tagline: "The Golden Radiance Oil",
    benefits: ["Brightens dull skin", "Fades hyperpigmentation", "Evens skin tone", "Reduces dark spots"],
    desc: "Distilled from 16 precious botanicals including saffron, sandalwood, and lotus, Kumkumadi tailam has been used in royal Ayurvedic beauty rituals for over 2,000 years. Its bioactive compounds penetrate deep into the skin to restore luminosity and clarity.",
    usedIn: ["Glow Serum", "Night Repair Oil", "Brightening Face Mask"],
    skin: "All types — especially dull, uneven, mature skin",
  },
  {
    name: "Bhringraj",
    sanskrit: "भृंगराज",
    origin: "Himalayan foothills · Rajasthan",
    color: "#2D5A40",
    bg: "#E8F0E8",
    icon: "🌿",
    tagline: "The King of Herbs for Hair",
    benefits: ["Reduces hair fall", "Stimulates scalp circulation", "Strengthens roots", "Adds natural shine"],
    desc: "Known in Ayurveda as 'Kesharaja' — ruler of hair — Bhringraj has been the cornerstone of Indian hair care for millennia. Rich in ecliptine, alkaloids, and flavonoids, it nourishes the scalp, revives dormant follicles, and brings lustrous strength to every strand.",
    usedIn: ["Hair Growth Oil", "Scalp Serum", "Strengthening Shampoo"],
    skin: "All hair types — especially thin, brittle, or fall-prone hair",
  },
  {
    name: "Neem",
    sanskrit: "निम्ब",
    origin: "Pan-Indian · Sacred gardens",
    color: "#4A6741",
    bg: "#EDF2E8",
    icon: "🍃",
    tagline: "Nature's Purifier",
    benefits: ["Fights acne bacteria", "Controls excess oil", "Reduces inflammation", "Purifies pores"],
    desc: "Called 'Sarva Roga Nivarini' — the cure of all ailments — Neem has been central to Ayurvedic healing for 4,500 years. Its active compound nimbidin has proven antibacterial and antifungal properties, making it the most powerful natural ally for acne-prone and oily skin.",
    usedIn: ["Acne Control Face Wash", "Purifying Toner", "Clarifying Mask"],
    skin: "Oily, combination, acne-prone skin",
  },
  {
    name: "Amla",
    sanskrit: "आमलकी",
    origin: "North India · Sacred groves",
    color: "#5C7A35",
    bg: "#EDF3E0",
    icon: "🟢",
    tagline: "The Vitamin C Superfruit",
    benefits: ["Highest natural Vitamin C", "Fights free radicals", "Boosts collagen", "Anti-ageing"],
    desc: "The Indian Gooseberry holds up to 20x more Vitamin C than oranges. In Ayurvedic tradition, it is the most potent Rasayana — a rejuvenating tonic. Applied topically, it powerfully brightens skin, boosts collagen synthesis, and protects against environmental ageing.",
    usedIn: ["Vitamin C Serum", "Anti-Ageing Cream", "Brightening Face Pack"],
    skin: "All skin types — especially ageing and sun-damaged skin",
  },
  {
    name: "Ashwagandha",
    sanskrit: "अश्वगन्धा",
    origin: "Rajasthan · Madhya Pradesh",
    color: "#8A5E3C",
    bg: "#F5EDE0",
    icon: "🌱",
    tagline: "The Stress-Shield Adaptogen",
    benefits: ["Reduces cortisol damage", "Firms and tightens", "Hydrates deep layers", "Anti-inflammatory"],
    desc: "Ashwagandha — meaning 'smell of horse' in Sanskrit, reflecting the strength it imparts — is Ayurveda's most celebrated adaptogen. In skincare, its withanolides protect against stress-induced skin breakdown, while its antioxidants prevent oxidative damage, keeping skin firm and youthful.",
    usedIn: ["Firming Night Cream", "Stress-Relief Face Mist", "Deep Repair Serum"],
    skin: "Stressed, sensitive, ageing, or fatigued skin",
  },
  {
    name: "Turmeric",
    sanskrit: "हरिद्रा",
    origin: "Kerala · Karnataka · Tamil Nadu",
    color: "#C49A1A",
    bg: "#FDF5D8",
    icon: "💛",
    tagline: "The Golden Healer",
    benefits: ["Powerful anti-inflammatory", "Natural brightener", "Antimicrobial", "Fades scars"],
    desc: "Haldi has been applied on Indian skin for over 6,000 years — from wedding rituals to wound healing. Its active compound curcumin is one of nature's most studied anti-inflammatory agents. In skincare, it visibly brightens, calms redness, and accelerates the healing of post-acne marks.",
    usedIn: ["Glow Face Mask", "Brightening Body Wash", "Spot Corrector Serum"],
    skin: "All types — especially inflamed, post-acne, or dull skin",
  },
];

const Ingredients = () => {
  const [selected, setSelected] = useState(ingredients[0]);

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#FDFAF5", minHeight: "100vh" }}>

      {/* HERO */}
      <section style={{
        background: "#1C3A2E",
        padding: "90px 24px 70px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 70% 30%, rgba(212,175,55,0.1) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <p style={{ color: "#D4AF37", letterSpacing: "4px", fontSize: "11px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "16px" }}>
          Our Philosophy
        </p>
        <h1 style={{ fontSize: "clamp(30px, 5vw, 56px)", color: "#FDFAF5", fontWeight: "400", marginBottom: "20px", lineHeight: "1.2" }}>
          Ingredients We <em style={{ color: "#D4AF37", fontStyle: "italic" }}>Believe In</em>
        </h1>
        <p style={{ color: "rgba(253,250,245,0.7)", fontFamily: "sans-serif", fontSize: "16px", maxWidth: "580px", margin: "0 auto 48px", lineHeight: "1.7" }}>
          Every Lumnica formulation begins with one question: what has nature perfected over thousands of years? We source the finest Ayurvedic botanicals, honouring ancient wisdom with modern science.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap" }}>
          {[["100%", "Plant-Based"], ["0", "Harmful Chemicals"], ["4500+", "Years of Wisdom"], ["GMP", "Certified"]].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ color: "#D4AF37", fontSize: "26px", fontWeight: "400" }}>{val}</div>
              <div style={{ color: "rgba(253,250,245,0.55)", fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEVER / ALWAYS strip */}
      <section style={{ background: "#F5F0E8", padding: "40px 24px", borderBottom: "1px solid #E0D8C8" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" }}>
          <div>
            <p style={{ color: "#2D5A40", fontFamily: "sans-serif", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>We Always Use</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["Ayurvedic botanicals", "Cold-pressed oils", "Plant actives", "Distilled extracts", "Ethically sourced herbs"].map(tag => (
                <span key={tag} style={{ background: "#2D5A40", color: "#FDFAF5", padding: "6px 14px", borderRadius: "20px", fontFamily: "sans-serif", fontSize: "13px" }}>✓ {tag}</span>
              ))}
            </div>
          </div>
          <div>
            <p style={{ color: "#A03030", fontFamily: "sans-serif", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>We Never Use</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["Parabens", "Sulphates", "Mineral oil", "Artificial fragrance", "Silicones"].map(tag => (
                <span key={tag} style={{ background: "#FBE8E8", color: "#A03030", border: "1px solid #F0C0C0", padding: "6px 14px", borderRadius: "20px", fontFamily: "sans-serif", fontSize: "13px" }}>✕ {tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INGREDIENTS EXPLORER */}
      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: "#2D5A40", letterSpacing: "3px", fontSize: "11px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "12px" }}>Ingredient Spotlight</p>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", color: "#1C3A2E", fontWeight: "400" }}>Meet Our Star Botanicals</h2>
        </div>

        {/* Ingredient selector tabs */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginBottom: "48px" }}>
          {ingredients.map((ing) => (
            <button
              key={ing.name}
              onClick={() => setSelected(ing)}
              style={{
                padding: "10px 22px", borderRadius: "30px", cursor: "pointer",
                fontFamily: "sans-serif", fontSize: "14px", transition: "all 0.2s",
                background: selected.name === ing.name ? ing.color : "transparent",
                color: selected.name === ing.name ? "#fff" : "#4A3F35",
                border: `1px solid ${selected.name === ing.name ? ing.color : "#C8B99A"}`,
                fontWeight: selected.name === ing.name ? "600" : "400",
              }}
            >
              {ing.icon} {ing.name}
            </button>
          ))}
        </div>

        {/* Selected ingredient detail */}
        <div style={{
          background: selected.bg, border: `1px solid ${selected.color}30`,
          borderRadius: "16px", padding: "clamp(32px, 6vw, 60px)",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px",
          alignItems: "center",
          transition: "background 0.4s",
        }} className="ing-detail">
          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "24px" }}>
              <span style={{ fontSize: "56px" }}>{selected.icon}</span>
              <div>
                <h3 style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "#1C3A2E", fontWeight: "400", marginBottom: "4px" }}>{selected.name}</h3>
                <p style={{ fontFamily: "sans-serif", fontSize: "18px", color: selected.color, marginBottom: "4px" }}>{selected.sanskrit}</p>
                <p style={{ fontFamily: "sans-serif", fontSize: "12px", color: "#7A6A5A", letterSpacing: "2px", textTransform: "uppercase" }}>{selected.origin}</p>
              </div>
            </div>
            <p style={{
              fontFamily: "sans-serif", fontSize: "20px", color: selected.color,
              fontStyle: "italic", marginBottom: "20px", borderLeft: `3px solid ${selected.color}`,
              paddingLeft: "16px",
            }}>
              "{selected.tagline}"
            </p>
            <p style={{ fontFamily: "sans-serif", fontSize: "15px", color: "#4A3F35", lineHeight: "1.8" }}>
              {selected.desc}
            </p>
          </div>

          {/* Right */}
          <div>
            <div style={{ marginBottom: "32px" }}>
              <h4 style={{ color: "#1C3A2E", fontSize: "14px", fontFamily: "sans-serif", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>Key Benefits</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {selected.benefits.map(b => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: selected.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: "sans-serif", fontSize: "15px", color: "#4A3F35" }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ color: "#1C3A2E", fontSize: "14px", fontFamily: "sans-serif", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Best For</h4>
              <p style={{ fontFamily: "sans-serif", fontSize: "14px", color: "#6B6355" }}>{selected.skin}</p>
            </div>
            <div>
              <h4 style={{ color: "#1C3A2E", fontSize: "14px", fontFamily: "sans-serif", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Found In</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {selected.usedIn.map(p => (
                  <span key={p} style={{
                    background: "#fff", border: `1px solid ${selected.color}40`,
                    color: selected.color, padding: "6px 14px", borderRadius: "20px",
                    fontFamily: "sans-serif", fontSize: "13px",
                  }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOURCING PHILOSOPHY */}
      <section style={{ background: "#1C3A2E", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#D4AF37", letterSpacing: "3px", fontSize: "11px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "16px" }}>Our Sourcing Promise</p>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", color: "#FDFAF5", fontWeight: "400", marginBottom: "24px" }}>From Sacred Groves to Your Skin</h2>
          <p style={{ color: "rgba(253,250,245,0.7)", fontFamily: "sans-serif", fontSize: "16px", lineHeight: "1.8", marginBottom: "48px" }}>
            We work directly with certified Ayurvedic farmers and traditional herb harvesters across India. Every botanical is sourced at peak potency, extracted gently to preserve its intelligence, and formulated without compromise.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {[
              { icon: "🌾", label: "Farm-to-formula traceability" },
              { icon: "🧪", label: "Third-party purity testing" },
              { icon: "♻️", label: "Sustainable harvesting practices" },
              { icon: "🤝", label: "Fair trade with farmers" },
            ].map((item) => (
              <div key={item.label} style={{ padding: "28px 20px", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "8px" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
                <p style={{ color: "rgba(253,250,245,0.8)", fontFamily: "sans-serif", fontSize: "14px" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ingredients;