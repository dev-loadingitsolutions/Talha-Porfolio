import React from "react";

const text = "Show recent work";

export function AnimatedButton() {
  return (
    <button className="animated-btn" type="button">
      <span className="animated-btn__text">
        {text.split("").map((char, i) => (
          <span
            key={`top-${i}`}
            className="animated-btn__letter"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span className="animated-btn__text animated-btn__text--clone">
        {text.split("").map((char, i) => (
          <span
            key={`bot-${i}`}
            className="animated-btn__letter"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </button>
  );
}