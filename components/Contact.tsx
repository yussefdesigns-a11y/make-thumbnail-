import React from 'react';
import { Mail, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-black text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-5xl font-display font-black mb-6">LET'S BUILD <br/> THE NEXT VIRAL HIT.</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Currently accepting new clients for Q4. Book a slot now to secure your channel's growth.
            </p>
            
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-neon-brand transition-colors">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-neon-brand/50 transition-colors">
                  <Mail size={20} />
                </div>
                <span>hello@thumbnailarchitect.com</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-neon-brand transition-colors">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-neon-brand/50 transition-colors">
                  <Twitter size={20} />
                </div>
                <span>@thumbnailarchitect</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-neon-brand transition-colors">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-neon-brand/50 transition-colors">
                  <Linkedin size={20} />
                </div>
                <span>/in/thumbnailarchitect</span>
              </a>
            </div>
          </div>

          <form className="bg-slate-900/50 p-8 rounded-2xl border border-white/10">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Name</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-neon-brand outline-none transition-colors" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Email</label>
                <input type="email" className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-neon-brand outline-none transition-colors" />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Channel Link</label>
              <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-neon-brand outline-none transition-colors" />
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Project Details</label>
              <textarea rows={4} className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-neon-brand outline-none transition-colors"></textarea>
            </div>

            <button type="button" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-slate-200 transition-colors">
              Send Request
            </button>
          </form>

        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} The Thumbnail Architect. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;