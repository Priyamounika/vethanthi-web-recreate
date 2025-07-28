import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const servicesDropdown = [
  { name: 'Web Application Development', href: '/web-development', isPage: true },
  { name: 'Mobile Application Development', href: '/app-development', isPage: true },
  { name: 'QA Automation', href: '#testing-service' },
  { name: 'Devops', href: '#devops' },
  // { name: 'Design Service', href: '#design-service' },
];

const navItems = [
  { name: 'Home', href: '/' },
  // { name: 'About', href: '#about' },
  { name: 'Services', isDropdown: true },
  { name: 'Digital Marketing', href: '/digital-marketing', isPage: true },
  { name: 'Career', href: '/career', isCareer: true },
  { name: 'Contact', href: '/contact', isContact: true },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false); // Close menu 
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop nav
  const renderNavItem = (item, index) => {
    if (item.isContact) {
      return (
        <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-black hover:text-blue-300'}`}>{item.name}</Link>
      );
    }
    if (item.isPage) {
      return (
        <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-black hover:text-blue-300'}`}>{item.name}</Link>
      );
    }
    if (item.isCareer) {
      return (
        <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-black hover:text-blue-300'}`}>{item.name}</Link>
      );
    }
    if (item.isDropdown) {
      return (
        <div
          key={item.name}
          className="relative group"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button
            className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-black hover:text-blue-300'}`}
            aria-haspopup="true"
            aria-expanded={servicesOpen}
            type="button"
          >
            {item.name}
            <ChevronDown className="w-4 h-4" />
          </button>
          {/* Dropdown */}
          <div
            className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            {servicesDropdown.map((service) =>
              service.isPage ? (
                <Link
                  key={service.name}
                  to={service.href}
                  className="block px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 text-left text-sm font-medium transition-colors duration-200"
                >
                  {service.name}
                </Link>
              ) : (
                <a
                  key={service.name}
                  href={service.href}
                  className="block px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 text-left text-sm font-medium transition-colors duration-200"
                >
                  {service.name}
                </a>
              )
            )}
          </div>
        </div>
      );
    }
    return (
      <motion.a
        key={item.name}
        href={item.href}
        whileHover={{ y: -2 }}
        className={`text-sm font-medium transition-colors duration-200 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-black hover:text-blue-300'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        {item.name}
      </motion.a>
    );
  };

  // Mobile nav
  const renderMobileNavItem = (item) => {
    if (item.isContact) {
      return (
        <Link key={item.name} to={item.href} className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{item.name}</Link>
      );
    }
    if (item.isPage) {
      return (
        <Link key={item.name} to={item.href} className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{item.name}</Link>
      );
    }
    if (item.isDropdown) {
      return (
        <div key={item.name} className="">
          <button
            className="flex items-center gap-1 text-gray-800 font-medium w-full py-2"
            onClick={() => setServicesOpen((open) => !open)}
            type="button"
          >
            {item.name}
            <ChevronDown className="w-4 h-4" />
          </button>
          {servicesOpen && (
            <div className="ml-4 border-l border-gray-200 pl-4">
              {servicesDropdown.map((service) =>
                service.isPage ? (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block py-2 text-gray-800 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ) : (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block py-2 text-gray-800 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      );
    }
    return (
      <a key={item.name} href={item.href} className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{item.name}</a>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <Link to="/" className="flex items-center">
            <img
    src={"/images/logo.jpeg"}
    alt="Team Image"
    className="absolute inset-0 w-[80px]  lg:w-[130px] h-auto md:h-full object-cover"
  />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(renderNavItem)}
          </nav>

          {/* CTA Button */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="hidden lg:block">
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map(renderMobileNavItem)}
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium text-center hover:shadow-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 