import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Fluid Pumps & Systems",
      category: "Web Development",
      image: "/images/discuss-img.jpg",
      link: "https://fluidpumps.co.in/",
      description: "Complete website development for industrial pump systems"
    },
    {
      title: "Ethical Security Services",
      category: "Security Solutions",
      image: "/images/work-img.jpg",
      link: "https://www.ethicalsecurityservices.in/",
      description: "Security services website with advanced features"
    },
    {
      title: "E-Commerce Platform",
      category: "E-Commerce",
      image: "/images/discuss2.jpeg",
      link: "#",
      description: "Modern e-commerce solution with payment integration"
    },
    {
      title: "Healthcare Management",
      category: "Healthcare",
      image: "/images/discuss1.jpeg",
      link: "#",
      description: "Comprehensive healthcare management system"
    },
    {
      title: "Educational Platform",
      category: "Education",
      image: "/images/work-img.jpg",
      link: "#",
      description: "Interactive learning management system"
    },
    {
      title: "Financial Services",
      category: "Finance",
      image: "/images/discuss-img.jpg",
      link: "#",
      description: "Secure financial services platform"
    }
  ];

  const skills = [
    { name: "Branding", percentage: 92 },
    { name: "Development", percentage: 95 },
    { name: "Design", percentage: 80 },
    { name: "Digital Marketing", percentage: 97 }
  ];

  return (
    <section id="portfolio" className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-blue-600 font-semibold text-[16px] mb-4 uppercase">work gallery</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           Website Highlights
          </h2>
          <p className="text-[16px] text-gray-600 max-w-3xl mx-auto">
            Discover our diverse portfolio showcasing innovative works and successful collaborations, reflecting our commitment to excellence and client satisfaction across various industries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Skills & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Showcasing Our Best Works</h3>
            
            <div className="space-y-6 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-blue-600 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Our Creations</h4>
                <p className="text-blue-100">Explore our portfolio of successful projects</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Portfolio Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-1 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-white">
                      <div className="text-sm text-blue-600 mb-1">{item.category}</div>
                      <h4 className="text-[15px] font-medium md:mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-200 md:mb-2">{item.description}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-white transition-colors duration-200"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Portfolio Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">What's Next?</h3>
              <p className="text-gray-600 text-lg">
                Our Outstanding Services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Development",
                  description: "Custom web applications built with modern technologies and best practices.",
                  image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop"
                },
                {
                  title: "Mobile Development",
                  description: "Native and cross-platform mobile applications for iOS and Android.",
                  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
                },
                {
                  title: "Digital Marketing",
                  description: "Comprehensive digital marketing strategies to grow your business online.",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-400 mb-2">{service.title.split(' ')[0]}</div>
                        <div className="text-sm text-gray-500">{service.title.split(' ')[1]}</div>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Portfolio; 