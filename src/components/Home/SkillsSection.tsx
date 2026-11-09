import React from 'react';
import { Server, Database, Brain, Globe, Wrench, Code2 } from 'lucide-react';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import Card, { CardHeader, CardTitle, CardContent } from '../common/Card';
import Badge from '../common/Badge';
import { skillsData } from '../../data/skills';

const categoryIcons: Record<string, React.ReactNode> = {
  backend: <Server className="w-5 h-5 text-cyan-400" />,
  databases: <Database className="w-5 h-5 text-cyan-400" />,
  'ai-ml': <Brain className="w-5 h-5 text-cyan-400" />,
  frontend: <Globe className="w-5 h-5 text-cyan-400" />,
  'devops-tools': <Wrench className="w-5 h-5 text-cyan-400" />,
  'core-cs': <Code2 className="w-5 h-5 text-cyan-400" />,
};

export const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" surface="default" borderBottom>
      <SectionHeading
        eyebrow="Competencies & Tooling"
        title="Technical"
        highlight="Skills"
        description="Structured by domain. Highlighted tags reflect primary commercial technologies used in production systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {skillsData.map((group) => {
          const icon = categoryIcons[group.id] || <Code2 className="w-5 h-5 text-cyan-400" />;

          return (
            <Card
              key={group.id}
              hoverEffect
              className="flex flex-col h-full border border-white/[0.08] bg-zinc-900/60"
            >
              <CardHeader className="flex-row items-center gap-3 pb-2">
                <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <CardTitle as="h3" className="text-base font-semibold text-white">
                    {group.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant={skill.highlight ? 'cyan' : 'outline'}
                      size="sm"
                      mono
                      className={skill.highlight ? 'font-medium' : ''}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default SkillsSection;
