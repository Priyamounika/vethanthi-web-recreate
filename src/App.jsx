import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Video from './components/Video';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DigitalMarketing from './components/DigitalMarketing';
import WebDevelopment from './components/WebDevelopment';
import AppDevelopment from './components/AppDevelopment';
import Career from './components/Career';
import './App.css';

function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Video />
      <Testimonials />
      <Blog />
    </>
  );
}

function App() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll) if needed
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('aos-animate');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Preloader */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center"
          style={{ pointerEvents: 'none' }}
        >
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="text-white text-xl font-semibold">Vedhanthi Technologies</div>
          </div>
        </motion.div>
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/app-development" element={<AppDevelopment />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </main>
          <Footer />
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
