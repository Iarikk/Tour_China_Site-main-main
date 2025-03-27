import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ToursGrid.css";

import poster1 from "../images2/kharbin2.jpg";
import poster2 from "../images2/dalyan2.jpg";
import poster3 from "../images2/sanya2.jpg";
import poster4 from "../images2/beijing2.jpg";
import poster5 from "../images2/shanghai2.jpg";
import poster6 from "../images2/weihai2.jpg";

const tours = [
  { title: "Новогодние туры", description: "Праздничная атмосфера Харбина и других городов", poster: null },
  { title: "Харбин", poster: poster1 },
  { title: "Далянь", poster: poster2 },
  { title: "Санья", poster: poster3 },
  { title: "Пекин", poster: poster4 },
  { title: "Шанхай", poster: poster5 },
  { title: "Вэйхай", poster: poster6 },
];

const ToursGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="tours-container">
      <h2 className="tours-title" data-aos="fade-up">Категории туров</h2>
      <div className="tours-grid">
        {tours.map((tour, index) => (
          <div key={index} className={`tour-card ${index === 0 ? "big-card" : ""}`} data-aos="zoom-in">
            {tour.poster ? (
              <img src={tour.poster} alt={tour.title} className="tour-image" />
            ) : (
              <div className="tour-placeholder">
                <h3>{tour.title}</h3>
                <p>{tour.description}</p>
                <span className="arrow">→</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursGrid;
