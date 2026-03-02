import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, HeartHandshake, Scale } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Unmatched Trust',
    description: 'We act as your dedicated partner, ensuring that every manufacturer is vetted and reliable.',
  },
  {
    icon: Scale,
    title: 'Ethical Model',
    description: 'Our commission-based model means our interests are perfectly aligned with yours. We succeed when you do.',
  },
  {
    icon: Zap,
    title: 'Speed to Market',
    description: 'Our established network allows us to source products faster than traditional methods.',
  },
  {
    icon: HeartHandshake,
    title: 'Global Communication',
    description: 'With expertise in international trade, we handle communication seamlessly across time zones and cultures.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-primary text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6 border border-white/10">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              The Gold Standard in <span className="italic opacity-60">Sourcing Excellence.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-xl">
              We don't just find suppliers; we build sustainable supply chains that empower Egyptian businesses to compete on a global scale.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  <reason.icon className="w-10 h-10 mb-6 text-white/80" />
                  <h3 className="text-xl font-serif font-bold mb-3">{reason.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[3/4] border-8 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1000"
                alt="Logistics and Warehousing"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
