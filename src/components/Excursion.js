import React from 'react';
import './Excursion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import excu1 from '../images2/excu1.jpg';
import excu2 from '../images2/excu2.jpg';
import excu3 from '../images2/excu3.jpg';
import excu4 from '../images2/excur4.jpeg';
import excu5 from '../images2/excu5.webp';
import excu6 from '../images2/excu6.jpg';
import excu7 from '../images2/excu6.jpg';
import excu8 from '../images2/excu7.jpg';

// Массив с данными о локациях (8 штук)
const locations = [
  {
    id: 1,
    title: 'Экскурсия "фиолетовые сады багульника"',
    country: 'Китай',
    price: '¥400|чел',
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
    price: '¥550|чел',
    rating: 5,
    image: excu4,
  },
  {
    id: 5,
    title: 'Горячий источник и сауна "Пиньшань"',
    country: 'Китай',
    price: '¥150|чел',
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
    title: 'Живописный район Фанчуань + музей Хуньчунь',
    country: 'Китай',
    price: '¥275|чел',
    rating: 5,
    image: excu7,
  },
  {
    id: 8,
    title: 'Однодневные туры',
    country: 'Китай',
    price: '¥50-750|чел',
    rating: 4,
    image: excu8,
  },
];

function LocationCards() {
  const phoneNumber = "+79245247565"; // Укажи номер для WhatsApp

  const handleBuyClick = (locationTitle) => {
    console.log(`Пользователь нажал кнопку "Купить" для экскурсии: "${locationTitle}"`);
  };

  return (
    
    <section id="excursions" className="location-section">
      <div className="location-header">
        <h2 className="location-title">Экскурсии к турам</h2>
        <p className="location-subtitle">
            Данные экскурсии НЕ входят в стоимость туров
        </p>
      </div>

      <div className="cards-container">
        {locations.map((loc) => (
          <div className="card" key={loc.id}>
            <div className="card-image">
              <img src={loc.image} alt={loc.title} />
              <div className="card-overlay">
                <h3>{loc.title}</h3>
                <div className="overlay-info">
                  <span className="rating">
                    {Array.from({ length: loc.rating }, (_, i) => (
                      <span key={i} className="star filled">★</span>
                    ))}
                    {Array.from({ length: 5 - loc.rating }, (_, i) => (
                      <span key={i + 5} className="star">★</span>
                    ))}
                  </span>
                  <span className="price">{loc.price}</span>
                </div>
                <p className="country">{loc.country}</p>
              </div>
            </div>
            {/* Кнопка Купить с логом консоли */}
            <a
              className="details-button1"
              href={`https://wa.me/${phoneNumber}?text=Здравствуйте! Я заинтересован в экскурсии: "${loc.title}".`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleBuyClick(loc.title)} // Логирование при клике
            >
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '10px' }} /> Купить
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocationCards;
