import { useState } from "react";

// ── Icons ────────────────────────────────────────────────────────────────────
const CheckIcon = ({ color = "#FF6F00" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8L6.5 11.5L13 4.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="10" fill="#111" />
    <path d="M6.5 11L9.5 14L15.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="#999" strokeWidth="1.2" />
    <path d="M8 1.5C8 1.5 5.5 4.5 5.5 8C5.5 11.5 8 14.5 8 14.5" stroke="#999" strokeWidth="1.2" />
    <path d="M8 1.5C8 1.5 10.5 4.5 10.5 8C10.5 11.5 8 14.5 8 14.5" stroke="#999" strokeWidth="1.2" />
    <path d="M1.5 8H14.5" stroke="#999" strokeWidth="1.2" />
  </svg>
);

const DashboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1" stroke="#999" strokeWidth="1.2" />
    <rect x="9" y="1.5" width="5.5" height="5.5" rx="1" stroke="#999" strokeWidth="1.2" />
    <rect x="1.5" y="9" width="5.5" height="5.5" rx="1" stroke="#999" strokeWidth="1.2" />
    <rect x="9" y="9" width="5.5" height="5.5" rx="1" stroke="#999" strokeWidth="1.2" />
  </svg>
);

const MobileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="4.5" y="1.5" width="7" height="13" rx="1.5" stroke="#999" strokeWidth="1.2" />
    <circle cx="8" cy="12.5" r="0.8" fill="#999" />
  </svg>
);

const BrandingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 13L6 4L10 10L12 7L14 13H2Z" stroke="#999" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);

const PitchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1.5" y="2.5" width="13" height="9" rx="1" stroke="#999" strokeWidth="1.2" />
    <path d="M8 11.5V14" stroke="#999" strokeWidth="1.2" />
    <path d="M5 14H11" stroke="#999" strokeWidth="1.2" />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────
const planData = {
  monthly: {
    price: "$4,995",
    period: "/month",
    features: [
      { text: "Webflow or Framer development", badge: "INCLUDED" },
      { text: "Unlimited design requests & revisions" },
      { text: "Fast turnarounds with updates every 48 hours" },
      { text: "Weekly strategy calls + Slack integration" },
      { text: "Discovery kickoff call to plan your project" },
    ],
  },
  fixed: {
    price: "$3,000",
    period: "starting from",
    features: [
      { text: "Full project with clear start and finish" },
      { text: "Fixed price based on your needs" },
      { text: "Clear timeline and deliverables" },
      { text: "Strategic kickoff call to plan your project" },
    ],
  },
};

const sprintServices = [
  { icon: <GlobeIcon />, label: "Landing page" },
  { icon: <DashboardIcon />, label: "Dashboard" },
  { icon: <MobileIcon />, label: "Mobile app" },
  { icon: <BrandingIcon />, label: "Branding" },
  { icon: <PitchIcon />, label: "Pitch Deck" },
];

// ── Toggle ───────────────────────────────────────────────────────────────────
function Toggle({ isFixed, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        width: 48,
        height: 28,
        borderRadius: 14,
        background: "#FF6F00",
        border: "none",
        cursor: "pointer",
        position: "relative",
        padding: 0,
        transition: "background 0.25s",
        flexShrink: 0,
      }}
      aria-label="Toggle billing period"
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          left: isFixed ? 23 : 3,
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "#fff",
          transition: "left 0.25s cubic-bezier(0.4,0,0.2,1)",
          display: "block",
        }}
      />
    </button>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function PricingSection() {
  const [isFixed, setIsFixed] = useState(false);
  const plan = isFixed ? planData.fixed : planData.monthly;

  return (
    <section className="PricingMobile"
      style={{
        background: "#fff",
        padding: "160px px 80px",
        fontFamily: "'Inter','Helvetica Neue',sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* ── Header ── */}
      <div className="HeadText" style={{ marginBottom: 56 }}>
        <p
          style={{
            fontSize: 14,
            letterSpacing: "0.58em",
            color: "#080808",
            textTransform: "uppercase",
            fontWeight: 500,
            marginBottom: 14,
          }}
        >
          Pricing
        </p>
        <h2 className="PricingHead"
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.08,
            margin: "0 0 4px",
          }}
        >
          Transparent pricing
        </h2>
        <h2 className="PricingHead"
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#b3b3b3",
            lineHeight: 1.08,
            margin: 0,
          }}
        >
          No surprises
        </h2>
      </div>

      {/* ── Cards Row ── */}
      <div className="cardMobilePrice"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.65fr",
          gap: 24,
          marginBottom: 24,
        }}
      >
        {/* ── Left: Ongoing Subscription (dark) ── */}
        <div className="OngoingPadd"
          style={{
            background: "#111",
            
            padding: "36px 40px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {/* Card header */}
          <div className="cardHeadDir"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 8,
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 400,
                  color: "#fff",
                  margin: "0 0 8px",
                }}
              >
                Ongoing subscription
              </h3>
              <p style={{ fontSize: 16, color: "#b3b3b3", margin: 0, lineHeight: 1.6, maxWidth: 380 }}>
                One expert. Unlimited output. No agency overhead.
                Design, strategy, and no-code delivery.
              </p>
            </div>

            {/* Toggle */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexShrink: 0,
                marginTop: 4,
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  color: isFixed ? "#ffffffcc" : "#fff",
                  fontWeight: 400,
                  transition: "color 0.2s",
                }}
              >
                Monthly
              </span>
              <Toggle isFixed={isFixed} onToggle={() => setIsFixed((p) => !p)} />
              <span
                style={{
                  fontSize: 16,
                  color: isFixed ? "#fff" : "#ffffffcc",
                  fontWeight: 400,
                  transition: "color 0.2s",
                }}
              >
                Fixed
              </span>
            </div>
          </div>

          {/* Price */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 6,
              margin: "32px 0 36px",
            }}
          >
            <span
              style={{
                fontSize: 56,
                fontWeight: 200,
                color: "#fff",
                lineHeight: 1,
                transition: "opacity 0.2s",
              }}
              key={plan.price}
            >
              {plan.price}
            </span>
            <span style={{ fontSize: 14, color: "#fafafa", fontWeight: 400 }}>
              /{plan.period}
            </span>
          </div>

          {/* Feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
            {plan.features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <CheckIcon />
                <span style={{ fontSize: 14, color: "#ffffff", lineHeight: 1.5 }}>
                  {f.text}
                </span>
                {f.badge && (
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      color: "#ff6f00",
                      background: "#333",
                      padding: "3px 8px",
                      borderRadius: 4,
                      flexShrink: 0,
                    }}
                  >
                    {f.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 36 }}>
            <button
              style={{
                background: "#FF6F00",
                color: "#fff",
                border: "none",
                borderRadius: 40,
                padding: "14px 28px",
                fontSize: 16,
                fontWeight: 400,
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              Book a call
            </button>
          </div>
        </div>

        {/* ── Right: One week sprint (light) ── */}
        <div
          style={{
            background: "#f2f2f2",
            
            padding: "36px 36px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 24,
                fontWeight: 400,
                color: "#111",
                margin: "0 0 8px",
              }}
            >
              One week design sprint
            </h3>
            <p style={{ fontSize: 14, color: "#b3b3b3", margin: "0 0 32px", lineHeight: 1.6 }}>
              Get a landing page, dashboard, brand starter,
              or up to 5 mobile screens for fixed price.
            </p>

            {/* Price */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
              <span style={{ fontSize: 56, fontWeight: 200, color: "#111", lineHeight: 1 }}>
                $2,995
              </span>
            </div>
            <p style={{ fontSize: 12, color: "#b3b3b3", margin: "0 0 32px" }}>One-time price</p>

            {/* Services list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {sprintServices.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {s.icon}
                  <span style={{ fontSize: 13.5, color: "#555" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 36 }}>
            <button
              style={{
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: 40,
                padding: "14px 28px",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom info cards ── */}
      <div className="BottomCards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {[
          {
            title: "Try me for two weeks",
            desc: "Try my 2-week trial for just $2,495 and see the impact firsthand.",
          },
          {
            title: "Pause anytime",
            desc: "Temporarily pause your subscription anytime, no sweat.",
          },
        ].map((card, i) => (
          <div
            key={i}
            style={{
              
              border: "1px solid #e0e0e0",
              padding: "40px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 15,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <CheckCircleIcon />
              <h4 style={{ fontSize: 24, fontWeight: 700, color: "#111", margin: 0 }}>
                {card.title}
              </h4>
            </div>
            <p style={{ fontSize: 16, color: "#888", margin: 0, lineHeight: 1.6, paddingLeft: 34 }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
