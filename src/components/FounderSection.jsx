import { useEffect, useRef, useState } from "react";
import TalhaFrooqi from "../assets/talhafrooqi.svg";
import SignatureNew from "../assets/common/SignatureNew";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

// Signature SVG — handwritten style
function Signature() {
  return (
    <svg
      viewBox="0 0 320 80"
      fill="none"
      className="w-64 opacity-60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 55 C20 20, 35 15, 45 40 C50 55, 48 65, 55 50 C62 35, 70 20, 80 45 C85 57, 82 65, 90 52
           C100 35, 112 18, 122 42 C128 55, 125 65, 133 50 C142 33, 155 18, 168 44
           C174 57, 170 66, 178 52 C188 34, 202 20, 215 46 C222 60, 218 68, 228 54
           C240 36, 258 24, 275 50 C282 62, 278 70, 290 55 C298 45, 308 38, 318 42"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 62 C40 60, 100 58, 160 60 C210 61, 260 59, 310 62"
        stroke="white"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

export default function FounderSection() {
  const [sectionRef, sectionInView] = useInView(0.1);
  const [textRef, textInView] = useInView(0.1);
  const [imageRef, imageInView] = useInView(0.1);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black overflow-hidden flex items-center"
    >
      {/* Radial glow on the right side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 75% 40%, rgba(60,60,60,0.7) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ── LEFT: Text content ── */}
        <div
          ref={textRef}
          style={{
            opacity: textInView ? 1 : 0,
            transform: textInView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Label */}
          <p
            className="text-[14px] tracking-[0.3em] font-medium mb-8"
            style={{ color: "#FF6F00" }}
          >
            T H E &nbsp; F O U N D E R
          </p>

          {/* Heading */}
          <h2 className="text-[56px] md:text-6xl  font-bold leading-tight mb-8">
            <span className="text-white">Hi, I'm Talha</span>
            <br />
            <span className="text-[#b3b3b3]">Nice to meet you</span>
          </h2>

          {/* Body paragraphs */}
          <div className="space-y-5 mb-10">
            <p className="text-[16px] w-72 text-[#b3b3b3] leading-relaxed max-w-sm">
             I’ve spent the last decade designing products for startups worldwide,
              but my foundation is as a founder. After building two startups—and learning 
              through every mistake firsthand—I came to a clear conclusion: design isn’t 
              decoration, it’s leverage.
            </p>
            <p className="text-[16px] w-72 text-[#b3b3b3] leading-relaxed max-w-sm">
              Today, I run a one-person design studio. No intermediaries, no 
              unnecessary layers—just focused execution across strategy, 
              product design, UI, and motion. Everything is built to drive revenue, 
              improve retention, and deliver measurable results for ambitious teams.
            </p>
          </div>

          {/* LinkedIn CTA */}
          <div className="flex items-center gap-4">
            <span className="text-white text-[16px] font-medium">
              Connect with me on
            </span>
            <a
              href="https://www.linkedin.com/in/figmauiuxdesigner/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 hover:border-white/60 transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          {/* Signature */}
          
        </div>

        {/* ── RIGHT: Photo placeholder ── */}
        <div
          ref={imageRef}
          className="relative flex flex-col gap-8 items-center h-full justify-center"
          style={{
            opacity: imageInView ? 1 : 0,
            transform: imageInView ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}
        >
          {/*
            Replace the div below with your actual <img> tag:
            <img
              src="/your-photo.jpg"
              alt="Robin"
              className="w-full max-w-md object-cover"
              style={{ filter: "grayscale(100%)" }}
            />
          */}
          
            <img className="w-full max-w-md object-cover" src={TalhaFrooqi} alt="talha" />
            <SignatureNew />
         

          {/* Subtle vignette overlay to match the photo style */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
            }}
          />
          
        </div>
        
      </div>
    </section>
  );
}
