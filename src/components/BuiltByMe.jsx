import { useEffect, useRef, useState } from "react";

// ── Marquee rows ─────────────────────────────────────────────────────────────
const row1 = ["Healthcare", "E-commerce", "Booking", "Fintech", "Real Estate", "Trading", "Fintech", "Healthcare", "E-commerce", "Booking", "Fintech", "Real Estate", "Trading", "Fintech"];
const row2 = ["Booking", "E-commerce", "SaaS", "EdTech", "Healthcare", "E-commerce", "Booking", "E-commerce", "SaaS", "EdTech", "Healthcare", "E-commerce"];
const highlightRow1 = ["Booking", "Trading"];
const highlightRow2 = ["E-commerce", "Healthcare"];

function MarqueeRow({ tags, highlights = [], reverse = false, speed = 20  }) {
  const doubled = [...tags, ...tags];
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        style={{
          display: "flex",
          gap: 8,
          animation: `${reverse ? "marqueeRev" : "marquee"} ${5}s linear infinite`,
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {doubled.map((tag, i) => {
          const isHighlighted = highlights.includes(tag) && i % 2 === 1;
          return (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "8px 20px",
                borderRadius: 40,
                fontSize: 16,
                fontWeight: isHighlighted ? 600 : 400,
                color: isHighlighted ? "#fff" : "#555",
                background: isHighlighted ? "#111" : "transparent",
                border: isHighlighted ? "none" : "1px solid #e0e0d8",
                flexShrink: 0,
                transition: "all 0.2s",
              }}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}

// ── Speedometer Logo ─────────────────────────────────────────────────────────
function SpeedometerLogo() {
  const [angle, setAngle] = useState(-110);
  const targetAngle = useRef(-110);
  const currentAngle = useRef(-110);
  const rafRef = useRef(null);
  const isMoving = useRef(false);

  useEffect(() => {
    // Auto animate: needle sweeps back and forth like a speedometer
    let dir = 1;
    let t = 0;

    const tick = () => {
      t += 0.008;
      // oscillate between -110 and 50 degrees
      const newAngle = -110 + Math.sin(t) * 80 + 80;
      targetAngle.current = newAngle;

      // lerp towards target
      currentAngle.current += (targetAngle.current - currentAngle.current) * 0.05;
      setAngle(currentAngle.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // SVG speedometer params
  const cx = 60, cy = 60, r = 44;
  const startAngleDeg = -210;
  const endAngleDeg = 30;
  const toRad = (d) => (d * Math.PI) / 180;

  // Arc ticks
  const totalAngle = endAngleDeg - startAngleDeg;
  const tickCount = 18;
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const a = startAngleDeg + (i / (tickCount - 1)) * totalAngle;
    const inner = r - 8;
    const outer = r - 2;
    const x1 = cx + inner * Math.cos(toRad(a));
    const y1 = cy + inner * Math.sin(toRad(a));
    const x2 = cx + outer * Math.cos(toRad(a));
    const y2 = cy + outer * Math.sin(toRad(a));
    return { x1, y1, x2, y2 };
  });

  // Needle
  const needleAngle = angle;
  const needleLen = 30;
  const nx = cx + needleLen * Math.cos(toRad(needleAngle));
  const ny = cy + needleLen * Math.sin(toRad(needleAngle));

  return (
    <div
      style={{
        width: 120,
        height: 120,
        borderRadius: "50%",
        background: "#FF6F00",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        position: "relative",
        zIndex: 10,
      }}
    >
      <svg width="90" height="90" viewBox="0 0 120 120">
        {/* Outer ring */}
        <circle cx="60" cy="60" r="52" fill="#1a1a1a" />
        <circle cx="60" cy="60" r="49" fill="none" stroke="#333" strokeWidth="0.8" />

        {/* Speed ticks */}
        {ticks.map((t, i) => (
          <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="#555" strokeWidth="1.2" strokeLinecap="round" />
        ))}

        {/* RH text */}
        <text
          x="60" y="56"
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          fill="#FF6F00"
          fontFamily="'Inter',sans-serif"
          letterSpacing="1"
        >
          TF
        </text>

        {/* Needle */}
        <line
          x1={cx} y1={cy}
          x2={nx} y2={ny}
          stroke="#FF6F00"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Needle pivot */}
        <circle cx={cx} cy={cy} r="4" fill="#FF6F00" />
      </svg>
    </div>
  );
}

// ── Skip Middlemen Card ──────────────────────────────────────────────────────
function SkipMiddlemenCard() {
  return (
    <div
      style={{
        background: "#f2f2f2",
        
        padding: "36px 36px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 320,
        position: "relative",
      }}
    >
      {/* Top dot - lime */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, justifyContent: "center", gap: 0 }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#FF6F00",
            flexShrink: 0,
          }}
        />
        {/* Dashed vertical line */}
        <div
          style={{
            width: 1,
            height: 120,
            borderLeft: "2px dashed #bbb",
            margin: "8px 0",
          }}
        />
        {/* Bottom dot - black */}
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#111",
            flexShrink: 0,
          }}
        />
      </div>

      {/* Label */}
      <p
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#111",
          margin: 0,
          textAlign: "center",
        }}
      >
        Skip middlemen
      </p>
    </div>
  );
}

// ── Senior Level Work Card ───────────────────────────────────────────────────
function SeniorWorkCard() {
  return (
    <div
      style={{
        background: "#f2f2f2",
        
        padding: "36px 36px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 320,
      }}
    >
      <h3 style={{ fontSize: 24, fontWeight: 500, color: "#111", margin: "0 0 32px", lineHeight: 1.3 }}>
        Senior-level work.<br />No agency markup
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, justifyContent: "flex-end" }}>
        {/* My subscription row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#111",
           borderRadius: 40,
            padding: "10px 20px",
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>My subscription</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#FF6F00" }}>$</span>
        </div>

        {/* Agency row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#e8e8e2",
            borderRadius: 40,
            padding: "10px 20px",
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 500, color: "#555" }}>Agency</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#555" }}>$$$</span>
        </div>
      </div>

      {/* 5x badge */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", marginTop: 24, gap: 8 }}>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: 11, color: "#aaa", margin: "0 0 0", letterSpacing: "0.02em" }}>Up to</p>
          <p style={{ fontSize: 52, fontWeight: 700, color: "#111", margin: 0, lineHeight: 1 }}>5x</p>
          <p style={{ fontSize: 12, color: "#888", margin: 0 }}>Lower average price</p>
        </div>
      </div>
    </div>
  );
}

// ── Conversion Centric Card ──────────────────────────────────────────────────
function ConversionCard() {
  const [needleAngle, setNeedleAngle] = useState(-130);
  const rafRef = useRef(null);
  const tRef = useRef(0);

  useEffect(() => {
    const tick = () => {
      tRef.current += 0.006;
      const a = -130 + (Math.sin(tRef.current) * 0.5 + 0.5) * 120;
      setNeedleAngle(a);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const cx = 100, cy = 110, r = 75;
  const toRad = (d) => (d * Math.PI) / 180;
  const startA = -210, endA = 30;
  const tickCount = 20;

  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const a = startA + (i / (tickCount - 1)) * (endA - startA);
    const isMajor = i % 4 === 0;
    const inner = r - (isMajor ? 14 : 8);
    const outer = r - 2;
    return {
      x1: cx + inner * Math.cos(toRad(a)),
      y1: cy + inner * Math.sin(toRad(a)),
      x2: cx + outer * Math.cos(toRad(a)),
      y2: cy + outer * Math.sin(toRad(a)),
      major: isMajor,
    };
  });

  const nx = cx + (r - 22) * Math.cos(toRad(needleAngle));
  const ny = cy + (r - 22) * Math.sin(toRad(needleAngle));

  return (
    <div
      style={{
        background: "#f2f2f2",
        
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        minHeight: 320,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h3 style={{ fontSize: 24, fontWeight: 500, color: "#111", margin: "0 0 8px" }}>
        Conversion-centric<br />design
      </h3>

      {/* Conversion rate badge */}
      <div
        style={{
          position: "absolute",
          top: 36,
          right: 28,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 3,
        }}
      >
        <span style={{ fontSize: 14, color: "#b2b2b2", letterSpacing: "0.04em" }}>Conversion rate</span>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#111", display: "inline-block" }} />
          <span style={{ fontSize: 18, fontWeight: 700, color: "#111" }}>6.84%</span>
        </div>
      </div>

      {/* Speedometer gauge */}
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", marginTop: 16 }}>
        <svg width="200" height="130" viewBox="0 0 200 120" style={{ overflow: "visible" }}>
          {ticks.map((t, i) => (
            <line
              key={i}
              x1={t.x1} y1={t.y1}
              x2={t.x2} y2={t.y2}
              stroke={t.major ? "#999" : "#ccc"}
              strokeWidth={t.major ? 1.5 : 0.8}
              strokeLinecap="round"
            />
          ))}
          {/* Needle */}
          <line
            x1={cx} y1={cy}
            x2={nx} y2={ny}
            stroke="#111"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx={cx} cy={cy} r="5" fill="#111" />
          {/* Line to badge */}
          <line x1={cx} y1={cy} x2={168} y2={28} stroke="#111" strokeWidth="0.8" />
          <circle cx={168} cy={28} r="2.5" fill="#111" />
        </svg>
      </div>
    </div>
  );
}

// ── Main Export ──────────────────────────────────────────────────────────────
export default function WhyMeSection() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRev {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <section
        style={{
          background: "#fff",
          padding: "160px 0px 80px",
          fontFamily: "'Inter','Helvetica Neue',sans-serif",
        }}
      >
        {/* ── Header ── */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 14, letterSpacing: "0.58em", color: "#0a0a0a", textTransform: "uppercase", fontWeight: 500, marginBottom: 12 }}>
            Why me
          </p>
          <h2 style={{ fontSize: 56, fontWeight: 600, color: "#111", margin: "0 0 2px", lineHeight: 1.05 }}>
            Built by one
          </h2>
          <h2 style={{ fontSize: 56, fontWeight: 600, color: "#b3b3b3", margin: 0, lineHeight: 1.05 }}>
            Better than many
          </h2>
        </div>

        {/* ── Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

          {/* TOP LEFT: Cross-industry marquee */}
          <div
            style={{
              background: "#f2f2f2",
              
              padding: "32px 0 32px",
              overflow: "hidden",
              minHeight: 280,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 500, color: "#111", margin: "0 0 28px", paddingLeft: 32, lineHeight: 1.4 }}>
              Cross-industry experience<br />in product design
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <MarqueeRow tags={row1} highlights={highlightRow1} speed={2} />
              <MarqueeRow tags={row2} highlights={highlightRow2} reverse speed={2} />
            </div>

            {/* Overlapping speedometer logo - bottom right overlap */}
            <div
              style={{
                position: "absolute",
                bottom: -32,
                right: -32,
                zIndex: 10,
              }}
            >
              <SpeedometerLogo />
            </div>
          </div>

          {/* TOP RIGHT: Conversion centric */}
          <ConversionCard />

          {/* BOTTOM LEFT: Skip middlemen */}
          <SkipMiddlemenCard />

          {/* BOTTOM RIGHT: Senior-level work */}
          <SeniorWorkCard />
        </div>
      </section>
    </>
  );
}
