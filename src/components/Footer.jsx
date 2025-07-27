import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vedhanthi-technologies-private-limited-92a361252/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/vedhanthitechnologiespvt/", label: "Instagram" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="">
                
                <img
    src={"/images/logo.jpeg"}
    alt="Team Image"
    className=" w-[120px] h-[80px] object-cover mb-6"
  />
                <p className="text-[14px] text-gray-300 leading-relaxed">
                  When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.
                </p>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Web App Development</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Mobile App Development</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Testing Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Devops</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Design Service</a></li>
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Technologies</h3>
              <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Open Source</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Microsoft Skills</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Native Mobile App</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Hybrid Mobile App</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">QA Automation</a></li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Address</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      47A Anandha Bhavanam Sasthri Street, LIC colony, Selvapuram, Coimbatore - 26
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/XNU3jztpfGtHp8qs6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                    >
                      View On Map
                    </a>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Inquiries</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-blue-400" />
                      <a 
                        href="tel:+916369311519" 
                        className="text-[14px] text-gray-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        +(91) - 63693 11519
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-blue-400" />
                      <a 
                        href="mailto:info@vedhanthitechnologies.com" 
                        className="text-[14px] text-gray-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        info@vedhanthitechnologies.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-center md:text-left text-[14px]"
            >
              © {currentYear} <a href="#home" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-[14px]">Vedhanthi Technologies.</a> All Rights Reserved
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer; 