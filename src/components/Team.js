import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Samantha Smith",
      position: "Administrator",
      email: "ssmith7@sas.upenn.edu",
      year: "2026",
      image: `${process.env.PUBLIC_URL}/images/profile/samatha.jpeg`,
      linkedin: null,
      bio: "Leading Penn Bioastronautics with a passion for space biology research and organizational excellence."
    },
    {
      name: "Shambhabi Gautam",
      position: "Director",
      email: "subug@seas.upenn.edu",
      year: "2027",
      image: `${process.env.PUBLIC_URL}/images/profile/shambhabi.jpeg`,
      linkedin: "https://www.linkedin.com/in/shambhabigautam",
      bio: "Directing research initiatives and fostering collaboration between students and faculty in bioastronautics."
    },
    {
      name: "Nick Harty",
      position: "Vice Administrator",
      email: "hartyn@seas.upenn.edu",
      year: "2027",
      image: `${process.env.PUBLIC_URL}/images/profile/nick.jpeg`,
      linkedin: "https://linkedin.com/in/nicksheaharty",
      bio: "Supporting administrative operations and driving technological innovation in space biology."
    },
    {
      name: "Julian Huang",
      position: "Vice Director",
      email: "julianh2@sas.upenn.edu",
      year: "2027",
      image: `${process.env.PUBLIC_URL}/images/profile/julian.jpeg`,
      linkedin: "https://www.linkedin.com/in/julian-huang-0a6825279/",
      bio: "Assisting in research coordination and expanding our network of academic partnerships."
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cosmic-text">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated leaders driving Penn Bioastronautics forward in our mission to advance space biology research and education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center group hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto overflow-hidden rounded-full border-2 border-white/20 group-hover:border-primary-400/40 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=FF5C5E&color=fff&size=128`;
                    }}
                  />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2 w-6 h-6 border border-tertiary-400/30 rounded-full"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-primary-400 font-semibold mb-1">{member.position}</p>
              <p className="text-gray-400 text-sm mb-1">Class of {member.year}</p>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
              
              <div className="flex justify-center space-x-3">
                <motion.a
                  href={`mailto:${member.email}`}
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-white" />
                </motion.a>
                {member.linkedin && (
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-gradient-to-r from-tertiary-500 to-tertiary-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-tertiary-500/25 transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
            <p className="text-gray-300 mb-6">
              Interested in contributing to the future of space biology? We're always looking for passionate students to join our mission.
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
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h4 className="text-lg font-semibold text-white mb-4">Follow Our Journey</h4>
          <motion.a
            href="https://www.instagram.com/upenn_bioastronautics/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
          >
            <Instagram className="w-6 h-6" />
            <span className="font-medium">@upenn_bioastronautics</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 