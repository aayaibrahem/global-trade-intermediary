import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = '201122755957';
    const text = `*New Sourcing Inquiry*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Company:* ${formData.company}%0A%0A` +
                 `*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success state in UI
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="container-custom px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/10">
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
              Let's Start Your <span className="italic text-muted">Next Project.</span>
            </h2>
            <p className="text-lg text-muted mb-10 leading-relaxed max-w-lg">
              Ready to elevate your business with premium Chinese skincare products? Our team is standing by to assist you.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest font-bold mb-1">Email Us</p>
                  <a 
                    href="mailto:aayaibraheemm@gmail.com" 
                    className="text-lg font-bold text-primary hover:text-accent transition-colors block"
                  >
                    aayaibraheemm@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest font-bold mb-1">Call Us</p>
                  <a 
                    href="tel:+201122755957" 
                    className="text-lg font-bold text-primary hover:text-accent transition-colors block"
                  >
                    +20 112 275 5957
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest font-bold mb-1">Visit Us</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=10th+of+Ramadan+City,+Egypt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-primary hover:text-accent transition-colors block"
                  >
                    10th of Ramadan City, Egypt
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-primary/5 border border-gray-100 relative overflow-hidden"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <CheckCircle className="w-20 h-20 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-muted">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-surface border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-surface border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted">Company Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-surface border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                    placeholder="Your Business Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-surface border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                    placeholder="Tell us about your sourcing needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-accent transition-all shadow-xl shadow-primary/20 group"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Inquiry
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
