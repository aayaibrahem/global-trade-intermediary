import React from 'react';
import { motion } from 'motion/react';
import { Search, Factory, Handshake } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    icon: Search,
    description: 'We discuss your specific product requirements, target price points, and volume expectations.',
  },
  {
    number: '02',
    title: 'Manufacturer Sourcing',
    icon: Factory,
    description: 'We identify potential manufacturers that meet your quality and price standards.',
  },
  {
    number: '03',
    title: 'Order Placement',
    icon: Handshake,
    description: 'We negotiate final terms and oversee the production process for your order.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/10">
              The Process
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
              A Seamless Bridge from <span className="italic text-muted">Factory to Importer.</span>
            </h2>
          </div>
          <p className="text-lg text-muted max-w-sm">
            Our systematic approach ensures transparency and reliability at every stage of the sourcing process.
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <step.icon className="w-6 h-6 text-primary/60" />
                  <h3 className="text-xl font-serif font-bold text-primary">{step.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
