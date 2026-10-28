import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Heart, Github, Linkedin, Code2, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Me", path: "/about" },
    { label: "Coding Profiles", path: "/coding" },
    { label: "Projects Showcase", path: "/projects" },
    { label: "Technical Skills", path: "/skills" },
    { label: "Experience & Education", path: "/experience" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 pt-16 pb-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 mb-4 group inline-flex">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 rounded-xl flex items-center justify-center border border-blue-400/30 shadow-md">
                <span className="text-white font-extrabold text-base tracking-tighter">NV</span>
              </div>
              <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                {personal.fullName}
              </span>
            </Link>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
              Aspiring Software Engineer & MERN Stack Developer. Dedicated to crafting resilient web services, scalable architectures, and elegant user interfaces.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-cyan-500 transition-all"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={personal.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-500 transition-all"
                aria-label="LeetCode"
              >
                <Code2 size={16} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-emerald-500 transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-4">
              Explore Portfolio
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-zinc-400 hover:text-cyan-400 transition-colors py-1 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-4">
                Location & Availability
              </h4>
              <p className="text-xs text-zinc-400 mb-2">{personal.location}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for SDE Roles</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white transition-all hover:-translate-y-0.5"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} {personal.fullName}. Built with React, Tailwind CSS & Framer Motion.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted for high performance & engineering rigor</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
