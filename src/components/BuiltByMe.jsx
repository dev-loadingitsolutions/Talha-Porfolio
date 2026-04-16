import React, { useEffect, useRef, useState } from 'react';
import Counter from './Counter';

// ── Marquee data ─────────────────────────────────────────────────────────────
const row1 = ["Healthcare", "E-commerce", "Booking", "Fintech", "Real Estate", "Trading", "Fintech", "Healthcare", "E-commerce", "Booking", "Fintech", "Real Estate", "Trading", "Fintech"];
const row2 = ["Booking", "E-commerce", "SaaS", "EdTech", "Healthcare", "E-commerce", "Booking", "E-commerce", "SaaS", "EdTech", "Healthcare", "E-commerce"];
const highlightRow1 = ["Booking", "Trading"];
const highlightRow2 = ["E-commerce", "Healthcare"];

// ── Marquee Row ───────────────────────────────────────────────────────────────
function MarqueeRow({ tags, highlights = [], reverse = false }) {
  const doubled = [...tags, ...tags];
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div style={{
        display: 'flex',
        gap: 8,
        animation: `${reverse ? 'marqueeRev' : 'marquee'} 8s linear infinite`,
        whiteSpace: 'nowrap',
        willChange: 'transform',
      }}>
        {doubled.map((tag, i) => {
          const isHighlighted = highlights.includes(tag) && i % 2 === 1;
          return (
            <span key={i} style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 20px',
              borderRadius: 40,
              fontSize: 18,
              fontWeight: isHighlighted ? 500 : 400,
              color: isHighlighted ? '#fff' : '#555',
              background: isHighlighted ? '#111' : 'transparent',
              border: isHighlighted ? 'none' : '1px solid #e0e0d8',
              flexShrink: 0,
            }}>
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}

// ── Speedometer Logo ──────────────────────────────────────────────────────────
function SpeedometerLogo() {
  const [angle, setAngle] = useState(-110);
  const rafRef = useRef(null);
  const tRef = useRef(0);
  const currentAngle = useRef(-110);
  const targetAngle = useRef(-110);

  useEffect(() => {
    const tick = () => {
      tRef.current += 0.008;
      targetAngle.current = -110 + Math.sin(tRef.current) * 80 + 80;
      currentAngle.current += (targetAngle.current - currentAngle.current) * 0.05;
      setAngle(currentAngle.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const cx = 60, cy = 60, r = 44;
  const toRad = (d) => (d * Math.PI) / 180;
  const startAngleDeg = -210, endAngleDeg = 30;
  const tickCount = 18;
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const a = startAngleDeg + (i / (tickCount - 1)) * (endAngleDeg - startAngleDeg);
    const inner = r - 8, outer = r - 2;
    return {
      x1: cx + inner * Math.cos(toRad(a)), y1: cy + inner * Math.sin(toRad(a)),
      x2: cx + outer * Math.cos(toRad(a)), y2: cy + outer * Math.sin(toRad(a)),
    };
  });
  const nx = cx + 30 * Math.cos(toRad(angle));
  const ny = cy + 30 * Math.sin(toRad(angle));

  return (
    <div style={{
      width: 120, height: 120, borderRadius: '50%', background: '#FF6F00',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'absolute', bottom: -32, right: -32, zIndex: 10,
    }}>
      <svg width="90" height="90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="52" fill="#1a1a1a" />
        <circle cx="60" cy="60" r="49" fill="none" stroke="#333" strokeWidth="0.8" />
        {ticks.map((t, i) => (
          <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
            stroke="#555" strokeWidth="1.2" strokeLinecap="round" />
        ))}
        <text x="60" y="66" textAnchor="middle" fontSize="16" fontWeight="700"
          fill="#FF6F00" fontFamily="'Inter',sans-serif" letterSpacing="1">TF</text>
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#FF6F00" strokeWidth="2" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="4" fill="#FF6F00" />
      </svg>
    </div>
  );
}

// ── Conversion Card ───────────────────────────────────────────────────────────
function ConversionCard() {
  const [needleAngle, setNeedleAngle] = useState(-130);
  const rafRef = useRef(null);
  const tRef = useRef(0);

  useEffect(() => {
    const tick = () => {
      tRef.current += 0.006;
      setNeedleAngle(-130 + (Math.sin(tRef.current) * 0.5 + 0.5) * 120);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const cx = 100, cy = 110, r = 75;
  const toRad = (d) => (d * Math.PI) / 180;
  const startA = -210, endA = 30, tickCount = 20;
  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const a = startA + (i / (tickCount - 1)) * (endA - startA);
    const isMajor = i % 4 === 0;
    const inner = r - (isMajor ? 14 : 8), outer = r - 2;
    return {
      x1: cx + inner * Math.cos(toRad(a)), y1: cy + inner * Math.sin(toRad(a)),
      x2: cx + outer * Math.cos(toRad(a)), y2: cy + outer * Math.sin(toRad(a)),
      major: isMajor,
    };
  });
  const nx = cx + (r - 22) * Math.cos(toRad(needleAngle));
  const ny = cy + (r - 22) * Math.sin(toRad(needleAngle));

  return (
    <div style={{
      background: '#f2f2f2', padding: '32px 28px',
      display: 'flex', flexDirection: 'column',
      minHeight: 320, position: 'relative', overflow: 'hidden',
    }}>
      <h3 style={{ fontSize: 28, fontWeight: 500, color: '#111', margin: '0 0 8px', lineHeight: 1.2 }}>
        Conversion-centric<br />design
      </h3>
      <div style={{ position: 'absolute', top: 32, right: 24, textAlign: 'right' }}>
        <span style={{ fontSize: 13, color: '#b2b2b2', display: 'block', marginBottom: 3 }}>Conversion rate</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#111', display: 'inline-block' }} />
          <span style={{ fontSize: 18, fontWeight: 700, color: '#111' }}>6.84%</span>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginTop: 16 }}>
        <svg width="200" height="130" viewBox="0 0 200 120" style={{ overflow: 'visible' }}>
          {ticks.map((t, i) => (
            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
              stroke={t.major ? '#999' : '#ccc'}
              strokeWidth={t.major ? 1.5 : 0.8}
              strokeLinecap="round" />
          ))}
          <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#111" strokeWidth="2" strokeLinecap="round" />
          <circle cx={cx} cy={cy} r="5" fill="#111" />
          <line x1={cx} y1={cy} x2={168} y2={28} stroke="#111" strokeWidth="0.8" />
          <circle cx={168} cy={28} r="2.5" fill="#111" />
        </svg>
      </div>
    </div>
  );
}

// ── Skip Middlemen Card ───────────────────────────────────────────────────────
function SkipMiddlemenCard() {
  return (
    <div style={{
      background: '#f2f2f2', padding: '36px',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'space-between',
      minHeight: 460,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#FF6F00' }} />
        <div style={{ width: 1, height: 120, borderLeft: '2px dashed #bbb', margin: '8px 0' }} />
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#111' }} />
      </div>
      <p style={{ fontSize: 28, fontWeight: 700, color: '#111', margin: 0, textAlign: 'center' }}>
        Skip middlemen
      </p>
    </div>
  );
}

// ── Senior Work Card ──────────────────────────────────────────────────────────
function SeniorWorkCard() {
  return (
    <div style={{
      background: '#f2f2f2', padding: '36px',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between', minHeight: 320,
    }}>
      <h3 style={{ fontSize: 28, fontWeight: 500, color: '#111', margin: '0 0 32px', lineHeight: 1.3 }}>
        Senior-level work.<br />No agency markup
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1, justifyContent: 'flex-end' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: '#111', borderRadius: 40, padding: '10px 20px',
        }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>My subscription</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#FF6F00' }}>$</span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: '#e8e8e2', borderRadius: 40, padding: '10px 20px',
        }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: '#555' }}>Agency</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#555' }}>$$$</span>
        </div>
      </div>
      <div style={{ textAlign: 'right', marginTop: 24 }}>
        <p style={{ fontSize: 11, color: '#aaa', margin: 0 }}>Up to</p>
        <p style={{ fontSize: 52, fontWeight: 700, color: '#111', margin: 0, lineHeight: 1 }}>5x</p>
        <p style={{ fontSize: 12, color: '#888', margin: 0 }}>Lower average price</p>
      </div>
    </div>
  );
}

// ── Main WhyMe Component ──────────────────────────────────────────────────────
const WhyMe = () => {
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

      <section style={{
        backgroundColor: '#fff',
        padding: '200px 0px',
        fontFamily: 'Inter, sans-serif',
        color: '#000',
      }}>

        {/* ── Small Top Heading ── */}
        <p style={{
          fontSize: '12px',
          letterSpacing: '4px',
          fontWeight: '500',
          marginBottom: '20px',
          textTransform: 'uppercase',
        }}>
          W H Y &nbsp; M E
        </p>

        {/* ── Main Large Heading ── */}
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)',
          lineHeight: '1.1',
          fontWeight: '600',
          maxWidth: '900px',
          marginBottom: '60px',
        }}>
          Built by one <br />
          <span style={{ color: '#a1a1a1' }}>Better than many</span>
        </h2>

        

        {/* ── Row 1: 70% / 30% ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '70% 30%',
          gap: 20,
          marginBottom: 20,
        }}>
          {/* TOP LEFT 70% — Marquee card */}
          <div style={{
            background: '#f2f2f2',
            padding: '32px 0 32px',
            overflow: 'hidden',
            minHeight: 460,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
          }}>
            <h3 style={{
              fontSize: 28, fontWeight: 500, color: '#111',
              margin: '0 0 28px', paddingLeft: 32, lineHeight: 1.4,
            }}>
              Cross-industry experience<br />in product design
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 70 }}>
              <MarqueeRow tags={row1} highlights={highlightRow1} />
              <MarqueeRow tags={row2} highlights={highlightRow2} reverse />
            </div>
            <SpeedometerLogo />
          </div>

          {/* TOP RIGHT 30% — Conversion card */}
          <ConversionCard />
        </div>

        {/* ── Row 2: 30% / 70% ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          gap: 20,
        }}>
          {/* BOTTOM LEFT 30% — Skip middlemen */}
          <SkipMiddlemenCard />

          {/* BOTTOM RIGHT 70% — Senior work */}
          <SeniorWorkCard />
        </div>

      </section>
    </>
  );
};

export default WhyMe;
