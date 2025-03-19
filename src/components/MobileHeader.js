import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../components/ChinaLogo.png';
import './MobileHeader.css';

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Функция для переключения меню
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`mobile-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <button className="menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Навигационное меню */}
      <div className={`overlay ${menuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav-links">
          <a href="/tours" onClick={toggleMenu}>Туры</a>
          <a href="/services" onClick={toggleMenu}>Услуги</a>
          <a href="/gallery" onClick={toggleMenu}>Галерея</a>
          <a href="/contacts" onClick={toggleMenu}>Контакты</a>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;
