import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Building2, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience, education } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');

  const experienceItems = experience.map(item => ({
    ...item,
    type: 'experience',
    typeLabel: 'Internship'
  }));

  const educationItems = education.map(item => ({
    title: item.degree,
    role: item.degree,
    company: `${item.institution}${item.location ? ` (${item.location})` : ''}`,
    period: item.period,
    badge: item.badge,
    points: item.points,
    type: 'education',
    typeLabel: 'Education'
  }));

  const allItems = [...experienceItems, ...educationItems];

  const displayedItems = activeFilter === 'all'
    ? allItems
    : activeFilter === 'experience'
      ? experienceItems
      : educationItems;

  return (
    <section id="experience" className="py-20 md:py-28 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-medium mb-4">
            <Briefcase size={15} />
            <span>Career Milestones & Academics</span>
          </div>
          <h2 className="headline-2 text-white mb-4">
            Internships & Experience
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Hands-on professional software engineering internships paired with a strong academic foundation in Computer Science.
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="flex justify-center mb-16">
          <div className="p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-2xl flex items-center gap-1 shadow-lg backdrop-blur-md">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveFilter('experience')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                activeFilter === 'experience'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Briefcase size={14} />
              <span>Internships & Experience</span>
            </button>
            <button
              onClick={() => setActiveFilter('education')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                activeFilter === 'education'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <GraduationCap size={15} />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* 1-Column Timeline Layout matching reference image */}
        <div className="relative pl-6 md:pl-10">
          
          {/* Continuous vertical timeline line on the left */}
          <div className="absolute left-2 md:left-3 top-3 bottom-3 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500/30" />

          <div className="space-y-8">
            {displayedItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Glowing Timeline Dot on the left line */}
                <div className="absolute -left-[22px] md:-left-[34px] top-8 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.8)] z-10 transition-transform duration-300 group-hover:scale-125" />

                {/* Timeline Card in single column */}
                <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-xl backdrop-blur-md hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]">
                  
                  {/* Top Row: Title + Date Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.role || item.title}
                    </h3>
                    
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-800 text-xs md:text-sm text-zinc-300 font-mono shrink-0 self-start sm:self-auto">
                      <Calendar size={13} className="text-cyan-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Company / Institution line with cyan building icon */}
                  <div className="flex items-center gap-2 text-sm md:text-base font-medium text-cyan-400 mb-5">
                    {item.type === 'education' ? (
                      <GraduationCap size={16} className="text-cyan-400 shrink-0" />
                    ) : (
                      <Building2 size={16} className="text-cyan-400 shrink-0" />
                    )}
                    <span>{item.company}</span>
                  </div>

                  {/* Bullet points with blue/cyan right-pointing arrow */}
                  <ul className="space-y-3">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start text-zinc-300 text-sm md:text-[15px] leading-relaxed">
                        <span className="text-cyan-400 mr-3 text-base select-none shrink-0 font-bold">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
