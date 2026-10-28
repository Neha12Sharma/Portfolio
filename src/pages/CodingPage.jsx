import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Terminal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CodingProfiles } from '../components/CodingProfiles';
import { Skills } from '../components/Skills';

export const CodingPage = () => {
  return (
    <div className="pt-28 pb-20 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs md:text-sm font-medium mb-4">
            <Trophy size={15} />
            <span>Problem Solving & Algorithms</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Competitive Coding & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">DSA Profiles</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Strengthening core analytical foundations through regular algorithmic problem-solving on LeetCode and building open-source repositories on GitHub.
          </p>
        </motion.div>
      </div>

      <CodingProfiles />
      <Skills />

      <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <Link
          to="/projects"
          className="btn btn-primary h-12 px-8 rounded-xl font-semibold inline-flex items-center gap-2"
        >
          <span>Explore Live Projects</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};
