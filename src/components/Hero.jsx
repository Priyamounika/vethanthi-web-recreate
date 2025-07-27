import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const titles = [
    "Innovate, Transform, and Succeed with Us",
    "Dynamic Digital Solutions for Your Business",
    "Innovative Tech Ideas for the Future",
    "Creative Design Concepts to Inspire",
    "Transforming Ideas into Reality",
    "Optimize Your IT Infrastructure"
  ];

  const descriptions = [
    "Vedhanthi Technologies transforms your ICT needs into strategic advantages, driving growth and efficiency.",
    "Empowering your business with cutting-edge digital solutions.",
    "Revolutionizing the tech landscape with innovative ideas.",
    "Creating inspiring design concepts to elevate your brand.",
    "Integrating seamless solutions for operational excellence.",
    "Providing expert IT services to drive your success."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-pink-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-white mb-6 leading-tight mt-24 md:mt-20">
                {titles[currentIndex].split(' ').map((word, index) => (
                  <span key={index} className="inline-block mr-2">
                    {word}
                  </span>
                ))}
              </h1>
              <p className="text-xl md:text-[16px] text-blue-200 mb-8 leading-relaxed">
                {descriptions[currentIndex]}
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pb-4">
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-2xl transition-all duration-300"
              >
                Explore Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Play className="w-5 h-5" />
                Watch Video
              </motion.button> */}
            </div>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">30+</div>
                <div className="text-blue-200 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Content - 3D Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] mt-5 md:mt-10 lg:mt-20">
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl"
              >
                <div className="p-4 text-white">
                  <div className="text-2xl font-bold">Web</div>
                  <div className="text-sm opacity-80">Development</div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-32 right-10 w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-2xl"
              >
                <div className="p-4 text-white">
                  <div className="text-xl font-bold">Mobile</div>
                  <div className="text-sm opacity-80">Apps</div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl shadow-2xl"
              >
                <div className="p-4 text-white">
                  <div className="text-2xl font-bold">Digital</div>
                  <div className="text-sm opacity-80">Marketing</div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 25, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3,
                }}
                className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-2xl"
              >
                <div className="p-4 text-white">
                  <div className="text-lg font-bold">UI/UX</div>
                  <div className="text-sm opacity-80">Design</div>
                </div>
              </motion.div>

              {/* Central Element */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-white/20 to-white/5 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center"
              >
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">VT</div>
                  <div className="text-sm opacity-80">Technologies</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero; 