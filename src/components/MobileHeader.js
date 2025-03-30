import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../components/ChinaLogo.png';
import { Link } from 'react-scroll'; // Импортируем Link для скроллинга
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
        {/* Логотип с переходом к MainSection */}
        <Link 
          to="main-section" 
          smooth={true} 
          duration={500} 
          offset={-100} // Добавляем отступ перед заголовком
          className="logo-link"
        >
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        
        <button className="menu-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Навигационное меню */}
      <div className={`overlay ${menuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
        <nav className="nav-links">
          <Link 
            to="slider" 
            smooth={true} 
            duration={500} 
            offset={-100} // Добавляем отступ перед заголовком
            className="nav-link"
            onClick={toggleMenu}
          >
            Туры
          </Link>
          <Link 
            to="excursions" 
            smooth={true} 
            duration={500} 
            offset={-100} // Добавляем отступ перед заголовком
            className="nav-link"
            onClick={toggleMenu}
          >
            Экскурсии
          </Link>
          <a href="/gallery" onClick={toggleMenu}>Галерея</a>
          <Link 
            to="footer" 
            smooth={true} 
            duration={500} 
            offset={-100} // Добавляем отступ перед заголовком
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

export default MobileHeader;
