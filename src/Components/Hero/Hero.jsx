import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import './Hero.css';

// Image imports
import slide1 from '../Assets/Frontend_Assets/hero_image1.png';
import slide2 from '../Assets/Frontend_Assets/hero_image2.png';
import slide3 from '../Assets/Frontend_Assets/hero_image3.png';
import slide4 from '../Assets/Frontend_Assets/hero_image4.png';

// Hero Component Implementation
const Hero = () => {
    const slides = [
        {
            id: 1,
            image: slide1,
            title: 'NEW ARRIVALS ONLY',
            subtitle: 'Spring Collection 2023',
            cta: 'Shop Now'
        },
        {
            id: 2,
            image: slide2,
            title: 'SUMMER ESSENTIALS',
            subtitle: 'Fresh Styles for Hot Days',
            cta: 'Discover'
        },
        {
            id: 3,
            image: slide3,
            title: 'LIMITED EDITION',
            subtitle: 'Exclusive Designs',
            cta: 'Explore'
        },
        {
            id: 4,
            image: slide4,
            title: 'PREMIUM QUALITY',
            subtitle: 'Crafted with Perfection',
            cta: 'View Collection'
        }
    ];

    return (
        <section className="hero-section">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                speed={1200}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                className="hero-swiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="slide-container">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="slide-image"
                                loading="lazy"
                            />
                            <div className="slide-overlay">
                                <div className="slide-content">
                                    <h2 className="slide-title">{slide.title}</h2>
                                    <p className="slide-subtitle">{slide.subtitle}</p>
                                    <button className="slide-button">
                                        {slide.cta}
                                        <svg className="button-icon">
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

// Export the component
export default Hero;