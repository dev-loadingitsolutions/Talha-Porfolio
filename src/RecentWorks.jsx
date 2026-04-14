import React from 'react';
import Header from './Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import VideosSection from './components/VideosSection';
import './index.css'; // Assuming shared styles

const RecentWorks = () => {
  return (
    <div className="min-h-screen   bg-white  text-white overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-50 pb-24 px-8 max-w-7xl mx-auto">
        <h2 className='text-black text-[32px] font-[400]' style={{ 
        fontSize: 'clamp(32px, 5vw, 56px)', 
        lineHeight: '1.1', 
        fontWeight: '600', 
        maxWidth: '900px',
        marginBottom: '60px'
      }}>
        Recent work <br />
        <span style={{ color: '#a1a1a1' }}>I’m proud of</span>
      </h2>
        <div className="flex gap-12 items-start">
          <Sidebar />
          <VideosSection />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RecentWorks;


