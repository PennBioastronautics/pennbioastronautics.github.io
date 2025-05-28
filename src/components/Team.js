import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Mail, Github } from 'lucide-react';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const executives = [
    {
      name: "Sarah Chen",
      position: "President",
      major: "Bioengineering",
      year: "Senior",
      bio: "Leading our mission to advance space biology research and foster interdisciplinary collaboration.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "sarah@pennbioastro.org",
      github: "#"
    },
    {
      name: "Marcus Rodriguez",
      position: "Vice President",
      major: "Systems Engineering",
      year: "Junior",
      bio: "Coordinating research initiatives and building partnerships with industry leaders.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "marcus@pennbioastro.org",
      github: "#"
    },
    {
      name: "Dr. Emily Watson",
      position: "Faculty Advisor",
      major: "Bioengineering Department",
      year: "Professor",
      bio: "Guiding our research direction with expertise in space medicine and human factors.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "ewatson@seas.upenn.edu",
      github: "#"
    },
    {
      name: "Alex Kim",
      position: "Research Director",
      major: "Bioengineering",
      year: "Graduate Student",
      bio: "Overseeing student research projects and coordinating with Penn labs.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "alex@pennbioastro.org",
      github: "#"
    },
    {
      name: "Maya Patel",
      position: "Outreach Coordinator",
      major: "Biology",
      year: "Sophomore",
      bio: "Organizing events, workshops, and community engagement initiatives.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "maya@pennbioastro.org",
      github: "#"
    },
    {
      name: "James Thompson",
      position: "Technology Lead",
      major: "Computer Science",
      year: "Junior",
      bio: "Developing digital platforms and managing our technical infrastructure.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "james@pennbioastro.org",
      github: "#"
    }
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
    <section id="team" className="py-20 relative overflow-hidden">
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
            <span className="cosmic-text">Our</span> Leadership
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Meet the passionate individuals driving Penn Bioastronautics forward, 
            combining diverse expertise to advance space biology research.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {executives.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card p-6 group"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-primary-500 to-tertiary-500 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2 w-6 h-6 border border-tertiary-400/30 rounded-full"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary-400 font-semibold mb-1">{member.position}</p>
                <p className="text-gray-400 text-sm mb-2">{member.major} • {member.year}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>

                <div className="flex justify-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={member.linkedin}
                    className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-gradient-to-r from-tertiary-500 to-tertiary-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-tertiary-500/25 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={member.github}
                    className="w-8 h-8 bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-secondary-600/25 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 cosmic-text">Join Our Team</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for passionate students and researchers to join our mission. 
              Whether you're interested in leadership, research, or outreach, there's a place for you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="space-button"
            >
              Apply to Join
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 