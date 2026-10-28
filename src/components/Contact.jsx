import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github, Code2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitted: false, loading: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus({ submitted: false, loading: true });

    setTimeout(() => {
      setStatus({ submitted: true, loading: false });
      
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      // Mailto backup trigger
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Neha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-zinc-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-medium mb-4">
            <Mail size={15} />
            <span>Get in Touch</span>
          </div>
          <h2 className="headline-2 text-white mb-4">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            I am actively looking for Software Engineering and MERN Stack opportunities. Whether you have a question, a project idea, or a position to discuss, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Info & Social Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Information</h3>
              <p className="text-xs text-zinc-400 mb-8 leading-relaxed">
                Feel free to connect directly via email, phone, or professional platforms.
              </p>

              <div className="space-y-5">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-cyan-500/50 hover:bg-zinc-900 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-zinc-400">Email Address</p>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {personal.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-zinc-400">Phone Number</p>
                    <p className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {personal.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-zinc-400">Location</p>
                    <p className="text-sm font-semibold text-white">
                      {personal.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-8 mt-8 border-t border-zinc-800/80">
              <p className="text-xs font-mono text-zinc-400 mb-4">Connect on Social Profiles:</p>
              <div className="flex items-center gap-3">
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={personal.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-amber-500 hover:bg-amber-500/10 transition-all hover:-translate-y-1"
                  aria-label="LeetCode"
                >
                  <Code2 size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-zinc-400 mb-6">
              Drop a note directly to my inbox and I will reply as promptly as possible.
            </p>

            {status.submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>Thank you! Your message inquiry has been recorded and prepared.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="text-field"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    className="text-field"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. SDE Opportunity / Project Discussion"
                  className="text-field"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your inquiry or role..."
                  className="text-field resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0"
              >
                {status.loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Submit & Send Email</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
