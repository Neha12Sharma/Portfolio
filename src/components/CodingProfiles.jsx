import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, RefreshCw, Trophy, Flame, CheckCircle, Terminal, Github, Linkedin, Award, Medal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CodingProfiles = () => {
  const { codingProfiles, achievements } = portfolioData;
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    leetcode: { solved: "Active", easy: "--", medium: "--", hard: "--", ranking: "Top Active" }
  });

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://leetcode-stats-api.herokuapp.com/Neha8168');
      if (res.ok) {
        const data = await res.json();
        if (data.status === 'success' && data.totalSolved) {
          setStats({
            leetcode: {
              solved: `${data.totalSolved} Solved`,
              easy: `${data.easySolved || 0} Easy`,
              medium: `${data.mediumSolved || 0} Med`,
              hard: `${data.hardSolved || 0} Hard`,
              ranking: `Ranking #${data.ranking?.toLocaleString() || 'Active'}`
            }
          });
        }
      }
    } catch (err) {
      console.log('Using default coding stats fallback');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const getIcon = (platform) => {
    switch (platform) {
      case 'LeetCode':
        return <Code2 size={24} />;
      case 'HackerRank':
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm1.75 16.7h-3.5v-3.79H8.16v3.79H4.66V7.3h3.5v3.61h3.59V7.3h3.5v9.4zm5.59-4.7a4.7 4.7 0 1 1-9.4 0 4.7 4.7 0 0 1 9.4 0z" />
          </svg>
        );
      case 'Github':
      case 'GitHub':
        return <Github size={24} />;
      case 'Linkedin':
      case 'LinkedIn':
        return <Linkedin size={24} />;
      default:
        return <Terminal size={24} />;
    }
  };

  return (
    <section id="coding" className="py-20 md:py-28 bg-zinc-950/60 relative overflow-hidden border-t border-b border-zinc-900">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs md:text-sm font-medium mb-3">
              <Trophy size={15} />
              <span>Coding Profiles & Achievements</span>
            </div>
            <h2 className="headline-2 text-white">
              Data Structures, Algorithms & Problem Solving
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-2xl">
              Consistent practice in C, C++, Python, and JavaScript. Applying algorithmic rigor across HackerRank, LeetCode, and open-source repositories.
            </p>
          </div>

          <button
            onClick={fetchStats}
            disabled={loading}
            className="self-start md:self-end inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 rounded-xl text-xs font-mono transition-colors"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin text-cyan-400' : ''} />
            <span>{loading ? 'Refreshing...' : 'Live LeetCode Sync'}</span>
          </button>
        </div>

        {/* Coding Profiles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {codingProfiles.map((profile, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-zinc-950 border ${profile.borderColor} hover:border-zinc-500 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-lg group`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center ${profile.textColor}`}>
                    {getIcon(profile.platform)}
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 ${profile.textColor}`}>
                    {profile.badge}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {profile.platform}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-0.5">@{profile.handle}</p>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
                  {profile.stats}
                </p>

                {profile.platform === 'LeetCode' && (
                  <div className="mt-4 p-3 bg-zinc-950/80 rounded-xl border border-zinc-800/80 text-xs">
                    <div className="flex items-center justify-between text-zinc-300 font-mono mb-2">
                      <span className="flex items-center gap-1.5 text-amber-400">
                        <Flame size={14} /> Solved Stats
                      </span>
                      <span className="font-bold text-white">{stats.leetcode.solved}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 text-[11px] text-center font-mono">
                      <span className="p-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Easy</span>
                      <span className="p-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">Med</span>
                      <span className="p-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">Hard</span>
                    </div>
                  </div>
                )}

                {profile.platform === 'HackerRank' && (
                  <div className="mt-4 p-3 bg-zinc-950/80 rounded-xl border border-zinc-800/80 text-xs">
                    <div className="flex items-center justify-between text-zinc-300 font-mono mb-2">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Award size={14} /> Verified Rank
                      </span>
                      <span className="font-bold text-emerald-300">Gold Badges</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] text-center font-mono">
                      <span className="p-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Problem Solving</span>
                      <span className="p-1 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">C++ / Python</span>
                    </div>
                  </div>
                )}

                <div className="mt-5 space-y-2">
                  {profile.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle size={13} className="text-cyan-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/80">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-semibold text-zinc-200 hover:text-white transition-all group-hover:border-zinc-700"
                >
                  <span>View Official Profile</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        {achievements && achievements.length > 0 && (
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Medal size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Key Achievements & Badges</h3>
                <p className="text-xs text-zinc-400">Verified competitive programming, hackathon and cloud milestones</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-all flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Trophy size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-cyan-400">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{item.desc}</p>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:underline mt-2 font-medium"
                      >
                        <span>Verify on {item.platform}</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
