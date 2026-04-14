import React, { useState } from 'react';
import TFProfile from '../assets/TF-Profile.png';
import clutch from '../assets/clutch.svg';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'casestudies', label: 'Case Studies' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="w-1/4 pr-8 bg-black p-6 pt-12 flex flex-col h-[70vh]">
      {/* Profile Section */}
      <div className="mb-12">
        <img 
          src={TFProfile} 
          alt="Profile" 
          className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
        />
        <h2 className="text-[24px] font-Suisse Intl regular font-[200] text-white mb-2">I'm Talha </h2>
        <p className="text-[16px] text-gray-300">Prague-based independent designer with over 10 years of experience.</p>

        <img src={clutch} alt="Clutch" className="w-24 h-auto mt-6" />
        
      </div>

      {/* Tabs */}
      <div className="flex-1">
        <nav className="space-y-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left py-4 px-6 rounded-xl transition-all duration-300 font-medium text-lg ${
                activeTab === tab.id
                  ? 'bg-white text-black shadow-xl transform scale-105'
                  : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

