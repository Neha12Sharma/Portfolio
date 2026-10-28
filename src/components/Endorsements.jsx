import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Quote, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Endorsements = () => {
  const { endorsements = [] } = portfolioData;

  // Duplicate the array so it scrolls seamlessly in an infinite loop
  const trainItems = [...endorsements, ...endorsements];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Continuous Infinite Testimonial Train Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-medium mb-4">
            <MessageSquare size={16} />
            <span>Continuous Infinite Testimonial Train</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Mentors & Peer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              Endorsements
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-zinc-400 text-base md:text-lg">
            Hover over any testimonial card to pause the continuous sliding train animation.
          </p>
        </motion.div>
      </div>

      {/* Testimonial Sliding Train */}
      <div className="w-full overflow-hidden flex py-4 relative group">
        {/* Left & Right subtle gradient fade edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

        {/* Sliding track moving from right to left with hover pause */}
        <div className="flex gap-6 w-max animate-train hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {trainItems.map((item, index) => (
            <div
              key={index}
              className="w-[340px] md:w-[420px] shrink-0"
            >
              <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-8 rounded-[2rem] flex flex-col h-full shadow-xl hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 group/card overflow-hidden">
                {/* Background rotated Quote watermark */}
                <Quote className="absolute top-4 right-4 w-28 h-28 text-zinc-800/30 -rotate-12 group-hover/card:text-blue-500/10 transition-colors pointer-events-none" />

                {/* 5 Yellow Stars with Glowing drop-shadow */}
                <div className="flex items-center gap-1.5 mb-6 z-10 relative">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]"
                    />
                  ))}
                </div>

                {/* Testimonial Quote Text */}
                <p className="text-zinc-300 mb-8 text-base leading-relaxed z-10 relative font-medium italic">
                  "{item.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto z-10 relative border-t border-zinc-800/50 pt-5">
                  <figure className="w-14 h-14 rounded-full overflow-hidden border-2 border-zinc-700 group-hover/card:border-blue-400 transition-colors shadow-lg shrink-0 bg-zinc-800">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      width={56}
                      height={56}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback in case of image load failure
                        e.target.style.display = 'none';
                      }}
                    />
                  </figure>
                  <div>
                    <p className="text-white font-bold text-lg tracking-wide">{item.name}</p>
                    <p className="text-xs md:text-sm text-blue-400 font-semibold uppercase tracking-wider mt-0.5">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};