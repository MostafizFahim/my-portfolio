import React, { useEffect, useState } from 'react';
import { Download, ExternalLink, FileText, Mail, MapPin, Briefcase, GraduationCap, Award, Shield, CheckCircle2 } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import Card, { CardHeader, CardTitle, CardContent } from '../components/common/Card';
import { experienceData } from '../data/experience';
import { educationData } from '../data/education';

export const ResumePage: React.FC = () => {
  const pdfPath = '/Mostafiz_Fahim_CV.pdf';
  const publicEmail = 'mostafizfahim@gmail.com';
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    document.title = 'Resume & Curriculum Vitae | Mostafizur Rahman Fahim';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 sm:py-16 text-left">
      <Container size="wide" className="space-y-10">
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.06]">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs font-medium tracking-wider text-cyan-300 uppercase">
                Curriculum Vitae
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Mostafizur Rahman Fahim
            </h1>

            <p className="text-base sm:text-lg text-cyan-300 font-mono">
              Functional Engineer &bull; Java &amp; Spring Boot Backend &bull; Enterprise Banking Systems
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 pt-1">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {publicEmail}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Dhaka, Bangladesh
              </span>
              <span>&bull;</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" />
                Verified Commercial Records
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-end flex-shrink-0">
            <Button
              href={pdfPath}
              download="Mostafiz_Fahim_CV.pdf"
              variant="primary"
              size="md"
              iconLeft={<Download className="w-4 h-4" />}
            >
              Download CV (PDF)
            </Button>

            <Button
              href={pdfPath}
              external
              variant="outline"
              size="md"
              iconRight={<ExternalLink className="w-4 h-4" />}
            >
              Open in New Tab
            </Button>
          </div>
        </div>

        {/* Two Column Layout: Structured Overview + Embedded PDF Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Structured Verified Summary (Great on all screens, essential for mobile) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Commercial Experience */}
            <Card className="p-5 sm:p-6 border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  Commercial Experience
                </h3>
              </div>

              <div className="space-y-4">
                {experienceData.roles.map((role) => (
                  <div key={role.title} className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <strong className="text-sm font-semibold text-white">{role.title}</strong>
                      <Badge variant={role.type === 'permanent' ? 'cyan' : 'default'} size="sm" mono>
                        {role.type === 'permanent' ? 'Permanent' : 'Internship'}
                      </Badge>
                    </div>

                    <div className="text-cyan-400 font-mono">
                      {experienceData.company} &bull; {role.period}
                    </div>

                    <p className="text-zinc-400 leading-relaxed pt-1">
                      {role.summary}
                    </p>

                    <ul className="space-y-1 pt-1">
                      {role.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-zinc-300">
                          <span className="text-cyan-400 mt-0.5">&bull;</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            {/* Academic Education */}
            <Card className="p-5 sm:p-6 border border-white/[0.08] space-y-3 text-xs">
              <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  Education
                </h3>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-sm font-semibold text-white">
                    {educationData.degree}
                  </strong>
                  <span className="font-mono text-zinc-400">{educationData.period}</span>
                </div>
                <div className="text-cyan-400 font-mono">
                  {educationData.institution} &bull; CGPA: {educationData.cgpa}
                </div>
                {educationData.thesis && (
                  <p className="text-zinc-400 pt-1 leading-relaxed">
                    <strong className="text-zinc-300">Thesis:</strong> {educationData.thesis.title}
                  </p>
                )}
              </div>
            </Card>

            {/* Core Competencies */}
            <Card className="p-5 sm:p-6 border border-white/[0.08] space-y-3 text-xs">
              <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
                <Award className="w-4 h-4 text-cyan-400" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  Verified Technical Stack
                </h3>
              </div>

              <div className="space-y-2.5">
                <div>
                  <span className="text-zinc-400 font-mono uppercase tracking-wider block mb-1">
                    Backend &amp; Languages:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {['Java 17/21', 'Spring Boot', 'Spring MVC', 'REST APIs', 'JWT', 'RBAC', 'Python', 'C#'].map(
                      (tech) => (
                        <Badge key={tech} variant="cyan" size="sm" mono>
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-zinc-400 font-mono uppercase tracking-wider block mb-1">
                    Databases &amp; Persistence:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {['MySQL', 'MS SQL Server', 'PostgreSQL', 'Spring Data JPA', 'Hibernate'].map((db) => (
                      <Badge key={db} variant="default" size="sm" mono>
                        {db}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-zinc-400 font-mono uppercase tracking-wider block mb-1">
                    Publications &amp; AI:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {['4 Published Papers (2nd Author)', 'Springer', 'IEEE ICCIT', 'IEEE QPAIN', 'IJAIT', 'CNNs', 'RAG'].map(
                      (item) => (
                        <Badge key={item} variant="indigo" size="sm" mono>
                          {item}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Embedded PDF Viewer with Fallback */}
          <div className="lg:col-span-7 space-y-4">
            <Card className="p-3 sm:p-4 border border-white/[0.08] bg-zinc-950 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  Mostafiz_Fahim_CV.pdf
                </span>
                <span>Document Preview</span>
              </div>

              {/* PDF Container */}
              <div className="relative w-full h-[650px] sm:h-[800px] bg-zinc-900 rounded-lg overflow-hidden mt-3">
                <iframe
                  src={`${pdfPath}#toolbar=0&navpanes=0`}
                  title="Mostafizur Rahman Fahim Curriculum Vitae"
                  className="w-full h-full border-0"
                  onLoad={() => setIframeLoaded(true)}
                />

                {/* Mobile / Fallback banner if browser blocks iframe */}
                <div className="md:hidden absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-zinc-950/95 border border-cyan-800/50 text-center space-y-2">
                  <p className="text-xs text-zinc-300">
                    Viewing on a mobile device? Open or download the PDF directly for optimal readability.
                  </p>
                  <div className="flex justify-center gap-2">
                    <Button href={pdfPath} download="Mostafiz_Fahim_CV.pdf" variant="primary" size="sm">
                      Download PDF
                    </Button>
                    <Button href={pdfPath} external variant="outline" size="sm">
                      Open PDF
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResumePage;
