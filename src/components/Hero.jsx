import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Code2, Database, ShieldCheck, ExternalLink, Briefcase, MapPin, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personal, stats } = portfolioData;

  const targetRole = "MERN Stack Developer";
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward letter by letter
        setCurrentText(targetRole.slice(0, currentText.length + 1));
        setTypingSpeed(85 + Math.random() * 25);

        if (currentText.length + 1 === targetRole.length) {
          // Finished typing, pause for 3.5 seconds
          setTimeout(() => setIsDeleting(true), 3500);
        }
      } else {
        // Deleting letter by letter
        setCurrentText(targetRole.slice(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText.length === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Chip & Location */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-medium backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{personal.status}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-mono">
                <MapPin size={13} className="text-cyan-400" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Headline with Greeting */}
            <h1 className="headline-1 text-white mb-2">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">{personal.fullName}</span> 👋
            </h1>

            {/* Letter by letter typewriter animated role */}
            <div className="h-12 md:h-14 flex items-center mb-6">
              <span className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-mono tracking-tight">
                {currentText}
              </span>
              <span className="w-1 md:w-1.5 h-8 md:h-10 bg-cyan-400 ml-1.5 animate-pulse inline-block rounded-sm"></span>
            </div>

            {/* Subtitle / Pitch */}
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-[55ch] mb-8">
              {personal.summary}
            </p>

            {/* Action Buttons including Download Resume */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {/* Option: Download Resume */}
              <a 
                href="/Neha_Vats_Resume.pdf"
                download="Neha_Vats_Resume.pdf"
                className="btn bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white h-12 px-6 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5 transition-all group"
              >
                <Download size={17} className="group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <Link 
                to="/projects" 
                className="btn btn-outline h-12 px-6 rounded-xl text-sm font-semibold flex items-center gap-2 group hover:border-cyan-400/50"
              >
                <span>Explore Projects</span>
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="btn bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 h-12 px-5 rounded-xl text-sm font-medium"
              >
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Micro Tech Tags matching screenshot */}
            <div className="flex items-center gap-2 flex-wrap text-xs text-zinc-400 font-mono">
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-cyan-400">MERN Stack</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-blue-400">C++ DSA</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-emerald-400">Python ML</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-amber-400">SQL Systems</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-indigo-400">REST APIs</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Profile Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[370px]">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-cyan-500 to-emerald-400 rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>

              {/* Floating Top-Right Badge matching screenshot 2 */}
              <div className="absolute -top-3 -right-3 z-20 px-3.5 py-2 rounded-2xl bg-zinc-900/95 border border-amber-500/30 backdrop-blur-md shadow-2xl flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Sparkles size={15} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold">DSA Problems</p>
                  <p className="text-xs font-black text-amber-400">Problem Solving Active</p>
                </div>
              </div>

              {/* Main Card Frame */}
              <div className="relative rounded-[2.25rem] bg-zinc-900/90 border border-zinc-700/60 overflow-hidden shadow-2xl backdrop-blur-xl p-3">
                <div className="relative rounded-[1.75rem] overflow-hidden aspect-[4/5] bg-zinc-950">
                  <img 
                    src={personal.photo} 
                    alt={personal.fullName}
                    className="w-full h-full object-cover object-center filter contrast-105 hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle bottom gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent"></div>

                  {/* On-photo badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-zinc-900/85 backdrop-blur-md border border-zinc-700/60 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                          <Code2 size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white tracking-wide">3 Internships</p>
                          <p className="text-[10px] text-zinc-400">Production MERN & Analytics</p>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                    </div>
                  </div>
                </div>

                {/* Floating pill: Education & Focus */}
                <div className="mt-3 px-3 py-2 bg-zinc-950/60 rounded-xl border border-zinc-800/80 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-mono flex items-center gap-1">
                    <MapPin size={12} className="text-cyan-400" />
                    {personal.location}
                  </span>
                  <span className="text-cyan-400 font-semibold">B.Tech CSE '27</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Highlight Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((item, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl md:text-3xl font-black text-white flex items-center gap-1">
                <span>{item.value}</span>
                <span className="text-cyan-400">{item.suffix}</span>
              </div>
              <p className="text-xs md:text-sm font-semibold text-zinc-300 mt-1">{item.label}</p>
              <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-cyan-400/90 border border-zinc-700/50">
                {item.badge}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
