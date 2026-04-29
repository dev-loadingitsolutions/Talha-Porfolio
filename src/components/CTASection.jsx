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
                            
                        </div>
                        <span className="absolute bottom-2 right-2 w-[10px] h-[10px] rounded-full bg-lime-400 ring-2 ring-black" />
                        
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
                    className={`hoverText absolute left-1/2 top-[50px] ml-32 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white transition-all duration-300 ${showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
                        }`}
                    style={{ transform: 'translateX(-50%)' }}
                >
                    I am accepting new projects
                </div>
            </div>
            <div className="  px-6 py-16 flex justify-center relative">
                <div className="w-full ">
                    <div className="imageSection grid grid-cols-2 gap-[570px] justify-items-center">
                        {/* Row 1 */}
                        <div className="w-full max-w-sm aspect-[4/3] overflow-hidden rounded-lg">
                            <img
                                src="https://cdn.dribbble.com/userupload/46322857/file/4b87f553bb713d1775886a9a598425c9.png?resize=1905x1063&vertical=center"
                                alt="Work sample 1"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full max-w-sm aspect-[4/3] overflow-hidden rounded-lg">
                            <img
                                src="https://cdn.dribbble.com/userupload/46242560/file/be63b6a349ddd45484e93cff7ecb9daa.png?resize=1600x1195&vertical=center"
                                alt="Work sample 2"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Row 2 */}
                        <div className="w-full max-w-sm aspect-[4/3] overflow-hidden rounded-lg">
                            <img
                                src="https://cdn.dribbble.com/userupload/46062884/file/0bc9a5314a6bb8361b355f8c5b4950c4.png?resize=1905x1131&vertical=center"
                                alt="Work sample 3"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full max-w-sm aspect-[4/3] overflow-hidden rounded-lg">
                            <img
                                src="https://cdn.dribbble.com/userupload/46044485/file/2d6d72a8ed8aaffd1c4534f0da3ff7f1.png?resize=1600x1244&vertical=center"
                                alt="Work sample 4"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="w-full max-w-sm aspect-[4/3] overflow-hidden rounded-lg">
                                <img
                                    src="https://cdn.dribbble.com/userupload/44044558/file/original-7193447fbf98db6e7332fba05b76c9b5.png?resize=1600x1077&vertical=center"
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
