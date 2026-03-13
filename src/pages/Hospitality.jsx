import { useState } from "react";

const Hospitality = () => {
  const [formData, setFormData] = useState({
    name: "",
    hotel: "",
    email: "",
    phone: "",
    rooms: "",
    products: [],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const productOptions = [
    "Body Wash",
    "Shampoo",
    "Conditioner",
    "Hand Wash",
    "Moisturiser",
    "Face Wash",
    "Shower Gel",
    "Custom Branded Products",
  ];

  const handleProductToggle = (product) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter((p) => p !== product)
        : [...prev.products, product],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const amenities = [
    {
      icon: "🌿",
      title: "Natural Formulations",
      desc: "Ayurvedic and plant-based ingredients guests will love and remember.",
    },
    {
      icon: "🏨",
      title: "Custom Branding",
      desc: "Your hotel logo, colours, and story on every product. White-label ready.",
    },
    {
      icon: "📦",
      title: "Bulk Supply",
      desc: "From 50-room boutique hotels to 500-room resorts — we scale with you.",
    },
    {
      icon: "🚿",
      title: "Dispenser Solutions",
      desc: "Wall-mounted dispensers to reduce plastic waste and cut costs.",
    },
    {
      icon: "✅",
      title: "GMP Certified",
      desc: "Manufactured to the highest quality standards for hospitality use.",
    },
    {
      icon: "🤝",
      title: "Dedicated Account Manager",
      desc: "One point of contact for orders, restocking, and custom requests.",
    },
  ];

  const products = [
    { name: "Signature Body Wash", variants: "Sandalwood · Rose · Vetiver", img: "🧴" },
    { name: "Nourishing Shampoo", variants: "Amla · Bhringraj · Hibiscus", img: "🌸" },
    { name: "Deep Conditioner", variants: "Coconut · Argan · Fenugreek", img: "🌾" },
    { name: "Luxury Hand Wash", variants: "Turmeric · Neem · Aloe", img: "🍃" },
    { name: "Body Moisturiser", variants: "Kumkumadi · Saffron · Jasmine", img: "✨" },
    { name: "Dispenser Units", variants: "300ml · 500ml · 1L wall-mount", img: "🔧" },
  ];

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#FDFAF5", minHeight: "100vh" }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #1C3A2E 0%, #2D5A40 50%, #1C3A2E 100%)",
        padding: "100px 24px 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.12) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(212,175,55,0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />
        <p style={{ color: "#D4AF37", letterSpacing: "4px", fontSize: "11px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "20px" }}>
          Lumnica Hospitality Solutions
        </p>
        <h1 style={{ color: "#FDFAF5", fontSize: "clamp(32px, 6vw, 62px)", fontWeight: "400", lineHeight: "1.15", maxWidth: "760px", margin: "0 auto 24px" }}>
          Elevate Every Guest's<br />
          <em style={{ color: "#D4AF37", fontStyle: "italic" }}>Skin & Soul</em> Experience
        </h1>
        <p style={{ color: "rgba(253,250,245,0.75)", fontSize: "18px", maxWidth: "560px", margin: "0 auto 40px", lineHeight: "1.7", fontFamily: "sans-serif", fontWeight: "300" }}>
          Premium Ayurvedic amenities crafted for luxury hotels, boutique resorts, and wellness retreats. Bulk supply. Custom branding. Zero compromise on quality.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#inquiry" style={{
            background: "#D4AF37", color: "#1C3A2E", padding: "16px 40px",
            borderRadius: "4px", textDecoration: "none", fontFamily: "sans-serif",
            fontWeight: "600", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase",
          }}>
            Request Bulk Pricing
          </a>
          <a href="#products" style={{
            border: "1px solid rgba(253,250,245,0.4)", color: "#FDFAF5", padding: "16px 40px",
            borderRadius: "4px", textDecoration: "none", fontFamily: "sans-serif",
            fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase",
          }}>
            View Products
          </a>
        </div>

        {/* Stats strip */}
        <div style={{
          display: "flex", justifyContent: "center", gap: "clamp(24px, 6vw, 80px)",
          marginTop: "70px", flexWrap: "wrap",
        }}>
          {[["200+", "Hotels Served"], ["50K+", "Rooms Monthly"], ["100%", "Natural Ingredients"], ["24hr", "Dispatch"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ color: "#D4AF37", fontSize: "32px", fontWeight: "400" }}>{num}</div>
              <div style={{ color: "rgba(253,250,245,0.6)", fontFamily: "sans-serif", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY LUMNICA FOR HOTELS */}
      <section style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ color: "#2D5A40", letterSpacing: "3px", fontSize: "11px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "12px" }}>Why Hotels Choose Us</p>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "#1C3A2E", fontWeight: "400" }}>Everything Your Property Needs</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          {amenities.map((a) => (
            <div key={a.title} style={{
              background: "#fff", border: "1px solid #E8E0D0",
              borderRadius: "8px", padding: "36px 32px",
              transition: "box-shadow 0.2s",
            }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>{a.icon}</div>
              <h3 style={{ color: "#1C3A2E", fontSize: "18px", fontWeight: "400", marginBottom: "10px" }}>{a.title}</h3>
              <p style={{ color: "#6B6355", fontFamily: "sans-serif", fontSize: "14px", lineHeight: "1.7" }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATALOGUE */}
      <section id="products" style={{ background: "#F5F0E8", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ color: "#2D5A40", letterSpacing: "3px", fontSize: "11px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "12px" }}>Our Range</p>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "#1C3A2E", fontWeight: "400" }}>Hospitality Product Catalogue</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {products.map((p) => (
              <div key={p.name} style={{
                background: "#FDFAF5", border: "1px solid #E0D8C8",
                borderRadius: "8px", padding: "40px 28px", textAlign: "center",
              }}>
                <div style={{ fontSize: "48px", marginBottom: "20px" }}>{p.img}</div>
                <h3 style={{ color: "#1C3A2E", fontSize: "17px", fontWeight: "400", marginBottom: "8px" }}>{p.name}</h3>
                <p style={{ color: "#9A8A76", fontFamily: "sans-serif", fontSize: "13px", letterSpacing: "1px" }}>{p.variants}</p>
                <div style={{ marginTop: "20px" }}>
                  <span style={{
                    background: "#E8F0E8", color: "#2D5A40",
                    padding: "6px 16px", borderRadius: "20px",
                    fontSize: "12px", fontFamily: "sans-serif",
                  }}>Bulk Available</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#2D5A40", letterSpacing: "3px", fontSize: "11px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "12px" }}>Simple Process</p>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "#1C3A2E", fontWeight: "400", marginBottom: "56px" }}>How It Works</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "0", flexWrap: "wrap", position: "relative" }}>
          {[
            { step: "01", title: "Submit Inquiry", desc: "Fill the form below with your property details and product needs." },
            { step: "02", title: "Get a Quote", desc: "We send a custom bulk pricing proposal within 24 hours." },
            { step: "03", title: "Sample Pack", desc: "Receive a complimentary sample kit to test before committing." },
            { step: "04", title: "Regular Supply", desc: "Set up a recurring order with your dedicated account manager." },
          ].map((s, i) => (
            <div key={s.step} style={{ width: "200px", padding: "20px 16px", position: "relative" }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "50%",
                background: "#1C3A2E", color: "#D4AF37",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "sans-serif", fontWeight: "600", fontSize: "13px",
                margin: "0 auto 16px",
              }}>{s.step}</div>
              {i < 3 && (
                <div style={{
                  position: "absolute", top: "47px", left: "calc(50% + 28px)",
                  width: "calc(100% - 56px)", height: "1px",
                  background: "#C8B99A", display: "block",
                }} />
              )}
              <h4 style={{ color: "#1C3A2E", fontSize: "15px", fontWeight: "400", marginBottom: "8px" }}>{s.title}</h4>
              <p style={{ color: "#6B6355", fontFamily: "sans-serif", fontSize: "13px", lineHeight: "1.6" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="inquiry" style={{ background: "#1C3A2E", padding: "80px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ color: "#D4AF37", letterSpacing: "3px", fontSize: "11px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "12px" }}>Get Started</p>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", color: "#FDFAF5", fontWeight: "400" }}>Request Bulk Pricing</h2>
            <p style={{ color: "rgba(253,250,245,0.65)", fontFamily: "sans-serif", fontSize: "15px", marginTop: "12px" }}>We'll respond within 24 hours with a tailored quote.</p>
          </div>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "60px 20px", background: "rgba(255,255,255,0.05)", borderRadius: "8px", border: "1px solid rgba(212,175,55,0.3)" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
              <h3 style={{ color: "#D4AF37", fontSize: "24px", fontWeight: "400", marginBottom: "12px" }}>Inquiry Received!</h3>
              <p style={{ color: "rgba(253,250,245,0.75)", fontFamily: "sans-serif", fontSize: "15px" }}>Our hospitality team will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                {[["name", "Your Name *", "text"], ["hotel", "Hotel / Property Name *", "text"], ["email", "Email Address *", "email"], ["phone", "Phone / WhatsApp *", "tel"]].map(([field, placeholder, type]) => (
                  <input
                    key={field}
                    type={type}
                    placeholder={placeholder}
                    required={placeholder.includes("*")}
                    value={formData[field]}
                    onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                    style={{
                      background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "4px", padding: "14px 16px", color: "#FDFAF5",
                      fontFamily: "sans-serif", fontSize: "14px", outline: "none",
                    }}
                  />
                ))}
              </div>
              <input
                type="number"
                placeholder="Number of Rooms"
                value={formData.rooms}
                onChange={(e) => setFormData(prev => ({ ...prev, rooms: e.target.value }))}
                style={{
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "4px", padding: "14px 16px", color: "#FDFAF5",
                  fontFamily: "sans-serif", fontSize: "14px", outline: "none",
                }}
              />
              <div>
                <p style={{ color: "rgba(253,250,245,0.7)", fontFamily: "sans-serif", fontSize: "13px", marginBottom: "12px" }}>Products of interest:</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {productOptions.map((product) => (
                    <button
                      key={product}
                      type="button"
                      onClick={() => handleProductToggle(product)}
                      style={{
                        padding: "8px 16px", borderRadius: "20px", cursor: "pointer",
                        fontFamily: "sans-serif", fontSize: "13px", transition: "all 0.2s",
                        background: formData.products.includes(product) ? "#D4AF37" : "rgba(255,255,255,0.07)",
                        border: formData.products.includes(product) ? "1px solid #D4AF37" : "1px solid rgba(255,255,255,0.2)",
                        color: formData.products.includes(product) ? "#1C3A2E" : "rgba(253,250,245,0.8)",
                        fontWeight: formData.products.includes(product) ? "600" : "400",
                      }}
                    >
                      {product}
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                placeholder="Any specific requirements, quantities, or questions..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                style={{
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "4px", padding: "14px 16px", color: "#FDFAF5",
                  fontFamily: "sans-serif", fontSize: "14px", resize: "vertical", outline: "none",
                }}
              />
              <button type="submit" style={{
                background: "#D4AF37", color: "#1C3A2E", padding: "18px",
                border: "none", borderRadius: "4px", fontFamily: "sans-serif",
                fontWeight: "700", fontSize: "14px", letterSpacing: "2px",
                textTransform: "uppercase", cursor: "pointer",
              }}>
                Submit Inquiry →
              </button>
              <p style={{ textAlign: "center", color: "rgba(253,250,245,0.45)", fontFamily: "sans-serif", fontSize: "12px" }}>
                Or WhatsApp us directly: <strong style={{ color: "#D4AF37" }}>+91 XXXXX XXXXX</strong>
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Hospitality;