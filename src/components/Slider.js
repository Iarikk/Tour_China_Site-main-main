import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import { Navigation, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Slider.css';

import poster1 from '../images2/kharbin2.jpg';
import poster2 from '../images2/dalyan2.jpg';
import poster3 from '../images2/sanya2.jpg';
import poster4 from '../images2/beijing2.jpg';
import poster5 from '../images2/shanghai2.jpg';
import poster6 from '../images2/weihai2.jpg';

const Slider = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [filter, setFilter] = useState('all');
    const [expandedIndex, setExpandedIndex] = useState(null);

    const movies = [
        { title: 'Харбин', poster: poster1, description: 'Экскурсия в зимний Харбин...', price: 'от 12000₽', hotels: ['3 звезды', '4 звезды', '5 звезд'], category: 'science fiction' },
        { title: 'Далянь', poster: poster2, description: 'Живописный Далянь с морскими пейзажами...', price: 'от 11000₽', hotels: ['3 звезды', '4 звезды'], category: 'action' },
        { title: 'Шанхай', poster: poster3, description: 'Современный мегаполис с китайским колоритом...', price: 'от 15000₽', hotels: ['5 звезд'], category: 'action' },
        { title: 'Пекин', poster: poster4, description: 'Культурный центр Китая с историческими памятниками...', price: 'от 9000₽', hotels: ['3 звезды', '4 звезды', '5 звезд'], category: 'drama' },
        { title: 'Санья', poster: poster5, description: 'Тропический рай на острове Хайнань...', price: 'от 18000₽', hotels: ['5 звезд'], category: 'drama' },
        { title: 'Вэйхай', poster: poster6, description: 'Живописные пляжи и горячие источники...', price: 'от 13000₽', hotels: ['3 звезды', '4 звезды'], category: 'drama' },
    ];

    const filteredMovies = filter === 'all' ? movies : movies.filter(movie => movie.category === filter);

    const handleCardClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="cinema-schedule">
            <h2 className="schedule-title" data-aos="fade-up">Туры по Китаю</h2>

            {/* Фильтры */}
            <div className="filter-buttons" data-aos="fade-up">
                <button onClick={() => setFilter('all')}>Все</button>
                <button onClick={() => setFilter('science fiction')}>Харбин</button>
                <button onClick={() => setFilter('action')}>Далянь</button>
                <button onClick={() => setFilter('action')}>Шанхай</button>
                <button onClick={() => setFilter('drama')}>Пекин</button>
                <button onClick={() => setFilter('drama')}>Санья</button>
            </div>

            {/* Swiper */}
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={filteredMovies.length < 3 ? 3 : 3} // Всегда 3 слайда в ряду
                spaceBetween={20}
                loop={true}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                centeredSlides={filteredMovies.length < 3} // Центрируем, если карточек <3
                className="movie-swiper"
            >
                {filteredMovies.map((movie, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`movie-card ${expandedIndex === index ? 'expanded' : ''}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <img src={movie.poster} alt={movie.title} className="movie-poster" />
                            <div className="movie-title">{movie.title}</div>

                            {expandedIndex === index && (
                                <div className="movie-info">
                                    <p>{movie.description}</p>
                                    <p><strong>Цена:</strong> {movie.price}</p>
                                    <p><strong>Отели:</strong> {movie.hotels.join(', ')}</p>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
