import React from 'react';
import { motion } from 'motion/react';
import { Search, ShieldCheck, Truck, FileText, Users, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet the most reliable Chinese manufacturers specializing in premium cosmetics and skincare.',
  },
  {
    icon: FileText,
    title: 'Negotiation & Contracts',
    description: 'Securing the best prices and terms through professional negotiation, backed by legally sound international contracts.',
  },
  {
    icon: BarChart3,
    title: 'Market Analysis',
    description: 'Insights into trending skincare ingredients and packaging designs to keep your business ahead of the curve.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/10">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Comprehensive Sourcing <span className="italic text-muted">Solutions.</span>
          </h2>
          <p className="text-lg text-muted">
            We handle the complexities of international trade so you can focus on growing your business in Egypt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
