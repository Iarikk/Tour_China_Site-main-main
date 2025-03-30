import React from 'react';
import './DesktopAboutUs.css';

import bgImage from '../images2/aboutUs.jpg';
import fgImage from '../images2/aboutUs2.jpg';

function DesktopAboutUs() {
  return (
    <section className="about-us-hero">
      <div className="about-us-hero__images">
        <div className="about-us-hero__image-container">
          <img src={bgImage} alt="Фон" className="about-us-hero__image behind" />
          <img src={fgImage} alt="Передний план" className="about-us-hero__image front" />
        </div>
      </div>

      <div className="about-us-hero__content">
        <h1 className="about-us-hero__title">Откройте Китай с нами</h1>
        <p className="about-us-hero__description">
          ООО «МИР ПУТЕШЕСТВИЙ» готов предоставить для жителей Дальнего востока туры в Китай на любой вкус и кошелек.
        </p>
      </div>
    </section>
  );
}

export default DesktopAboutUs;
