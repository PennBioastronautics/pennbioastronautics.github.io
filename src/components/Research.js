import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Microscope, Heart, Leaf, Cpu, ExternalLink, Users } from 'lucide-react';

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('ongoing');

  const ongoingProjects = [
    {
      title: "Microgravity Cell Culture Systems",
      description: "Developing advanced bioreactors for studying cellular behavior in simulated microgravity environments.",
      lead: "Dr. Sarah Martinez",
      lab: "Penn Bioengineering Lab",
      status: "Active",
      participants: 8,
      icon: Microscope,
      link: "#"
    },
    {
      title: "Cardiovascular Adaptation in Space",
      description: "Investigating cardiovascular deconditioning and developing countermeasures for long-duration spaceflight.",
      lead: "Dr. Michael Chen",
      lab: "Space Medicine Research Center",
      status: "Active",
      participants: 12,
      icon: Heart,
      link: "#"
    },
    {
      title: "Closed-Loop Life Support Systems",
      description: "Engineering sustainable ecosystems for Mars habitats using bioregenerative technologies.",
      lead: "Dr. Emily Rodriguez",
      lab: "Environmental Systems Lab",
      status: "Active",
      participants: 15,
      icon: Leaf,
      link: "#"
    },
    {
      title: "AI-Driven Health Monitoring",
      description: "Developing machine learning algorithms for real-time health assessment during space missions.",
      lead: "Dr. James Liu",
      lab: "Computational Biology Lab",
      status: "Active",
      participants: 6,
      icon: Cpu,
      link: "#"
    }
  ];

  const studentInitiatives = [
    {
      title: "Astrobiology Database",
      description: "Creating a comprehensive database of extremophile organisms for space applications.",
      lead: "Alex Thompson",
      type: "Undergraduate Research",
      status: "In Progress",
      participants: 4,
      icon: Microscope,
      link: "#"
    },
    {
      title: "Space Suit Ergonomics Study",
      description: "Analyzing human factors in current space suit designs and proposing improvements.",
      lead: "Maria Santos",
      type: "Senior Capstone",
      status: "In Progress",
      participants: 3,
      icon: Users,
      link: "#"
    },
    {
      title: "Radiation Shielding Materials",
      description: "Investigating bio-inspired materials for radiation protection in spacecraft.",
      lead: "David Kim",
      type: "Graduate Research",
      status: "In Progress",
      participants: 2,
      icon: Leaf,
      link: "#"
    }
  ];

  const collaborations = [
    {
      title: "NASA Ames Research Partnership",
      description: "Collaborative research on plant growth systems for lunar habitats.",
      lead: "Multiple PIs",
      type: "Industry Partnership",
      status: "Active",
      participants: 20,
      icon: Leaf,
      link: "#"
    },
    {
      title: "ESA Bioastronautics Initiative",
      description: "International collaboration on human factors research for Mars missions.",
      lead: "International Team",
      type: "Global Partnership",
      status: "Active",
      participants: 35,
      icon: Users,
      link: "#"
    }
  ];

  const tabs = [
    { id: 'ongoing', label: 'Ongoing Projects', data: ongoingProjects },
    { id: 'student', label: 'Student Initiatives', data: studentInitiatives },
    { id: 'collaborations', label: 'Collaborations', data: collaborations }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="research" className="py-20 relative overflow-hidden">
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
            <span className="cosmic-text">Research</span> & Innovation
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our cutting-edge research initiatives advancing the frontiers of space biology 
            and human factors for the next generation of space exploration.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center mb-12"
        >
          <div className="glass-card p-2 flex space-x-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-space-500 to-cosmic-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {tabs.find(tab => tab.id === activeTab)?.data.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-space-500 to-cosmic-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-space-500/25 transition-all duration-300">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Lead:</span>
                    <span className="text-white">{project.lead}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{project.lab ? 'Lab:' : 'Type:'}</span>
                    <span className="text-white">{project.lab || project.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Participants:</span>
                    <span className="text-white">{project.participants}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-space-400 hover:text-space-300 text-sm font-semibold transition-colors duration-200"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 cosmic-text">Join Our Research</h3>
            <p className="text-gray-300 mb-6">
              Interested in contributing to cutting-edge space biology research? 
              We welcome collaborations from students, faculty, and industry partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="space-button"
              >
                Propose a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-white/20 rounded-lg text-white hover:bg-white/5 transition-all duration-300"
              >
                View Publications
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research; 