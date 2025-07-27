import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Smartphone, 
  Globe, 
  BarChart3, 
  TestTube, 
  Code,
  ArrowRight,
  Zap
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding Design",
      description: "Effective branding design is the cornerstone of your brand's identity, conveying your unique story and values visually.",
      number: "01"
    },
    {
      icon: Smartphone,
      title: "Interactive Design",
      description: "Interactive design combines creativity and functionality, creating engaging user experiences through dynamic visuals and user-friendly interfaces.",
      number: "02"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web development solutions that are scalable, secure, and optimized for performance across all devices and platforms.",
      number: "03"
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Digital marketing is the strategic use of online channels to promote products or services, driving growth and engagement.",
      number: "04"
    },
    {
      icon: TestTube,
      title: "Testing Service",
      description: "Discover our comprehensive testing services, ensuring the highest quality and reliability for your products and applications.",
      number: "05"
    },
    {
      icon: Code,
      title: "Illustration Modelling",
      description: "Illustration modeling combines artistry and technical skill to create stunning visual narratives that captivate and engage audiences.",
      number: "06"
    }
  ];

  const processSteps = [
    {
      title: "Crafting the Blueprint",
      description: "We begin by understanding your vision and objectives, conducting thorough research, and creating a detailed plan. This foundational step ensures that we align our strategy with your business goals, setting the stage for a successful project.",
      image: "blueprint"
    },
    {
      title: "Bringing Ideas to Life",
      description: "Our skilled developers transform the detailed plans into functional and user-friendly applications. Utilizing the latest technologies and best practices, we focus on delivering high-quality solutions that meet your specific requirements and exceed expectations.",
      image: "development"
    },
    {
      title: "Ensuring Continuous Excellence",
      description: "Post-launch, we provide ongoing maintenance and support to ensure your application remains up-to-date and performs optimally. Our team is dedicated to addressing any issues promptly and implementing necessary updates to keep your application running smoothly.",
      image: "maintenance"
    },
    {
      title: "Project Closure & Evaluation",
      description: "Upon project completion, we conduct a thorough evaluation to assess the outcomes against the initial objectives. This phase involves gathering feedback, identifying areas for improvement, and ensuring all project deliverables are met to your satisfaction.",
      image: "evaluation"
    }
  ];

  return (
    <section id="services" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h4 className="text-blue-600 font-semibold text-[16px] uppercase mb-4">Our Expertise</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Services We Provide
          </h2>
          <p className="text-[16px] text-gray-600 max-w-3xl mx-auto">
            We are offering the following information's about us that circular that what we actually.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors duration-300">
                {service.number}
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-[20px] font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        {/* <div className="bg-gray-50 rounded-3xl p-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">....Our Development Process</h3>
            <p className="text-gray-600 text-lg">
              We follow a systematic approach to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
          <p className="text-gray-600 text-[16px] mb-10">
            Reliable, Customized Solutions for Your Business Needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Confidentiality & Security",
              description: "Ensuring confidentiality and security: our top priority to safeguard your valuable information and data assets.",
              bgColor: "from-purple-800 to-purple-300"
            },
            {
              title: "Scalable & Robust Solutions",
              description: "Crafting scalable, robust solutions to tackle complex challenges with innovative precision.",
              bgColor: "from-blue-700 to-blue-300 "
            },
            {
              title: "Innovation & Creativity",
              description: "Pushing boundaries with innovative approaches and creative solutions that set your business apart.",
              bgColor: "from-blue-700 to-blue-300 "
            },
            {
              title: "Quality & Excellence",
              description: "Commitment to excellence ensures our products meet the highest standards of quality.",
              bgColor: "from-purple-700 to-purple-300"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br border border-gray-300 ${feature.bgColor} rounded-2xl p-6 text-white h-full transform group-hover:scale-105 transition-transform duration-300`}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-[16px] font-bold mb-4">{feature.title}</h4>
                <p className="text-white/80 leading-relaxed text-[14px]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-[16px] hover:shadow-2xl transition-all duration-300"
          >
            Have a Project In Your Mind?
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 