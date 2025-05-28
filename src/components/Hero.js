import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Rocket, Dna, Globe, Star, Zap, Sparkles } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // 3D perspective transforms for logo
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const logoRotateX = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate more particles for enhanced space effect
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
  }));

  // Shooting stars
  const shootingStars = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    delay: i * 8 + Math.random() * 4,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-32">
      {/* Gentle Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Enhanced Animated Particles */}
      <div className="absolute inset-0 z-20">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white opacity-40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 z-20">
        {shootingStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white"
            style={{
              left: '10%',
              top: '20%',
            }}
            animate={{
              x: [0, window.innerWidth || 1200],
              y: [0, (window.innerHeight || 800) * 0.3],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Gentle Orbital Elements */}
      <div className="absolute inset-0 z-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-80 h-80 border border-primary-500/8 opacity-60"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 border border-tertiary-500/8 opacity-60"
        />
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-300/5 opacity-40"
        />
        
        {/* Gentle Floating Elements */}
        <motion.div
          animate={{ 
            y: [-40, 40, -40],
            x: [-15, 15, -15],
            rotate: [0, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/6 w-6 h-6 bg-primary-400/20 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [40, -40, 40],
            x: [15, -15, 15],
            rotate: [360, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/6 w-8 h-8 bg-tertiary-400/20 blur-sm"
        />
        
        {/* Pulsing Stars */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-30 text-center max-w-7xl mx-auto px-4">
        {/* 3D Logo with Scroll Perspective */}
        <motion.div
          style={{
            y: logoY,
            rotateX: logoRotateX,
            scale: logoScale,
          }}
          className="mb-12 perspective-1000"
        >
          <motion.img
            src="/images/shortlogo.png"
            alt="Penn Bioastronautics Logo"
            className="w-32 h-32 mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            whileHover={{ 
              scale: 1.1, 
              rotateY: 15,
              rotateX: 10,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>

        {/* Main Heading with Gentler Typography */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            style={{
              background: "linear-gradient(45deg, #FF5C5E, #46A3FF, #FF7A7C, #6BB6FF)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            PENN
          </motion.h1>
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            BIOASTRONAUTICS
          </motion.h2>
          
          {/* Gentler Animated Underline */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 2.5, delay: 1.4 }}
            className="h-1 bg-gradient-to-r from-primary-400 via-tertiary-400 to-primary-500 mx-auto max-w-2xl"
          />
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mb-20"
        >
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Pioneering the future of <span className="text-primary-300 font-semibold">space biology</span> and 
            <span className="text-tertiary-300 font-semibold"> human exploration</span> beyond Earth
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            University of Pennsylvania's premier organization for bioastronautics research and innovation
          </p>
        </motion.div>

        {/* Enhanced Feature Icons with Gentler Glow Effects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="flex justify-center items-center space-x-16 mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.15, y: -10 }}
            className="flex flex-col items-center space-y-4 group"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-18 h-18 bg-gradient-to-r from-primary-400 to-primary-500 blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
              />
              <div className="relative w-18 h-18 bg-gradient-to-r from-primary-400 to-primary-500 flex items-center justify-center shadow-2xl">
                <Rocket className="w-9 h-9 text-white" />
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">Space Technology</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.15, y: -10 }}
            className="flex flex-col items-center space-y-4 group"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-18 h-18 bg-gradient-to-r from-tertiary-400 to-tertiary-500 blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
              />
              <div className="relative w-18 h-18 bg-gradient-to-r from-tertiary-400 to-tertiary-500 flex items-center justify-center shadow-2xl">
                <Dna className="w-9 h-9 text-white" />
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">Biology Research</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.15, y: -10 }}
            className="flex flex-col items-center space-y-4 group"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-18 h-18 bg-gradient-to-r from-secondary-500 to-secondary-600 blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
              />
              <div className="relative w-18 h-18 bg-gradient-to-r from-secondary-500 to-secondary-600 flex items-center justify-center shadow-2xl">
                <Globe className="w-9 h-9 text-white" />
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">Space Exploration</span>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 92, 94, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="relative px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-500 text-white text-lg font-bold shadow-2xl overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Join Our Mission</span>
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#research').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-white/20 text-white text-lg font-semibold backdrop-blur-sm hover:border-white/40 transition-all duration-300"
          >
            Explore Research
          </motion.button>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
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
              className="w-12 h-12 border-2 border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors"
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