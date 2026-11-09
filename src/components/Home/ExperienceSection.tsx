import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import Card, { CardHeader, CardTitle, CardContent } from '../common/Card';
import Badge from '../common/Badge';
import { experienceData } from '../../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" borderBottom>
      <SectionHeading
        eyebrow="Commercial & Internship"
        title="Professional"
        highlight="Experience"
        description="Verified enterprise banking backend tenure and formal engineering internship deliverables at Sonali Intellect Limited."
      />

      <div className="space-y-8 text-left">
        {/* Company Header Card */}
        <div className="p-5 sm:p-6 rounded-xl border border-white/[0.08] bg-surface-card/60 backdrop-blur-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {experienceData.company}
                </h3>
                <span className="text-xs text-zinc-400 font-mono">
                  {experienceData.companyShort} • {experienceData.location}
                </span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 max-w-2xl pt-1">
              {experienceData.companyContext}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center">
            <Badge variant="cyan" mono dot>
              Active Employment
            </Badge>
          </div>
        </div>

        {/* Roles Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-10">
          {experienceData.roles.map((role, idx) => (
            <div key={role.title} className="relative group">
              {/* Timeline dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  role.type === 'permanent'
                    ? 'border-cyan-400 bg-cyan-950 shadow-glow-cyan-sm'
                    : 'border-zinc-500 bg-zinc-900'
                }`}
              />

              <Card hoverEffect className="overflow-hidden">
                <CardHeader className="flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <CardTitle as="h3" className="text-lg sm:text-xl text-white">
                        {role.title}
                      </CardTitle>
                      <Badge
                        variant={role.type === 'permanent' ? 'cyan' : 'default'}
                        size="sm"
                        mono
                      >
                        {role.type === 'permanent' ? 'Permanent' : 'Internship'}
                      </Badge>
                    </div>
                    <span className="text-xs text-cyan-400 font-mono mt-1 block">
                      Sonali Intellect Limited
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{role.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {role.summary}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Core Responsibilities:
                    </span>
                    <ul className="space-y-2">
                      {role.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Internship Deliverables (if present) */}
                  {role.deliverables && role.deliverables.length > 0 && (
                    <div className="pt-3 border-t border-white/[0.04] space-y-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                        Key Internship Deliverables:
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {role.deliverables.map((del) => (
                          <div
                            key={del.name}
                            className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800/80 space-y-1.5"
                          >
                            <h4 className="text-sm font-semibold text-zinc-200">
                              {del.name}
                            </h4>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                              {del.description}
                            </p>
                            <div className="flex flex-wrap gap-1 pt-1">
                              {del.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" size="sm" mono>
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Commercial Confidentiality Notice */}
        <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 flex items-center gap-3 text-xs text-zinc-400">
          <Lock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <span>
            <strong className="text-zinc-300">Confidentiality Note:</strong> Production core banking systems, client-specific database schemas, and proprietary internal codebases at Sonali Intellect Limited are enterprise-confidential and not publicly hosted.
          </span>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
