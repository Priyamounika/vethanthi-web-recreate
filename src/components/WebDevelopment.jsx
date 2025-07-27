import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Pause,
  Play,
  VolumeX,
  Volume2,
  Settings,
  Maximize
} from 'lucide-react';



const appTypes = [
  { name: 'Node JS', description: 'Build fast and scalable web applications to meet traffic demand.' },
  { name: 'AngularJS', description: 'Enhance web applications with model-driven capabilities.' },
  { name: 'PHP', description: 'Widely adopted web development language for dynamic websites.' },
  { name: 'Laravel', description: 'Open-source PHP framework for MVC architecture.' },
  { name: 'CodeIgniter', description: 'Popular, powerful PHP application development framework.' },
  { name: 'Yii', description: 'Large open-source MVC web application development platform.' },
];

const videoData = {
  title: 'Vedhanthi Technologies - Reality of Planning & Analysis',
  description:
    'We begin by understanding your vision and objectives, conducting thorough research, and creating a detailed plan.',
  // thumbnail: '',
  duration: '3:45'
};

const videoFeatures = [
  { title: 'Cutting-Edge Technology', description: 'We have the latest technology to make your work easier and more manageable. We believe that providing the best resource for Web Application development with cutting-edge technology is beneficial to the web and business.' },
  { title: 'On-Time Delivery', description: 'Choose Web Application developers from Vedhanthi to deliver on time. We are punctual and support our words. With on-time delivery, we deliver projects with the highest quality services and solutions.' },
  { title: 'Effective Solutions', description: 'Our Web Application developers have expertise in Web Application development to provide the best solution for your framework. Real-time solutions are dynamic and effective for web applications and their use.' },
  { title: '24/7 Support And Maintenance', description: 'Web Application developers have provided support and maintenance to manage your projects accurately.' }
];


const WebDevelopment = () => {

  return (
  <section className="bg-white min-h-screen pt-24 pb-12 container">
    {/* Hero Section */}
    <div className="container mx-auto px-4 mb-10 rounded-b-xl shadow-lg pb-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text mt-5">Web App Development</h1>
        <p className="text-[16px] text-gray-600 mb-8">
        Web application development is the introduction of software applications that are living on far off servers and are introduced to the user`s tool over the Internet.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-[16px] hover:shadow-2xl transition-all duration-300"
        >
          Get in Touch
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </div>

{/* SECTION 2 */}
<div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h4 className="text-blue-400 font-semibold text-[16px] uppercase mb-4">Our Process</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Web Application Development
          </h2>
          <p className="text-[16px] text-gray-700 max-w-3xl mx-auto">
          Reduce IT complexity, facilitate seamless workflows, and synchronize business processes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-5">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-black rounded-3xl overflow-hidden shadow-xl">
              {/* Video Thumbnail */}
              <div className="relative aspect-video">
                <img
                  src={"/images/discuss-img.jpg"}
                  alt={videoData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-2">{videoData.title}</h3>
              <p className="text-[15px] text-gray-500">{videoData.description}</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">Why Choose Vedhanthi?</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              • Detailed analysis and understanding of customer requirements <br/>
              • Unique business enhancements with cross-platform compatibility <br/>
              • Web applications that can keep pace with IT by preventing downtime and increasing productivity
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {/* <div className="text-4xl mb-3">{feature.icon}</div> */}
                  <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className='font-medium text-lg font-serif text-center'>" Empowering your business with cutting-edge Web app development services. ”</h3>
            </div>
          </motion.div>
        </div>


      </div>
    {/* App Types Section */}
    <div className="container mx-auto px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=" mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 mt-10 font-serif">Web Application <br/>Development</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {appTypes.map((type, idx) => (
          <motion.div
            key={type.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-200 to-blue-400 rounded-2xl p-8 text-center shadow-lg border border-gray-200"
          >
            <div className="text-xl font-semibold text-gray-700  mb-2">{type.name}</div>
            <p className="text-gray-600 text-sm">{type.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    

    {/* CTA Section */}
    <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h3>
          <p className="text-[16px] text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free Web development consultation and see how we can help you achieve your goals.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-[16px] hover:shadow-lg transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
  </section>
);
};

export default WebDevelopment;