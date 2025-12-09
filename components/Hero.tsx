import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 bg-grid-pattern bg-[length:40px_40px] opacity-20 pointer-events-none mask-gradient">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight/50 to-midnight"></div>
      </div>
      
      {/* Subtle Green Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-brand/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center relative">
        
        {/* Social Proof / Trusted By */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
        >
          <div className="flex -space-x-3">
             {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-midnight bg-slate-700 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Creator" className="w-full h-full object-cover" />
                </div>
             ))}
          </div>
          <span className="text-sm font-medium text-slate-300">
            Trusted by <span className="text-white font-bold">50+ creators</span> across all niches
          </span>
        </motion.div>
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-white tracking-tight max-w-5xl mb-8"
        >
          Thumbnails That Make Viewers Say <span className="text-neon-brand">'I Need to Watch This!'</span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 font-light"
        >
          Aspiring thumbnail designer and strategist helping creators and entrepreneurs stand out on YouTube with bold pricing and a 24–48 hour turnaround per thumbnail I deliver.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="px-8 py-4 bg-neon-brand text-black font-bold text-lg rounded-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(204,255,0,0.4)]">
            See my work
          </button>
          <button className="px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-slate-200 transition-colors shadow-lg">
            Contact me
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;