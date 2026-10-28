import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Contact } from '../components/Contact';

export const ContactPage = () => {
  return (
    <div className="pt-28 pb-20 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-medium mb-4">
            <Mail size={15} />
            <span>Direct Inquiries</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Neha</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Interested in discussing full-time SDE roles, software engineering internships, or full-stack web applications? Send a message below.
          </p>
        </motion.div>
      </div>

      <Contact />
    </div>
  );
};
