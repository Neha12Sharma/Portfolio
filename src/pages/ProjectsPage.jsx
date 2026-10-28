import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Projects } from '../components/Projects';

export const ProjectsPage = () => {
  return (
    <div className="pt-28 pb-20 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-medium mb-4">
            <FolderGit2 size={15} />
            <span>Project Portfolio</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Showcase of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Deployed Applications</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Real-world web applications built with the MERN stack, incorporating real-time websockets, secure JWT authorization, and modern UI design.
          </p>
        </motion.div>
      </div>

      <Projects />

      <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <Link
          to="/contact"
          className="btn btn-primary h-12 px-8 rounded-xl font-semibold inline-flex items-center gap-2"
        >
          <span>Connect for Collaboration</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};
