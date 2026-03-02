import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-square">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
              alt="Business Meeting"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-primary text-white p-10 rounded-3xl hidden md:block z-20 shadow-2xl">
            <p className="text-2xl font-serif font-bold mb-1 italic">Export Expert</p>
            <p className="text-sm font-medium uppercase tracking-widest opacity-80">European Market Experience</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/10">
            About Our Agency
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
            Your Professional Intermediary in <span className="italic text-muted">Global Trade.</span>
          </h2>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            Based in Egypt, we specialize in bridging the gap between Egyptian importers and the vast manufacturing landscape of China. 
            With a background in export sales to the European market, we bring a high standard of professionalism and efficiency to every partnership.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              'Commission-based model with full transparency',
              'No direct sales - we work for your success',
              'Deep understanding of Egyptian market regulations',
              'Direct access to top-tier Chinese manufacturers'
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary mt-0.5" />
                <span className="text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-accent transition-all shadow-xl shadow-primary/20"
          >
            Learn More About Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
