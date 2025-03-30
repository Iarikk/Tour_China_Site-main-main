import React from 'react';
import './MobileAboutUs.css';

import bgImage from '../images2/aboutUs.jpg';
import fgImage from '../images2/aboutUs2.jpg';

function MobileAboutUs() {
  return (
    <section className="mobile-about-us">
      <div className="mobile-about-us__image-container">
        <img src={bgImage} alt="Фон" className="mobile-about-us__image behind" />
        <img src={fgImage} alt="Передний план" className="mobile-about-us__image front" />
      </div>

      <div className="mobile-about-us__content">
        <h1 className="mobile-about-us__title">Откройте Китай с нами</h1>
        <p className="mobile-about-us__description">
          ООО «МИР ПУТЕШЕСТВИЙ» предлагает туры в Китай для жителей Дальнего Востока.
        </p>
      </div>
    </section>
  );
}

export default MobileAboutUs;
