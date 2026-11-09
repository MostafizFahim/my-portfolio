import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, Send } from 'lucide-react';
import { cn } from '../../utils/cn';
import Button from './Button';
import Container from './Container';

interface NavItem {
  label: string;
  href: string;
  isHash?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about', isHash: true },
  { label: 'Experience', href: '/#experience', isHash: true },
  { label: 'Projects', href: '/#projects', isHash: true },
  { label: 'Research', href: '/#research', isHash: true },
  { label: 'Resume', href: '/resume' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200 border-b',
        isScrolled
          ? 'bg-zinc-950/85 backdrop-blur-md border-white/[0.08] shadow-md shadow-black/20'
          : 'bg-zinc-950/40 backdrop-blur-sm border-transparent'
      )}
    >
      <Container size="wide">
        <nav
          className="flex items-center justify-between h-16 sm:h-20"
          aria-label="Main Navigation"
        >
          {/* Brand Monogram & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="Mostafiz Fahim Homepage"
          >
            <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-mono font-bold text-sm shadow-sm group-hover:border-cyan-400 group-hover:shadow-glow-cyan-sm transition-all">
              MF
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Mostafiz Fahim
              </span>
              <span className="font-mono text-[11px] text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Functional Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? location.pathname === '/' && !location.hash
                  : item.isHash
                  ? location.hash === item.href.replace('/', '')
                  : location.pathname === item.href;

              if (item.isHash && location.pathname === '/') {
                return (
                  <a
                    key={item.label}
                    href={item.href.replace('/', '')}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400',
                      isActive
                        ? 'text-cyan-300 bg-cyan-950/40'
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60'
                    )}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400',
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/40'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <Button
              href="/resume"
              variant="outline"
              size="sm"
              iconLeft={<FileText className="w-3.5 h-3.5 text-cyan-400" />}
            >
              Resume
            </Button>
            <Button
              href="mailto:mostafizfahim@gmail.com"
              variant="primary"
              size="sm"
              iconRight={<Send className="w-3.5 h-3.5" />}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors"
            aria-controls="mobile-nav"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-b border-white/[0.08] bg-zinc-950/95 backdrop-blur-xl animate-slide-down px-4 pt-3 pb-6 space-y-3"
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              if (item.isHash && location.pathname === '/') {
                return (
                  <a
                    key={item.label}
                    href={item.href.replace('/', '')}
                    onClick={() => handleNavClick(item.href)}
                    className="px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row gap-2">
            <Button
              href="/resume"
              variant="outline"
              size="md"
              fullWidth
              iconLeft={<FileText className="w-4 h-4 text-cyan-400" />}
            >
              Resume
            </Button>
            <Button
              href="mailto:mostafizfahim@gmail.com"
              variant="primary"
              size="md"
              fullWidth
              iconRight={<Send className="w-4 h-4" />}
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
