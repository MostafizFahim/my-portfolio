import React from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, Terminal, Shield, Database, Cpu } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import Badge from '../common/Badge';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
      aria-label="Introduction and Summary"
    >
      {/* Ambient background grid pattern and radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 30%, rgba(6, 182, 212, 0.15), transparent 60%), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-zinc-400">Functional Engineer</span>
              <span className="text-zinc-600">•</span>
              <span className="text-cyan-400 font-medium">Sonali Intellect Limited</span>
            </div>

            {/* Headline and Identity */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Mostafizur Rahman <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-white">
                  Fahim
                </span>
              </h1>
              <p className="font-mono text-base sm:text-lg text-cyan-300 font-medium">
                Software Engineer • Backend Engineer • Full Stack AI
              </p>
            </div>

            {/* Concise Summary */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Engineering enterprise core banking backend workflows, financial transaction services, and secure REST APIs at{' '}
              <strong className="text-zinc-200 font-semibold">Sonali Intellect Limited</strong> using Java 17/21, Spring Boot, and relational databases. Actively exploring deep learning research, computer vision, and applied LLM systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="md"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                View Selected Projects
              </Button>
              <Button
                href="/resume"
                variant="outline"
                size="md"
                iconLeft={<FileText className="w-4 h-4 text-cyan-400" />}
              >
                View Resume
              </Button>
              <Button
                href="mailto:mostafizfahim@gmail.com"
                variant="ghost"
                size="md"
                iconLeft={<Mail className="w-4 h-4 text-zinc-400" />}
              >
                Get In Touch
              </Button>
            </div>

            {/* Verified External Profiles */}
            <div className="pt-4 flex items-center gap-4 text-sm text-zinc-400">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Verified Profiles:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/MostafizFahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mostafiz-fahim-a430b1230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Technical Architecture Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/[0.08] bg-zinc-900/80 backdrop-blur-md p-6 shadow-2xl text-left overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>fahim@engineer:~$</span>
                </div>
              </div>

              {/* Code Snippet / Architectural Overview */}
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-zinc-400">// Primary Engineering Stack</span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <Badge variant="cyan" mono size="sm">Java 17/21</Badge>
                    <Badge variant="cyan" mono size="sm">Spring Boot</Badge>
                    <Badge variant="cyan" mono size="sm">REST APIs</Badge>
                    <Badge variant="default" mono size="sm">MySQL</Badge>
                    <Badge variant="default" mono size="sm">MS SQL Server</Badge>
                    <Badge variant="default" mono size="sm">PostgreSQL</Badge>
                    <Badge variant="default" mono size="sm">React</Badge>
                    <Badge variant="default" mono size="sm">TypeScript</Badge>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.04]">
                  <span className="text-zinc-400">// Current Commercial Role</span>
                  <div className="mt-1.5 text-zinc-300">
                    <span className="text-cyan-400">organization</span>: &quot;Sonali Intellect Limited&quot;,<br />
                    <span className="text-cyan-400">domain</span>: &quot;Core Banking Software Solutions&quot;,<br />
                    <span className="text-cyan-400">clients</span>: [&quot;Sonali Bank&quot;, &quot;Rupali Bank&quot;],<br />
                    <span className="text-cyan-400">focus</span>: &quot;Transaction Integrity &amp; Backend Services&quot;
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.04]">
                  <span className="text-zinc-400">// Research &amp; Academic Honors</span>
                  <div className="mt-1.5 text-zinc-300">
                    <span className="text-cyan-400">degree</span>: &quot;B.Sc. in CSE (AUST)&quot;,<br />
                    <span className="text-cyan-400">publications</span>: &quot;4 Published Papers (2nd Author)&quot;,<br />
                    <span className="text-cyan-400">venues</span>: [&quot;Springer&quot;, &quot;IEEE ICCIT&quot;, &quot;IEEE QPAIN&quot;, &quot;IJAIT&quot;]
                  </div>
                </div>
              </div>

              {/* Verified Badge Footer */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Shield className="w-3.5 h-3.5" /> Verified Commercial &amp; Academic History
                </span>
                <span className="text-zinc-400">Dhaka, BD</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
