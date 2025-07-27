import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      rating: 5,
      content: "Vedhanthi Technologies transformed our business with their innovative web development solutions. Their team delivered exactly what we needed, on time and within budget. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "CTO, Digital Innovations",
      company: "Digital Innovations",
      rating: 5,
      content: "Working with Vedhanthi Technologies was a game-changer for our company. Their expertise in mobile app development and digital marketing helped us reach new heights in our industry.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCorp",
      company: "GrowthCorp",
      rating: 5,
      content: "The team at Vedhanthi Technologies exceeded our expectations. Their creative design solutions and technical expertise helped us create a stunning website that perfectly represents our brand.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      position: "Founder, StartupXYZ",
      company: "StartupXYZ",
      rating: 5,
      content: "Vedhanthi Technologies helped us build a robust e-commerce platform from scratch. Their attention to detail and customer service is outstanding. They truly care about their clients' success.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Wang",
      position: "Product Manager, InnovateTech",
      company: "InnovateTech",
      rating: 5,
      content: "The quality of work delivered by Vedhanthi Technologies is exceptional. Their testing services ensured our application was flawless before launch. Professional, reliable, and results-driven.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Robert Kim",
      position: "Operations Director, Global Solutions",
      company: "Global Solutions",
      rating: 5,
      content: "Vedhanthi Technologies provided comprehensive DevOps services that streamlined our development process. Their expertise in automation and deployment has significantly improved our efficiency.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  const testimonialsss = [
    { name: 'Priya', quote: 'Vedhanthi Technologies gave the platform to grow & innovate every day.', img: '/images/discuss-img.jpg' },
    { name: 'Mounika', quote: 'The team culture is amazing and the projects are always exciting.', img: '/images/discuss2.jpeg' },
    { name: 'Vanitha ', quote: 'I love the flexibility and the opportunities to learn new skills.', img: '/images/discuss1.jpeg' },
  ];

  return (
    <section id="testimonials" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h4 className="text-blue-600 font-semibold text-[15px] uppercase mb-4">Client Reviews</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-[15px] text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience working with Vedhanthi Technologies.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium text-[14px]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
       

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Happy Clients?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our innovative digital solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
            </motion.a>
          </div>
        </motion.div> */}
      </div>


      <div className="container mx-auto px-4 mb-10">
      <div className=" flex flex-col md:flex-row items-center justify-center gap-8">
        {testimonialsss.map((t, idx) => (
          <motion.div
            key={t.name}
            className="border border-gray-200 relative rounded-2xl px-5 py-10 shadow-lg bg-white flex flex-col items-center text-center max-w-xs"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={t.img} alt={t.name} className="w-22 h-22 rounded-full mb-4 object-cover border-5 border-blue-300" />
            <p className="text-[14px] text-gray-700 italic mb-2">"{t.quote}"</p>
            <div className="font-bold text-blue-700">{t.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
    </section>

    
  );
};

export default Testimonials; 