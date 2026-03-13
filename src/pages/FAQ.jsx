import { useState } from "react";

const faqs = [
  {
    category: "Products & Ingredients",
    items: [
      {
        q: "Are Lumnica products 100% natural?",
        a: "Yes. Every Lumnica formulation is built on Ayurvedic principles using plant-based, naturally derived ingredients. We never use parabens, sulphates, artificial fragrances, or harmful preservatives. All ingredients are clearly listed on our packaging and website.",
      },
      {
        q: "Are your products safe for sensitive skin?",
        a: "Absolutely. Our formulations are dermatologist-tested and free from harsh chemicals. However, we always recommend performing a patch test before using any new product — apply a small amount to the inside of your wrist and wait 24 hours.",
      },
      {
        q: "Are Lumnica products cruelty-free?",
        a: "Yes, we are 100% cruelty-free. We do not test on animals at any stage of our product development. We are committed to ethical beauty practices.",
      },
      {
        q: "Do you use Ayurvedic certified ingredients?",
        a: "We source our key botanicals — including Kumkumadi, Bhringraj, Neem, Amla, and Ashwagandha — from trusted, certified Ayurvedic suppliers across India. Our manufacturing facility follows GMP (Good Manufacturing Practice) standards.",
      },
      {
        q: "Do your products have an expiry date?",
        a: "Yes. The best-before date is printed on the bottom of every product. Typically our products have a shelf life of 24 months unopened and 12 months once opened.",
      },
    ],
  },
  {
    category: "Orders & Shipping",
    items: [
      {
        q: "How long does delivery take?",
        a: "Standard delivery across India takes 3–7 business days. Express shipping (1–3 days) is available at checkout for select pin codes. International shipping is available to select countries — delivery timelines vary by destination.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes! We offer free standard shipping on all orders above ₹699. Orders below this amount have a flat shipping fee of ₹69.",
      },
      {
        q: "Can I track my order?",
        a: "Absolutely. Once your order is dispatched, you'll receive a tracking link via email and SMS. You can also track your order by logging into your Lumnica account.",
      },
      {
        q: "What if my order arrives damaged?",
        a: "We pack every order with care, but if something arrives damaged, please contact us within 48 hours of delivery with photos of the damaged product. We'll arrange a replacement or full refund immediately.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    items: [
      {
        q: "What is your return policy?",
        a: "We offer a 15-day return policy for unopened, unused products in their original packaging. If you're unsatisfied with an opened product within 7 days of purchase, contact us and we'll work with you to find the best resolution.",
      },
      {
        q: "How do I initiate a return?",
        a: "Email us at returns@lumnica.in or WhatsApp us with your order number and reason for return. Our team will arrange a pickup and process your refund within 5–7 business days of receiving the returned product.",
      },
      {
        q: "When will I receive my refund?",
        a: "Once we receive and inspect the returned product, refunds are processed within 3–5 business days. The amount will be credited to your original payment method. UPI and bank transfers are typically faster than card refunds.",
      },
    ],
  },
  {
    category: "Skin Concerns & Usage",
    items: [
      {
        q: "How do I know which products are right for my skin type?",
        a: "Each product page on our website lists the ideal skin types and concerns it targets. If you're unsure, reach out to us via WhatsApp or email — our team can recommend a personalised routine based on your skin type and concerns.",
      },
      {
        q: "How long before I see results?",
        a: "Ayurvedic skincare works with your skin's natural cycle. Most customers notice initial improvements within 2–3 weeks of consistent use. For deeper concerns like hyperpigmentation or acne scarring, we recommend a 6–8 week routine for visible transformation.",
      },
      {
        q: "Can I use multiple Lumnica products together?",
        a: "Yes — our range is designed as a complete system. You can layer our products as part of your AM and PM routine. We recommend starting with a cleanser, toner, serum, and moisturiser as the base.",
      },
    ],
  },
  {
    category: "Account & Payments",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major payment methods including UPI (GPay, PhonePe, Paytm), debit and credit cards (Visa, Mastercard, Rupay), net banking, and Cash on Delivery for eligible pin codes.",
      },
      {
        q: "Is my payment information secure?",
        a: "Yes. All transactions are secured with 256-bit SSL encryption. We do not store your card details on our servers. Payments are processed through certified and trusted payment gateways.",
      },
      {
        q: "Do you have a loyalty programme?",
        a: "Yes! Every purchase earns you Lumnica Leaf Points. Points can be redeemed for discounts on future orders. Create a free account to start earning from your very first purchase.",
      },
    ],
  },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid #E8E0D0",
        transition: "all 0.3s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left", padding: "22px 0",
          background: "none", border: "none", cursor: "pointer",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: "20px",
        }}
      >
        <span style={{
          fontFamily: "'Georgia', serif", fontSize: "16px",
          color: "#1C3A2E", lineHeight: "1.4", fontWeight: "400",
        }}>
          {q}
        </span>
        <span style={{
          width: "28px", height: "28px", flexShrink: 0,
          border: "1px solid #C8B99A", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#2D5A40", fontSize: "16px", lineHeight: 1,
          transition: "transform 0.3s, background 0.2s",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          background: open ? "#2D5A40" : "transparent",
        }}>
          <span style={{ color: open ? "#FDFAF5" : "#2D5A40" }}>+</span>
        </span>
      </button>
      <div style={{
        maxHeight: open ? "500px" : "0",
        overflow: "hidden",
        transition: "max-height 0.4s ease",
      }}>
        <p style={{
          fontFamily: "sans-serif", fontSize: "15px",
          color: "#6B6355", lineHeight: "1.75",
          paddingBottom: "22px", paddingRight: "48px",
        }}>
          {a}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(faqs[0].category);

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#FDFAF5", minHeight: "100vh" }}>

      {/* HERO */}
      <section style={{
        background: "#F5F0E8",
        padding: "80px 24px 60px",
        textAlign: "center",
        borderBottom: "1px solid #E0D8C8",
      }}>
        <p style={{ color: "#2D5A40", letterSpacing: "4px", fontSize: "11px", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "16px" }}>
          Help Centre
        </p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 54px)", color: "#1C3A2E", fontWeight: "400", marginBottom: "16px" }}>
          Frequently Asked Questions
        </h1>
        <p style={{ color: "#6B6355", fontFamily: "sans-serif", fontSize: "16px", maxWidth: "500px", margin: "0 auto 36px", lineHeight: "1.6" }}>
          Find answers to common questions about our products, orders, and skin care guidance.
        </p>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
          background: "#fff", border: "1px solid #E0D8C8", borderRadius: "4px",
          maxWidth: "480px", margin: "0 auto", padding: "4px 16px",
        }}>
          <span style={{ fontSize: "18px" }}>🔍</span>
          <input
            type="text"
            placeholder="Search your question..."
            style={{
              border: "none", outline: "none", fontFamily: "sans-serif",
              fontSize: "15px", color: "#1C3A2E", background: "transparent",
              width: "100%", padding: "12px 0",
            }}
          />
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px", display: "flex", gap: "60px", alignItems: "flex-start", flexWrap: "wrap" }}>

        {/* Category Nav */}
        <div style={{ width: "220px", flexShrink: 0, position: "sticky", top: "90px" }}>
          <p style={{ color: "#9A8A76", fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>Categories</p>
          {faqs.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "12px 16px", marginBottom: "4px",
                background: activeCategory === cat.category ? "#1C3A2E" : "transparent",
                color: activeCategory === cat.category ? "#FDFAF5" : "#4A3F35",
                border: "1px solid",
                borderColor: activeCategory === cat.category ? "#1C3A2E" : "transparent",
                borderRadius: "4px", cursor: "pointer",
                fontFamily: "sans-serif", fontSize: "14px",
                transition: "all 0.2s",
              }}
            >
              {cat.category}
              <span style={{
                float: "right", background: activeCategory === cat.category ? "rgba(255,255,255,0.2)" : "#E8E0D0",
                color: activeCategory === cat.category ? "#FDFAF5" : "#7A6A5A",
                borderRadius: "10px", padding: "1px 8px", fontSize: "11px",
              }}>
                {faqs.find(f => f.category === cat.category)?.items.length}
              </span>
            </button>
          ))}

          {/* Contact box */}
          <div style={{ marginTop: "40px", padding: "24px", background: "#1C3A2E", borderRadius: "8px", textAlign: "center" }}>
            <p style={{ color: "#D4AF37", fontFamily: "sans-serif", fontSize: "13px", marginBottom: "8px" }}>Still have questions?</p>
            <p style={{ color: "rgba(253,250,245,0.7)", fontFamily: "sans-serif", fontSize: "12px", lineHeight: "1.6", marginBottom: "16px" }}>
              Our team is here to help.
            </p>
            <a href="/contact" style={{
              display: "block", background: "#D4AF37", color: "#1C3A2E",
              padding: "10px", borderRadius: "4px", textDecoration: "none",
              fontFamily: "sans-serif", fontSize: "13px", fontWeight: "600",
            }}>
              Contact Us
            </a>
          </div>
        </div>

        {/* FAQ Items */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          {faqs
            .filter((cat) => cat.category === activeCategory)
            .map((cat) => (
              <div key={cat.category}>
                <h2 style={{ fontSize: "24px", color: "#1C3A2E", fontWeight: "400", marginBottom: "8px" }}>
                  {cat.category}
                </h2>
                <p style={{ fontFamily: "sans-serif", fontSize: "13px", color: "#9A8A76", marginBottom: "32px" }}>
                  {cat.items.length} questions
                </p>
                {cat.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: "#F5F0E8", padding: "60px 24px", textAlign: "center", borderTop: "1px solid #E0D8C8" }}>
        <h3 style={{ fontSize: "24px", color: "#1C3A2E", fontWeight: "400", marginBottom: "12px" }}>
          Didn't find your answer?
        </h3>
        <p style={{ fontFamily: "sans-serif", fontSize: "15px", color: "#6B6355", marginBottom: "28px" }}>
          Reach us on WhatsApp, email, or phone — we respond within 2 hours.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/91XXXXXXXXXX" style={{
            background: "#25D366", color: "#fff", padding: "14px 32px",
            borderRadius: "4px", textDecoration: "none", fontFamily: "sans-serif",
            fontWeight: "600", fontSize: "14px",
          }}>
            💬 WhatsApp Us
          </a>
          <a href="mailto:hello@lumnica.in" style={{
            background: "#1C3A2E", color: "#FDFAF5", padding: "14px 32px",
            borderRadius: "4px", textDecoration: "none", fontFamily: "sans-serif",
            fontWeight: "600", fontSize: "14px",
          }}>
            ✉️ Email Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;