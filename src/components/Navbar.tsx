
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Car, ShoppingBag, Clock, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'New & Used Cars', path: '/car-listings', icon: <Car size={16} /> },
    { name: 'Rentals', path: '/rentals', icon: <Clock size={16} /> },
    { name: 'Spare Parts', path: '/spare-parts', icon: <ShoppingBag size={16} /> },
    { name: 'Know Your Needs', path: '/know-your-needs', icon: <HelpCircle size={16} /> },
  ];

  return (
    <header
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md',
        scrolled || isOpen ? 'bg-background/90 shadow-sm border-b border-border/50' : 'bg-transparent'
      )}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2"
            onClick={closeMenu}
          >
            <span className="font-serif text-xl font-bold text-syria-terracotta">Syrian</span>
            <span className="font-serif text-xl font-bold">Auto Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'flex items-center gap-1.5 py-1 font-medium text-sm transition-colors',
                  location.pathname === link.path
                    ? 'text-syria-terracotta'
                    : 'text-foreground/80 hover:text-syria-terracotta'
                )}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-syria-terracotta transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="button-primary text-sm"
            >
              List Your Car
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/50 shadow-md animate-fade-in">
            <div className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'flex items-center gap-2 py-2 font-medium transition-colors',
                    location.pathname === link.path
                      ? 'text-syria-terracotta'
                      : 'text-foreground/80'
                  )}
                  onClick={closeMenu}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <Link
                  to="/login"
                  className="py-2 font-medium text-foreground/80"
                  onClick={closeMenu}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="button-primary"
                  onClick={closeMenu}
                >
                  List Your Car
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
