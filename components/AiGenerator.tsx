import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Loader2, Copy } from 'lucide-react';

const AiGenerator: React.FC = () => {
  const [videoTitle, setVideoTitle] = useState('');
  const [concepts, setConcepts] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateConcepts = async () => {
    if (!videoTitle.trim()) return;
    
    setLoading(true);
    setConcepts(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

      const prompt = `
        You are a YouTube viral expert. 
        For the video title: "${videoTitle}", provide 3 distinct, high-CTR thumbnail concepts.
        Format the output as a simple Markdown list. 
        For each concept, provide:
        1. Visual Description (Short)
        2. Text Overlay (Short, Punchy)
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setConcepts(response.text);

    } catch (error) {
      console.error("Error generating content:", error);
      setConcepts("Error: Could not access Gemini API. Please ensure API_KEY is set in the environment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-midnight border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-slate-900/50 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-brand/5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 mb-4 border border-white/10">
              <Sparkles className="w-4 h-4 text-neon-brand" />
              <span className="text-xs font-bold text-white tracking-wide uppercase">Powered by Gemini AI</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-2">Free Concept Generator</h2>
            <p className="text-slate-400">Stuck on ideas? Let AI brainstorm the visual hook for your next video.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Enter your video title..."
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              className="flex-1 bg-black border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neon-brand transition-colors placeholder:text-slate-600"
            />
            <button
              onClick={generateConcepts}
              disabled={loading || !videoTitle}
              className="bg-neon-brand hover:bg-neon-brand/90 text-black font-bold px-8 py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 min-w-[160px]"
            >
              {loading ? <Loader2 className="animate-spin" /> : 'Generate'}
            </button>
          </div>

          {concepts && (
            <div className="bg-black rounded-xl p-6 border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                 <h3 className="text-neon-brand font-mono text-sm font-bold uppercase">AI Suggested Concepts</h3>
                 <Copy className="w-4 h-4 text-slate-500 cursor-pointer hover:text-white" />
               </div>
               <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed">
                 <pre className="whitespace-pre-wrap font-sans">{concepts}</pre>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiGenerator;