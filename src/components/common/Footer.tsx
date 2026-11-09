import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, BookOpen, ArrowUp } from 'lucide-react';
import Container from './Container';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/MostafizFahim',
    icon: Github,
    label: 'Visit Mostafiz Fahim on GitHub',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mostafiz-fahim-a430b1230',
    icon: Linkedin,
    label: 'Connect with Mostafiz Fahim on LinkedIn',
  },
  {
    name: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/Mostafiz-Fahim/research',
    icon: BookOpen,
    label: 'View academic publications on ResearchGate',
  },
  {
    name: 'Email',
    href: 'mailto:mostafizfahim@gmail.com',
    icon: Mail,
    label: 'Send an email to Mostafiz Fahim',
  },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Research', href: '/#research' },
  { label: 'Resume', href: '/resume' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-zinc-950/90 text-zinc-400 mt-auto">
      <Container size="wide" className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-white/[0.06]">
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-mono font-bold text-xs">
                MF
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Mostafiz Fahim
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Functional Engineer at <span className="text-zinc-200">Sonali Intellect Limited</span>.
              Engineering core banking backend workflows and applied deep learning systems.
            </p>
            <div className="inline-flex items-center gap-2 pt-1 text-xs text-zinc-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for selected engineering collaborations</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith('/#') ? (
                    <a
                      href={item.href.replace('/', '')}
                      className="text-zinc-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-zinc-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-semibold">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 text-zinc-400" />
                      <span>{social.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {currentYear} Mostafizur Rahman Fahim. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-zinc-400">
              React 19 • Vite • TypeScript • Tailwind CSS
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
