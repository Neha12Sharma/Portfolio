import React from 'react';
import { motion } from 'framer-motion';
import { Database, Wrench, Layout, Code2, BarChart3, Layers, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { skillsSections } = portfolioData;

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Database': return <Database size={20} className="text-amber-400" />;
      case 'Wrench': return <Wrench size={20} className="text-purple-400" />;
      case 'Layout': return <Layout size={20} className="text-cyan-400" />;
      case 'Code2': return <Code2 size={20} className="text-blue-400" />;
      case 'BarChart3': return <BarChart3 size={20} className="text-emerald-400" />;
      default: return <Layers size={20} className="text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-medium mb-4">
            <Terminal size={15} />
            <span>Technical Skills</span>
          </div>
          <h2 className="headline-2 text-white mb-4">
            Technologies & Tools
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            A comprehensive overview of my software development competencies, core computer science concepts, and developer toolchain.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="space-y-12">
          {skillsSections.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  {getCategoryIcon(group.icon)}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                  {group.category}
                </h3>
              </div>

              {/* Grid of Skill Cards with Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 shadow-md group"
                  >
                    {/* Official Tech Icon Box */}
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center shrink-0 p-2.5 group-hover:scale-105 group-hover:border-zinc-700 transition-all">
                      <img
                        src={skill.imgSrc}
                        alt={skill.label}
                        loading="lazy"
                        className="w-full h-full object-contain filter drop-shadow-sm"
                      />
                    </div>

                    {/* Skill Info */}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-white truncate group-hover:text-cyan-400 transition-colors">
                        {skill.label}
                      </h4>
                      <p className="text-xs text-zinc-400 truncate mt-0.5" title={skill.desc}>
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
