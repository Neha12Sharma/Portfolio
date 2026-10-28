import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Coding Profiles", path: "/coding" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "Experience & Education", path: "/experience" },
    { label: "Contact", path: "/contact" }
  ];

  const handleLinkClick = () => {
    setNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 left-0 w-full flex justify-center items-center z-50 transition-all duration-300 px-4">
      <div 
        className={`max-w-6xl w-full mx-auto px-5 py-2.5 flex justify-between items-center rounded-2xl transition-all duration-300 border ${
          scrolled 
            ? 'bg-zinc-950/90 backdrop-blur-xl border-zinc-800 shadow-2xl shadow-blue-500/5' 
            : 'bg-zinc-900/80 backdrop-blur-md border-zinc-800/80 shadow-lg'
        }`}
      >
        {/* Brand Logo & Name */}
        <Link 
          to="/" 
          onClick={handleLinkClick}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center border border-blue-400/30 shadow-md group-hover:scale-105 transition-transform duration-300">
            <span className="text-white font-extrabold text-base tracking-tighter">NV</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black tracking-wider uppercase text-sm group-hover:text-blue-400 transition-colors duration-300">
              {portfolioData.personal.fullName}
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-tight flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              SDE & Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation matching screenshot */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-950/60 p-1 rounded-2xl border border-zinc-800/60">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={handleLinkClick}
                className={`px-3.5 py-1.5 rounded-xl text-xs xl:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs lg:text-sm font-semibold rounded-xl transition-all duration-300 shadow-md shadow-blue-500/20 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            <span>Contact Me</span>
          </Link>

          <button
            onClick={() => setNavOpen(!navOpen)}
            className="menu-btn lg:hidden text-zinc-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {navOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 p-4 bg-zinc-950/95 backdrop-blur-2xl border border-zinc-800 rounded-2xl shadow-2xl flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={handleLinkClick}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2 mt-1 border-t border-zinc-800/80">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-xl shadow-md"
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
