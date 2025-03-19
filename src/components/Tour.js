import React, { useState } from 'react';
import './Tour.css';

import tour1 from '../images2/dalyan2.jpg';
import tour2 from '../images2/kharbin2.jpg';
import tour3 from '../images2/sanya2.jpg';
import tour4 from '../images2/shanghai2.jpg';
import tour5 from '../images2/weihai2.jpg';
import tour6 from '../images2/beijing2.jpg';


// Массив с данными о локациях (8 штук)
const locations = [
  {
    id: 1,
    title: 'Далянь',
    country: 'Китай',
    price: '¥300',
    rating: 5,
    image: tour1,
  },
  {
    id: 2,
    title: 'Харбин',
    country: 'Китай',
    price: '¥880|чел',
    rating: 4,
    image: tour2,
  },
  {
    id: 3,
    title: 'Санья',
    country: 'Китай',
    price: '¥330|чел',
    rating: 5,
    image: tour3,
  },
  {
    id: 4,
    title: 'Шанхай',
    country: 'Китай',
    price: '¥500',
    rating: 5,
    image: tour4,
  },
  {
    id: 5,
    title: 'Вэйхай',
    country: 'Китай',
    price: '¥320',
    rating: 4,
    image: tour5,
  },
  {
    id: 6,
    title: 'Бэйцзин',
    country: 'Китай',
    price: '¥50|чел',
    rating: 5,
    image: tour6,
  },
];

function LocationCards() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Генерация звёздочек по рейтингу
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="location-section">
      <div className="location-header">
        <h2 className="location-title">Туры по Китаю</h2>
        <p className="location-subtitle">
            Стоимость туров может меняться в зависимости от курса!!!
        </p>

        {/* Стрелки влево и вправо (пока без функционала) */}
        <div className="location-arrows">
          <button className="arrow-btn">{'<'}</button>
          <button className="arrow-btn">{'>'}</button>
        </div>
      </div>

      <div className="cards-container">
        {locations.map((loc) => (
          <div className="card" key={loc.id}>
            <div className="card-image">
              <img src={loc.image} alt={loc.title} />
              {/* Тёмная подложка внизу карточки */}
              <div className="card-overlay">
                <h3>{loc.title}</h3>
                <div className="overlay-info">
                  <span className="rating">{renderStars(loc.rating)}</span>
                  <span className="price">{loc.price}</span>
                </div>
                <p className="country">{loc.country}</p>
              </div>
            </div>
            <button className="details-button" onClick={() => setSelectedLocation(loc)}>
              Подробнее
            </button>
          </div>
        ))}
      </div>

      {/* Модальное окно при клике на «Подробнее» */}
      {selectedLocation && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedLocation.title}</h3>
            <p>Страна: {selectedLocation.country}</p>
            <p>Стоимость: {selectedLocation.price}</p>
            <ul>
              <li>Проживание в отеле</li>
              <li>Экскурсионная программа</li>
              <li>Трансфер</li>
              <li>Питание</li>
              <li>...и многое другое</li>
            </ul>
            <button className="close-btn" onClick={() => setSelectedLocation(null)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default LocationCards;
