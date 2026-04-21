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
import ServiceItem from './components/Services'
import Footer from './components/Footer'
import RecentWorks from "./RecentWorks";









const App = () => {
  const demoSlides = [
    { type: 'image', url: 'https://cdn.dribbble.com/userupload/44044558/file/original-7193447fbf98db6e7332fba05b76c9b5.png?resize=1600x1077&vertical=center' },


    { type: 'image', url: 'https://cdn.dribbble.com/userupload/46301693/file/8a1326f3fc50bbe1fb875a9d7347e89f.png?resize=1600x1200&vertical=center' },






    { type: 'image', url: 'https://cdn.dribbble.com/userupload/45915314/file/bd68cc3d22bb685fe140650968860d82.png?resize=1600x1200&vertical=center' },

    { type: 'image', url: 'https://cdn.dribbble.com/userupload/44044289/file/original-3392c052febfeda705010360eca0ea6d.png?resize=1600x1199&vertical=center' },


    { type: 'image', url: 'https://cdn.dribbble.com/userupload/43096203/file/original-fd5ced3fb28c7a3ede4acc1958e7dd82.png?resize=1600x1200&vertical=center' },


    { type: 'image', url: 'https://cdn.dribbble.com/userupload/18355124/file/original-2482e15c9026d506f0300401ac4c0dee.png?resize=1024x768&vertical=center' },


    { type: 'image', url: 'https://cdn.dribbble.com/userupload/46216683/file/fbf75f1c1605aa9d1aebd9a4a89b94c1.png?resize=1600x1195&vertical=center' },





    // Repeat some slides to ensure the slider has enough content for looping

    { type: 'image', url: 'https://cdn.dribbble.com/userupload/44044558/file/original-7193447fbf98db6e7332fba05b76c9b5.png?resize=1600x1077&vertical=center' },


    { type: 'image', url: 'https://cdn.dribbble.com/userupload/46301693/file/8a1326f3fc50bbe1fb875a9d7347e89f.png?resize=1600x1200&vertical=center' },






    { type: 'image', url: 'https://cdn.dribbble.com/userupload/45915314/file/bd68cc3d22bb685fe140650968860d82.png?resize=1600x1200&vertical=center' },

    { type: 'image', url: 'https://cdn.dribbble.com/userupload/44044289/file/original-3392c052febfeda705010360eca0ea6d.png?resize=1600x1199&vertical=center' },


    { type: 'image', url: 'https://cdn.dribbble.com/userupload/43096203/file/original-fd5ced3fb28c7a3ede4acc1958e7dd82.png?resize=1600x1200&vertical=center' },


    { type: 'image', url: 'https://cdn.dribbble.com/userupload/18355124/file/original-2482e15c9026d506f0300401ac4c0dee.png?resize=1024x768&vertical=center' },


    { type: 'image', url: 'https://cdn.dribbble.com/userupload/46216683/file/fbf75f1c1605aa9d1aebd9a4a89b94c1.png?resize=1600x1195&vertical=center' },

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

            </div>
            <CaseStudiesSection />
            <ServiceItem/>
            <div className="Section">
              <BuiltByMe />

              <PricingSection />
              <FAQSection />





            </div>

            <TestimonialsSection />
            <div className="Section">
              <ProcessSection />
            </div>




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

