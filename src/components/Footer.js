import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Twitter, Linkedin, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Research', href: '#research' },
    { name: 'Blog', href: '#blog' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' }
  ];

  const resources = [
    { name: 'Career Resources', href: '#resources' },
    { name: 'Funding Opportunities', href: '#resources' },
    { name: 'Learning Paths', href: '#resources' },
    { name: 'GitHub Repository', href: '#github' },
    { name: 'Brand Toolkit', href: '#' },
    { name: 'Media Kit', href: '#' }
  ];

  const partners = [
    { name: 'NASA', href: 'https://nasa.gov' },
    { name: 'ESA', href: 'https://esa.int' },
    { name: 'Penn Engineering', href: 'https://seas.upenn.edu' },
    { name: 'NIH', href: 'https://nih.gov' },
    { name: 'NSF', href: 'https://nsf.gov' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/pennbioastro' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/pennbioastro' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/pennbioastro' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/pennbioastro' }
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="relative bg-secondary-950 border-t border-white/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-40 h-40 border border-primary-500/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-32 h-32 border border-tertiary-500/10 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6"
            >
              <img 
                src="/images/shortlogo.png" 
                alt="Penn Bioastronautics" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold cosmic-text">Penn Bioastronautics</h3>
                <p className="text-sm text-gray-400">Biology for Space</p>
              </div>
            </motion.div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Advancing the frontiers of space biology and preparing the next generation 
              of researchers for humanity's expansion into the cosmos.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>University of Pennsylvania</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@pennbioastro.org" className="hover:text-white transition-colors duration-200">
                  info@pennbioastro.org
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(resource.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center space-x-1"
                  >
                    <span>{resource.name}</span>
                    {!resource.href.startsWith('#') && <ExternalLink className="w-3 h-3" />}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Partners</h4>
            <ul className="space-y-3 mb-8">
              {partners.map((partner, index) => (
                <li key={index}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center space-x-1"
                  >
                    <span>{partner.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white mb-4">Stay Connected</h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest research updates, event announcements, 
              and opportunities in bioastronautics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-space-500 transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-tertiary-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Penn Bioastronautics. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 