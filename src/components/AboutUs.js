import React from 'react';
import './AboutUs.css';

// Импорт изображений (замените пути на актуальные)
import bgImage from '../images2/aboutUs.jpg';
import fgImage from '../images2/aboutUs2.jpg';

function AboutUs() {
  return (
    <section className="about-us-hero">
      {/* Левая часть – контейнер для наложенных изображений */}
      <div className="about-us-hero__images">
        <div className="about-us-hero__image-container">
          <img
            src={bgImage}
            alt="Фонового пейзажа"
            className="about-us-hero__image behind"
          />
          <img
            src={fgImage}
            alt="Фронтального пейзажа"
            className="about-us-hero__image front"
          />
        </div>
      </div>

      {/* Правая часть с текстом */}
      <div className="about-us-hero__content">
        <h1 className="about-us-hero__title">Откройте Китай с нами</h1>
        <p className="about-us-hero__description">
          ООО «МИР ПУТЕШЕСТВИЙ» готов предоставить для жителей Дальнего востока туры в Китай на любой вкус и кошелек. Мы качественно подходим к своей работе. Найдем подход к каждому! Наша команда организовала множество туров, которые оставили след в памяти наших клиентов.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
