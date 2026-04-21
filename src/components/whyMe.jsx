import React from 'react'
import Counter from './Counter'

const WhyMe = () => {

  return (
    <section id='why-us' className='WhyMeMobile' style={{ 
      backgroundColor: '#fff', 
      padding: '200px 0px', 
      fontFamily: ' Inter, sans-serif',
      color: '#000' 
    }}>
      {/* Small Top Heading */}
      <p style={{ 
        fontSize: '12px', 
        letterSpacing: '4px', 
        fontWeight: '500', 
        marginBottom: '20px',
        textTransform: 'uppercase'
      }}>
        W H Y &nbsp; M E
      </p>

      {/* Main Large Heading */}
      <h2 style={{ 
        fontSize: 'clamp(32px, 5vw, 56px)', 
        lineHeight: '1.1', 
        fontWeight: '600', 
        maxWidth: '900px',
        marginBottom: '60px'
      }}>
        Founder-driven product design built for speed, growth, and <br />
        <span style={{ color: '#a1a1a1' }}>real, measurable impact.</span>
      </h2>

      {/* Stats Grid */}
      <div className="className flex gap-12  justify-start">
        <div className='SectionCount flex gap-12 flex-col'>
            <Counter target={10} suffix="+" duration={2000} />
            <p className='counter-font-text text-[#939393] text-[16px] font-[400] '>Years of experience</p>
        </div>
        <div className='SectionCount flex gap-12 flex-col'>
            <Counter target={50} suffix="+" duration={2000} />
            <p className='counter-font-text text-[#939393] text-[16px] font-[400] '>Finished projects</p>
        </div>
        <div className='SectionCount flex gap-12 flex-col'>
            <Counter target={100} suffix="M" duration={2000} />
            <p className='counter-font-text text-[#939393] text-[16px] font-[400] '>Users worldwide trust products I’ve designed</p>
        </div>
      </div>
      
    </section>
  );
};

export default WhyMe;