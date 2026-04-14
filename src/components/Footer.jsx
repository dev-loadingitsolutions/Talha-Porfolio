import React from 'react';
import tfWhiteLogo from '../assets/white-tf-logo.png';
import GetInTouch from '../assets/get-in-touch.png';

const Footer = () => {
    return (
        <footer className="bg-[#000] text-white pt-8 border-t border-white/10">
            <div className="max-w-[1210px] mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Left - Logo and Copyright */}
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
                            <img src={tfWhiteLogo} alt="TF Logo" />
                        </div>
                        <span className="text-[14px] text-white">All rights reserved.</span>
                    </div>

                    {/* Center - Navigation Links */}
                    <div className="flex items-center gap-8">
                        <a href="#home" className="text-[16px] text-white font-[400] hover:underline transition">
                            Home
                        </a>
                        <a href="#work" className="text-[16px] text-white hover:text-neutral-300 transition">
                            Work
                        </a>
                        <a href="#services" className="text-[16px] text-white font-[400] hover:text-neutral-300 transition">
                            Services
                        </a>
                        <a href="#why-us" className="text-[16px] text-white font-[400] hover:text-neutral-300 transition">
                            Why Us
                        </a>
                    </div>

                    {/* Right - Social Links */}
                    <div className="flex items-center ">
                        {/* Email */}
                        <a
                            href="mailto:robin@rh.design"
                            className="w-12 h-12 flex items-center justify-center text-white rounded-full hover:bg-[#FF6F00] hover:rounded-full transition"
                            title="Email"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </a>

                        {/* Twitter/X */}
                        <a
                            href="https://x.com/rholesinsky"
                            className="w-12 h-12 flex items-center justify-center text-white rounded-full hover:bg-[#FF6F00] hover:rounded-full transition"
                            title="Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-1.75 9-5.5v-.5c1.26-.94 2.36-2.14 3-3.53z" />
                            </svg>
                        </a>

                        {/* Website */}
                        <a
                            href="https://www.rh.design"
                            className="w-12 h-12 flex items-center justify-center text-white rounded-full hover:bg-[#FF6F00] hover:rounded-full transition"
                            title="Website"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4345_5202)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 24C14 18.4687 18.4687 14 24 14C29.5313 14 34 18.4687 34 24C34 29.5313 29.5313 34 24 34H23.1875V33.9688C18.0625 33.5625 14 29.25 14 24ZM24.25 32.375C28.75 32.25 32.375 28.5312 32.375 24C32.375 19.375 28.625 15.625 24 15.625C19.375 15.625 15.625 19.375 15.625 24C15.625 28.625 19.375 32.375 24 32.375H24.25Z" fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9375 16.6875C19.8125 16.6563 19.7187 16.625 19.5938 16.5625L20.125 15.0312C20.1875 15.0625 20.25 15.0625 20.375 15.0938C20.5625 15.1563 20.7813 15.2187 20.9063 15.2812C20.9375 15.2812 20.9687 15.3125 21.0312 15.3125C21.25 15.4062 21.5 15.5 21.7188 15.5937L21.75 15.625C21.8437 15.6875 22 15.75 22.125 15.8125C22.1875 15.8438 22.25 15.875 22.3125 15.9062H22.3438H22.375C22.4062 15.9375 22.5 15.9688 22.5937 16.0313H22.625C22.625 16.0313 22.6563 16.0312 22.6563 16.0625C22.6563 16.0625 22.6875 16.0625 22.6875 16.0937C22.6875 16.0937 22.6875 16.0937 22.7187 16.0937C22.7187 16.0937 22.7187 16.0937 22.75 16.0937C22.75 16.0937 22.7812 16.0938 22.7812 16.125C22.8437 16.1563 22.9375 16.2187 23 16.25C23.0937 16.3125 23.2187 16.375 23.3125 16.4375C23.4062 16.5 23.5312 16.5937 23.625 16.625L23.6562 16.6562C23.7187 16.6875 23.7812 16.7187 23.8125 16.75C23.875 16.7813 23.9375 16.8437 24 16.875C24.0312 16.9062 24.0625 16.9062 24.0625 16.9375C24.0937 16.9687 24.125 16.9688 24.1562 17C24.1875 17.0313 24.1875 17.0312 24.2187 17.0312C24.2187 17.0312 24.2187 17.0312 24.25 17.0312H24.2813H24.3125C25.2187 17.7187 26 18.5 26.6875 19.4062C27.4375 20.4062 28.0312 21.5 28.4375 22.6875C29.6562 26.125 29.3125 30.0625 27.375 33.1875L26 32.3438C27.6562 29.6563 27.9687 26.2188 26.9062 23.2188C26.5625 22.2188 26.0312 21.25 25.375 20.4063C24.7813 19.625 24.0937 18.9375 23.3125 18.3437C23.2812 18.3125 23.2187 18.2813 23.1875 18.25C23.1562 18.2188 23.125 18.1875 23.0937 18.1875C23.0625 18.1562 23.0625 18.1562 23.0312 18.125C22.9687 18.0937 22.9375 18.0313 22.875 18C22.8437 17.9687 22.8125 17.9687 22.8125 17.9687H22.7812V18.0625C22.75 18.0312 22.6875 18 22.6563 18C22.5938 17.9375 22.5312 17.9062 22.4687 17.875L22.4375 17.8438L22.4062 17.8125C22.4062 17.8125 22.375 17.8125 22.3438 17.7813C22.3125 17.75 22.25 17.7188 22.1875 17.6875C22.125 17.6562 22.0313 17.5937 22 17.5625C21.9688 17.5625 21.9375 17.5312 21.9375 17.5312L21.9062 17.5C21.875 17.5 21.875 17.4688 21.8438 17.4688C21.8438 17.4688 21.8125 17.4375 21.7812 17.4375C21.75 17.4062 21.7187 17.4063 21.6562 17.375C21.5937 17.3437 21.5312 17.3125 21.4687 17.2812C21.3437 17.2187 21.2188 17.1562 21.0938 17.125L21.0625 17.0937C20.9063 17.0312 20.7187 16.9687 20.5312 16.875C20.4375 16.8437 20.4062 16.8125 20.3437 16.8125C20.2187 16.75 20.0938 16.7188 19.9375 16.6875Z" fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.375 20.5312C25.8125 20.0937 28.0938 18.7188 29.625 16.75L30.9062 17.75C29.0937 20.0312 26.5 21.625 23.6562 22.125C22.25 22.375 20.7813 22.375 19.375 22.125C17.9688 21.875 16.5938 21.375 15.3438 20.625L16.1875 19.25C17.25 19.875 18.4375 20.3437 19.6563 20.5625C20.875 20.75 22.125 20.75 23.375 20.5312Z" fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0312 32.2191C20.4063 25.1566 27.625 21.2503 33.5 22.8441L33.0625 24.4066C28.0625 23.0316 21.8125 26.4066 20.5938 32.5316L19.0312 32.2191Z" fill="currentColor"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4345_5202">
                                        <rect width="32" height="32" fill="white" transform="translate(14 14)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/rholesinsky"
                            className="w-12 h-12 flex items-center justify-center rounded-full hover:rounded-full text-white hover:bg-[#FF6F00] transition"
                            title="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4345_5208)">
                                    <path d="M30.6845 30.8032H27.7831V26.3042C27.7831 25.2314 27.7638 23.8504 26.2741 23.8504C24.7629 23.8504 24.5317 25.0193 24.5317 26.2261V30.8029H21.6303V21.5512H24.4157V22.8156H24.4547C24.7334 22.3437 25.1362 21.9555 25.6201 21.6923C26.1041 21.4291 26.6511 21.3008 27.2028 21.3211C30.1435 21.3211 30.6857 23.2363 30.6857 25.7279L30.6845 30.8032ZM18.3566 20.2866C18.0236 20.2867 17.698 20.1889 17.4211 20.0058C17.1442 19.8227 16.9284 19.5623 16.8009 19.2577C16.6734 18.9531 16.64 18.6179 16.7049 18.2945C16.7698 17.9711 16.9301 17.674 17.1655 17.4408C17.401 17.2077 17.7009 17.0488 18.0275 16.9844C18.3541 16.9201 18.6927 16.953 19.0004 17.0791C19.308 17.2053 19.571 17.4189 19.7561 17.693C19.9411 17.9671 20.04 18.2894 20.04 18.6192C20.0401 18.8381 19.9965 19.0549 19.912 19.2572C19.8274 19.4595 19.7034 19.6433 19.5471 19.7981C19.3908 19.9529 19.2052 20.0758 19.0009 20.1596C18.7966 20.2434 18.5777 20.2866 18.3566 20.2866ZM19.8073 30.8032H16.9029V21.5512H19.8073V30.8032ZM32.1309 14.2845H15.445C15.0662 14.2803 14.7013 14.4251 14.4303 14.6872C14.1594 14.9492 14.0046 15.307 14 15.682V32.2722C14.0045 32.6474 14.1591 33.0055 14.4301 33.2678C14.701 33.5301 15.066 33.6752 15.445 33.6712H32.1309C32.5106 33.6759 32.8766 33.5312 33.1486 33.2689C33.4206 33.0066 33.5764 32.6481 33.5816 32.2722V15.6808C33.5762 15.3051 33.4204 14.9469 33.1484 14.6848C32.8764 14.4228 32.5104 14.2784 32.1309 14.2833" fill="currentColor"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4345_5208">
                                        <rect width="20" height="20" fill="white" transform="translate(14 14)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='mt-[80px]'>
                    <img src={GetInTouch} alt="" />
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;
