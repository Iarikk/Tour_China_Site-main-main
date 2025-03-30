import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopSlider from './DesktopSlider';
import MobileSlider from './MobileSlider';
import './Slider.css'

const Slider = () => {
    // Используем медиазапрос для определения, на каком устройстве находимся
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    // Инициализация фильтра и состояния для кнопки WhatsApp
    const [filter, setFilter] = useState('all');
    const [expandedIndex, setExpandedIndex] = useState(null);

    const movies = [
        { title: 'Харбин', poster: 'path_to_image1.jpg', description: 'Экскурсия в зимний Харбин...', price: 'от 12000₽', category: 'all' },
        { title: 'Далянь', poster: 'path_to_image2.jpg', description: 'Живописный Далянь...', price: 'от 11000₽', category: 'action' },
    ];

    const filteredMovies = filter === 'all' ? movies : movies.filter(movie => movie.category === filter);

    // Функция для открытия WhatsApp
    const handleWhatsappClick = (movieTitle) => {
        window.open(`https://wa.me/79245247565?text=Интересуюсь%20туром%20в%20${movieTitle}`, '_blank');
    };

    return (
        
        <div>
                <section id="slider"></section>
        {/* Контейнер для заголовка */}
        <div className="schedule-title">
            Туры по Китаю
        </div>
            {/* Медиазапрос для рендеринга разных слайдеров */}
            {isDesktop ? (
                <DesktopSlider 
                    filteredMovies={filteredMovies} 
                    onWhatsappClick={handleWhatsappClick} 
                />
            ) : (
                <MobileSlider 
                    filteredMovies={filteredMovies} 
                    onWhatsappClick={handleWhatsappClick} 
                />
            )}
        </div>
    );
};

export default Slider;
