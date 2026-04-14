import React, { useState } from 'react';
import ArrowRight from '../assets/icons/ArrowUpRight-white.png';
import profilePic from '../assets/TF-Profile.png';
import ImagesSection from './ImagesSection';


const CTASection = () => {
    const [showNotification, setShowNotification] = useState(false);

    return (
        <>
       
        <section className="bg-[#000] text-white">
            <div className="sticky top-50 z-40 max-w-[1210px] mx-auto px-6 py-24 overflow-hidden">
                <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none">
                    <div className="bg-white/5 blur-3xl rounded-full w-[360px] h-[360px] mt-[-120px]" />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center gap-10">
                    <div
                        className="relative inline-flex items-center gap-4 cursor-pointer"
                        onMouseEnter={() => setShowNotification(true)}
                        onMouseLeave={() => setShowNotification(false)}
                    >
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-lime-400 ring-2 ring-black" />
                        </div>

                        
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-[56px] md:text-6xl font-[600] leading-tight tracking-[-0.03em]">
                            From zero to one <span className="text-[#b3b3b3]"> <br /> Designed to ship</span>
                        </h1>
                    </div>

                    {/* Get in Touch Button */}
                    <div>
                        <button className=" cursor-pointer text-[white] text-[16px] flex items-center gap-[20px] px-6 py-3    font-medium  transition-colors duration-200">
                           <span className='hover-menu-underline'>Book a call with me </span> 
                            <div className='circle-yellow'>
                                <img src={ArrowRight} className="w-4 h-4" alt="Arrow" />
                            </div>
                        </button>
                    </div>
                </div>

                <div
                    className={`absolute left-1/2 top-[50px] ml-32 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white transition-all duration-300 ${showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
                        }`}
                    style={{ transform: 'translateX(-50%)' }}
                >
                    I am accepting new projects
                </div>
            </div>
            <div className="  px-6 py-16 flex justify-center relative">
                <div className="w-full ">
                    <div className="grid grid-cols-2 gap-[570px] justify-items-center">
                        {/* Row 1 */}
                        <div className="w-full max-w-sm aspect-[4/3] overflow-hidden rounded-lg">
                            <img
                                src="https://framerusercontent.com/images/YFEug273GEkHZyNCjYQ7T98qhzQ.png"
                                alt="Work sample 1"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full max-w-sm aspect-[4/3] overflow-hidden rounded-lg">
                            <img
                                src="https://framerusercontent.com/images/UnIJrd9Y024wX63FjpaYUSQaq8.png"
                                alt="Work sample 2"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Row 2 */}
                        <div className="w-full max-w-sm aspect-[4/3] overflow-hidden rounded-lg">
                            <img
                                src="https://framerusercontent.com/images/YFEug273GEkHZyNCjYQ7T98qhzQ.png"
                                alt="Work sample 3"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full max-w-sm aspect-[4/3] overflow-hidden rounded-lg">
                            <img
                                src="https://framerusercontent.com/images/UnIJrd9Y024wX63FjpaYUSQaq8.png"
                                alt="Work sample 4"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="w-full max-w-sm aspect-[4/3] overflow-hidden rounded-lg">
                                <img
                                    src="https://framerusercontent.com/images/YFEug273GEkHZyNCjYQ7T98qhzQ.png"
                                    alt="Work sample 5"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                        {/* Row 3 - Single centered image */}
                        <div className="col-span-2 flex  w-full">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
         </>
    );
};

export default CTASection;
