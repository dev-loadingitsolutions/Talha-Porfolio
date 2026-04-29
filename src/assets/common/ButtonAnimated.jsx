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

const btext = "Book a call";
export function BookAnimatedButton() {
  return (
    <button className="animated-btn2 bg-[#ff6f00] text-white text-[16px] rounded-full px-8 py-4 cursor-pointer" type="button">
      <span className="animated-btn__text">
        {btext.split("").map((char, i) => (
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
        {btext.split("").map((char, i) => (
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



const buytext = "Buy now";

export function BuyAnimatedButton() {
  return (
    <button className="animated-btn3" type="button">
      <span className="animated-btn__text">
        {buytext.split("").map((char, i) => (
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
        {buytext.split("").map((char, i) => (
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