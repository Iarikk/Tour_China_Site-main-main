import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import { Navigation, Autoplay } from 'swiper/modules';
import poster1 from '../images2/kharbin2.jpg';
import poster2 from '../images2/dalyan2.jpg';
import poster3 from '../images2/sanya2.jpg';
import poster4 from '../images2/beijing2.jpg';
import poster5 from '../images2/shanghai2.jpg';
import poster6 from '../images2/weihai2.jpg';
import { FaWhatsapp } from 'react-icons/fa';

const DesktopSlider = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const movies = [
        { title: 'Харбин', poster: poster1 },
        { title: 'Далянь', poster: poster2 },
        { title: 'Шанхай', poster: poster3 },
        { title: 'Пекин', poster: poster4 },
        { title: 'Санья', poster: poster5 },
        { title: 'Вэйхай', poster: poster6 },
    ];

    const handleCardClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="desktop-slider">
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                centeredSlides
                className="movie-swiper"
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`movie-card ${expandedIndex === index ? 'expanded' : ''}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <img src={movie.poster} alt={movie.title} className="movie-poster" />
                            <div className="movie-title">{movie.title}</div>

                            {/* Кнопка WhatsApp */}
                            <div
                                className="whatsapp-button"
                                onClick={(event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    window.open('https://wa.me/79245247565', '_blank');
                                }}
                            >
                                <FaWhatsapp className="whatsapp-icon" />
                                <span>Написать в WhatsApp</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DesktopSlider;
