import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ExternalLink, Users, Building, Globe } from 'lucide-react';

const Research = () => {
  const [activeTab, setActiveTab] = useState('nasa');

  const nasaContacts = [
    {
      name: "William Tarver",
      role: "SANS Researcher",
      organization: "NASA",
      description: "Met / discussed frontiers of SANS",
      email: "william.j.tarver@nasa.gov",
      specialty: "SANS Research"
    },
    {
      name: "Brandon Macias",
      role: "SANS Researcher",
      organization: "NASA",
      description: "Genetics Specialist",
      email: "brandon.r.macias@nasa.gov",
      specialty: "Genetics"
    },
    {
      name: "Steve Laurie",
      role: "SANS Researcher",
      organization: "NASA",
      description: "SANS Research Specialist",
      email: "steven.laurie@nasa.gov",
      specialty: "SANS Research"
    },
    {
      name: "Ryan Scott",
      role: "GeneLab Specialist",
      organization: "NASA",
      description: "Physiological Data specialist - reach out in late sept about access to more SANS data?",
      email: "ryan.t.scott@nasa.gov",
      specialty: "Physiological Data"
    },
    {
      name: "Lauren Sanders",
      role: "GeneLab Specialist",
      organization: "NASA",
      description: "Bioinformatics specialist at GeneLab",
      email: "lauren.m.sanders@nasa.gov",
      specialty: "Bioinformatics"
    }
  ];

  const cornellContacts = [
    {
      name: "David Danko",
      role: "Mason Lab Researcher",
      organization: "Cornell",
      description: "Research specialist in the Mason Lab",
      email: "dcd3001@med.cornell.edu",
      specialty: "Research"
    },
    {
      name: "Matt McKay",
      role: "Mason Lab Researcher",
      organization: "Cornell",
      description: "Research specialist in the Mason Lab",
      email: "mam3025@med.cornell.edu",
      specialty: "Research"
    },
    {
      name: "Chris Chin",
      role: "Mason Lab Researcher",
      organization: "Cornell",
      description: "Research specialist in the Mason Lab",
      email: "chc2077@med.cornell.edu",
      specialty: "Research"
    },
    {
      name: "Delia Tomoiaga",
      role: "Mason Lab Researcher",
      organization: "Cornell",
      description: "Research specialist in the Mason Lab",
      email: "dto2007@med.cornell.edu",
      specialty: "Research"
    },
    {
      name: "Kirill Grigorev",
      role: "Mason Lab Researcher",
      organization: "Cornell",
      description: "RNA Seq | Potential collaborator / mentor",
      email: "kig2007@med.cornell.edu",
      specialty: "RNA Sequencing"
    }
  ];

  const pennContacts = [
    {
      name: "Fred Kiffer",
      role: "Team Advisor",
      organization: "UPenn",
      description: "Faculty advisor and mentor",
      email: "Kiffer@chop.edu",
      altEmail: "fredkiffer@gmail.com",
      specialty: "Advisory"
    },
    {
      name: "Mathias Basner",
      role: "Principal Investigator",
      organization: "UPenn",
      description: "PI - Basner Lab",
      email: "basner@pennmedicine.upenn.edu",
      specialty: "Sleep & Cognition"
    },
    {
      name: "Penn Aerospace",
      role: "General Club",
      organization: "UPenn",
      description: "Aerospace engineering student organization",
      email: "pac@seas.upenn.edu",
      specialty: "Aerospace Engineering"
    }
  ];

  const otherContacts = [
    {
      name: "Mark Shellhamer",
      role: "Researcher",
      organization: "JHU",
      description: "Johns Hopkins University researcher",
      email: "mjs@dizzy.med.jhu.edu",
      altEmail: "mark.j.shelhamer@nasa.gov",
      specialty: "Vestibular Research"
    },
    {
      name: "Theo Nelson",
      role: "CSI Member",
      organization: "Columbia",
      description: "Interested in RNA seq",
      email: "tmn2126@columbia.edu",
      phone: "203-642-6813",
      specialty: "RNA Sequencing"
    },
    {
      name: "Matthew Werneken",
      role: "CSI Member",
      organization: "Columbia",
      description: "Columbia Space Initiative member",
      email: "mdw2166@columbia.edu",
      phone: "727-853-5893",
      specialty: "Space Research"
    }
  ];

  const tabs = [
    { id: 'nasa', label: 'NASA Collaborations', data: nasaContacts, icon: Globe },
    { id: 'cornell', label: 'Cornell Mason Lab', data: cornellContacts, icon: Building },
    { id: 'penn', label: 'UPenn Network', data: pennContacts, icon: Users },
    { id: 'other', label: 'Other Institutions', data: otherContacts, icon: ExternalLink }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cosmic-text">
            Research Network & Collaborations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with our extensive network of researchers, labs, and institutions advancing space biology and bioastronautics research.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glass-card p-2 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 flex items-center space-x-2 transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-tertiary-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </motion.button>
              );
            })}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {tabs.find(tab => tab.id === activeTab)?.data.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 group hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{contact.name}</h3>
                    <p className="text-primary-400 font-semibold text-sm mb-1">{contact.role}</p>
                    <p className="text-gray-400 text-sm">{contact.organization}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-tertiary-500/20 flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary-400" />
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {contact.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-tertiary-400 bg-tertiary-500/20 px-2 py-1">
                      {contact.specialty}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <motion.a
                    href={`mailto:${contact.email}`}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-primary-300 transition-colors duration-200 text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{contact.email}</span>
                  </motion.a>
                  
                  {contact.altEmail && (
                    <motion.a
                      href={`mailto:${contact.altEmail}`}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-2 text-gray-300 hover:text-primary-300 transition-colors duration-200 text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{contact.altEmail}</span>
                    </motion.a>
                  )}
                  
                  {contact.phone && (
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <span className="w-4 h-4 text-center">📞</span>
                      <span>{contact.phone}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Research Network</h3>
            <p className="text-gray-300 mb-6">
              Interested in collaborating or contributing to bioastronautics research? 
              Connect with our team to explore opportunities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="space-button"
            >
              Get Connected
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research; 