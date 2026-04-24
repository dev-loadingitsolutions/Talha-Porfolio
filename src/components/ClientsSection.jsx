import { useEffect, useRef, useState } from "react";
import Fynder from "../assets/icons/clients-logo/Fynder.png";
import GtMFound from "../assets/icons/clients-logo/GTM-Fund-Logo.png";
import tarty from "../assets/icons/clients-logo/7arty.png";
import Quilverse from "../assets/icons/clients-logo/qualiverse.png";
import PerchPeek from "../assets/icons/clients-logo/perchpeek.png";
import QMB from "../assets/icons/clients-logo/qmb.png";
import RLS from "../assets/icons/clients-logo/rls.png";
import AlchemyBreath from "../assets/icons/clients-logo/alchemy.png";


// Client data with logos and descriptions
import FynderWhite from "../assets/icons/clients-logo/white-logo/Fynder.png";
import GtMFoundWhite from "../assets/icons/clients-logo/white-logo/GTM-Fund-Logo.png";
import tartyWhite from "../assets/icons/clients-logo/white-logo/7arty-white.png";
import QualiverseWhite from "../assets/icons/clients-logo/white-logo/qualiverse-white.png";
import PerchPeekWhite from "../assets/icons/clients-logo/white-logo/perchpeek-white.png";
import QMBWhite from "../assets/icons/clients-logo/white-logo/qbm-white.png";
import RlSwhite from "../assets/icons/clients-logo/white-logo/rls-white.png";
import AoBWhite from "../assets/icons/clients-logo/white-logo/AOB-Gold-White.png";



const clients = [
  {
    id: 1,
    name: <img className="font-[12px] w-[60%]" src={FynderWhite} alt="FynderWhite Logo" />,
    logo: (
      <img className="font-[12px] h-16 w-[100%]" src={Fynder} alt="Fynder Logo" />
      
    ),
    description: "End-to-end mobile product design for a category-defining barbershop platform serving tens of thousands of professionals globally.",
  },
  {
    id: 2,
    name: <img className="font-[14px] w-[60%]" src={GtMFoundWhite} alt="GtM Logo" />,
    logo: (
      <img className="font-[12px] h-8 w-[80%]" src={GtMFound} alt="Gtm-Found Logo" />
      
    ),
    description: "Product and platform design for a venture network empowering go-to-market leaders to invest in and scale the next generation of SaaS companies.",
  },
  {
    id: 3,
    name: <img className="font-[14px] w-[60%]" src={tartyWhite} alt="GtM Logo" />,
    logo: (
      <img className="font-[12px] h-12 w-[80%]" src={tarty} alt="7arty Logo" />
      
    ),
    description: "Mobile experience design for a content-driven platform built to help users create, explore, and engage with digital media in a seamless way.",
  },
  {
    id: 4,
    name: <img className="font-[14px] w-[60%]" src={QualiverseWhite} alt="GtM Logo" />,
    logo: (
      <img className="font-[12px] h-12 w-[80%]" src={Quilverse} alt="7arty Logo" />
      
    ),
    description: "AI-powered product and platform design for a regulatory intelligence system enabling MedTech teams to accelerate FDA submissions, reduce risk, and bring products to market faster.",
  },
  {
    id: 5,
    name: <img className="font-[14px] w-[60%]" src={PerchPeekWhite} alt="GtM Logo" />,
    logo: (
      <img className="font-[12px] h-12 w-[80%]" src={PerchPeek} alt="7arty Logo" />
      
    ),
    description: "End-to-end product design for a global mobility platform helping companies manage employee relocations seamlessly with automation, coaching, and real-time tracking.",
  },
  {
    id: 6,
    name: <img className="font-[14px] w-[60%]" src={QMBWhite} alt="GtM Logo" />,
    logo: (
      <img className="font-[12px] h-12 w-[80%]" src={QMB} alt="7arty Logo" />
      
    ),
    description: "Design and experience strategy for an AI-driven regulatory platform transforming compliance into a strategic advantage for MedTech innovators worldwide.",
  },
  {
    id: 7,
    name: <img className="font-[14px] w-[60%]" src={RlSwhite} alt="GtM Logo" />,
    logo: (
      <img className="font-[12px] h-12 w-[80%]" src={RLS} alt="7arty Logo" />
      
    ),
    description: "Service platform design for a remote staffing solution enabling law firms to scale operations with pre-trained legal professionals and streamlined workflows.",
  },
  {
    id: 8,
    name: <img className="font-[14px] w-[60%]" src={AoBWhite} alt="GtM Logo" />,
    logo: (
      <img className="font-[12px] h-12 w-[80%]" src={AlchemyBreath} alt="7arty Logo" />
      
    ),
    description: "Digital experience design for a global wellness platform helping individuals unlock emotional awareness and personal transformation through guided breathwork practices.",
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
    <div className="MobileHeight"
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
      <div className="hoverInfo"
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
        <p className="logoName" style={{ fontSize: 13, fontWeight: 600, color: "#fff", margin: "0 0 6px 0", letterSpacing: "0.02em" }}>
          {client.name}
        </p>
        <p className="describeText" style={{ fontSize: 14, fontFamily: "Suisse Intl normal , sans-serif", fontWeight: 400, color: "#fffc", lineHeight: 1.6, margin: 0 }}>
          {client.description}
        </p>
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="ClientMobile" style={{ padding: "80px 0rem 80px", margin: "0 auto" }}>
      <p
        style={{
          fontSize: 14,
          letterSpacing: "0.25em",
          color: "#222222",
          textTransform: "uppercase",
          fontWeight: 500,
          marginBottom: "1.5rem",
        }}
      >
        C L I E N T S
      </p>

      <div className="clientBrand flex gap-4"
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