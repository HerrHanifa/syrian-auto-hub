
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border/50 mt-20">
      <div className="container-custom py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl font-bold text-syria-terracotta">Syrian</span>
                <span className="font-serif text-xl font-bold">Auto Hub</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              The premier marketplace for buying, selling, and renting vehicles in Syria. Connect with dealers and private sellers today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-syria-terracotta transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-syria-terracotta transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-syria-terracotta transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-syria-terracotta transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'New & Used Cars', path: '/car-listings' },
                { name: 'Car Rentals', path: '/rentals' },
                { name: 'Spare Parts', path: '/spare-parts' },
                { name: 'Know Your Needs', path: '/know-your-needs' },
                { name: 'Sell Your Car', path: '/list-car' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-syria-terracotta transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms & Conditions', path: '/terms' },
                { name: 'FAQs', path: '/faqs' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-syria-terracotta transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-syria-terracotta mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Damascus, Syria
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-syria-terracotta mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  +963 11 123 4567
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-syria-terracotta mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  info@syrianautohub.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="separator" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Syrian Auto Hub. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
