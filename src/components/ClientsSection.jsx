import { useEffect, useRef, useState } from "react";
import Squire from "../assets/icons/squire.svg";
import reap from "../assets/icons/reap.svg";
import elumity from "../assets/icons/elumity.svg";
import Bohemian from "../assets/icons/bohemian-research.svg";
import Iron from "../assets/icons/iron.svg";
import Nue from "../assets/icons/nue.svg";
import Gumroad from "../assets/icons/gumroad.svg";
import Vannin from "../assets/icons/vannin.svg";

// Client data with logos and descriptions
import SquireWhite from "../assets/icons/squire-white-1.svg";
import reepWhite from "../assets/icons/reap-white-1.svg";
import elumityWhite from "../assets/icons/elumity-white-1.svg";
import BohemianWhite from "../assets/icons/boehmian-research-white-1.svg";


const clients = [
  {
    id: 1,
    name: <img className="font-[14px]" src={SquireWhite} alt="SquireWhite Logo" />,
    logo: (
      <img className="font-[14px]" src={Squire} alt="Squire Logo" />
      
    ),
    description: "End-to-end mobile product design for a category-defining barbershop platform serving tens of thousands of professionals globally.",
  },
  {
    id: 2,
    name: <img className="font-[14px]" src={reepWhite} alt="ReapWhite Logo" />,
    logo: (
      <img className="font-[14px]" src={reap} alt="Reap Logo" />
    ),
    description: "End-to-end mobile product design for a category-defining barbershop platform serving tens of thousands of professionals globally..",
  },
  {
    id: 3,
    name: <img className="font-[14px]" src={elumityWhite} alt="elumityWhite Logo" />,
    logo: (
      <img className="font-[14px]" src={elumity} alt="Elumity Logo" />
    ),
    description: "End-to-end mobile product design for a category-defining barbershop platform serving tens of thousands of professionals globally.",
  },
  {
    id: 4,
    name: <img className="font-[14px]" src={BohemianWhite} alt="BohemianWhite
     Logo" />,
    logo: (
      <img className="font-[14px]" src={Bohemian} alt="Bohemian Research Logo" />
    ),
    description: "End-to-end mobile product design for a category-defining barbershop platform serving tens of thousands of professionals globally.",
  },
  {
    id: 5,
    name: <img className="font-[14px]" src={SquireWhite} alt="SquireWhite Logo" />,
    logo: (
      <img className="font-[14px]" src={Iron} alt="Iron  Logo" />
    ),
    description: "End-to-end mobile product design for a category-defining barbershop platform serving tens of thousands of professionals globally.",
  },
  {
    id: 6,
    name: <img className="font-[14px]" src={SquireWhite} alt="SquireWhite Logo" />,
    logo: (
      <img className="font-[14px]" src={Nue} alt="Nue Logo" />
    ),
    description: "End-to-end mobile product design for a category-defining barbershop platform serving tens of thousands of professionals globally.",
  },
  {
    id: 7,
    name: <img className="font-[14px]" src={SquireWhite} alt="SquireWhite Logo" />,
    logo: (
      <img className="font-[14px]" src={Gumroad} alt="Gumroad Logo" />
    ),
    description: "End-to-end mobile product design for a category-defining barbershop platform serving tens of thousands of professionals globally.",
  },
  {
    id: 8,
    name: <img className="font-[14px]" src={SquireWhite} alt="SquireWhite Logo" />,
    logo: (
      <img className="font-[14px]" src={Vannin} alt="Vannin Logo" />
    ),
    description: "End-to-end mobile product design for a category-defining barbershop platform serving tens of thousands of professionals globally.",
  },
];

function ClientCard({ client, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 120);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        aspectRatio: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: hovered ? "#111" : "#f7f7f7",
        
        overflow: "hidden",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, background 0.3s ease",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 0 : 1,
          transform: hovered ? "scale(0.88)" : "scale(1)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        {client.logo}
      </div>

      {/* Hover info */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "2.25rem",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          pointerEvents: "none",
        }}
      >
        <p style={{ fontSize: 13, fontWeight: 600, color: "#fff", margin: "0 0 6px 0", letterSpacing: "0.02em" }}>
          {client.name}
        </p>
        <p style={{ fontSize: 14, fontFamily: "Suisse Intl Book, Arial, sans-serif", fontWeight: 400, color: "#fffc", lineHeight: 1.6, margin: 0 }}>
          {client.description}
        </p>
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section style={{ padding: "3rem 0rem", margin: "0 auto" }}>
      <p
        style={{
          fontSize: 12,
          letterSpacing: "0.25em",
          color: "#222222",
          textTransform: "uppercase",
          fontWeight: 500,
          marginBottom: "1.5rem",
        }}
      >
        C L I E N T S
      </p>

      <div className="flex gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {clients.map((client, i) => (
          <ClientCard key={client.id} client={client} index={i} />
        ))}
      </div>
    </section>
  );
}