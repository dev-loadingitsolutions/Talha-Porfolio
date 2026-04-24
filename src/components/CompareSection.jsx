import { useState, useEffect } from "react";

const rows = [
  {
    label: "Speed",
    inhouse: "2–4 months hiring process",
    agency: "2 weeks onboarding",
    founder: "Start within days",
  },
  {
    label: "Decision layers",
    inhouse: "Long timelines, rigid scopes",
    agency: "PMs & multiple designers",
    founder: "Direct collaboration",
  },
  {
    label: "Focus",
    inhouse: "One company only",
    agency: "Split across clients",
    founder: "Dedicated partnership",
  },
  {
    label: "Flexibility",
    inhouse: "Hard to scale up/down",
    agency: "Contract-bound",
    founder: "Pause anytime",
  },
];

const BAR_HEIGHTS = {
  inhouse: { top: "15%", bottom: "0%" },
  agency: { top: "42%", bottom: "0%" },
  founder: { top: "0%", bottom: "0%" },
};

export default function CompareSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        fontfamily: "'Suisse Intl regular', sans-serif",
        background: "#fff",
        minHeight: "100vh",
        padding: "72px 48px 96px",
        maxWidth: 1210,
        margin: "0 auto",
      }}
    >
      <style>{`
       

        .compare-fade {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(.22,1,.36,1), transform 0.6s cubic-bezier(.22,1,.36,1);
        }
        .compare-fade.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .col-header {
          text-align: center;
          font-size: 14px;
          font-family: 'Suisse Intl regular';
          font-weight: 400;
          color: #888;
          letter-spacing: 0.01em;
          padding-bottom: 20px;
        }
        .bar-wrap {
          border-radius:  10px 10px 0px 0px;
          overflow: hidden;
          position: relative;
          height: 220px;
          display: flex;
          align-items: flex-end;
        }
        .bar-inner {
          width: 100%;
          border-radius:  10px 10px 0px 0px;
          transition: height 1.1s cubic-bezier(.22,1,.36,1);
        }
        .price-block {
          padding: 18px 20px 14px;
          border-radius: 0px 0px 10px 10px;
        }
        .price-val {
          font-family: 'Suisse Intl regular';
          font-size: 28px;
          font-weight: 400;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .price-sub {
          font-size: 12px;
          margin-top: 4px;
          font-weight: 400;
          opacity: 0.7;
        }
        .feature-row {
          display: grid;
          grid-template-columns: 120px 1fr 1fr 1fr;
          align-items: center;
          border-top: 1px solid #ebebeb;
          padding: 18px 0;
          gap: 0;
          transition: background 0.2s;
        }
        .feature-row:hover {
          background: #fafafa;
          border-radius: 8px;
        }
        .feature-label {
          font-size: 12px;
          color: #aaa;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .feature-cell {
          font-size: 13.5px;
          color: #666;
          padding: 0 16px;
          text-align: center;
          line-height: 1.4;
        }
        .feature-cell.winner {
          color: #111;
          font-weight: 500;
          background: #f5f5f5;
          border-radius: 8px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
        }
        .check-icon {
          color: #111;
          font-size: 12px;
          flex-shrink: 0;
        }
        .col-grid {
          display: grid;
          grid-template-columns: 0 1fr 1fr 1fr;
          gap: 0;
          align-items: end;
          margin-bottom: 0;
        }
        .founder-col {
          background: #f7f7f7;
          border-radius: 12px 12px 0 0;
          overflow: hidden;
        }
        .lime-block {
          background: #ff6f00;
          
        }
        .gray-block {
          background: #e8e8e8;
          
        }
      `}</style>

      {/* Header */}
      <div
        className={`compare-fade ${visible ? "visible" : ""}`}
        style={{ marginBottom: 56 }}
      >
        <p
          style={{
            fontSize: 14,
            letterSpacing: "0.58em",
            color: "#141414",
            textTransform: "uppercase",
            marginBottom: 14,
            fontWeight: 500,
          }}
        >
          Compare
        </p>
        <h2
          style={{
            fontFamily: "'Suisse Intl semi-bold',  serif",
            fontSize: "clamp(36px, 5vw, 54px)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: 0,
            color: "#111",
          }}
        >
          Faster way to build
        </h2>
        <h2
          style={{
            fontFamily: "'Suisse Intl semi-bold', sans serif",
            fontStyle: "italic",
            fontSize: "clamp(36px, 5vw, 54px)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: 0,
            color: "#bbb",
          }}
        >
          Than hiring or agencies
        </h2>
      </div>

      {/* Column headers */}
      <div
        className={`col-grid compare-fade ${visible ? "visible" : ""}`}
        style={{ transitionDelay: "0.15s" }}
      >
        <div />
        <div className="col-header">In-house hire</div>
        <div className="col-header">Agency retainer</div>
        <div className="col-header" style={{ color: "#111", fontWeight: 500 }}>
          Founder-led partnership
        </div>
      </div>

      {/* Visual bars + pricing */}
      <div
        className={`col-grid compare-fade ${visible ? "visible" : ""}`}
        style={{
          transitionDelay: "0.25s",
          alignItems: "stretch",
          marginBottom: 32,
        }}
      >
        <div />

        {/* In-house */}
        <div style={{ padding: "0 8px 0 0" }}>
          <div className="bar-wrap" style={{ background: "#f2f2f2" }}>
            <div
              className="bar-inner gray-block"
              style={{ height: visible ? "85%" : "0%" }}
            />
          </div>
          <div className="price-block gray-block " style={{ marginTop: 0 }}>
            <div className="price-val" style={{ color: "#111" }}>
              $120–$160K
            </div>
            <div className="price-sub" style={{ color: "#a3a3a3" }}>
              Year + equity
            </div>
          </div>
        </div>

        {/* Agency */}
        <div style={{ padding: "0 8px" }}>
          <div className="bar-wrap" style={{ background: "#f2f2f2" }}>
            <div
              className="bar-inner gray-block"
              style={{ height: visible ? "58%" : "0%" }}
            />
          </div>
          <div className="price-block gray-block" style={{ marginTop: 0 }}>
            <div className="price-val" style={{ color: "#111" }}>
              $15–$30K
            </div>
            <div className="price-sub" style={{ color: "#a3a3a3" }}>
              Monthly
            </div>
          </div>
        </div>

        {/* Founder */}
        <div style={{ padding: "0 0 0 8px" }}>
          <div className="bar-wrap" style={{ background: "#f7f7f7" }}>
            <div
              className="bar-inner lime-block"
              style={{ height: visible ? "28%" : "0%", transitionDelay: "0.3s" }}
            />
          </div>
          <div className="price-block lime-block" style={{ marginTop: 0 }}>
            <div className="price-val" style={{ color: "#ffffff" }}>
              $4–$6K
            </div>
            <div className="price-sub" style={{ color: "#ffffff" }}>
              Direct, focused, founder-led.
            </div>
          </div>
        </div>
      </div>

      {/* Feature rows */}
      <div
        className={`compare-fade ${visible ? "visible" : ""}`}
        style={{ transitionDelay: "0.4s" }}
      >
        {rows.map((row, i) => (
          <div
            key={row.label}
            className="feature-row"
            style={{
              transitionDelay: `${0.45 + i * 0.07}s`,
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(10px)",
              transition: `opacity 0.5s ${0.45 + i * 0.07}s, transform 0.5s ${0.45 + i * 0.07}s`,
            }}
          >
            <div className="feature-label">{row.label}</div>
            <div className="feature-cell" style={{ textAlign: "center" }}>
              {row.inhouse}
            </div>
            <div className="feature-cell" style={{ textAlign: "center" }}>
              {row.agency}
            </div>
            <div className="feature-cell winner">
              <span className="check-icon">✓</span>
              {row.founder}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
