import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Globe2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/10">
            <Globe2 className="w-4 h-4" />
            Connecting Egypt to China's Best
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary leading-[1.1] mb-6">
            Your Trusted Partner in <span className="italic text-muted">Global Sourcing.</span>
          </h1>
          
          <p className="text-lg text-muted max-w-lg mb-10 leading-relaxed">
            We bridge the gap between Egyptian businesses and premium Chinese manufacturers. 
            Specializing in high-end cosmetics and skincare sourcing with zero direct sales.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group bg-primary text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-accent transition-all shadow-xl shadow-primary/20"
            >
              Start Sourcing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full font-semibold border border-primary/20 text-primary hover:bg-primary/5 transition-all"
            >
              Our Services
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-primary/10">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-serif font-bold text-primary">100%</span>
              <span className="text-xs text-muted uppercase tracking-wider font-semibold">Reliable</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-serif font-bold text-primary">Trusted</span>
              <span className="text-xs text-muted uppercase tracking-wider font-semibold">Network</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-serif font-bold text-primary">24/7</span>
              <span className="text-xs text-muted uppercase tracking-wider font-semibold">Support</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/30 aspect-[4/5] lg:aspect-square">
            <img
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1000"
              alt="Premium Skincare Products"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
