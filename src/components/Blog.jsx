import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends in web development that will shape the digital landscape in 2024 and beyond.",
      author: "Vedhanthi Team",
      date: "May 15",
      readTime: "5 min ago",
      category: "Development",
      featured: true,
      image: "/images/discuss-img.jpg"
    },
    {
      id: 2,
      title: "Mobile App Development: Native vs Hybrid Solutions",
      excerpt: "Understanding the pros and cons of native and hybrid mobile app development approaches.",
      author: "Tech Experts",
      date: "March 10",
      readTime: "7 min ago",
      category: "Development",
      image: "/images/discuss-img.jpg",
    },
    {
      id: 3,
      title: "Digital Marketing Strategies for Small Businesses",
      excerpt: "Effective digital marketing strategies that can help small businesses grow their online presence.",
      author: "Marketing Team",
      date: "March 5",
      readTime: "6 min ago",
      category: "Designing",
      image: "/images/discuss1.jpeg",
    },
    {
      id: 4,
      title: "UI/UX Design Principles for Better User Experience",
      excerpt: "Essential design principles that can significantly improve user experience and engagement.",
      author: "Design Team",
      date: "Feb 28",
      readTime: "8 min ago",
      category: "Branding",
      image: "/images/discuss2.jpeg",
    },
  ];

  const categories = [
    "All", "Development",  "Designing", "Branding",
  ];

  return (
    <section id="blog" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h4 className="text-blue-600 font-semibold text-[15px] mb-4">BLOGS</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Latest Articles
          </h2>
          <p className="text-[15px] text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology and digital solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-[15px] px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                category === "All" 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-5 md:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
                <div>
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 md:gap-6 mb-6 md:mb-8">
                    <div className="flex items-center gap-2 text-gray-500">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{post.readTime}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[15px] inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className=" flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                     <span className='text-[12px] mt-1'>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                     <span className='text-[12px] mt-1'>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                     <span className='text-[12px] mt-1'>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[15px] inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights, tips, and industry updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Blog; 