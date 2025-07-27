import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const benefits = [
  {
    title: 'Flexible Working Hours',
    description: 'Reduce stress and boost productivity with flexible schedules.',
    img: '/images/discuss-img.jpg',
  },
  {
    title: 'Company Activities',
    description: 'We celebrate, play, and work together as one team.',
    img: '/images/discuss1.jpeg',
  },
  {
    title: 'Awesome Co-Workers',
    description: 'Close relationships and a supportive team environment.',
    img: '/images/discuss2.jpeg',
  },
  {
    title: 'Transparency',
    description: 'Complete transparency across every hierarchy.',
    img: '/images/search1.jpeg',
  },
  {
    title: 'Competitive Salaries',
    description: 'We value real talent and reward performance.',
    img: '/images/work-img.jpg',
  },
  {
    title: 'Growth Opportunities',
    description: 'The company aims to "grow together"—development never stops.',
    img: '/images/team-img.png',
  },
];

const process = [
  { step: '01', title: 'Screening', description: 'Initial process to evaluate applicants qualifications.' },
  { step: '02', title: 'Interview', description: 'In-depth conversation to assess skills and fit.' },
  { step: '03', title: 'Assessment', description: 'Evaluation of candidates abilities or knowledge.' },
  { step: '04', title: 'Offer', description: 'Formal job proposal to selected candidate.' },
  { step: '05', title: 'Orientation', description: 'Orientation process for new hires.' },
];

const positions = [
  { title: 'Software Engineer - PHP', open: 2 },
  { title: 'Software Engineer - Android', open: 4 },
  { title: 'Software Engineer - Java', open: 1 },
  { title: 'Software Engineer - Dot Net', open: 3 },
  { title: 'React.Js Developer', open: 6 },
  { title: 'Software Engineer - Tester', open: 2 },
  { title: 'IOS Developer', open: 3 },
  { title: 'Business Development', open: 1 },
  { title: 'Business Analyst', open: 2 },
];


const Career = () => (
  <section className="bg-white min-h-screen pt-24 pb-12 overflow-x-hidden container mx-auto">
    {/* 1. Hero */}
    <div className="rounded-xl relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-400 overflow-hidden mb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Career Growth</h1>
        <p className="text-[16px] text-gray-900 mb-8">Unlock your potential with exciting opportunities in a fast-paced industry.</p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-[16px] inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-3 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
        >
          Get in Touch
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
      {/* Parallax */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        style={{ background: 'url(/images/team-img.png) center/cover no-repeat', mixBlendMode: 'multiply' }}
      />
    </div>

    {/* 2. Life */}
    <div className="container mx-auto px-4 mb-16 md:mb-20">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className=" text-[22px] mb-4 text-gray-900">Life <span className='uppercase text-[15px] text-blue-400'> @ Vedhanthi Technologies </span></h4>
          <h2 className="text-4xl text-gray-900 mb-6 font-serif">Better Together, Grow Together</h2>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-4">It is a dream to do paintings with Vedhanthi Technologies. The culture, the paintings of ecosystem will be very excellent and appropriate for each employee. We deal with our personnel like property of the company.</p>
        </motion.div>
        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <motion.img src="/images/search1.jpeg" alt="Work" className="rounded-2xl shadow-lg" whileHover={{ scale: 1.05 }} />
          <motion.img src="/images/discuss-img.jpg" alt="Team" className="rounded-2xl shadow-lg" whileHover={{ scale: 1.05 }} />
          <motion.img src="/images/discuss2.jpeg" alt="Fun" className="rounded-2xl shadow-lg" whileHover={{ scale: 1.05 }} />
          <motion.img src="/images/discuss1.jpeg" alt="Growth" className="rounded-2xl shadow-lg" whileHover={{ scale: 1.05 }} />
        </motion.div>
      </div>
    </div>

     {/* 4. Hiring*/}
     <div className="container mx-auto px-4 mb-16 md:mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {process.map((step, idx) => (
          <motion.div
            key={step.title}
            className="relative flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold mb-2 shadow-lg">{step.step}</div>
            <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
            <p className="text-gray-600 text-sm mb-2 max-w-xs">{step.description}</p>
            {idx < process.length - 1 && (
              <div className="hidden md:block absolute right-[-60px] top-8 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-50" />
            )}
          </motion.div>
        ))}
      </div>
    </div>


    {/* 3. card*/}
    <div className="container mx-auto px-4 mb-24">
      <h2 className="text-xl text-blue-500 uppercase font-semibold text-center mb-12">Benefits Of Working With Vedhanthi Technologies</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={benefit.title}
            className="border border-gray-200 relative rounded-2xl px-10 py-16 shadow-lg group overflow-hidden cursor-pointer bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">{benefit.title}</h3>
              <p className="text-[15px] text-gray-600 group-hover:text-white transition-colors duration-300">{benefit.description}</p>
            </div>
            {/* Hover BG Image */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500" style={{ backgroundImage: `url(${benefit.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-300 to-purple-400 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </div>

   
    {/* 5. Position*/}
    <div className="container mx-auto px-4 mb-24">
      <h2 className="text-3xl font-bold text-center mb-12">We&apos;re Currently Hiring</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
        {positions.map((pos, idx) => (
          <motion.div
            key={pos.title}
            className="relative rounded-2xl px-10 py-5 shadow-lg overflow-hidden cursor-pointer border-[2px] border-blue-100  hover:border-purple-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative z-10 ">
              <h3 className="text-xl font-bold mb-2 group-hover:text-black transition-colors duration-300">{pos.title}</h3>
              <p className="text-[15px] text-gray-600 group-hover:text-black transition-colors duration-300">{pos.open} Open Roles</p>
            </div>
            {/* BG Image */}
            <div className="absolute inset-0 z-0 opacity-0  group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute inset-0 z-0 bg-gradient-to-br  opacity-0  transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </div>


    {/* Banner (Parallax) */}
    <div className="rounded-xl relative w-full h-[40vh] flex items-center justify-center bg-gradient-to-br from-gray-500 to-gray-400 overflow-hidden mb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Growth Opportunities Await</h2>
        <p className="text-[15px] text-white">The development never stops at Vedhanthi Technologies. The company aims to "grow together".</p>
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        style={{ background: 'url(/images/team-img.png) center/cover no-repeat', mixBlendMode: 'multiply' }}
      />
    </div>

    {/* Contact*/}
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-4">Ready to Join Us?</h3>
        <p className="text-[16px] text-blue-100 mb-8 max-w-2xl mx-auto">
          Send your resume or enquiry to <a href="mailto:info@vedhanthitechnologies.com" className="underline text-white">info@vedhanthitechnologies.com</a> or contact us for more information.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-[15px] inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
        >
          Contact Us
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Career; 