import React, { useEffect, useRef, useState } from "react";

// Custom useInView hook (matching original image-gen process section but adjusted for this)
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return [ref, inView];
}

const services = [
  {
    title: "BRANDING",
    number: "5",
    description: "Building unique and memorable brand identities.",
  },
  {
    title: "WEBSITES",
    number: "17",
    description: "Designing and developing responsive, conversion-focused websites.",
  },
  {
    title: "MOBILE APPS",
    number: "12",
    description: "Creating user-centric native and cross-platform app experiences.",
  },
  {
    title: "PRODUCT DESIGN",
    number: "21",
    description: "Crafting end-to-end digital product designs from concepts.",
  },
  {
    title: "PITCH DECKS",
    number: "12",
    description: "Compelling storytelling and high-quality decks for funding.",
  },
];

function ServiceItem({ service, index, inView }) {
  return (
    <div
      className="group flex flex-col md:flex-row md:items-center relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 0.1}s`,
        transition: "opacity 0.6s ease, transform 0.6s ease"
      }}
    >
      {/* The main title - The part that has the hover effect */}
      <div 
        className="relative inline-block cursor-pointer px-4 py-2 -mx-4 group-hover:-mx-3 group-hover:px-3 rounded-lg transition-all duration-300 group-hover:bg-[#FF6F00]"
      >
        <h2 className="serviceTitle text-[88px] md:text-7xl font-black text-white group-hover:text-white transition-colors duration-300 leading-none">
          {service.title}
        </h2>
        
        {/* Number - Positioning it relative to the title as in the image */}
        <span className="absolute top-1 right-0 text-sm font-light text-white opacity-60 group-hover:text-white group-hover:opacity-80 transition-all duration-300 translate-x-[110%]">
          {service.number}
        </span>
      </div>

      {/* Description (Optional - I added this to keep it functional, but you can remove it to make it match the image *exactly* in terms of content) */}
      {/* If you want it exactly like the image (no descriptions), remove the <p> below */}
      {/* <p className="md:ml-20 text-gray-500 text-lg md:max-w-sm mt-4 md:mt-0 transition-opacity duration-300 group-hover:opacity-90">
        {service.description}
      </p> */}
    </div>
  );
}

export default function Services() {
  const [headingRef, headingInView] = useInView(0.1);
  const [listRef, listInView] = useInView(0.15);

  return (
    <section className="min-h-screen paddingSection bg-black py-24 md:py-32 flex flex-col items-start justify-start font-inter text-white" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex-grow flex flex-col">
        
        {/* Heading Section */}
        <div
          ref={headingRef}
          className="serviceHeading mb-16 md:mb-24"
          style={{
            opacity: headingInView ? 1 : 0,
            transform: headingInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s"
          }}
        >
          <h3 
            className="text-[12px] serviceHeading md:text-[14px] tracking-[0.4em] uppercase mb-4 md:mb-6 font-medium"
            style={{ color: "#ff6f00" }} // Use the light green color from the image
          >
            S E R V I C E S
          </h3>
          
        </div>

        {/* Services List Section */}
        <div 
          ref={listRef}
          className="flex-grow flex flex-col justify-center space-y-10 md:space-y-12"
        >
          {services.map((service, index) => (
            <ServiceItem
              key={service.title}
              service={service}
              index={index}
              inView={listInView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}