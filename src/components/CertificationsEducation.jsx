import { useState, useRef, useEffect } from "react";

const TAG_COLORS = {
  UX:       { color: "#7ca9d4", border: "#7ca9d440", bg: "#7ca9d412" },
  Product:  { color: "#c8a96e", border: "#c8a96e40", bg: "#c8a96e12" },
  Dev:      { color: "#7ca9d4", border: "#7ca9d440", bg: "#7ca9d412" },
  React:    { color: "#7ca9d4", border: "#7ca9d440", bg: "#7ca9d412" },
  AI:       { color: "#7dbfa0", border: "#7dbfa040", bg: "#7dbfa012" },
  PM:       { color: "#d4907a", border: "#d4907a40", bg: "#d4907a12" },
  Growth:   { color: "#7dbfa0", border: "#7dbfa040", bg: "#7dbfa012" },
  Strategy: { color: "#c8a96e", border: "#c8a96e40", bg: "#c8a96e12" },
  Research: { color: "#b89fd4", border: "#b89fd440", bg: "#b89fd412" },
};

const certifications = [
  {
    platform: "GOOGLE",
    year: "2024",
    title: "UX Design Professional Certificate",
    desc: "End-to-end design thinking, wireframing, and usability testing.",
    tags: ["UX", "Product"],
    link: "#",
  },
  {
    platform: "META",
    year: "2024",
    title: "Meta Frontend Developer",
    desc: "React, component architecture, and design-to-code handoff.",
    tags: ["Dev", "Product"],
    link: "#",
  },
  {
    platform: "COURSERA",
    year: "2023",
    title: "AI for Everyone — DeepLearning.AI",
    desc: "AI fundamentals, use cases, and product strategy for non-engineers.",
    tags: ["AI", "Product"],
    link: "#",
  },
  {
    platform: "INTERACTION DESIGN",
    year: "2023",
    title: "Human-Computer Interaction",
    desc: "Cognitive models, mental models, and interface affordances.",
    tags: ["UX"],
    link: "#",
  },
  {
    platform: "LINKEDIN",
    year: "2022",
    title: "Product Management Foundations",
    desc: "Roadmapping, prioritization frameworks, and stakeholder alignment.",
    tags: ["PM", "Product"],
    link: "#",
  },
  {
    platform: "REFORGE",
    year: "2022",
    title: "Designing for Growth & Retention",
    desc: "Behavioral loops, onboarding design, and activation metrics.",
    tags: ["Product", "Growth"],
    link: "#",
  },
];

function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, [threshold]);
  return [ref, inView];
}

function Tag({ label }) {
  const s = TAG_COLORS[label] || { color: "#999", border: "#99933", bg: "#00000008" };
  return (
    <span
      style={{
        fontSize: 12,
        fontWeight: 400,
        color: s.color,
        background: s.bg,
        border: `1px solid ${s.border}`,
        borderRadius: 999,
        padding: "4px 12px",
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function CertCard({ cert, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff",
        borderRadius: 20,
        padding: "26px 28px 24px",
        display: "flex",
        flexDirection: "column",
        minHeight: 280,
        cursor: "pointer",
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered ? "translateY(-4px)" : "translateY(0)"
          : "translateY(28px)",
        transition: hovered
          ? "transform 0.22s ease, box-shadow 0.22s ease"
          : `opacity 0.55s ease ${index * 0.09}s, transform 0.55s ease ${index * 0.09}s, box-shadow 0.22s ease`,
        boxShadow: hovered
          ? "0 16px 48px rgba(0,0,0,0.22)"
          : "0 2px 10px rgba(0,0,0,0.07)",
      }}
    >
      {/* Header: platform badge + year */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 22,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.07em",
            color: "#1a1a1a",
            background: "#ffffff",
            border: "1px solid #ddd9d2",
            borderRadius: 7,
            padding: "5px 11px",
          }}
        >
          {cert.platform}
        </span>
        <span
          style={{
            fontSize: 13,
            color: "#000000",
            letterSpacing: "0.02em",
          }}
        >
          {cert.year}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "clamp(16px, 1.8vw, 19px)",
          fontWeight: 500,
          color: "#16120e",
          lineHeight: 1.32,
          letterSpacing: "-0.01em",
          margin: "0 0 12px",
          fontFamily: "'Suisse Intl regular', sans serif",
        }}
      >
        {cert.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          color: "#7e786f",
          lineHeight: 1.65,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {cert.desc}
      </p>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #e6e1d8", margin: "22px 0 18px" }} />

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {cert.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <a
          href={cert.link}
          onClick={(e) => e.stopPropagation()}
          style={{
            fontSize: 13,
            color: hovered ? "#16120e" : "#b0aa9f",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 4,
            flexShrink: 0,
            transition: "color 0.2s ease",
            letterSpacing: "0.01em",
          }}
        >
          View
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            style={{
              transform: hovered ? "translate(1px, -1px)" : "translate(0, 0)",
              transition: "transform 0.2s ease",
            }}
          >
            <path
              d="M2 11L11 2M11 2H5M11 2v6"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function EducationCertifications() {
  const [headerRef, headerInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.04);

  return (
    <section
      style={{
        background: "#0d0d0d",
        padding: "80px clamp(20px, 6vw, 72px) 100px",
        fontFamily: "'Suisse Intl regular', sans serif",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-[1210px] mx-auto">

      
      {/* Section label */}
      <p
        style={{
          fontSize: 14,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#ff6f00",
          fontWeight: 500,
          margin: "0 0 18px",
        }}
      >
        Education &amp; Certifications
      </p>

      {/* Heading block */}
      <div
        ref={headerRef}
        style={{
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? "translateY(0)" : "translateY(22px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(42px, 7vw, 56px)",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            margin: "0 0 12px",
            fontFamily: "'Suisse Intl semi-bold', sans serif",
          }}
        >
          Always Learning
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "#d3d3d3",
            margin: "0 0 64px",
            letterSpacing: "0.01em",
          }}
        >
          Continuous learning in product design, AI, and digital experiences.
        </p>
      </div>

      {/* Card grid */}
      <div
        ref={gridRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          gap: 14,
        }}
      >
        {certifications.map((cert, i) => (
          <CertCard
            key={cert.platform + cert.title}
            cert={cert}
            index={i}
            inView={gridInView}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
