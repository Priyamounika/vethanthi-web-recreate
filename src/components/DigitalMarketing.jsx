import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Search, Users, Mail, BarChart3, Globe, Megaphone, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Social Media Marketing',
    description: 'Social networks are now a substantial part of every marketing strategy, and the benefits of using social media are so great that anyone not implementing this cost-effective resource is missing out on a phenomenal marketing opportunity.',
  },
  {
    icon: BarChart3,
    title: 'Search Engine Optimization',
    description: 'People want to socialize with brands on their terms and are looking for unique and streamlined online experiences to do it. In order to stay competitive, businesses will need to adjust their digital presence to be more visible, valuable, and available to their customers.'
  },
  {
    icon: Users,
    title: 'Pay-Per-Click',
    description: 'PPC or pay-per-click is a type of internet marketing which involves advertisers paying a fee each time one of their ads is clicked. Simply, you only pay for advertising if your ad is actually clicked on. It’s essentially a method of ‘buying’ visits to your site, in addition to driving website visits organically.'
  },
  {
    icon: Mail,
    title: 'LinkedIn Automation Tools',
    description: 'LinkedIn Automation tools helps you automate your LinkedIn activity and help you generate new leads for your brand. It allows you to import your contacts into a system, schedule messages, and track your responses.'
  },
  {
    icon: Megaphone,
    title: 'Business 2 Business',
    description: 'Successful enterprises are founded upon strong business models. A general assumption prevails in the niche of businesses that a customer is the consumer, and that a business entity is the provider.'
  },
  {
    icon: Globe,
    title: 'Business 2 Consumer',
    description: 'Vedhanthi Technologies is one of the best B2C e-commerce solution to take your business to another level with rich personalization, powerful automation capabilities and smart data segmentation.'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your business, audience, and goals to craft a tailored digital marketing strategy.'
  },
  {
    step: '02',
    title: 'Implementation',
    description: 'Our experts execute campaigns across SEO, SEM, SMM, and more, using best-in-class tools.'
  },
  {
    step: '03',
    title: 'Optimization',
    description: 'We monitor, test, and refine campaigns for maximum effectiveness and ROI.'
  },
  {
    step: '04',
    title: 'Reporting',
    description: 'Transparent, actionable reports keep you informed and drive continuous improvement.'
  }
];

const benefits = [
  'Increase brand visibility and reach',
  'Generate high-quality leads',
  'Boost website traffic and conversions',
  'Enhance customer engagement and loyalty',
  'Data-driven decision making',
  'Measurable results and ROI'
];

const DigitalMarketing = () => {
  return (
    <section className="container mx-auto bg-white min-h-screen pt-26 pb-12">
      {/* Hero Section */}
      <div className=" px-4 mb-10 rounded-b-xl shadow-lg pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-blue-600">Digital Marketing</h1>
          <p className="text-[16px] text-gray-600 mb-8">
            Accelerate your business growth with our comprehensive digital marketing solutions. From SEO to social media, we help you reach, engage, and convert your ideal customers online.
          </p>
          <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
        >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
{/* Images section */}
  <div className=' grid lg:grid-cols-2 gap-16 items-center mb-20 container'>
   
    {/* Right */}
     <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
  <img
    src={"/images/work-img.jpg"}
    alt="Team Image"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>
              </div>
            </div>
          </motion.div>
           {/* Right */}
    <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              
                  
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Strategic Digital Marketing Excellence</h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed mt-5">The proposal of this digital marketing proposal is to give you some information about VEDHANTHI Technologies Private Limited and the digital marketing services we offer, along with information and pricing for custom digital marketing services based on your needs. Vedhanthi Technologies will help you hit your institution’s marketing goal.</p>
                    <p className="text-gray-600 text-[15px] leading-relaxed mt-5">In today's digital business world, you need a partner who can help you take advantage of marketing opportunities across a variety of channels in real-time. Vedhanthi Technologies combines a data-driven approach with knowledge gained from years in digital marketing to deliver outstanding results to our clients.
                    </p>
                  </div>
            </div>
          </motion.div>
  </div>
      {/* Services Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Digital Marketing Services</h2>
          <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
            We offer a full suite of digital marketing services to help your business thrive in the digital age.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-[15px] text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      {/* <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven, transparent process to deliver measurable results for your business.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-md"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{step.step}</div>
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* Benefits Section */}
      {/* <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with Vedhanthi Technologies for digital marketing that delivers real business growth.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">{String.fromCharCode(0x2714)}</div>
              <p className="text-gray-700 font-medium">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h3>
          <p className="text-[16px] text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free digital marketing consultation and see how we can help you achieve your goals.
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

export default DigitalMarketing; 