import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      " We analyze your business goals, target audience, and market landscape to identify real growth opportunities. Through rapid validation, competitor research, and user journey mapping, we define a clear MVP strategy built for success.",
    icon: (
      <svg width="200" height="200" viewBox="0 0 220 220" fill="none">
        <circle cx="110" cy="110" r="80" stroke="#d0d0d0" strokeWidth="1" />
        <circle cx="110" cy="40"  r="10" stroke="#c0c0c0" strokeWidth="1" fill="none" />
        <circle cx="180" cy="80"  r="10" stroke="#c0c0c0" strokeWidth="1" fill="none" />
        <circle cx="180" cy="150" r="10" stroke="#c0c0c0" strokeWidth="1" fill="none" />
        <circle cx="110" cy="185" r="10" stroke="#c0c0c0" strokeWidth="1" fill="none" />
        <circle cx="40"  cy="150" r="10" stroke="#c0c0c0" strokeWidth="1" fill="none" />
        <circle cx="40"  cy="80"  r="10" stroke="#c0c0c0" strokeWidth="1" fill="none" />
        <line x1="110" y1="40"  x2="180" y2="80"  stroke="#d0d0d0" strokeWidth="1" />
        <line x1="180" y1="80"  x2="180" y2="150" stroke="#d0d0d0" strokeWidth="1" />
        <line x1="180" y1="150" x2="110" y2="185" stroke="#d0d0d0" strokeWidth="1" />
        <line x1="110" y1="185" x2="40"  y2="150" stroke="#d0d0d0" strokeWidth="1" />
        <line x1="40"  y1="150" x2="40"  y2="80"  stroke="#d0d0d0" strokeWidth="1" />
        <line x1="40"  y1="80"  x2="110" y2="40"  stroke="#d0d0d0" strokeWidth="1" />
        <line x1="110" y1="40"  x2="180" y2="150" stroke="#d8d8d8" strokeWidth="0.8" />
        <line x1="180" y1="80"  x2="40"  y2="150" stroke="#d8d8d8" strokeWidth="0.8" />
        <line x1="110" y1="185" x2="40"  y2="80"  stroke="#d8d8d8" strokeWidth="0.8" />
        <line x1="110" y1="185" x2="180" y2="80"  stroke="#d8d8d8" strokeWidth="0.8" />
        <line x1="40"  y1="150" x2="180" y2="150" stroke="#d8d8d8" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "UX/UI Design & Prototyping",
    description:
      "We transform your ideas into high-performing digital experiences. From user experience (UX) flows to pixel-perfect user interface (UI) design, we create interactive prototypes that are intuitive, engaging, and conversion-focused.",
    icon: (
      <svg width="200" height="200" viewBox="0 0 220 220" fill="none">
        <rect x="55" y="45" width="125" height="125" stroke="#d0d0d0" strokeWidth="1" fill="none" />
        <rect x="55" y="45" width="77"  height="77"  stroke="#c8c8c8" strokeWidth="1" fill="none" />
        <rect x="103" y="93" width="77"  height="77"  stroke="#c8c8c8" strokeWidth="1" fill="none" />
        <circle cx="141" cy="108" r="34" stroke="#d0d0d0" strokeWidth="1" fill="none" />
        <circle cx="80"  cy="132" r="22" stroke="#d0d0d0" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Testing, Optimization & Validation",
    description:
      "Before launch, we rigorously test your product with real users to ensure performance and usability. Using data-driven insights, we refine the experience, optimize key interactions, and deliver a product ready for scalable growth.",
    icon: (
      <svg width="200" height="200" viewBox="0 0 220 220" fill="none">
        <circle cx="110" cy="110" r="85" stroke="#d0d0d0" strokeWidth="1" fill="none" />
        <circle cx="110" cy="110" r="65" stroke="#d0d0d0" strokeWidth="1" fill="none" />
        <circle cx="110" cy="110" r="45" stroke="#d0d0d0" strokeWidth="1" fill="none" />
        <circle cx="110" cy="110" r="25" stroke="#d0d0d0" strokeWidth="1" fill="none" />
        <line x1="110" y1="25"  x2="110" y2="195" stroke="#d8d8d8" strokeWidth="0.8" />
        <line x1="25"  y1="110" x2="195" y2="110" stroke="#d8d8d8" strokeWidth="0.8" />
        <line x1="50"  y1="50"  x2="170" y2="170" stroke="#e0e0e0" strokeWidth="0.8" />
        <line x1="170" y1="50"  x2="50"  y2="170" stroke="#e0e0e0" strokeWidth="0.8" />
      </svg>
    ),
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

function DashedArrow() {
  return (
    <div className="hidden md:flex items-center absolute top-[98px] left-1/2 w-full z-10 pointer-events-none"
      style={{ transform: "translateX(50%)", width: "calc(100% - 120px)" }}>
      <svg width="100%" height="12" viewBox="0 0 200 12" preserveAspectRatio="none" fill="none">
        <line
          x1="0" y1="6" x2="185" y2="6"
          stroke="#bbb"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path d="M185 2 L194 6 L185 10" stroke="#bbb" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function StepCard({ step, index, total }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="flex flex-col items-center bg-white text-center relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`,
      }}
    >
      {/* Dashed arrow connector (not on last card) */}
      {index < total - 1 && <DashedArrow />}

      {/* SVG Icon with number badge */}
      <div className="relative flex items-center justify-center mb-8">
        {step.icon}

        {/* White ring + black circle badge */}
        <div className="absolute flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
              <span
                className="text-sm font-semibold tracking-widest"
                style={{ color: "#FF6F00" }}
              >
                {step.number}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[24px] font-semibold text-gray-900 mb-3">{step.title}</h3>

      {/* Description */}
      <p className="text-[16px] text-gray-400 leading-relaxed max-w-[290px]">
        {step.description}
      </p>
    </div>
  );
}

export default function ProcessSection() {
  const [headingRef, headingInView] = useInView(0.1);

  return (
    <section className=" m-auto ProcessMobile  py-48 ">
      {/* Heading */}
      <div
        ref={headingRef}
        className="text-center HeadMarg mb-20"
        style={{
          opacity: headingInView ? 1 : 0,
          transform: headingInView ? "translateY(0px)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p className="text-[14px] tracking-[0.3em] text-black uppercase mb-6">
          P R O C E S S
        </p>
        <h2 className="TextHead text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          From Idea to Launch
        </h2>
        <p className="TextHead text-5xl md:text-6xl font-bold text-[#b3b3b3] mt-1">
          End-to-End Product Design
        </p>
      </div>

      {/* Steps */}
      <div className="ProcessGap mx-auto grid  grid-cols-1 md:grid-cols-3 gap-16 md:gap-4 relative">
        {steps.map((step, i) => (
          <StepCard
            key={step.number}
            step={step}
            index={i}
            total={steps.length}
          />
        ))}
      </div>
    </section>
  );
}
