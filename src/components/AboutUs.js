import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopAboutUs from './DesktopAboutUs';
import MobileAboutUs from './MobileAboutUs';

function AboutUs() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <MobileAboutUs /> : <DesktopAboutUs />;
}

export default AboutUs;
