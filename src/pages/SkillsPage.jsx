import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Skills } from '../components/Skills';
import { Certificates } from '../components/Certificates';

export const SkillsPage = () => {
  return (
    <div className="pt-28 pb-20 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs md:text-sm font-medium mb-4">
            <Wrench size={15} />
            <span>Technical Capabilities</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-300">Toolsets</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Full-stack engineering stack centered on React.js, Node.js, Express.js, MongoDB, C/C++ algorithms, and Power BI analytics.
          </p>
        </motion.div>
      </div>

      <Skills />
      <Certificates />

      <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <Link
          to="/projects"
          className="btn btn-primary h-12 px-8 rounded-xl font-semibold inline-flex items-center gap-2"
        >
          <span>View Projects Using These Skills</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};
