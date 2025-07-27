import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings } from 'lucide-react';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const videoData = {
    title: "Vedhanthi Technologies - Reality of Planning & Analysis",
    description: "We begin by understanding your vision and objectives, conducting thorough research, and creating a detailed plan.",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop",
    duration: "3:45"
  };

  const videoFeatures = [
    {
      icon: "🎯",
      title: "Planning & Analysis",
      description: "Crafting the Blueprint"
    },
    {
      icon: "💻",
      title: "Development",
      description: "Bringing Ideas to Life",
    },
    {
      icon: "🎨",
      title: "Maintenance & Support",
      description: "Ensuring Continuous Excellence"
    },
    {
      icon: "📈",
      title: "Project Closure",
      description: "Project Closure & Evaluation"
    }
  ];

  const videoStats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <section id="video" className="py-10 bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h4 className="text-blue-400 font-semibold text-lg mb-4">Our Process</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Streamlined Process
          </h2>
          <p className="text-[16px] text-gray-700 max-w-3xl mx-auto">
            Get an inside look at our process, team, and the innovative solutions we create for our clients.
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
            <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl">
              {/* Video Thumbnail */}
              <div className="relative aspect-video">
                <img
                  src={videoData.thumbnail}
                  alt={videoData.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </motion.button>
                </div>

                {/* Video Controls */}
                {showControls && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </button>
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>
                        <span className="text-white text-sm">{videoData.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-white hover:text-blue-400 transition-colors">
                          <Settings className="w-5 h-5" />
                        </button>
                        <button className="text-white hover:text-blue-400 transition-colors">
                          <Maximize className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
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
              <h3 className="text-xl font-bold mb-4">Why Choose Vedhanthi Technologies?</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                We combine cutting-edge technology with creative innovation to deliver solutions that drive real business results. Our team of experts works closely with clients to understand their unique challenges and create tailored solutions.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {videoFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-700">
              {videoStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Video; 