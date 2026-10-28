import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Layers, GraduationCap, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Certificates } from '../components/Certificates';
import { portfolioData } from '../data/portfolioData';

export const AboutPage = () => {
  const { personal } = portfolioData;

  return (
    <div className="pt-28 pb-20 bg-zinc-950 min-h-screen text-white">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-medium mb-4">
            <User size={15} />
            <span>Profile & Engineering Mindset</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Neha</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            {personal.summary}
          </p>
        </motion.div>
      </div>

      <About />
      <Experience />
      <Certificates />

      <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <Link
          to="/projects"
          className="btn btn-primary h-12 px-8 rounded-xl font-semibold inline-flex items-center gap-2"
        >
          <span>View My Projects</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};
