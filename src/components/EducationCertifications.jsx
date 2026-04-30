import { useState, useRef, useEffect } from "react";

const certifications = [
  {
    num: "01",
    title: "Graphic Design Adobe Certified Expert",
    desc: "Digital , Graphic and Visual Design, Creativity, Typography & Adobe tools, Design Elements & Principles",
    tags: ["UX", "Product"],
    platform: "Adobe",
    year: "2026",
    link: "#",
  },
  {
    num: "02",
    title: "Figma Mastery: From Wireframes to Prototypes",
    desc: "Design Research, Figma Interface, Prototyping, and Design Systems, Responsive Design, and Collaboration, UI/UX Design Principles",
    tags: ["Dev", "design"],
    platform: "Coursera",
    year: "2026",
    link: "#",
  },
  {
    num: "03",
    title: "AI Foundations & Design Thinking",
    desc: "Responsible AI, User Experience Design, UI/UX Strategy, Artificial Intelligence, Design Thinking",
    tags: ["AI"],
    platform: "AI CERTs",
    year: "2026",
    link: "#",
  },
   {
    num: "04",
    title: "Generative AI: The Future of UI UX Design",
    desc: "Design Research, AI Workflows, Human-Centered AI Design, User Story, Ideation, Persona (User Experience)",
    tags: ["Design Research", "AI"],
    platform: "SkillUp Online",
    year: "2026",
    link: "#",
  },
  {
    num: "05",
    title: "Generative AI: Prompt Engineering Basics",
    desc: "ChatGPT, Generative AI, AI Workflows, Prompt Engineering, AI Tools & Platforms",
    tags: ["Prompt Engineering", "Research"],
    platform: "IBM",
    year: "2023",
    link: "#",
  },
  {
    num: "06",
    title: "Designing User Interfaces and Experiences",
    desc: "UI/UX concepts, web design methodologies, Responsive design",
    tags: ["Design", "Strategy"],
    platform: "IBM",
    year: "2026",
    link: "#",
  },
  {
    num: "07",
    title: "Foundations of User Experience (UX) Design",
    desc: "User Experience (UX) Design",
    tags: ["Growth", "Product"],
    platform: "Google",
    year: "2025",
    link: "#",
  },
  {
    num: "08",
    title: "Figma UI UX Design Essentials",
    desc: "User Experience (UX) Design",
    tags: ["Growth", "Product"],
    platform: "Udemy",
    year: "2022",
    link: "#",
  },
  {
    num: "09",
    title: "Learning Design Thinking",
    desc: "User Experience (UX) Design",
    tags: ["Design", "Product"],
    platform: "Linkedin",
    year: "2022",
    link: "#",
  },
];

const education = [
  {
    degree: "BSc Visual Communication & Interaction Design",
    school: "University of Arts, London",
    years: "2015 – 2018",
  },
  {
    degree: " UI/UX Design Specialization",
    school: "California Institute of the Arts",
    years: "Jul 2025 – Jan 2026",
  },
];

const stats = [
  { value: "8+", label: "Years studying" },
  { value: "14", label: "Certifications" },
  { value: "4", label: "Disciplines" },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, [threshold]);
  return [ref, inView];
}

function ArrowIcon({ visible }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(2px, -2px)" : "translate(0,0)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
        flexShrink: 0,
      }}
    >
      <path d="M2 12L12 2M12 2H5M12 2v7" stroke="#ff6f00" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function CertRow({ cert, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={cert.link}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        padding: "20px 0",
        borderBottom: `1px solid ${hovered ? "#585858" : "#161616"}`,
        borderTop: index === 0 ? `1px solid ${hovered ? "#585858" : "#161616"}` : "none",
        cursor: "pointer",
        textDecoration: "none",
        transition: "border-color 0.25s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${index * 0.07}s`,
        transitionProperty: "opacity, transform, border-color",
        transitionDuration: "0.5s, 0.5s, 0.25s",
        transitionTimingFunction: "ease",
      }}
    >
      {/* Left */}
      <div style={{ display: "flex", alignItems: "center", gap: 28, flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: 12, color: "#ececec", letterSpacing: "0.04em", minWidth: 22 }}>
          {cert.num}
        </span>
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: "clamp(15px, 2.2vw, 20px)",
              fontWeight: 500,
              color: hovered ? "#ffffff" : "#acacac",
              transition: "color 0.25s ease",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {cert.title}
          </div>
          <div style={{ fontSize: 12, color: "#acacac", marginTop: 3 }}>
            {cert.desc}
          </div>
        </div>
      </div>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0, paddingLeft: 24 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {cert.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#dddddd",
                border: "1px solid #b4b4b4",
                borderRadius: 20,
                padding: "3px 10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          style={{
            fontSize: 11,
            color: hovered ? "#ffffff" : "#dadada",
            border: `1px solid ${hovered ? "#333" : "#1a1a1a"}`,
            borderRadius: 4,
            padding: "4px 10px",
            letterSpacing: "0.04em",
            transition: "border-color 0.25s ease, color 0.25s ease",
            whiteSpace: "nowrap",
          }}
        >
          {cert.platform}
        </span>
        <span style={{ fontSize: 11, color: "#ff6f00", minWidth: 32, textAlign: "right" }}>
          {cert.year}
        </span>
        <ArrowIcon visible={hovered} />
      </div>
    </a>
  );
}

export default function EducationCertifications() {
  const [headRef, headInView] = useInView(0.1);
  const [listRef, listInView] = useInView(0.05);
  const [eduRef, eduInView] = useInView(0.1);

  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "72px clamp(20px, 6vw, 64px) 96px",
        fontFamily: "'Suisse Intl regular',  sans-serif",
        minHeight: "100vh",
       
      }}
    >
      <div className="max-w-[1210px] mx-auto">
      {/* Top label */}
      <p
        style={{
          fontSize: 14,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#ff6f00",
          fontWeight: 400,
          marginBottom: 48,
        }}
      >
        Licenses &amp; Certifications
      </p>

      {/* Heading row */}
      <div
        ref={headRef}
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 6,
          opacity: headInView ? 1 : 0,
          transform: headInView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 500,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Continuous learning
        </h2>
        <span
          style={{
            fontSize: "clamp(30px, 5vw, 52px)",
            fontWeight: 500,
            color: "#e4e4e4",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          06
        </span>
      </div>

      <p style={{ fontSize: 13, color: "#e9e9e9", marginBottom: 56, letterSpacing: "0.01em" }}>
        Product design, AI systems, and digital experiences — always compounding.
      </p>

      {/* Stat strip */}
      <div
        style={{
          display: "flex",
          gap: 1,
          background: "#141414",
          marginBottom: 1,
          opacity: headInView ? 1 : 0,
          transform: headInView ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: "#0a0a0a",
              padding: "22px 26px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span
              style={{
                fontSize: 26,
                fontWeight: 500,
                color: "#f1f1f1",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontSize: 11,
                color: "#eeeeee",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Cert rows */}
      <div ref={listRef}>
        {certifications.map((cert, i) => (
          <CertRow key={cert.num} cert={cert} index={i} inView={listInView} />
        ))}
      </div>

      {/* Education block */}
      <div
        ref={eduRef}
        style={{
          marginTop: 80,
          paddingTop: 48,
          borderTop: "1px solid #363636",
          opacity: eduInView ? 1 : 0,
          transform: eduInView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p
          style={{
            fontSize: 14,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#ff6f00",
            marginBottom: 28,
          }}
        >
          Formal education
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 1,
            background: "#141414",
          }}
        >
          {education.map((e) => (
            <div key={e.degree} style={{ background: "#0a0a0a", padding: "30px 26px" }}>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#ffffff",
                  marginBottom: 6,
                  lineHeight: 1.4,
                }}
              >
                {e.degree}
              </div>
              <div style={{ fontSize: 14, color: "#929292", marginBottom: 4 }}>{e.school}</div>
              <div style={{ fontSize: 12, color: "#818181", letterSpacing: "0.04em" }}>
                {e.years}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
