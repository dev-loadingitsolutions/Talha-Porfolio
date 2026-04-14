import React from 'react'
import heroImage from '../assets/heroImage.png'
import AnimatedButton from '../assets/common/AnimatedButton'
import Clutch from '../assets/Clutch-rating.svg'

const Hero = () => {
    return (
        <section className="py-20  text-white">
            <div className="mt-20 ">
                <p className="mb-4 text-base text-susi font-medium text-[#0006]">
                    I’m Robin — designer, founder, and growth partner
                </p>
                <h1 className="text-black text-susi max-w-[938px] font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl">
                    I help startups grow revenue through world-class{" "}

                    <span className="inline-flex items-center  align-middle mx-2">
                        <img
                            src={heroImage}
                            alt="Hero"
                            className="w-24 sm:w-28 lg:w-32 h-16 bg-black sm:h-14 lg:h-16 object-cover rounded-full shadow-xl"
                        />
                    </span>

                    design
                </h1>
                <div className='flex gap-8 items-center mt-10'>
                    <AnimatedButton />
                    <img src={Clutch} alt="Clutch" />
                </div>


                
            </div>
        </section>
    )
}

export default Hero
