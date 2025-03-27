import React, { useState } from "react";
import "./Tour.css";

import tour1 from "../images2/dalyan2.jpg";
import tour2 from "../images2/kharbin2.jpg";
import tour3 from "../images2/sanya2.jpg";
import tour4 from "../images2/shanghai2.jpg";
import tour5 from "../images2/weihai2.jpg";
import tour6 from "../images2/beijing2.jpg";

// Массив данных
const locations = [
  { id: 1, title: "Далянь", country: "Китай", price: "¥300", image: tour1 },
  { id: 2, title: "Харбин", country: "Китай", price: "¥880|чел", image: tour2 },
  { id: 3, title: "Санья", country: "Китай", price: "¥330|чел", image: tour3 },
  { id: 4, title: "Шанхай", country: "Китай", price: "¥500", image: tour4 },
  { id: 5, title: "Вэйхай", country: "Китай", price: "¥320", image: tour5 },
  { id: 6, title: "Бэйцзин", country: "Китай", price: "¥50|чел", image: tour6 },
];

function LocationCards() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Открытие модалки
  const openModal = (location) => {
    setSelectedLocation(location);
    document.body.style.overflow = "hidden"; // Блокируем скролл
  };

  // Закрытие модалки
  const closeModal = () => {
    setSelectedLocation(null);
    document.body.style.overflow = "auto"; // Восстанавливаем скролл
  };

  return (
    <section className="location-section">
      <h2 className="location-title">Туры по Китаю</h2>
      <p className="location-subtitle">Стоимость туров может меняться в зависимости от курса!</p>

      <div className="cards-container">
        {locations.map((loc) => (
          <div className="card" key={loc.id} onClick={() => openModal(loc)}>
            <div className="card-image">
              <img src={loc.image} alt={loc.title} />
              <div className="card-overlay">
                <h3>{loc.title}</h3>
                <p className="price">{loc.price}</p>
                <p className="country">{loc.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      {selectedLocation && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
            <button className="close-btn" onClick={closeModal}>✖</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default LocationCards;
