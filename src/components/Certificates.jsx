import React from 'react';
import { Award, Cloud, Trophy, CheckCircle, Sparkles, ShieldCheck, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certificates = () => {
  const { certificates } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu': return <Cpu size={24} />;
      case 'Cloud': return <Cloud size={24} />;
      case 'Trophy': return <Trophy size={24} />;
      default: return <Award size={24} />;
    }
  };

  return (
    <section className="py-20 md:py-24 bg-zinc-950/60 relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs md:text-sm font-medium mb-4">
            <Award size={15} />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="headline-2 text-white mb-4">
            Certifications & Technical Recognition
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Continuous validation of technical skills through industry programs, hackathons, and certified assessments.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 shadow-lg group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${cert.color}`}>
                    {getIcon(cert.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400">
                    Verified
                  </span>
                </div>

                <span className="text-xs font-mono text-cyan-400/90">{cert.category}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-1 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-zinc-400 mb-3">{cert.issuer}</p>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-800/80 flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <CheckCircle size={14} />
                <span>Credly / Official Certificate</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
