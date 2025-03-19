import React, { useState } from 'react';
import './Excursion.css';

import excu1 from '../images2/excu1.jpg';
import excu2 from '../images2/excu2.jpg';
import excu3 from '../images2/excu3.jpg';
import excu4 from '../images2/excur4.jpeg';
import excu5 from '../images2/excu5.webp';
import excu6 from '../images2/excu6.jpg';
import excu7 from '../images2/excu6.jpg';

// Массив с данными о локациях (8 штук)
const locations = [
  {
    id: 1,
    title: 'Экскурсия "фиолетовые сады багульника"',
    country: 'Китай',
    price: '¥300',
    rating: 5,
    image: excu1,
  },
  {
    id: 2,
    title: 'Экскурсия "едем к панде г. Чанчунь"',
    country: 'Китай',
    price: '¥880|чел',
    rating: 4,
    image: excu2,
  },
  {
    id: 3,
    title: 'Экскурсия "музей динозавров + г. Яньцзи"',
    country: 'Китай',
    price: '¥330|чел',
    rating: 5,
    image: excu3,
  },
  {
    id: 4,
    title: 'Горячий источник "Лю Динь Шань"',
    country: 'Китай',
    price: '¥500',
    rating: 5,
    image: excu4,
  },
  {
    id: 5,
    title: 'Горячий источник и сауна "Пиньшань"',
    country: 'Китай',
    price: '¥320',
    rating: 4,
    image: excu5,
  },
  {
    id: 6,
    title: 'Глаза Хуньчунь + поющий фонтан + мост Хуньчунь',
    country: 'Китай',
    price: '¥50|чел',
    rating: 5,
    image: excu6,
  },
  {
    id: 7,
    title: 'Живаписный район Фанчуань + музей Хуньчунь',
    country: 'Китай',
    price: '¥330|чел',
    rating: 5,
    image: excu7,
  },
  {
    id: 8,
    title: 'Однодневныйе туры',
    country: 'Китай',
    price: '¥50-730',
    rating: 4,
    image: 'sydney.jpg',
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
        <h2 className="location-title">Экскурсии к турам</h2>
        <p className="location-subtitle">
            Данные экскурсии НЕ входят в стоимость туров
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
