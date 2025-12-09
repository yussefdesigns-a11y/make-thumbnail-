import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Eye, TrendingUp } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 relative bg-midnight border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-2">Selected Works</h2>
          <p className="text-slate-400">Curated high-performing assets from the archive.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="relative bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden shadow-xl transition-all duration-300 group-hover:border-neon-brand/50 group-hover:shadow-[0_0_30px_rgba(204,255,0,0.1)]">
                  
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-black px-6 py-2 rounded-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Case Study
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-bold text-lg leading-tight group-hover:text-neon-brand transition-colors">{project.title}</h3>
                      <span className="text-xs font-semibold text-slate-500 border border-slate-700 px-2 py-1 rounded">{project.category}</span>
                    </div>
                    
                    <div className="flex gap-4 mt-4 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-neon-brand">
                        <TrendingUp size={16} />
                        <span className="font-bold text-sm">{project.stats.ctr} CTR</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Eye size={16} />
                        <span className="font-bold text-sm">{project.stats.views} Views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;