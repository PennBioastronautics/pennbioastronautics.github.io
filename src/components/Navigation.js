import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, Users, RefreshCw, Microscope, Briefcase, Github, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: Rocket },
    { name: 'Team', href: '#team', icon: Users },
    { name: 'Research', href: '#research', icon: Microscope },
    { name: 'Updates', href: '#blog', icon: RefreshCw },
    { name: 'Resources', href: '#resources', icon: Briefcase },
    { name: 'GitHub', href: '#github', icon: Github },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/5 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            {/* Desktop - Long Logo */}
            <div className="hidden md:block">
              <img 
                src={`${process.env.PUBLIC_URL}/images/longlogo.png`}
                alt="Penn Bioastronautics" 
                className="h-12 w-auto"
              />
            </div>
            {/* Mobile - Short Logo with Text */}
            <div className="md:hidden flex items-center space-x-2">
              <img 
                src={`${process.env.PUBLIC_URL}/images/longlogo.png`}
                alt="Penn Bioastronautics" 
                className="h-12 w-auto"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-1 hover:text-primary-400 transition-colors duration-200"
                style={{ color: '#FFF9F0' }}
              >
                <item.icon className="w-4 h-4" style={{ color: '#FFE4BE' }} />
                <span>{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 bg-white/5 backdrop-blur-md border border-white/10"
            style={{ color: '#FFF9F0' }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/5 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-3 w-full text-left p-3 hover:bg-primary-500/10 transition-colors duration-200"
                  style={{ color: '#FFE4BE' }}
                >
                  <item.icon className="w-5 h-5" style={{ color: '#FFE4BE' }} />
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation; 