import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import logo from '../components/ChinaLogo.png';
import { Link } from 'react-scroll'; // Импортируем Link из react-scroll
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faDollarSign, faEuroSign, faYenSign, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DesktopHeader = () => {
  const navigate = useNavigate();
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [weather, setWeather] = useState(null);
  const [currencyRates, setCurrencyRates] = useState({ usd: null, eur: null, cny: null });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vladivostok?unitGroup=metric&key=F5YYH7ZXKABDPPB4GJE9RRN4M&contentType=json`
        );
        if (!response.ok) throw new Error("Weather fetch error");
        const data = await response.json();
        setWeather({
          main: { temp: data.currentConditions.temp },
          name: data.address,
        });
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/cb4fd87d1892bc7322eb5dff/latest/RUB`
        );
        if (!response.ok) throw new Error("Currency fetch error");
        const data = await response.json();
        setCurrencyRates({
          usd: 1 / data.conversion_rates.USD,
          eur: 1 / data.conversion_rates.EUR,
          cny: 1 / data.conversion_rates.CNY,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
    fetchCurrencyRates();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setDropdownVisible(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownVisible(prev => prev === menu ? null : menu);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    setSearchVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className={`header-container ${isScrolled ? 'shrink' : ''}`}>
      <div className="header-content">
        <img 
          src={logo} 
          alt="Logo" 
          className="logo" 
          onClick={handleLogoClick} 
        />
        <nav className="nav-menu" ref={menuRef}>
          <ul>
            <li>
              <Link 
                to="slider" 
                smooth={true} 
                duration={500} 
                offset={-100} // Добавляем отступ перед заголовком
                className="nav-link"
              >
                Туры
              </Link>
            </li>
            <li>
              <Link 
                to="excursions" 
                smooth={true} 
                duration={500} 
                offset={-100} // Добавляем отступ перед заголовком
                className="nav-link"
              >
                Экскурсии
              </Link>
            </li>
            <li>
              <a href="/gallery">Галерея</a>
            </li>
            <li>
              <Link 
                to="footer" 
                smooth={true} 
                duration={500} 
                offset={-100} // Добавляем отступ перед заголовком
                className="nav-link"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default DesktopHeader;
