import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Layers, ShieldCheck, BarChart3, GraduationCap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { personal, education } = portfolioData;

  const pillars = [
    {
      icon: Layers,
      title: "MERN Stack Architecture",
      desc: "Architecting end-to-end web apps with React.js frontend, Express.js middleware, Node.js asynchronous backend, and MongoDB database modeling.",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      icon: ShieldCheck,
      title: "Hardened Security & RBAC",
      desc: "Implementing JWT authentication, Bcrypt password hashing, token validation middleware, and granular Role-Based Access Control.",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      icon: Code,
      title: "C/C++ Algorithmic Foundation",
      desc: "Robust foundation in data structures, time complexity optimization, and competitive coding logic for scalable software systems.",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Dashboards",
      desc: "Hands-on reporting using Power BI and Microsoft Excel to convert complex data sets into actionable KPIs and clear visual dashboards.",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-medium mb-4">
            <User size={15} />
            <span>About Me & SDE Vision</span>
          </div>
          <h2 className="headline-2 text-white mb-4">
            Passionate About Engineering Scalable, Production-Ready Solutions
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            I am a Computer Science & Engineering undergraduate at Geeta University based in Sonipat, Haryana, with practical experience across three software internships, building responsive applications from database design to modern UI interfaces.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${pillar.color}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bio & Education Highlights Box */}
        <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-zinc-950 border border-zinc-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Full-Stack MERN Expertise + Continuous Algorithmic Learning
              </h3>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6">
                Through my internships at Excellence Technology (Mohali), Coding Blocks (Panipat), and Geeta Technical Hub, I gained deep hands-on expertise building end-to-end applications:
              </p>
              
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Designing structured RESTful APIs and normalized/document-based MongoDB databases.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Integrating JWT-driven authentication flows and protected routes across React frontends and Express backends.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Analyzing dataset trends with Power BI and Excel to inform software logic and user workflows.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 bg-zinc-950/70 p-6 rounded-2xl border border-zinc-800">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-4">
                <GraduationCap size={18} />
                <span>Academic Overview</span>
              </div>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="pb-3 border-b border-zinc-800/80 last:border-0 last:pb-0">
                    <p className="text-xs font-mono text-cyan-400/90">{edu.period}</p>
                    <p className="text-sm font-bold text-white mt-0.5">{edu.degree}</p>
                    <p className="text-xs text-zinc-400">{edu.institution}, {edu.location}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
