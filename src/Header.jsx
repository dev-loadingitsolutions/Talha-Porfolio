import React, { useState, useEffect } from 'react'
import tfLogo from './assets/logo-talha.png'
import ArrowUpRight from './assets/icons/ArrowUpRight-white.png'
import tfWhiteLogo from './assets/white-tf-logo.png'

const Header = () => {
    const [isOverBlack, setIsOverBlack] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header-div');
            if (!header) return;

            const headerRect = header.getBoundingClientRect();

            // Get all elements that might have black backgrounds
            const allElements = document.querySelectorAll('*');
            let isOverBlackBg = false;

            allElements.forEach(element => {
                const computedStyle = window.getComputedStyle(element);
                const backgroundColor = computedStyle.backgroundColor;
                const backgroundImage = computedStyle.backgroundImage;

                // Check for black backgrounds (including rgba(0,0,0,1), #000, #000000, rgb(0,0,0))
                const isBlackBg = backgroundColor === 'rgb(0, 0, 0)' ||
                                backgroundColor === 'rgba(0, 0, 0, 1)' ||
                                backgroundColor === '#000000' ||
                                backgroundColor === '#000' ||
                                backgroundColor.includes('rgba(0, 0, 0, 1)') ||
                                backgroundColor.includes('rgb(0, 0, 0)') ||
                                // Check for gradients with black/dark colors
                                backgroundImage.includes('linear-gradient') && (
                                    backgroundImage.includes('#000') ||
                                    backgroundImage.includes('#111') ||
                                    backgroundImage.includes('#2a2a2a') ||
                                    backgroundImage.includes('rgb(0,0,0)') ||
                                    backgroundImage.includes('rgba(0,0,0')
                                ) ||
                                // Check for very dark backgrounds
                                backgroundColor.includes('rgb(26, 26, 26)') || // #1a1a1a
                                backgroundColor.includes('rgb(17, 17, 17)') || // #111
                                backgroundColor.includes('rgb(42, 42, 42)');   // #2a2a2a

                if (isBlackBg) {
                    const elementRect = element.getBoundingClientRect();

                    // Check if header overlaps with this black background element
                    const isOverlapping = headerRect.right > elementRect.left &&
                                        headerRect.left < elementRect.right &&
                                        headerRect.bottom > elementRect.top &&
                                        headerRect.top < elementRect.bottom;

                    if (isOverlapping) {
                        isOverBlackBg = true;
                    }
                }
            });

            setIsOverBlack(isOverBlackBg);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between p-6 header-div  transition-all duration-300 ease-in-out" style={{ width: '1210px', maxWidth: '1210px' }}>
            {/* Logo */}
            <div className="flex items-center">
                <img
                    src={isOverBlack ? tfWhiteLogo : tfLogo}
                    className="w-12 h-12 transition-opacity duration-300 ease-in-out"
                    alt="TF logo"
                />
            </div>

            {/* Get in Touch Button */}
            <div>
                <button
                    className="cursor-pointer  text-button flex items-center gap-[20px] px-6 py-3 font-medium transition-colors duration-200"
                    style={{ color: isOverBlack ? '#fff' : '#000' }}
                >
                   <span className='hover-underline'>Get in touch  </span> 
                    <div className='circle-yellow'>
                        <img src={ArrowUpRight} className="w-4 h-4" alt="Arrow" />
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header