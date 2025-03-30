import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';
import './Footer.css'; // Общие стили футера (для всех версий)

const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <footer id="footer" className="footer-container">
      {/* Выбираем, какой футер показывать в зависимости от ширины экрана */}
      {isMobile ? (
        <MobileFooter />
      ) : (
        <DesktopFooter />
      )}
    </footer>
  );
};

export default Footer;
