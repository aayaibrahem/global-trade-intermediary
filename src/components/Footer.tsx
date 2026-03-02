import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 md:pt-20 pb-10 border-t border-gray-100">
      <div className="container-custom px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-12 md:mb-20 text-center md:text-left">
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center md:items-start">
            <Logo className="w-12 h-12 mb-8 md:mb-10" />
            <p className="text-muted leading-relaxed mb-8">
              The premier intermediary for Egyptian businesses sourcing high-end cosmetics and skincare from China.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'How It Works', 'Why Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-muted hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-primary mb-6">Services</h4>
            <ul className="space-y-4">
              {['Supplier Sourcing', 'Negotiation', 'Market Analysis'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-muted hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-primary mb-6">Newsletter</h4>
            <p className="text-sm text-muted mb-6">Subscribe to get the latest insights on global sourcing trends.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-surface border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-lg text-sm font-bold hover:bg-accent transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-sm text-muted order-2 md:order-1">
            © {new Date().getFullYear()} Egypt-China Sourcing Agent. All rights reserved.
          </p>
          <div className="flex gap-8 order-1 md:order-2">
            <a href="#" className="text-sm text-muted hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
