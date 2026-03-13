const Sustainability = () => {
  const commitments = [
    {
      icon: "🌱",
      title: "Sustainably Sourced Botanicals",
      desc: "Every herb and plant extract we use is ethically harvested in partnership with certified Ayurvedic farmers. We follow seasonal harvesting cycles to protect biodiversity and ensure soil health for future generations.",
      stat: "100%",
      statLabel: "Ethically Sourced",
      color: "#2D5A40",
      bg: "#E8F0E8",
    },
    {
      icon: "📦",
      title: "Responsible Packaging",
      desc: "We are actively transitioning to glass, recycled paper, and biodegradable materials across our entire product range. Our mailers are compostable and our secondary packaging is fully recyclable.",
      stat: "70%",
      statLabel: "Plastic Reduced by 2025",
      color: "#1C3A2E",
      bg: "#E4EDE8",
    },
    {
      icon: "🚿",
      title: "Water Conservation",
      desc: "Our manufacturing facility recycles and treats process water. We also formulate our products with concentrated actives to reduce water content — meaning less shipping weight and a smaller carbon footprint.",
      stat: "40%",
      statLabel: "Less Water Used",
      color: "#3A5A6E",
      bg: "#E0EAF0",
    },
    {
      icon: "🌳",
      title: "Plant a Tree Initiative",
      desc: "For every order placed on Lumnica, we plant one tree in partnership with reforestation programmes across Rajasthan and the Deccan Plateau — areas that supply many of our key botanicals.",
      stat: "10,000+",
      statLabel: "Trees Planted",
      color: "#4A6741",
      bg: "#EAF0E4",
    },
    {
      icon: "⚡",
      title: "Clean Energy Manufacturing",
      desc: "Our production unit runs on 60% renewable solar energy. We are on track to achieve 100% clean energy operations by 2026, eliminating our Scope 1 emissions from manufacturing.",
      stat: "60%",
      statLabel: "Solar Powered",
      color: "#8A7A2E",
      bg: "#F5F0D8",
    },
    {
      icon: "🐄",
      title: "Cruelty-Free Forever",
      desc: "Not a single Lumnica product — now or ever — is tested on animals. We are registered cruelty-free and are committed to maintaining this standard as an absolute non-negotiable across our entire supply chain.",
      stat: "Zero",
      statLabel: "Animal Testing",
      color: "#7A3A3A",
      bg: "#F5E8E8",
    },
  ];

  const timeline = [
    { year: "2020", milestone: "Lumnica founded with a zero-sulphate, zero-paraben product charter." },
    { year: "2021", milestone: "Launched compostable mailers. Eliminated plastic bubble wrap entirely." },
    { year: "2022", milestone: "Tree-planting partnership launched. 2,000 trees in Year 1." },
    { year: "2023", milestone: "Solar energy installed at manufacturing. 60% renewable power achieved." },
    { year: "2024", milestone: "Introduced refillable dispenser programme for hospitality partners." },
    { year: "2025", milestone: "Target: 70% plastic-free packaging across full product range." },
    { year: "2026", milestone: "Target: 100% renewable energy manufacturing." },
  ];

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#FDFAF5", minHeight: "100vh" }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(160deg, #0D2418 0%, #1C3A2E 60%, #2D5A40 100%)",
        padding: "100px 24px 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 30% 70%, rgba(45,90,64,0.6) 0%, transparent 60%), radial-gradient(circle at 80% 10%, rgba(212,175,55,0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />
        <p style={{ color: "#D4AF37", letterSpacing: "4px", fontSize: "11px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "16px" }}>
          Our Commitment
        </p>
        <h1 style={{ fontSize: "clamp(30px, 5vw, 58px)", color: "#FDFAF5", fontWeight: "400", lineHeight: "1.15", maxWidth: "800px", margin: "0 auto 20px" }}>
          Beauty That Honours<br />
          <em style={{ color: "#D4AF37", fontStyle: "italic" }}>The Earth It Comes From</em>
        </h1>
        <p style={{ color: "rgba(253,250,245,0.7)", fontFamily: "sans-serif", fontSize: "17px", maxWidth: "560px", margin: "0 auto 48px", lineHeight: "1.75" }}>
          Lumnica is built on the belief that what's good for your skin must also be good for the planet. Every decision we make — from sourcing to packaging to energy — is guided by this principle.
        </p>
        {/* Leaf decoration line */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
          <div style={{ height: "1px", width: "80px", background: "rgba(212,175,55,0.4)" }} />
          <span style={{ color: "#D4AF37", fontSize: "20px" }}>🌿</span>
          <div style={{ height: "1px", width: "80px", background: "rgba(212,175,55,0.4)" }} />
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={{ background: "#F5F0E8", padding: "64px 24px", borderBottom: "1px solid #E0D8C8" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontSize: "clamp(17px, 2.5vw, 22px)", color: "#1C3A2E",
            lineHeight: "1.85", fontStyle: "italic", fontWeight: "400",
          }}>
            "In Ayurveda, the relationship between humans and nature is not one of extraction — it is one of reciprocity. We take from the earth only what we need, and we give back what we can. This is not just our sustainability policy. This is our founding philosophy."
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "13px", color: "#9A8A76", marginTop: "24px", letterSpacing: "2px", textTransform: "uppercase" }}>
            — Lumnica Founders
          </p>
        </div>
      </section>

      {/* SIX COMMITMENTS */}
      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ color: "#2D5A40", letterSpacing: "3px", fontSize: "11px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "12px" }}>What We Stand For</p>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "#1C3A2E", fontWeight: "400" }}>Our Six Sustainability Commitments</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px" }}>
          {commitments.map((c) => (
            <div key={c.title} style={{
              background: c.bg, border: `1px solid ${c.color}25`,
              borderRadius: "12px", padding: "40px 36px",
              borderTop: `3px solid ${c.color}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <span style={{ fontSize: "36px" }}>{c.icon}</span>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "24px", color: c.color, fontWeight: "400" }}>{c.stat}</div>
                  <div style={{ fontFamily: "sans-serif", fontSize: "11px", color: c.color, opacity: 0.8, textTransform: "uppercase", letterSpacing: "1px" }}>{c.statLabel}</div>
                </div>
              </div>
              <h3 style={{ color: "#1C3A2E", fontSize: "18px", fontWeight: "400", marginBottom: "12px" }}>{c.title}</h3>
              <p style={{ fontFamily: "sans-serif", fontSize: "14px", color: "#5A4F45", lineHeight: "1.75" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGING SECTION */}
      <section style={{ background: "#F5F0E8", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <p style={{ color: "#2D5A40", letterSpacing: "3px", fontSize: "11px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "12px" }}>Packaging</p>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "#1C3A2E", fontWeight: "400", marginBottom: "20px" }}>
              Rethinking Every Box, Bottle & Label
            </h2>
            <p style={{ fontFamily: "sans-serif", fontSize: "15px", color: "#5A4F45", lineHeight: "1.8", marginBottom: "24px" }}>
              We audit every piece of packaging for its end-of-life impact. Our goal is simple: every material we use must either biodegrade, be recyclable, or be reusable.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                ["Glass bottles", "Reusable & infinitely recyclable"],
                ["Kraft paper wraps", "FSC-certified, compostable"],
                ["Compostable mailers", "Breaks down in 90–180 days"],
                ["Refill programmes", "For hospitality partners"],
                ["Soy-based inks", "Non-toxic printing on all labels"],
              ].map(([item, note]) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ color: "#2D5A40", fontSize: "16px" }}>✓</span>
                  <div>
                    <span style={{ fontFamily: "sans-serif", fontSize: "15px", color: "#1C3A2E", fontWeight: "600" }}>{item}</span>
                    <span style={{ fontFamily: "sans-serif", fontSize: "13px", color: "#7A6A5A" }}> — {note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{
            background: "#1C3A2E", borderRadius: "16px", padding: "48px 40px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "60px", marginBottom: "16px" }}>♻️</div>
            <h3 style={{ color: "#D4AF37", fontSize: "48px", fontWeight: "400", marginBottom: "8px" }}>70%</h3>
            <p style={{ color: "#FDFAF5", fontFamily: "sans-serif", fontSize: "16px", marginBottom: "20px" }}>plastic-free packaging by end of 2025</p>
            <div style={{ height: "1px", background: "rgba(255,255,255,0.15)", margin: "24px 0" }} />
            <h3 style={{ color: "#D4AF37", fontSize: "48px", fontWeight: "400", marginBottom: "8px" }}>100%</h3>
            <p style={{ color: "#FDFAF5", fontFamily: "sans-serif", fontSize: "16px" }}>plastic-free target by 2027</p>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY TIMELINE */}
      <section style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ color: "#2D5A40", letterSpacing: "3px", fontSize: "11px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "12px" }}>Our Journey</p>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", color: "#1C3A2E", fontWeight: "400" }}>The Lumnica Sustainability Roadmap</h2>
        </div>
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: "72px", top: "0", bottom: "0", width: "1px", background: "#C8B99A" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {timeline.map((t, i) => (
              <div key={t.year} style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}>
                <div style={{
                  width: "64px", flexShrink: 0, textAlign: "right",
                  fontFamily: "sans-serif", fontSize: "13px", color: "#2D5A40",
                  fontWeight: "600", paddingTop: "2px",
                }}>
                  {t.year}
                </div>
                <div style={{
                  width: "16px", height: "16px", borderRadius: "50%", flexShrink: 0,
                  background: i >= 5 ? "#E0D8C8" : "#2D5A40",
                  border: i >= 5 ? "2px dashed #C8B99A" : "none",
                  marginTop: "2px",
                  position: "relative", zIndex: 1,
                }} />
                <p style={{
                  fontFamily: "sans-serif", fontSize: "15px", color: i >= 5 ? "#9A8A76" : "#4A3F35",
                  lineHeight: "1.6", paddingBottom: "8px",
                  fontStyle: i >= 5 ? "italic" : "normal",
                }}>
                  {i >= 5 && <span style={{ color: "#D4AF37", marginRight: "8px" }}>Goal:</span>}
                  {t.milestone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: "#2D5A40", padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(22px, 4vw, 36px)", color: "#FDFAF5", fontWeight: "400", marginBottom: "16px" }}>
          Shop With a Clear Conscience
        </h2>
        <p style={{ color: "rgba(253,250,245,0.7)", fontFamily: "sans-serif", fontSize: "16px", maxWidth: "520px", margin: "0 auto 32px", lineHeight: "1.7" }}>
          Every Lumnica purchase plants a tree, supports ethical farmers, and helps us move closer to a fully circular beauty brand.
        </p>
        <a href="/products" style={{
          background: "#D4AF37", color: "#1C3A2E",
          padding: "16px 48px", borderRadius: "4px",
          textDecoration: "none", fontFamily: "sans-serif",
          fontWeight: "700", fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase",
          display: "inline-block",
        }}>
          Shop Sustainably
        </a>
      </section>
    </div>
  );
};

export default Sustainability;