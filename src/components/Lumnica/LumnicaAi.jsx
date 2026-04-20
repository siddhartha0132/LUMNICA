import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  startCamera,
  stopCamera,
  initFaceMesh,
  runLiveSkinAnalysis,
} from "../../utils/ml-engine";

// ─────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────
const API_URL = "https://lumnicaai.onrender.com/api";

const pageTransition = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

// ─────────────────────────────────────────────
// GLOBAL STYLES (injected once)
// ─────────────────────────────────────────────
const GlobalStyles = () => {
  useEffect(() => {
    const id = "lumnica-styles";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

      .lumnica-root {
        --cream: #FAF6F1;
        --ivory: #F5EFE6;
        --gold: #C9A96E;
        --gold-light: #E8D5B0;
        --gold-dark: #9E7A45;
        --sand: #D4B896;
        --espresso: #2C1F14;
        --bark: #5C3D2E;
        --sage: #8A9B8E;
        --blush: #E8C9C0;
        --mist: rgba(250,246,241,0.7);
        --glass: rgba(255,255,255,0.55);
        --shadow-soft: 0 8px 40px rgba(44,31,20,0.10);
        --shadow-card: 0 4px 24px rgba(44,31,20,0.08);
        --radius-xl: 20px;
        --radius-2xl: 28px;
        font-family: 'DM Sans', sans-serif;
        color: var(--espresso);
        background: var(--cream);
      }

      .lumnica-root * { box-sizing: border-box; }

      .lumnica-display {
        font-family: 'Cormorant Garamond', serif;
      }

      .lumnica-glass {
        background: var(--glass);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(201,169,110,0.18);
      }

      .lumnica-btn-primary {
        background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
        color: var(--cream);
        border: none;
        padding: 14px 36px;
        border-radius: 100px;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.95rem;
        font-weight: 500;
        letter-spacing: 0.04em;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        box-shadow: 0 4px 20px rgba(158,122,69,0.30);
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .lumnica-btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(158,122,69,0.40);
      }

      .lumnica-btn-primary:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
      }

      .lumnica-btn-ghost {
        background: transparent;
        color: var(--bark);
        border: 1px solid rgba(201,169,110,0.4);
        padding: 12px 28px;
        border-radius: 100px;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.9rem;
        font-weight: 400;
        cursor: pointer;
        transition: all 0.2s ease;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .lumnica-btn-ghost:hover {
        background: var(--ivory);
        border-color: var(--gold);
      }

      .lumnica-option {
        padding: 14px 18px;
        border: 1.5px solid rgba(201,169,110,0.25);
        border-radius: 14px;
        cursor: pointer;
        transition: all 0.22s ease;
        background: white;
        font-size: 0.93rem;
        color: var(--bark);
        font-family: 'DM Sans', sans-serif;
      }

      .lumnica-option:hover {
        border-color: var(--gold);
        background: var(--ivory);
        transform: translateX(4px);
      }

      .lumnica-option.selected {
        border-color: var(--gold);
        background: linear-gradient(135deg, var(--gold-light), var(--ivory));
        color: var(--espresso);
        font-weight: 500;
      }

      .lumnica-card {
        background: white;
        border-radius: var(--radius-xl);
        padding: 24px;
        border: 1px solid rgba(201,169,110,0.15);
        box-shadow: var(--shadow-card);
      }

      .lumnica-skeleton {
        background: linear-gradient(90deg, var(--ivory) 25%, var(--gold-light) 50%, var(--ivory) 75%);
        background-size: 200% 100%;
        animation: shimmer 1.6s infinite;
        border-radius: 8px;
      }

      @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      .lumnica-glow {
        position: fixed;
        pointer-events: none;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.35;
        z-index: 0;
      }

      .lumnica-progress-bar {
        height: 2px;
        background: linear-gradient(90deg, var(--gold), var(--sand));
        border-radius: 2px;
        transition: width 0.6s ease;
        box-shadow: 0 0 8px rgba(201,169,110,0.5);
      }

      @media (max-width: 640px) {
        .lumnica-method-grid {
          grid-template-columns: 1fr !important;
        }
        .lumnica-btn-primary, .lumnica-btn-ghost {
          width: 100%;
          justify-content: center;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
};

// ─────────────────────────────────────────────
// PROGRESS INDICATOR
// ─────────────────────────────────────────────
const ProgressStepper = ({ step }) => {
  const steps = ["Capture", "Analyzing", "Questions", "Profile", "Results"];
  const pct = ((step - 1) / (steps.length - 1)) * 100;

  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        {steps.map((label, i) => {
          const active = i + 1 === step;
          const done = i + 1 < step;
          return (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1 }}>
              <motion.div
                animate={{ scale: active ? 1.2 : 1 }}
                style={{
                  width: 26, height: 26,
                  borderRadius: "50%",
                  background: done ? "var(--gold)" : active ? "var(--espresso)" : "var(--ivory)",
                  border: active ? "2px solid var(--gold)" : done ? "none" : "1.5px solid var(--gold-light)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 600,
                  color: done || active ? (done ? "white" : "var(--cream)") : "var(--sand)",
                  boxShadow: active ? "0 0 12px rgba(201,169,110,0.5)" : "none",
                  transition: "all 0.3s",
                }}
              >
                {done ? "✓" : i + 1}
              </motion.div>
              <span style={{ fontSize: 10, color: active ? "var(--espresso)" : "var(--sand)", fontWeight: active ? 500 : 400, letterSpacing: "0.04em" }}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <div style={{ height: 2, background: "var(--ivory)", borderRadius: 2 }}>
        <motion.div
          className="lumnica-progress-bar"
          animate={{ width: `${pct}%` }}
          initial={{ width: 0 }}
        />
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// LOADER (Skeleton)
// ─────────────────────────────────────────────
const Loader = ({ message }) => (
  <motion.div {...pageTransition} style={{ padding: "48px 0", textAlign: "center" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 360, margin: "0 auto 32px" }}>
      {[80, 60, 90, 50].map((w, i) => (
        <div key={i} className="lumnica-skeleton" style={{ height: 16, width: `${w}%`, margin: "0 auto" }} />
      ))}
    </div>
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", color: "var(--bark)", fontStyle: "italic" }}
    >
      {message || "Reading your skin's story…"}
    </motion.div>
    <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
          style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--gold)" }}
        />
      ))}
    </div>
  </motion.div>
);

// ─────────────────────────────────────────────
// ERROR DISPLAY
// ─────────────────────────────────────────────
const ErrorBanner = ({ message, onDismiss }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
    style={{
      background: "linear-gradient(135deg, #FDF0EE, #FAE8E5)",
      border: "1px solid rgba(180,80,60,0.2)",
      borderRadius: 14, padding: "16px 20px",
      display: "flex", alignItems: "flex-start", gap: 12,
      marginBottom: 24,
    }}
  >
    <span style={{ fontSize: 18 }}>⚠️</span>
    <div style={{ flex: 1 }}>
      <p style={{ fontSize: "0.88rem", color: "#8B3A2E", lineHeight: 1.5 }}>{message}</p>
    </div>
    {onDismiss && (
      <button onClick={onDismiss} style={{ background: "none", border: "none", cursor: "pointer", color: "#8B3A2E", fontSize: 18, lineHeight: 1 }}>×</button>
    )}
  </motion.div>
);

// ─────────────────────────────────────────────
// METHOD SELECTION
// ─────────────────────────────────────────────
const MethodSelection = ({ onSelectCamera, onSelectUpload }) => {
  const [hovered, setHovered] = useState(null);

  const methods = [
    {
      id: "camera",
      icon: "◎",
      title: "Live Analysis",
      sub: "Real-time face mesh detection",
      badge: "Instant · Free",
      badgeColor: "#6B8F71",
      onClick: onSelectCamera,
    },
    {
      id: "upload",
      icon: "⊙",
      title: "Photo Upload",
      sub: "Detailed image-based analysis",
      badge: "JPG · PNG",
      badgeColor: "var(--gold-dark)",
      onClick: onSelectUpload,
    },
  ];

  return (
    <motion.div {...pageTransition}>
      <motion.p
        variants={fadeUp} initial="initial" animate="animate"
        style={{ textAlign: "center", color: "var(--sage)", fontSize: "0.88rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}
      >
        Begin Your Ritual
      </motion.p>
      <motion.h2
        variants={fadeUp} initial="initial" animate="animate"
        className="lumnica-display"
        style={{ textAlign: "center", fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 400, color: "var(--espresso)", marginBottom: 40, lineHeight: 1.2 }}
      >
        Choose Your Path
      </motion.h2>

      <motion.div
        variants={stagger} initial="initial" animate="animate"
        className="lumnica-method-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 40 }}
      >
        {methods.map((m) => (
          <motion.button
            key={m.id}
            variants={fadeUp}
            onClick={m.onClick}
            onHoverStart={() => setHovered(m.id)}
            onHoverEnd={() => setHovered(null)}
            whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(44,31,20,0.14)" }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: hovered === m.id ? "linear-gradient(135deg, #FFFCF7, var(--ivory))" : "white",
              border: hovered === m.id ? "1.5px solid var(--gold)" : "1.5px solid rgba(201,169,110,0.2)",
              borderRadius: "var(--radius-2xl)",
              padding: "36px 24px",
              textAlign: "center",
              cursor: "pointer",
              transition: "background 0.3s, border 0.3s",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div style={{ fontSize: "2.6rem", marginBottom: 16, color: "var(--gold)" }}>{m.icon}</div>
            <h3 className="lumnica-display" style={{ fontSize: "1.4rem", fontWeight: 400, color: "var(--espresso)", marginBottom: 8 }}>{m.title}</h3>
            <p style={{ fontSize: "0.82rem", color: "var(--sage)", marginBottom: 16, lineHeight: 1.5 }}>{m.sub}</p>
            <span style={{
              fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.06em",
              color: m.badgeColor, background: "var(--ivory)",
              padding: "4px 12px", borderRadius: 100,
            }}>
              {m.badge}
            </span>
          </motion.button>
        ))}
      </motion.div>

      <motion.p
        variants={fadeUp} initial="initial" animate="animate"
        style={{ textAlign: "center", fontSize: "0.78rem", color: "var(--sand)", letterSpacing: "0.04em" }}
      >
        Your images are processed privately and never stored.
      </motion.p>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// CAMERA SECTION
// ─────────────────────────────────────────────
const CameraSection = ({ onBack, onAnalyze }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraState, setCameraState] = useState("idle"); // idle | starting | ready | error
  const [statusMsg, setStatusMsg] = useState("Camera ready");

  const handleStart = async () => {
    setCameraState("starting");
    setStatusMsg("Requesting camera access…");
    const result = await startCamera(videoRef.current);
    if (!result.success) {
      setCameraState("error");
      setStatusMsg("Camera access denied");
      return;
    }
    setStatusMsg("Loading face mesh…");
    await initFaceMesh();
    setCameraState("ready");
    setStatusMsg("Position your face in the frame");
  };

  const handleStop = () => {
    stopCamera(videoRef.current);
    setCameraState("idle");
    setStatusMsg("Camera stopped");
  };

  const handleAnalyze = () => {
    if (cameraState !== "ready") return;
    onAnalyze(videoRef.current, canvasRef.current);
  };

  return (
    <motion.div {...pageTransition}>
      <button className="lumnica-btn-ghost" onClick={onBack} style={{ marginBottom: 28 }}>
        ← Back
      </button>

      <h2 className="lumnica-display" style={{ fontSize: "1.9rem", fontWeight: 400, marginBottom: 6 }}>Live Skin Analysis</h2>
      <p style={{ color: "var(--sage)", fontSize: "0.88rem", marginBottom: 28 }}>Ensure good lighting and face the camera directly.</p>

      <div style={{
        position: "relative", borderRadius: "var(--radius-2xl)", overflow: "hidden",
        background: "#0A0805", aspectRatio: "4/3", maxWidth: 560, margin: "0 auto 24px",
        boxShadow: "0 20px 60px rgba(44,31,20,0.25)",
        border: "1px solid rgba(201,169,110,0.25)",
      }}>
        <video ref={videoRef} autoPlay playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <canvas ref={canvasRef} style={{ display: "none" }} />

        {/* Overlay grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(201,169,110,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        {/* Status badge */}
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: "absolute", top: 16, left: 16,
            background: "rgba(10,8,5,0.75)", backdropFilter: "blur(8px)",
            color: cameraState === "ready" ? "#8FBF96" : cameraState === "error" ? "#BF8F8F" : "var(--gold-light)",
            padding: "6px 14px", borderRadius: 100, fontSize: "0.76rem", fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <span style={{ marginRight: 6 }}>{cameraState === "ready" ? "●" : cameraState === "error" ? "●" : "○"}</span>
          {statusMsg}
        </motion.div>

        {/* Face guide oval */}
        {cameraState === "ready" && (
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 3 }}
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -52%)",
              width: "52%", height: "68%",
              border: "1.5px dashed rgba(201,169,110,0.5)",
              borderRadius: "50%", pointerEvents: "none",
            }}
          />
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
        {cameraState === "idle" || cameraState === "error" ? (
          <button className="lumnica-btn-primary" onClick={handleStart}>
            ◉ Start Camera
          </button>
        ) : (
          <>
            <button className="lumnica-btn-ghost" onClick={handleStop}>Stop</button>
            {cameraState === "ready" && (
              <button className="lumnica-btn-primary" onClick={handleAnalyze}>
                Analyze My Skin →
              </button>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// UPLOAD SECTION
// ─────────────────────────────────────────────
const UploadSection = ({ onBack, onAnalyze }) => {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFile = (f) => {
    if (!f || !f.type.startsWith("image/")) return;
    if (f.size > 5 * 1024 * 1024) return;
    setFile(f);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(f);
  };

  return (
    <motion.div {...pageTransition}>
      <button className="lumnica-btn-ghost" onClick={onBack} style={{ marginBottom: 28 }}>← Back</button>

      <h2 className="lumnica-display" style={{ fontSize: "1.9rem", fontWeight: 400, marginBottom: 6 }}>Upload Your Photo</h2>
      <p style={{ color: "var(--sage)", fontSize: "0.88rem", marginBottom: 28 }}>A clear, well-lit facial photo gives the most accurate results.</p>

      <AnimatePresence mode="wait">
        {!preview ? (
          <motion.div
            key="dropzone"
            {...pageTransition}
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
            whileHover={{ boxShadow: "0 12px 40px rgba(201,169,110,0.2)" }}
            style={{
              border: `2px dashed ${dragging ? "var(--gold)" : "rgba(201,169,110,0.35)"}`,
              borderRadius: "var(--radius-2xl)",
              padding: "60px 24px",
              textAlign: "center",
              cursor: "pointer",
              background: dragging ? "linear-gradient(135deg, #FFFDF9, var(--ivory))" : "var(--ivory)",
              transition: "all 0.3s",
              marginBottom: 24,
            }}
          >
            <motion.div animate={{ y: dragging ? -8 : 0 }} transition={{ duration: 0.2 }}>
              <div style={{ fontSize: "3rem", marginBottom: 16, color: "var(--gold)" }}>⊙</div>
              <p className="lumnica-display" style={{ fontSize: "1.4rem", fontWeight: 400, color: "var(--espresso)", marginBottom: 8 }}>
                Drop your photo here
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--sand)" }}>or click to browse · JPG, PNG · Max 5MB</p>
            </motion.div>
            <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          </motion.div>
        ) : (
          <motion.div key="preview" {...pageTransition} style={{ marginBottom: 24 }}>
            <div style={{ position: "relative", maxWidth: 360, margin: "0 auto 20px", borderRadius: "var(--radius-2xl)", overflow: "hidden", boxShadow: "0 16px 48px rgba(44,31,20,0.18)" }}>
              <img src={preview} alt="Preview" style={{ width: "100%", display: "block" }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(44,31,20,0.4) 0%, transparent 50%)",
              }} />
              <button
                onClick={() => { setPreview(null); setFile(null); }}
                style={{
                  position: "absolute", top: 12, right: 12,
                  background: "rgba(44,31,20,0.6)", backdropFilter: "blur(8px)",
                  color: "white", border: "none", borderRadius: "50%",
                  width: 32, height: 32, cursor: "pointer", fontSize: 16,
                }}
              >×</button>
            </div>

            <div style={{ textAlign: "center" }}>
              <button className="lumnica-btn-primary" onClick={() => onAnalyze(file)}>
                Analyze My Skin →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// SKIN ANALYSIS DISPLAY
// ─────────────────────────────────────────────
const SkinAnalysisDisplay = ({ skinData }) => {
  const pills = [
    { label: "Tone", value: skinData.tone, icon: "◐" },
    { label: "Oiliness", value: skinData.oiliness, icon: "◈" },
    { label: "Texture", value: skinData.texture, icon: "◉" },
    { label: "Undertone", value: skinData.undertone, icon: "◑" },
  ];

  return (
    <motion.div
      className="lumnica-card"
      variants={stagger} initial="initial" animate="animate"
      style={{ marginBottom: 32, background: "linear-gradient(135deg, #FFFCF7, white)" }}
    >
      <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <div style={{ width: 6, height: 28, background: "linear-gradient(180deg, var(--gold), var(--sand))", borderRadius: 3 }} />
        <h3 className="lumnica-display" style={{ fontSize: "1.3rem", fontWeight: 400 }}>Skin Analysis Results</h3>
      </motion.div>

      <motion.div variants={stagger} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
        {pills.map((p) => (
          <motion.div
            key={p.label}
            variants={fadeUp}
            style={{
              background: "var(--ivory)", borderRadius: 14,
              padding: "14px 16px",
              border: "1px solid rgba(201,169,110,0.15)",
            }}
          >
            <div style={{ fontSize: "0.7rem", color: "var(--sand)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
              {p.icon} {p.label}
            </div>
            <div style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--espresso)", textTransform: "capitalize" }}>
              {p.value}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeUp}>
        <div style={{ fontSize: "0.7rem", color: "var(--sand)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>◈ Concerns Detected</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {skinData.concerns.map((c) => (
            <span key={c} style={{
              background: "linear-gradient(135deg, var(--gold-light), var(--ivory))",
              color: "var(--bark)", fontSize: "0.8rem", fontWeight: 500,
              padding: "5px 14px", borderRadius: 100,
              border: "1px solid rgba(201,169,110,0.3)",
              textTransform: "capitalize",
            }}>
              {c}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// QUIZ SECTION
// ─────────────────────────────────────────────
const QuizSection = ({ questions, answers, onAnswer, onSubmit }) => {
  const allAnswered = answers.every((a) => a !== null);

  return (
    <motion.div {...pageTransition}>
      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
          <div style={{ width: 6, height: 28, background: "linear-gradient(180deg, var(--gold), var(--sand))", borderRadius: 3 }} />
          <h3 className="lumnica-display" style={{ fontSize: "1.3rem", fontWeight: 400 }}>Personalise Your Profile</h3>
        </motion.div>

        {questions.map((q, qi) => (
          <motion.div
            key={qi}
            variants={fadeUp}
            className="lumnica-card"
            style={{ marginBottom: 18 }}
          >
            <p style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--espresso)", marginBottom: 14, lineHeight: 1.5 }}>
              <span style={{ color: "var(--gold)", marginRight: 8, fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}>
                {String(qi + 1).padStart(2, "0")}.
              </span>
              {q.question}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {q.options.map((opt, oi) => (
                <motion.div
                  key={oi}
                  className={`lumnica-option${answers[qi] === opt ? " selected" : ""}`}
                  onClick={() => onAnswer(qi, opt)}
                  whileTap={{ scale: 0.98 }}
                >
                  <span style={{
                    display: "inline-block", width: 18, height: 18,
                    borderRadius: "50%", border: `1.5px solid ${answers[qi] === opt ? "var(--gold)" : "rgba(201,169,110,0.4)"}`,
                    marginRight: 10, background: answers[qi] === opt ? "var(--gold)" : "transparent",
                    verticalAlign: "middle",
                    transition: "all 0.2s",
                  }} />
                  {opt}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {allAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              style={{ textAlign: "center", marginTop: 28 }}
            >
              <button className="lumnica-btn-primary" style={{ fontSize: "1rem", padding: "16px 48px" }} onClick={onSubmit}>
                Reveal My Skincare Profile ✦
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// RESULTS SECTION
// ─────────────────────────────────────────────
const ResultsSection = ({ results, onRestart }) => {
  const routineSections = [
    { key: "morning", label: "Morning Ritual", icon: "☀" },
    { key: "night", label: "Evening Ritual", icon: "☽" },
    { key: "weekly", label: "Weekly Treatment", icon: "✦" },
  ];

  return (
    <motion.div {...pageTransition}>
      <motion.div variants={stagger} initial="initial" animate="animate">

        {/* Dosha Hero */}
        <motion.div
          variants={fadeUp}
          style={{
            background: "linear-gradient(135deg, var(--espresso) 0%, var(--bark) 100%)",
            borderRadius: "var(--radius-2xl)",
            padding: "36px 28px",
            color: "white",
            marginBottom: 24,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", top: -40, right: -40,
            width: 180, height: 180,
            borderRadius: "50%",
            background: "rgba(201,169,110,0.12)",
          }} />
          <div style={{
            position: "absolute", bottom: -20, left: -20,
            width: 120, height: 120,
            borderRadius: "50%",
            background: "rgba(201,169,110,0.08)",
          }} />
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-light)", marginBottom: 10 }}>
            Your Ayurvedic Constitution
          </p>
          <h2 className="lumnica-display" style={{ fontSize: "2.4rem", fontWeight: 300, color: "var(--cream)", marginBottom: 16 }}>
            {results.dosha.type}
          </h2>
          <p style={{ fontSize: "0.88rem", color: "rgba(250,246,241,0.75)", lineHeight: 1.7, maxWidth: 480 }}>
            {results.dosha.description}
          </p>
        </motion.div>

        {/* Routines */}
        {routineSections.map((section) => (
          <motion.div key={section.key} variants={fadeUp} className="lumnica-card" style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span style={{ fontSize: "1.3rem", color: "var(--gold)" }}>{section.icon}</span>
              <h3 className="lumnica-display" style={{ fontSize: "1.25rem", fontWeight: 400 }}>{section.label}</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {results.routine[section.key]?.map((step, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 14,
                    padding: "14px 16px", borderRadius: 14,
                    background: "var(--ivory)",
                    border: "1px solid rgba(201,169,110,0.15)",
                  }}
                >
                  <div style={{
                    minWidth: 28, height: 28, borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--gold), var(--gold-dark))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.7rem", fontWeight: 700, color: "white",
                    flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--espresso)", marginBottom: 3 }}>
                      <span style={{ color: "var(--bark)" }}>{step.step}</span>
                      {step.product && <span style={{ color: "var(--sage)" }}> · {step.product}</span>}
                    </p>
                    {step.reason && <p style={{ fontSize: "0.8rem", color: "var(--sand)", lineHeight: 1.5 }}>{step.reason}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Contact Us */}
        <motion.div variants={fadeUp} className="lumnica-card" style={{ marginBottom: 32, textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: "1.3rem", color: "var(--gold)" }}>⊕</span>
            <h3 className="lumnica-display" style={{ fontSize: "1.25rem", fontWeight: 400 }}>Personalised Recommendations</h3>
          </div>

          <p style={{ fontSize: "0.95rem", color: "var(--bark)", lineHeight: 1.7, marginBottom: 20, maxWidth: 480, margin: "0 auto 20px" }}>
            Based on your unique skin profile, we'll curate the perfect products for you.
          </p>

          <p style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--espresso)", marginBottom: 24 }}>
            Contact us and we will reach out to you with personalised product recommendations.
          </p>

          <button 
            className="lumnica-btn-primary"
            onClick={() => window.location.href = '/contact'}
            style={{ fontSize: "0.95rem" }}
          >
            Contact Us →
          </button>
        </motion.div>

        {/* Restart */}
        <motion.div variants={fadeUp} style={{ textAlign: "center" }}>
          <button className="lumnica-btn-ghost" onClick={onRestart}>↺ Begin Again</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function LumnicaAi() {
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState(null); // "camera" | "upload"
  const [skinData, setSkinData] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");
  const [error, setError] = useState(null);

  const clearError = () => setError(null);

  // ── Helpers ──
  const convertMLData = (mlData) => ({
    tone: mlData.tone || `${mlData.fitzpatrick?.tone || "medium"} ${mlData.fitzpatrick?.undertone || "neutral"}`,
    oiliness: mlData.oiliness?.overall || mlData.oiliness || "normal",
    texture: mlData.texture?.overall || mlData.texture || "smooth",
    concerns: (() => {
      const c = Array.isArray(mlData.concerns)
        ? (mlData.concerns[0]?.name ? mlData.concerns.map((c) => c.name) : mlData.concerns)
        : [];
      return c.length ? c : ["general skin health"];
    })(),
    undertone: mlData.fitzpatrick?.undertone || mlData.undertone || "neutral",
  });

  const loadQuiz = useCallback(async (sd) => {
    setLoadingMsg("Crafting your personalised questionnaire…");
    const response = await fetch(`${API_URL}/generateQuiz`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skinData: sd }),
    });
    if (!response.ok) throw new Error("Failed to generate quiz");
    const data = await response.json();
    setQuestions(data.questions);
    setAnswers(new Array(data.questions.length).fill(null));
  }, []);

  // ── Step handlers ──
  const handleCameraAnalyze = async (videoEl, canvasEl) => {
    setStep(2);
    setLoadingMsg("Analysing your skin in real-time…");
    try {
      const result = await runLiveSkinAnalysis(videoEl, canvasEl, {
        roboflowKey: null,
        roboflowModel: null,
      });
      if (result.error) throw new Error(result.error);

      const { skinData: mlData, needsFallback } = result;

      if (needsFallback) {
        setLoadingMsg("Enhancing results with AI…");
        await new Promise((resolve, reject) => {
          canvasEl.toBlob(async (blob) => {
            try {
              const formData = new FormData();
              formData.append("image", blob, "face.jpg");
              formData.append("mlData", JSON.stringify(mlData));
              const resp = await fetch(`${API_URL}/analyzeSkinML`, { method: "POST", body: formData });
              if (!resp.ok) throw new Error("Fallback analysis failed");
              const data = await resp.json();
              const converted = convertMLData(data.skinData);
              setSkinData(converted);
              await loadQuiz(converted);
              setStep(3);
              resolve();
            } catch (e) { reject(e); }
          }, "image/jpeg", 0.8);
        });
      } else {
        const converted = convertMLData(mlData);
        setSkinData(converted);
        await loadQuiz(converted);
        setStep(3);
      }
    } catch (e) {
      setError(e.message);
      setStep(1);
    }
  };

  const handleUploadAnalyze = async (file) => {
    setStep(2);
    setLoadingMsg("Reading your skin's story…");
    const formData = new FormData();
    formData.append("image", file);
    try {
      const resp = await fetch(`${API_URL}/analyzeSkin`, { method: "POST", body: formData });
      if (!resp.ok) throw new Error("Analysis failed");
      const data = await resp.json();
      setSkinData(data.skinData);
      await loadQuiz(data.skinData);
      setStep(3);
    } catch (e) {
      setError(e.message);
      setStep(1);
    }
  };

  const handleAnswer = (qi, opt) => {
    const updated = [...answers];
    updated[qi] = opt;
    setAnswers(updated);
  };

  const handleSubmitQuiz = async () => {
    setStep(4);
    setLoadingMsg("Weaving your Ayurvedic profile…");
    try {
      const resp = await fetch(`${API_URL}/analyzeResults`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skinData, answers }),
      });
      if (!resp.ok) throw new Error("Failed to get results");
      const data = await resp.json();
      setResults(data);
      setStep(5);
    } catch (e) {
      setError(e.message);
      setStep(3);
    }
  };

  const handleRestart = () => {
    setStep(1);
    setMode(null);
    setSkinData(null);
    setQuestions([]);
    setAnswers([]);
    setResults(null);
    setError(null);
  };

  // ─────────────────────────────────────────
  return (
    <div className="lumnica-root" style={{ minHeight: "100vh", position: "relative" }}>
      <GlobalStyles />

      {/* Ambient glows */}
      <div className="lumnica-glow" style={{ width: 500, height: 500, top: -100, right: -150, background: "radial-gradient(circle, rgba(201,169,110,0.25), transparent)" }} />
      <div className="lumnica-glow" style={{ width: 400, height: 400, bottom: 0, left: -100, background: "radial-gradient(circle, rgba(212,184,150,0.2), transparent)" }} />

      <div style={{
        maxWidth: 680, margin: "0 auto",
        padding: "calc(80px + 2rem) 24px 60px",
        position: "relative", zIndex: 1,
      }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>
            ✦ AI AYURVEDA ✦
          </p>
          <h1
            className="lumnica-display"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 3.8rem)", fontWeight: 300,
              letterSpacing: "-0.01em", color: "var(--espresso)",
              lineHeight: 1.05,
            }}
          >
            LUMNICA
          </h1>
          <p style={{ fontSize: "0.82rem", color: "var(--sage)", letterSpacing: "0.08em", marginTop: 6 }}>
            Ancient wisdom. Modern intelligence.
          </p>
        </motion.div>

        {/* Progress */}
        <ProgressStepper step={step} />

        {/* Error */}
        <AnimatePresence>
          {error && <ErrorBanner message={error} onDismiss={clearError} />}
        </AnimatePresence>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {step === 1 && mode === null && (
            <MethodSelection
              key="method"
              onSelectCamera={() => setMode("camera")}
              onSelectUpload={() => setMode("upload")}
            />
          )}

          {step === 1 && mode === "camera" && (
            <CameraSection
              key="camera"
              onBack={() => setMode(null)}
              onAnalyze={handleCameraAnalyze}
            />
          )}

          {step === 1 && mode === "upload" && (
            <UploadSection
              key="upload"
              onBack={() => setMode(null)}
              onAnalyze={handleUploadAnalyze}
            />
          )}

          {step === 2 && <Loader key="loading1" message={loadingMsg} />}

          {step === 3 && skinData && (
            <motion.div key="step3" {...pageTransition}>
              <SkinAnalysisDisplay skinData={skinData} />
              <QuizSection
                questions={questions}
                answers={answers}
                onAnswer={handleAnswer}
                onSubmit={handleSubmitQuiz}
              />
            </motion.div>
          )}

          {step === 4 && <Loader key="loading2" message={loadingMsg} />}

          {step === 5 && results && (
            <ResultsSection key="results" results={results} onRestart={handleRestart} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}