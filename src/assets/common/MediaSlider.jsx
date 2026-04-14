import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

const defaultSlides = [
  { type: 'image', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80' },
  { type: 'image', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80' },
  { type: 'image', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80' },
  { type: 'image', url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80' },
]

const MediaSlider = ({ slides = defaultSlides }) => {
  return (
    <div 
      className="slider-container" 
      style={{ 
        width: '100%', 
        padding: '20px 0', 
        position: 'relative'
      }}
    >
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        grabCursor={true}
        speed={8000} 
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={true}
        className="smooth-marquee"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={{ 
              height: '500px', 
              overflow: 'hidden', 
              background: '#1a1a1a',
              borderRadius: '' // Thoda rounded corner for better UI
            }}>
              {item.type === 'video' ? (
                <video
                  src={item.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <img
                  src={item.url}
                  alt="Work"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .smooth-marquee .swiper-wrapper {
          transition-timing-function: linear !important;
          -webkit-transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
};

export default MediaSlider;