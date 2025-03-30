import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll'; // Для плавного скроллинга
import { Link as RouterLink } from 'react-router-dom'; // Для перехода на главную страницу
import { useMediaQuery } from 'react-responsive';
import logo from '../components/ChinaLogo.png';
import './MobileHeaderGallery.css';

const MobileHeaderGallery = () => {
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // Проверка мобильного устройства

  if (!isMobile) return null; // Если не мобильное устройство, компонент не рендерится

  return (
    <header className={`mobile-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        {/* Логотип с переходом на главную страницу */}
        <RouterLink to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </RouterLink>
        
        <button className="menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Навигационное меню */}
      <div className={`overlay ${menuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <nav className="nav-links">
          {/* Все ссылки ведут на главную страницу */}
          <RouterLink to="/" className="nav-link" onClick={toggleMenu}>
            Туры
          </RouterLink>
          <RouterLink to="/" className="nav-link" onClick={toggleMenu}>
            Экскурсии
          </RouterLink>
          {/* Используем Link для скроллинга к футеру */}
          <Link 
            to="footer"  // Плавный скролл до футера
            smooth={true} 
            duration={500} 
            offset={-100}  // Добавляем отступ перед футером
            className="nav-link"
            onClick={toggleMenu}
          >
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeaderGallery;
