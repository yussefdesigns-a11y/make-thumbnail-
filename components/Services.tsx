import React from 'react';
import { SERVICES } from '../constants';
import { Search, PenTool, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  search: Search,
  pen: PenTool,
  'trending-up': TrendingUp,
  check: CheckCircle2
};

const Services: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-midnight relative overflow-hidden border-t border-white/5">
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
         <div className="absolute top-1/4 left-0 w-full h-px bg-neon-brand"></div>
         <div className="absolute top-2/3 left-0 w-full h-px bg-white"></div>
         <div className="absolute left-1/4 top-0 h-full w-px bg-white"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-black text-white mb-4">THE BLUEPRINT</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A scientific approach to creative design. We don't guess; we engineer for clicks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-neon-brand/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-full bg-slate-900/50 border border-white/10 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-neon-brand group-hover:text-black group-hover:bg-neon-brand transition-colors">
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-slate-600 text-sm font-mono">0{service.id}.</span> 
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;