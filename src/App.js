import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import Reviews from './components/Reviews';
import Excursion from './components/Excursion';
import Tour from './components/Tour';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import GalleryPage from './components/GalleryPage';
import MainSection from './components/MainSection';
import AboutUs from './components/AboutUs'; // Добавляем новый компонент
import AOS from 'aos';
import ToursGrid from "./components/ToursGrid";
import 'aos/dist/aos.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainSection />
                <AboutUs />
                <Slider />
                <Excursion />

              </>
            }
          />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
