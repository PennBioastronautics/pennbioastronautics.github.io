import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Rocket, Dna, Globe, Star, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate random particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 z-20">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Large Animated Background Elements */}
      <div className="absolute inset-0 z-20">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-96 h-96 border-2 border-primary-500/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 0.9, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-80 h-80 border-2 border-tertiary-500/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: 180, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-300/5 rounded-full"
        />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [-30, 30, -30],
            x: [-10, 10, -10],
            rotate: [0, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/5 w-8 h-8 bg-primary-500/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            y: [30, -30, 30],
            x: [10, -10, 10],
            rotate: [360, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/5 w-12 h-12 bg-tertiary-500/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-secondary-400/40 rounded-full blur-sm"
        />
      </div>

      <div className="relative z-30 text-center max-w-7xl mx-auto px-4">
        {/* Main Heading with Enhanced Typography */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1 
            className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-6 leading-none"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            style={{
              background: "linear-gradient(45deg, #FF2F32, #46A3FF, #FF5C5E, #05488A)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            PENN
          </motion.h1>
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            BIOASTRONAUTICS
          </motion.h2>
          
          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="h-2 bg-gradient-to-r from-primary-500 via-tertiary-500 to-primary-600 mx-auto max-w-2xl rounded-full"
          />
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-16"
        >
          <p className="text-2xl md:text-3xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed font-light">
            Pioneering the future of <span className="text-primary-400 font-semibold">space biology</span> and 
            <span className="text-tertiary-400 font-semibold"> human exploration</span> beyond Earth
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            University of Pennsylvania's premier organization for bioastronautics research and innovation
          </p>
        </motion.div>

        {/* Enhanced Feature Icons with Glow Effects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex justify-center items-center space-x-16 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.2, y: -10 }}
            className="flex flex-col items-center space-y-3 group"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"
              />
              <div className="relative w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-2xl">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">Space Technology</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.2, y: -10 }}
            className="flex flex-col items-center space-y-3 group"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-tertiary-500 to-tertiary-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"
              />
              <div className="relative w-20 h-20 bg-gradient-to-r from-tertiary-500 to-tertiary-600 rounded-full flex items-center justify-center shadow-2xl">
                <Dna className="w-10 h-10 text-white" />
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">Biology Research</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.2, y: -10 }}
            className="flex flex-col items-center space-y-3 group"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"
              />
              <div className="relative w-20 h-20 bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-full flex items-center justify-center shadow-2xl">
                <Globe className="w-10 h-10 text-white" />
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">Space Exploration</span>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 47, 50, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-lg font-bold rounded-xl shadow-2xl overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-700"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Join Our Mission</span>
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#research').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-white/30 rounded-xl text-white text-lg font-semibold backdrop-blur-sm hover:border-white/50 transition-all duration-300"
          >
            Explore Research
          </motion.button>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-3 text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm font-medium">Discover More</span>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:border-white/60 transition-colors"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 