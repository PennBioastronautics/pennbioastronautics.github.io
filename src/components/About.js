import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Microscope, Heart, Users, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Microscope,
      title: "Space Biology Research",
      description: "Investigating how biological systems adapt and function in the unique environment of space."
    },
    {
      icon: Heart,
      title: "Human Health in Space",
      description: "Understanding the physiological challenges of long-duration spaceflight and developing countermeasures."
    },
    {
      icon: Users,
      title: "Collaborative Community",
      description: "Bringing together students, researchers, and industry professionals passionate about space biology."
    },
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Preparing for humanity's next giant leap through cutting-edge bioastronautics research."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="cosmic-text">About</span> Our Mission
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Penn Bioastronautics is a student organization at the University of Pennsylvania 
            dedicated to advancing the field of space biology and preparing the next generation 
            of researchers for humanity's expansion into the cosmos.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card p-6 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-tertiary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-6 cosmic-text">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We envision a future where biological research drives space exploration, 
              enabling sustainable human presence beyond Earth. Our interdisciplinary 
              approach combines cutting-edge biotechnology with aerospace engineering 
              to solve the challenges of life in space.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                <span className="text-gray-300">Advancing space medicine and human factors research</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-tertiary-400 rounded-full"></div>
                <span className="text-gray-300">Developing life support systems and closed-loop ecosystems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                <span className="text-gray-300">Fostering collaboration between academia and industry</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="glass-card p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 via-tertiary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Microscope className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">Join the Journey</h4>
                <p className="text-gray-300 mb-6">
                  Be part of the next chapter in human space exploration. 
                  Whether you're interested in research, outreach, or industry connections, 
                  there's a place for you in our community.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  className="space-button"
                >
                  Get Involved
                </motion.button>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 border border-primary-400/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-6 h-6 border border-tertiary-400/30 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 