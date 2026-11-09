import React from 'react';
import { Building2, Server, Database, Sparkles, GraduationCap, FileCheck } from 'lucide-react';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import Card, { CardHeader, CardTitle, CardContent } from '../common/Card';
import Badge from '../common/Badge';

export const AboutSection: React.FC = () => {
  return (
    <Section id="about" surface="default" borderTop borderBottom>
      <SectionHeading
        eyebrow="Background & Focus"
        title="About"
        highlight="Me"
        description="A grounded software engineer combining commercial core banking experience with practical full-stack development and applied deep learning research."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        {/* Narrative Description */}
        <div className="lg:col-span-7 space-y-4 text-base text-zinc-300 leading-relaxed">
          <p>
            I am a <strong className="text-white font-medium">Functional Engineer</strong> at{' '}
            <strong className="text-cyan-300 font-medium">Sonali Intellect Limited (SIL)</strong>, an enterprise financial technology provider powering core banking software for major institutions including Sonali Bank and Rupali Bank.
          </p>

          <p>
            My commercial responsibilities center on enterprise backend systems utilizing{' '}
            <span className="text-zinc-100 font-medium">Java 17/21, Spring Boot, and Spring MVC</span>. I focus on financial transaction workflows, secure authentication, role-based authorization, and relational database integrity across MySQL and MS SQL Server.
          </p>

          <p>
            I graduated with a <strong className="text-white font-medium">Bachelor of Science in Computer Science and Engineering</strong> from{' '}
            <span className="text-zinc-100 font-medium">Ahsanullah University of Science and Technology (AUST)</span>. During my academic career, I co-authored{' '}
            <strong className="text-cyan-300 font-medium">4 peer-reviewed research publications</strong> published through Springer, IEEE ICCIT 2025, IEEE QPAIN 2025, and IJAIT, serving as 2nd Author on each study.
          </p>

          <p>
            Beyond enterprise banking, I develop practical full-stack web applications and explore applied AI systems, including computer vision pathology classification and retrieval-augmented generation (RAG) pipelines.
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <Badge variant="cyan" mono>Enterprise Core Banking</Badge>
            <Badge variant="cyan" mono>Java 17/21 &amp; Spring Boot</Badge>
            <Badge variant="default" mono>B.Sc. in CSE (AUST)</Badge>
            <Badge variant="indigo" mono>4 Research Papers (2nd Author)</Badge>
          </div>
        </div>

        {/* 3 Structured Pillars Cards */}
        <div className="lg:col-span-5 space-y-4">
          <Card hoverEffect className="p-1">
            <CardHeader className="flex-row items-center gap-3 pb-2">
              <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <CardTitle as="h3" className="text-base text-white">
                  Enterprise Backend Engineering
                </CardTitle>
                <span className="text-xs text-zinc-400 font-mono">Sonali Intellect Limited</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Core banking software services, secure financial transaction processing, JWT authentication, and Spring Boot REST API architectures.
              </p>
            </CardContent>
          </Card>

          <Card hoverEffect className="p-1">
            <CardHeader className="flex-row items-center gap-3 pb-2">
              <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-400">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <CardTitle as="h3" className="text-base text-white">
                  Relational Data Integrity
                </CardTitle>
                <span className="text-xs text-zinc-400 font-mono">ACID &amp; Schema Design</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Schema modeling, transactional consistency, and query tuning across MySQL, MS SQL Server, and Supabase PostgreSQL.
              </p>
            </CardContent>
          </Card>

          <Card hoverEffect className="p-1">
            <CardHeader className="flex-row items-center gap-3 pb-2">
              <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <CardTitle as="h3" className="text-base text-white">
                  Academic Research &amp; Applied AI
                </CardTitle>
                <span className="text-xs text-zinc-400 font-mono">Springer &amp; IEEE Conferences</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Empirical research in deep learning computer vision, blockchain mobility platforms, and healthcare IoT sensor monitoring.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
