import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileCheck2 } from 'lucide-react';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import Card, { CardHeader, CardTitle, CardContent } from '../common/Card';
import Badge from '../common/Badge';
import { educationData } from '../../data/education';

export const EducationSection: React.FC = () => {
  return (
    <Section id="education" borderBottom>
      <SectionHeading
        eyebrow="Academic Foundation"
        title="Academic"
        highlight="Education"
        description="Formal computer science education, undergraduate thesis research, and core engineering coursework."
      />

      <div className="text-left">
        <Card hoverEffect className="p-2 border border-white/[0.08] bg-zinc-900/60">
          <CardHeader className="flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-3">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle as="h3" className="text-xl font-bold text-white tracking-tight">
                    {educationData.institution}
                  </CardTitle>
                  <span className="text-xs text-cyan-400 font-mono">
                    {educationData.institutionShort} • {educationData.location}
                  </span>
                </div>
              </div>

              <h4 className="text-base font-semibold text-zinc-200 pt-2">
                {educationData.degree}
              </h4>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{educationData.period}</span>
              </div>
              <Badge variant="cyan" mono size="sm">
                CGPA: {educationData.cgpa}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-5 pt-1">
            {/* Thesis Details */}
            {educationData.thesis && (
              <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> Undergraduate Thesis
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {educationData.thesis.publications.map((pub) => (
                      <Badge key={pub} variant="indigo" mono size="sm">
                        {pub}
                      </Badge>
                    ))}
                  </div>
                </div>

                <h5 className="text-sm font-semibold text-white leading-snug">
                  {educationData.thesis.title}
                </h5>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {educationData.thesis.description}
                </p>

                <p className="text-[11px] font-mono text-zinc-400 pt-1">
                  Supervisor: {educationData.thesis.supervisor}
                </p>
              </div>
            )}

            {/* Coursework */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Core Academic Coursework:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {educationData.relevantCoursework.map((course) => (
                  <Badge key={course} variant="outline" size="sm" mono>
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default EducationSection;
