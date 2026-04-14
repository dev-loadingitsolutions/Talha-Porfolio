import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Header from './Header'
import MediaSlider from './assets/common/MediaSlider'
import ClientsSection from './components/ClientsSection'
import FounderSection from './components/FounderSection'
import Hero from './components/Hero'
import ProcessSection from './components/ProcessSection'
import WhyMe from './components/whyMe'
import TestimonialsSection from './components/TestimonialsSection'
import BuiltByMe from './components/BuiltByMe'
import PricingSection from './components/PricingSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import ImagesSection from './components/ImagesSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import Footer from './components/Footer'
import RecentWorks from "./RecentWorks";









const App = () => {
  const demoSlides = [
    { type: 'image', url: 'https://framerusercontent.com/images/YFEug273GEkHZyNCjYQ7T98qhzQ.png' },
    { type: 'video', url: 'https://framerusercontent.com/assets/lmml8qWYisZkyVLGqWa5aGhhn0k.mp4' },

    { type: 'video', url: 'https://framerusercontent.com/assets/GxJ14S7ZTUQjTy5xYHXdJYh1sYs.mp4' },

    { type: 'video', url: 'https://cdn.dribbble.com/userupload/46768126/file/8ee05d0e83070eb07c410da9ef7036c6.mp4' },
    { type: 'video', url: 'https://framerusercontent.com/assets/n0aQWYXAsw3DorIx1fxKRjiLZo.mp4' },


    { type: 'video', url: 'https://cdn.dribbble.com/userupload/46513805/file/b726a6281991c3028d80144ba400148d.mp4' },
    { type: 'image', url: 'https://framerusercontent.com/images/UnIJrd9Y024wX63FjpaYUSQaq8.png' },



    { type: 'video', url: 'https://framerusercontent.com/assets/lmml8qWYisZkyVLGqWa5aGhhn0k.mp4' },

    // Repeat some slides to ensure the slider has enough content for looping

    { type: 'image', url: 'https://framerusercontent.com/images/YFEug273GEkHZyNCjYQ7T98qhzQ.png' },
    { type: 'video', url: 'https://framerusercontent.com/assets/lmml8qWYisZkyVLGqWa5aGhhn0k.mp4' },

    { type: 'video', url: 'https://framerusercontent.com/assets/GxJ14S7ZTUQjTy5xYHXdJYh1sYs.mp4' },

    { type: 'video', url: 'https://cdn.dribbble.com/userupload/46768126/file/8ee05d0e83070eb07c410da9ef7036c6.mp4' },
    { type: 'video', url: 'https://framerusercontent.com/assets/n0aQWYXAsw3DorIx1fxKRjiLZo.mp4' },


    { type: 'video', url: 'https://cdn.dribbble.com/userupload/46513805/file/b726a6281991c3028d80144ba400148d.mp4' },
    { type: 'image', url: 'https://framerusercontent.com/images/UnIJrd9Y024wX63FjpaYUSQaq8.png' },



    { type: 'video', url: 'https://framerusercontent.com/assets/lmml8qWYisZkyVLGqWa5aGhhn0k.mp4' },


    { type: 'image', url: 'https://framerusercontent.com/images/YFEug273GEkHZyNCjYQ7T98qhzQ.png' },
    { type: 'video', url: 'https://framerusercontent.com/assets/lmml8qWYisZkyVLGqWa5aGhhn0k.mp4' },
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <div className="Section pt-24">
              <Header />
              <Hero />
            </div>
            <MediaSlider slides={demoSlides} />
            <div className="Section">
              <WhyMe />
              <ClientsSection />
              <ProcessSection />
            </div>
            <CaseStudiesSection />
            <div className="Section">
              <BuiltByMe />
              <PricingSection />
            </div>
            <FAQSection />
            <TestimonialsSection />
            <FounderSection />
            <CTASection />
            <Footer />
          </>
        } />
        <Route path="/recent-works" element={<RecentWorks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

