import React, { useEffect, useState } from "react";

const Signature = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    // triggers animation on mount
    setStart(true);
  }, []);

  return (
    <div className="mt-4" style={{ display: "inline-block" }}>
      
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
        fill="transparent"
          style={{
            strokeDasharray: 600,
            strokeDashoffset: start ? 0 : 600,
            transition: "stroke-dashoffset 2.5s ease-in-out",
          }}
      />
      <path
        d="M8 62 C40 60, 100 58, 160 60 C210 61, 260 59, 310 62"
        stroke="white"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
    </div>
  );
};

export default Signature;