import { useState, useRef, useEffect, useCallback } from "react";

const slides = [
  {
    type: "stat",
    id: 0,
    number: "50+",
    desc: "Successfully delivered projects",
  },
  {
    type: "review",
    id: 1,
    logoImg: "https://cdn.prod.website-files.com/690b2fc60f8d48c21bdd95d2/6965f958c43ac26816014ec9_squire-logo.svg",
    logoText: "SQUIRE",
    quote: "Robin demonstrated exceptional design skills and a strong work ethic, contributing significantly to our team's success. Robin's creativity and attention to detail were invaluable, and I highly recommend Robin for any future endeavors.",
    avatarImg: "https://cdn.prod.website-files.com/690b2fc60f8d48c21bdd95d2/69655c2f9467f897aae03421_troy.jpeg",
    name: "Troy Payne",
    title: "CTO of Squire",
  },
  {
    type: "review",
    id: 2,
    logoImg: "https://cdn.prod.website-files.com/690b2fc60f8d48c21bdd95d2/696402931256667e99a24c80_elumity.svg",
    logoText: "elumity",
    quote: "Robin consistently delivers clean, intuitive designs that strike the perfect balance between aesthetic and usability. Whether it's for a complex workflow or a lightweight self-service feature, the user experience always feels effortless and refined.",
    avatarImg: "https://cdn.prod.website-files.com/690b2fc60f8d48c21bdd95d2/690cb39407701f3fbb5e9759_Frame%201533208370.webp",
    name: "Andreas Raabe",
    title: "Founder of Elumity",
  },
  {
    type: "rating",
    id: 3,
    platform: "Clutch",
    platformImg: "https://cdn.prod.website-files.com/690b2fc60f8d48c21bdd95d2/690cb886c3bb88fd04420216_-yWWWxy-clutch-co%201.svg",
    score: "5.0",
    starColor: "#ea4c18",
    count: "44 reviews",
  },
  {
    type: "review",
    id: 4,
    logoImg: "https://cdn.prod.website-files.com/690b2fc60f8d48c21bdd95d2/69656472c8cee9dd8bc99450_reap.svg",
    logoText: "reap",
    quote: "Robin made an immediate impact at Reap. He simplified complex parts of the product, delivered clean, intuitive designs, and helped the team move faster.",
    avatarImg: "https://cdn.prod.website-files.com/690b2fc60f8d48c21bdd95d2/696561927a7436a548e40073_josh-kastel.jpeg",
    name: "Josh Kastel",
    title: "Founder of Reap",
  },
  {
    type: "review",
    id: 5,
    logoImg: "https://cdn.prod.website-files.com/690b2fc60f8d48c21bdd95d2/696564ff83b803df765c2ffd_roofscout.svg",
    logoText: "RoofScout",
    quote: "Robin commands the field of design and user experience, while also having passion and love for what he does. This really comes through in his work. Highly recommend him and his team.",
    avatarImg: "https://cdn.prod.website-files.com/690b2fc60f8d48c21bdd95d2/696560c977c1539916690329_joshua-adams-rcs-influencer-2.jpg",
    name: "Joshua Adams",
    title: "Founder of RoofScout",
  },
  {
    type: "rating",
    id: 6,
    platform: "Dribbble",
    platformImg: "https://cdn.prod.website-files.com/690b2fc60f8d48c21bdd95d2/696401876c7990c58c495a95_Dribbble_Logo_0.svg",
    score: "4.9",
    starColor: "#ea4c89",
    count: "Top Designer",
  },
];

const CARD_WIDTH = 310;
const VISIBLE = 3;

function QuoteIcon() {
  return (
    <svg width="22" height="17" viewBox="0 0 22 17" fill="none" style={{ marginBottom: 10 }}>
      <path
        d="M0 17V10.2C0 4.533 2.933 1.133 8.8 0L10 1.7C7.133 2.4 5.467 3.967 5.6 6.8H10.2V17H0ZM11.8 17V10.2C11.8 4.533 14.733 1.133 20.6 0L21.8 1.7C18.933 2.4 17.267 3.967 17.4 6.8H22V17H11.8Z"
        fill="#111"
      />
    </svg>
  );
}

function StatCard() {
  return (
    <div
      style={{
        background: "#FF6F00",
        width: CARD_WIDTH,
        minWidth: CARD_WIDTH,
        padding: "30px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minHeight: 430,
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      <div>
        <div style={{ fontSize: 95, fontWeight: 100, color: "#ffffff", lineHeight: 1 }}>50+</div>
        <div style={{ fontSize: 18, fontWeight: 500, color: "#ffffff", marginTop: 6 }}>
          Successfully delivered projects
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ item }) {
  const [imgErr, setImgErr] = useState(false);
  const [logoErr, setLogoErr] = useState(false);

  return (
    <div
      style={{
        background: "#fff",
        border: "0.5px solid #dcdcd4",
        borderLeft: "none",
        padding: "28px 26px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 430,
        width: CARD_WIDTH,
        minWidth: CARD_WIDTH,
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      <div>
        <div style={{ marginBottom: 26, height: 28, display: "flex", alignItems: "center" }}>
          {!logoErr ? (
            <img
              src={item.logoImg}
              alt={item.logoText}
              onError={() => setLogoErr(true)}
              style={{ height: 22, maxWidth: 120, objectFit: "contain" }}
            />
          ) : (
            <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "0.06em", color: "#111" }}>
              {item.logoText}
            </span>
          )}
        </div>
        <QuoteIcon />
        <p style={{ fontSize: 13.5, color: "#3a3a3a", lineHeight: 1.7, margin: 0 }}>{item.quote}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 11, marginTop: 28 }}>
        {!imgErr ? (
          <img
            src={item.avatarImg}
            alt={item.name}
            onError={() => setImgErr(true)}
            style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
          />
        ) : (
          <div
            style={{
              width: 38, height: 38, borderRadius: "50%", background: "#e0e0e0",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 700, color: "#666", flexShrink: 0,
            }}
          >
            {item.name.split(" ").map((w) => w[0]).join("")}
          </div>
        )}
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>{item.name}</div>
          <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{item.title}</div>
        </div>
      </div>
    </div>
  );
}

function RatingCard({ item }) {
  const [logoErr, setLogoErr] = useState(false);
  const filledStars = Math.round(parseFloat(item.score));

  return (
    <div
      style={{
        background: "#fff",
        border: "0.5px solid #dcdcd4",
        borderLeft: "none",
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: 430,
        width: CARD_WIDTH,
        minWidth: CARD_WIDTH,
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      <div style={{ marginBottom: 10 }}>
        {!logoErr ? (
          <img
            src={item.platformImg}
            alt={item.platform}
            onError={() => setLogoErr(true)}
            style={{ height: 26, objectFit: "contain", maxWidth: 130 }}
          />
        ) : (
          <span style={{ fontSize: 20, fontWeight: 800, color: "#111" }}>{item.platform}</span>
        )}
      </div>
      <div style={{ fontSize: 60, fontWeight: 700, color: "#111", lineHeight: 1 }}>{item.score}</div>
      <div style={{ display: "flex", gap: 4, marginTop: 10 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ fontSize: 18, color: i < filledStars ? item.starColor : "#ddd" }}>★</span>
        ))}
      </div>
      <div style={{ fontSize: 12, color: "#999", marginTop: 6 }}>{item.count}</div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(false);
  const carouselRef = useRef(null);
  const cursorRef = useRef(null);
  const rafRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const maxIndex = slides.length - VISIBLE;

  const goTo = useCallback(
    (index) => setCurrent(Math.max(0, Math.min(index, maxIndex))),
    [maxIndex]
  );

  // Smooth lerp animation loop
  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.1);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.1);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = carouselRef.current?.getBoundingClientRect();
    if (!rect) return;
    target.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  return (
    <>
      <style>{`
        .tc-area, .tc-area * { cursor: none !important; }
        .tc-navbtn { cursor: pointer !important; }
        .tc-navbtn:disabled { cursor: default !important; }
      `}</style>

      <section className="TestimonialMobile"
        style={{
          background: "#f2f2f2",
          padding: "160px 56px 120px",
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          overflow: "hidden",
        }}
      >
        {/* ── Header ── */}
        <div className="Section SectionMobile" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52 }}>
          <div>
            <div className="headMobile" style={{ fontSize: 14, letterSpacing: "0.8em", color: "#080808", textTransform: "uppercase", marginBottom: 14, fontWeight: 500 }}>
              Testimonials
            </div>
            <div className="HeadText" style={{ fontSize: 56, fontWeight: 700, color: "#111", lineHeight: 1.08, marginBottom: 2 }}>
              A reliable partner for
            </div>
            <div className="HeadText" style={{ fontSize: 56, fontWeight: 700, color: "#b3b3b3", lineHeight: 1.2 }}>
              wideworld-class quality and<br />on-time delivery
            </div>
          </div>

          <div className="ButtonDc" style={{ display: "flex", gap: 10, paddingTop: 8 }}>
            {[
              { dir: -1, d: "M15.8335 9.99968L4.16683 9.99968M4.16683 9.99968L10.0002 15.833M4.16683 9.99968L10.0002 4.16634" },
              { dir: 1, d: "M4.1665 10.0003H15.8332M15.8332 10.0003L9.99984 4.16699M15.8332 10.0003L9.99984 15.8337" },
            ].map(({ dir, d }, i) => {
              const disabled = dir === -1 ? current === 0 : current >= maxIndex;
              return (
                <button
                  key={i}
                  className="tc-navbtn hover:shadow-md transition-shadow"
                  onClick={() => goTo(current + dir)}
                  disabled={disabled}
                  style={{
                    width: 56, height: 56, borderRadius: "50%",
                    border: "1.5px solid #c8c8c0", background: "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    opacity: disabled ? 0.28 : 1, transition: "opacity 0.2s, background 0.2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={d} stroke="#0D0D0D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>


                </button>
              );
            })}
          </div>
        </div>

        {/* ── Carousel ── */}
        <div
          ref={carouselRef}
          className="tc-area"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setCursorVisible(true)}
          onMouseLeave={() => setCursorVisible(false)}
          style={{ position: "relative", overflow: "hidden" }}
        >
          {/* Custom cursor bubble */}
          <div
            ref={cursorRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: "#FF6F00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 600,
              color: "#ffffff",
              pointerEvents: "none",
              zIndex: 50,
              opacity: cursorVisible ? 1 : 0,
              transition: "opacity 0.22s ease",
              willChange: "transform",
              userSelect: "none",
              letterSpacing: "0.01em",
            }}
          >
            Drag me
          </div>

          {/* Sliding track */}
          <div
            style={{
              display: "flex",
              transform: `translateX(${-current * CARD_WIDTH}px)`,
              transition: "transform 0.52s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {slides.map((item) => {
              if (item.type === "stat") return <StatCard key={item.id} />;
              if (item.type === "review") return <ReviewCard key={item.id} item={item} />;
              if (item.type === "rating") return <RatingCard key={item.id} item={item} />;
              return null;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
