import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  DollarSign, 
  BookOpen, 
  Github, 
  ExternalLink, 
  GraduationCap,
  Building,
  Award,
  Database
} from 'lucide-react';

const Resources = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('career');

  const careerResources = [
    {
      title: "NASA Pathways Program",
      description: "Internship and career development opportunities with NASA for students and recent graduates.",
      type: "Internship Program",
      deadline: "Rolling Applications",
      link: "https://nasa.gov/pathways",
      icon: Building
    },
    {
      title: "NIH Space Biology Fellowship",
      description: "Research fellowships focusing on space biology and bioastronautics research.",
      type: "Fellowship",
      deadline: "March 15, 2024",
      link: "#",
      icon: Award
    },
    {
      title: "ESA Young Graduate Trainee",
      description: "European Space Agency training program for recent graduates in space sciences.",
      type: "Graduate Program",
      deadline: "October 31, 2024",
      link: "#",
      icon: GraduationCap
    },
    {
      title: "SpaceX Bioastronautics Internship",
      description: "Hands-on experience in human spaceflight systems and life support technologies.",
      type: "Industry Internship",
      deadline: "Rolling Applications",
      link: "#",
      icon: Building
    },
    {
      title: "Blue Origin Life Sciences",
      description: "Research positions in space medicine and human factors engineering.",
      type: "Research Position",
      deadline: "Ongoing",
      link: "#",
      icon: Briefcase
    }
  ];

  const fundingOpportunities = [
    {
      title: "NASA USRP Undergraduate Research",
      description: "Funding for undergraduate research projects in space biology and related fields.",
      amount: "Up to $5,000",
      deadline: "February 1, 2024",
      eligibility: "Undergraduate Students",
      link: "#",
      icon: DollarSign
    },
    {
      title: "NSF Graduate Research Fellowship",
      description: "Three-year fellowship supporting graduate research in STEM fields including space biology.",
      amount: "$37,000 annually",
      deadline: "October 2024",
      eligibility: "Graduate Students",
      link: "#",
      icon: Award
    },
    {
      title: "Penn Engineering Travel Grants",
      description: "Support for conference attendance and research collaboration travel.",
      amount: "Up to $2,000",
      deadline: "Rolling",
      eligibility: "Penn Students",
      link: "#",
      icon: DollarSign
    },
    {
      title: "AIAA Foundation Scholarships",
      description: "Scholarships for students pursuing aerospace and related engineering disciplines.",
      amount: "Varies",
      deadline: "January 31, 2024",
      eligibility: "All Students",
      link: "#",
      icon: Award
    }
  ];

  const learningPaths = [
    {
      title: "Space Biology Fundamentals",
      description: "Core concepts in astrobiology, space medicine, and life support systems.",
      courses: ["BIOL 2010", "BENG 3010", "AERO 4050"],
      duration: "2 semesters",
      level: "Undergraduate",
      icon: BookOpen
    },
    {
      title: "Human Factors in Space",
      description: "Psychology, ergonomics, and human-system interaction for space environments.",
      courses: ["PSYC 3020", "BENG 4020", "SYST 5010"],
      duration: "3 semesters",
      level: "Advanced",
      icon: GraduationCap
    },
    {
      title: "Bioregenerative Life Support",
      description: "Engineering closed-loop ecosystems for long-duration space missions.",
      courses: ["BENG 5030", "ENVS 4010", "CHEM 3040"],
      duration: "2 semesters",
      level: "Graduate",
      icon: Briefcase
    },
    {
      title: "Computational Bioastronautics",
      description: "Machine learning and data analysis for space biology applications.",
      courses: ["CIS 4200", "BENG 4030", "STAT 4050"],
      duration: "2 semesters",
      level: "Advanced",
      icon: Database
    }
  ];

  const githubResources = [
    {
      title: "Awesome Bioastronautics",
      description: "Curated list of bioastronautics resources, papers, and tools.",
      stars: "1.2k",
      language: "Markdown",
      link: "#",
      icon: Github
    },
    {
      title: "NASA GeneLab Analysis Tools",
      description: "Python tools for analyzing space biology datasets from NASA GeneLab.",
      stars: "856",
      language: "Python",
      link: "#",
      icon: Github
    },
    {
      title: "Space Medicine Datasets",
      description: "Collection of datasets for machine learning in space medicine.",
      stars: "643",
      language: "Jupyter Notebook",
      link: "#",
      icon: Database
    },
    {
      title: "Microgravity Simulation Tools",
      description: "MATLAB/Python tools for simulating microgravity effects on biological systems.",
      stars: "421",
      language: "MATLAB",
      link: "#",
      icon: Github
    }
  ];

  const tabs = [
    { id: 'career', label: 'Career Resources', data: careerResources, icon: Briefcase },
    { id: 'funding', label: 'Funding & Grants', data: fundingOpportunities, icon: DollarSign },
    { id: 'learning', label: 'Learning Paths', data: learningPaths, icon: BookOpen },
    { id: 'github', label: 'GitHub Resources', data: githubResources, icon: Github }
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

  const renderTabContent = () => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentTab?.data.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-card p-6 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-space-500 to-cosmic-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-space-500/25 transition-all duration-300">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={item.link}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>

            <div className="space-y-2">
              {activeTab === 'career' && (
                <>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Type:</span>
                    <span className="text-white">{item.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Deadline:</span>
                    <span className="text-white">{item.deadline}</span>
                  </div>
                </>
              )}

              {activeTab === 'funding' && (
                <>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Amount:</span>
                    <span className="text-white">{item.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Eligibility:</span>
                    <span className="text-white">{item.eligibility}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Deadline:</span>
                    <span className="text-white">{item.deadline}</span>
                  </div>
                </>
              )}

              {activeTab === 'learning' && (
                <>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{item.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Level:</span>
                    <span className="text-white">{item.level}</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-gray-400 text-sm">Courses:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {item.courses?.map((course, idx) => (
                        <span key={idx} className="bg-space-500/20 text-space-400 px-2 py-1 rounded text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'github' && (
                <>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Stars:</span>
                    <span className="text-white">{item.stars}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Language:</span>
                    <span className="text-white">{item.language}</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="resources" className="py-20 relative overflow-hidden">
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
            <span className="cosmic-text">Resources</span> & Opportunities
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover career opportunities, funding sources, learning paths, and tools 
            to advance your journey in bioastronautics and space biology.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center mb-12"
        >
          <div className="glass-card p-2 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-space-500 to-cosmic-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
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
          >
            {renderTabContent()}
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
            <h3 className="text-2xl font-bold mb-4 cosmic-text">Need More Information?</h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our team is here to help you 
              navigate opportunities in bioastronautics and space biology.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="space-button"
            >
              Contact Our Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources; 