import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full-Stack', 'Real-time & AI', 'Management Systems'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter || p.subCategory === filter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-zinc-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-medium mb-4">
            <FolderGit2 size={15} />
            <span>Projects Showcase</span>
          </div>
          <h2 className="headline-2 text-white mb-4">
            My Portfolio Highlights
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Real-world full-stack web applications featuring responsive UIs, real-time communication, REST APIs, and production deployments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-500/40'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid matching reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="relative p-4 rounded-3xl bg-zinc-900/90 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Mockup Preview Graphic */}
                  <div className="aspect-video w-full rounded-2xl overflow-hidden mb-4 bg-zinc-950 border border-zinc-800/80 relative">
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Project Title */}
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[11px] text-zinc-400 font-mono bg-zinc-950/90 rounded-lg border border-zinc-800/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Row matching screenshot */}
                <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60">
                  <div className="flex items-center gap-2">
                    {/* GitHub Code Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                      title="View GitHub Source"
                    >
                      <Github size={18} />
                    </a>

                    {/* Live Demo Launch Button */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white flex items-center justify-center shadow-md shadow-blue-500/25 transition-all"
                      title="Launch Live App"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <span className="text-xs text-zinc-400 font-mono">
                    Live App
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
