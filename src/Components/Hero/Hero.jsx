import React from 'react';
// Import Swiper styles (required for core functionality)
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import './Hero.css'



// Your image imports
import slide1 from '../Assets/Frontend_Assets/hero_image1.png';
import slide2 from '../Assets/Frontend_Assets/hero_image2.png';
import slide3 from '../Assets/Frontend_Assets/hero_image3.png';
import slide4 from '../Assets/Frontend_Assets/hero_image4.png';

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

        <section className="relative h-screen w-full overflow-hidden">

            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full">
                            {/* Slide Image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="h-full w-full object-cover object-center"
                            />

                            {/* Text Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
                                <div className="container mx-auto px-6 z-10">
                                    <div className="max-w-lg text-white">
                                        {/* Title */}
                                        <h2 className="text-5xl font-bold mb-4 animate-fadeInUp">
                                            {slide.title}
                                        </h2>

                                        {/* Subtitle */}
                                        <p className="text-xl mb-8 animate-fadeInUp delay-100">
                                            {slide.subtitle}
                                        </p>

                                        {/* Button */}
                                        <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 animate-fadeInUp delay-200 flex items-center gap-2 group">
                                            {slide.cta}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;