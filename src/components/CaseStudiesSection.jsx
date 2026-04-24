import { useState } from "react";
import QMB from "../assets/images/mockup-image.png";
import PerchPeek from "../assets/images/perchpeek-mockup.png";
import LegalRemote from "../assets/images/remote-legal.png";

const cases = [
  {
    id: 1,
    logoAlt: "GTM funds",
    logo: "https://cdn.prod.website-files.com/63dc90c4fffbf53ddbbf2480/6408aa6f3210b37c9a4a14b3_GTM%20Logo.png",
    image: "https://cdn.dribbble.com/userupload/43990664/file/original-8f354f4bf121d1421b69fb6db62518ee.png?resize=752x&vertical=center",
    title: "A founder-led design studio helping startups ship faster and scale smarter.",
    tags: ["Founder-Led", "Product Design", "Revenue-Focused"],
    stats: [
      { value: "39k", label: "Average rating" },
      { value: "4.8", label: "Store rating" },
      { value: "50k", label: "Downloads" },
    ],
  },
  {
    id: 2,
    logoAlt: "QMB",
    logo: "https://www.qmb.ai/assets/Logo.svg",
    image: QMB,
    title: "QualiVerse® is the first AI-native Regulatory Intelligence Engine built for FDA success…",
    tags: ["RevOps", "Business", "SaaS"],
    stats: [
      { value: "20M", label: "Secured funding" },
      { value: "90%", label: "Demo success rate" },
      { value: "+32%", label: "Trial to paid" },
    ],
  },
  {
    id: 3,
    logoAlt: "PerchPeek",
    logo: "https://cdn.prod.website-files.com/613f1f98b47b90f0bd65b024/655465f8756013d49a8017ff_perchpeek%20logo%20-%20Copy.png",
    image: PerchPeek,
    title: "AI-powered crypto trading app for mobile and web.",
    tags: ["Mobile", "iPad", "Web"],
    stats: [
      { value: "39k", label: "Average rating" },
      { value: "4.8", label: "Store rating" },
      { value: "50k", label: "Downloads" },
    ],
  },
  {
    id: 4,
    logoAlt: "Elumity",
    logo: "https://i0.wp.com/remotelegalstaff.com/wp-content/uploads/2022/06/black.png?w=1591&ssl=1",
    image: LegalRemote,
    title: "Elumity — AI-powered knowledge management platform.",
    tags: ["AI", "B2B", "Mobile App"],
    stats: [
      { value: "39k", label: "Average rating" },
      { value: "4.8", label: "Store rating" },
      { value: "50k", label: "Downloads" },
    ],
  },
];

function ArrowIcon() {
  return (
    <div className="border p-4 rounded-full border-[#b3b3b3]  ">
      <svg width="20" height="20" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.66681 4.66699H11.3335M11.3335 4.66699V11.3337M11.3335 4.66699L4.66681 11.3337" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>

  );
}

function CaseCard({ item, sectionHovered }) {
  const [hovered, setHovered] = useState(false);

  console.log('item.image:', item.image);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* ── Image card ── */}
      <div className="CardPer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          borderRadius: 0,
          overflow: "hidden",
          height: 650,
          cursor: "pointer",
          transition: "transform 0.4s ease",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        {/* Full background image */}
        <img
          src={item.image}
          alt={item.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
          onLoad={() => console.log('Image loaded:', item.image)}
          onError={(e) => { console.log('Image failed to load:', item.image, e); e.target.style.display = "none"; }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.05) 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.0) 60%, rgba(0,0,0,0) 100%)",
            transition: "background 0.4s ease",
          }}
        />

        {/* Logo top-left */}
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 18,
            background: "rgba(51, 50, 50, 0)",
            borderRadius: 10,
            padding: "7px 14px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={item.logo}
            alt={item.logoAlt}
            style={{ height: 18, maxWidth: 80, objectFit: "contain" }}
            onError={(e) => {
              e.target.outerHTML = `<span style="font-size:12px;font-weight:700;color:#111">${item.logoAlt}</span>`;
            }}
          />
        </div>

        {/* Stats — slide up on hover */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "0 22px 22px",
          }}
        >
          <div
            style={{
              display: "flex",
              maxHeight: hovered ? "90px" : "0px",
              overflow: "hidden",
              opacity: hovered ? 1 : 0,
              transition: "max-height 0.4s ease, opacity 0.35s ease",
              borderTop: "1px solid rgba(255,255,255,0.2)",
              paddingTop: hovered ? 14 : 0,
            }}
          >
            {item.stats.map((s, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  borderRight: i < item.stats.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
                  paddingRight: i < item.stats.length - 1 ? 16 : 0,
                  paddingLeft: i > 0 ? 16 : 0,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow circle center on hover */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: hovered
              ? "translate(-50%, -50%) scale(1)"
              : "translate(-50%, -50%) scale(0.5)",
            opacity: hovered ? 1 : 0,
            transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease",
            width: 52,
            height: 52,

            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <ArrowIcon />
        </div>
      </div>

      {/* ── Title below card ── */}
      <h3
        style={{
          fontSize: 24,
          fontWeight: 400,
          color: sectionHovered ? "#fff" : "#111",
          lineHeight: 1.45,
          margin: "18px 0 12px",
          transition: "color 0.4s ease",
        }}
      >
        {item.title}
      </h3>

      {/* ── Tags below title ── */}
      <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
        {item.tags.map((tag, i) => (
          <span
            key={i}
            style={{
              padding: "5px 14px",
              borderRadius: 20,
              border: `1px solid ${sectionHovered ? "#333" : "#e0e0d8"}`,
              fontSize: 12,
              fontWeight: 500,
              color: sectionHovered ? "#777" : "#555",
              background: "transparent",
              transition: "color 0.4s ease, border-color 0.4s ease",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  const [sectionHovered, setSectionHovered] = useState(false);

  return (
    <>
      <style>{`
        .cs-wrap { background: #fff; transition: background 0.5s ease; }
        .cs-wrap.dark { background: #111; }
        .cs-label { transition: color 0.4s ease; }
        .cs-wrap.dark .cs-label { color: #ff6f00 !important; }
        .cs-h2 { transition: color 0.4s ease; }
        .cs-wrap.dark .cs-h2 { color: #fff !important; }
        .cs-btn { transition: border-color 0.4s ease, color 0.4s ease; }
        .cs-btn:hover { color: #ff6f00; }
        
        .cs-btn:hover svg path { stroke: #ff6f00; }
        .cs-wrap.dark .cs-btn { border-color: #333 !important; color: #fff !important; }
        .cs-wrap.dark .cs-btn:hover {  color: #fff !important; }
        .cs-wrap.dark .cs-btn:hover svg path { stroke: #fff;  }
      `}</style>

      <section 
        className={`CaseMobile cs-wrap${sectionHovered ? " dark" : ""}`}
        onMouseEnter={() => setSectionHovered(true)}
        onMouseLeave={() => setSectionHovered(false)}
        style={{
          padding: "160px 0px 100px",
          fontFamily: "'Inter','Helvetica Neue',sans-serif",
        }}
      >
        <div className="max-w-[1210px] m-auto" id="work">
          {/* ── Header ── */}
          <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
            <div>
              <p
                className="cs-label"
                style={{ fontSize: 14, letterSpacing: "0.58em", color: "#000", textTransform: "uppercase", fontWeight: 500, margin: "0 0 14px" }}
              >
                Case studies
              </p>
              <h2 className="cs-h2" style={{ fontSize: 56, fontWeight: 700, color: "#111", margin: 0, lineHeight: 1.05 }}>
                My success stories
              </h2>
            </div>

              <a
              href="/recent-works"
              className="cs-btn seeButton"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 22px", borderRadius: 40,

                fontSize: 16, fontWeight: 500, color: "#111",
                textDecoration: "none", background: "transparent", whiteSpace: "nowrap",
              }}
            >
              See recent work
              <ArrowIcon />
            </a>
          </div>

          {/* ── 2-col staggered grid ── */}
          <div className="gridCard" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 28px", alignItems: "start" }}>

            {/* Col 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 52 }}>
              {[cases[0], cases[2]].map((item) => (
                <CaseCard key={item.id} item={item} sectionHovered={sectionHovered} />
              ))}
            </div>

            {/* Col 2 — pushed down 100px */}
            <div style={{ display: "flex", flexDirection: "column", gap: 52, marginTop: 100 }}>
              {[cases[1], cases[3]].map((item) => (
                <CaseCard key={item.id} item={item} sectionHovered={sectionHovered} />
              ))}
            </div>

          </div>
        </div>

      </section>
    </>
  );
}
