import React, { useState } from 'react';
import { Mail, Github, Linkedin, BookOpen, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import Card, { CardHeader, CardTitle, CardContent } from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'mostafizfahim@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <Section id="contact" surface="default">
      <SectionHeading
        eyebrow="Contact & Collaboration"
        title="Get In"
        highlight="Touch"
        description="Open to software engineering opportunities, backend development roles, and research collaborations."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {/* Email Card */}
        <Card hoverEffect className="flex flex-col justify-between border border-cyan-800/30 bg-cyan-950/20">
          <CardHeader className="pb-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-700/50 flex items-center justify-center text-cyan-300 mb-2">
              <Mail className="w-5 h-5" />
            </div>
            <CardTitle as="h3" className="text-base text-white">
              Direct Email
            </CardTitle>
            <p className="text-xs text-zinc-400 font-mono break-all pt-1">
              {emailAddress}
            </p>
          </CardHeader>
          <CardContent className="pt-0 flex gap-2">
            <Button
              href={`mailto:${emailAddress}`}
              variant="primary"
              size="sm"
              className="flex-1"
            >
              Compose
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              iconLeft={
                copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                )
              }
            >
              {copied ? 'Copied' : 'Copy'}
            </Button>
          </CardContent>
        </Card>

        {/* LinkedIn Card */}
        <Card hoverEffect className="flex flex-col justify-between border border-white/[0.08] bg-zinc-900/60">
          <CardHeader className="pb-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-2">
              <Linkedin className="w-5 h-5 text-cyan-400" />
            </div>
            <CardTitle as="h3" className="text-base text-white">
              LinkedIn
            </CardTitle>
            <p className="text-xs text-zinc-400 pt-1">
              Professional network, career background, and endorsements.
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            <Button
              href="https://www.linkedin.com/in/mostafiz-fahim-a430b1230"
              variant="outline"
              size="sm"
              fullWidth
              iconRight={<ExternalLink className="w-3.5 h-3.5" />}
            >
              Connect
            </Button>
          </CardContent>
        </Card>

        {/* GitHub Card */}
        <Card hoverEffect className="flex flex-col justify-between border border-white/[0.08] bg-zinc-900/60">
          <CardHeader className="pb-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-2">
              <Github className="w-5 h-5 text-cyan-400" />
            </div>
            <CardTitle as="h3" className="text-base text-white">
              GitHub
            </CardTitle>
            <p className="text-xs text-zinc-400 pt-1">
              Open-source repositories, experiments, and thesis code.
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            <Button
              href="https://github.com/MostafizFahim"
              variant="outline"
              size="sm"
              fullWidth
              iconRight={<ExternalLink className="w-3.5 h-3.5" />}
            >
              Follow
            </Button>
          </CardContent>
        </Card>

        {/* ResearchGate Card */}
        <Card hoverEffect className="flex flex-col justify-between border border-white/[0.08] bg-zinc-900/60">
          <CardHeader className="pb-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
            </div>
            <CardTitle as="h3" className="text-base text-white">
              ResearchGate
            </CardTitle>
            <p className="text-xs text-zinc-400 pt-1">
              Academic publications, conference proceedings, and citations.
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            <Button
              href="https://www.researchgate.net/profile/Mostafiz-Fahim/research"
              variant="outline"
              size="sm"
              fullWidth
              iconRight={<ExternalLink className="w-3.5 h-3.5" />}
            >
              View Papers
            </Button>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default ContactSection;
