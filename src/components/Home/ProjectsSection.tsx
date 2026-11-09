import React from 'react';
import { ExternalLink, Github, Video, Layers, AlertCircle, CheckCircle2 } from 'lucide-react';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { projectsData } from '../../data/projects';
import { getProjectThumbnail } from '../../Assets/projectThumbnails';

export const ProjectsSection: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.tier === 'featured');

  return (
    <Section id="projects" surface="default" borderBottom>
      <SectionHeading
        eyebrow="Featured Work"
        title="Selected"
        highlight="Projects"
        description="Verified full-stack applications, academic thesis implementations, deep learning models, and IoT prototypes with strict ownership transparency."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
        {featuredProjects.map((project) => {
          const thumbnailSrc = getProjectThumbnail(project.thumbnail);

          const ownershipBadges = {
            creator: { label: 'Personal Project', variant: 'cyan' as const },
            group: { label: 'Collaborative Group Project', variant: 'indigo' as const },
            contribution: { label: 'Implementation Contribution', variant: 'amber' as const },
            maintenance: { label: 'Commercial Maintenance', variant: 'default' as const },
          }[project.ownership] || { label: 'Project', variant: 'default' as const };

          return (
            <Card
              key={project.id}
              hoverEffect
              className="flex flex-col h-full overflow-hidden border border-white/[0.08] bg-zinc-900/70"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full h-48 sm:h-56 bg-zinc-950 overflow-hidden border-b border-white/[0.06] group">
                <img
                  src={thumbnailSrc}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Top Overlay Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <Badge variant="cyan" size="sm" mono>
                    {project.categoryLabel}
                  </Badge>
                  <Badge variant={ownershipBadges.variant} size="sm" mono>
                    {ownershipBadges.label}
                  </Badge>
                </div>
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-grow p-5 sm:p-6 space-y-4">
                <div className="space-y-1.5">
                  <CardTitle as="h3" className="text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-zinc-300 text-sm leading-relaxed">
                    {project.tagline}
                  </CardDescription>
                </div>

                {/* Ownership or Academic Note (if applicable) */}
                {project.ownershipNote && (
                  <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                    <AlertCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{project.ownershipNote}</span>
                  </div>
                )}

                {/* Key Metrics / Highlights */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 font-mono text-xs"
                      >
                        <span className="text-zinc-400">{metric.label}: </span>
                        <span className="text-cyan-300 font-medium">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <Badge key={tech} variant="outline" size="sm" mono>
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 6 && (
                    <Badge variant="outline" size="sm" mono className="text-zinc-400">
                      +{project.technologies.length - 6} more
                    </Badge>
                  )}
                </div>

                {/* Action Links */}
                <div className="pt-4 mt-auto border-t border-white/[0.04] flex flex-wrap items-center gap-2.5">
                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      variant="outline"
                      size="sm"
                      iconLeft={<Github className="w-3.5 h-3.5" />}
                    >
                      Repository
                    </Button>
                  )}

                  {project.demoUrl && (
                    <Button
                      href={project.demoUrl}
                      variant="primary"
                      size="sm"
                      iconRight={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      Live Demo
                    </Button>
                  )}

                  {project.videoUrl && (
                    <Button
                      href={project.videoUrl}
                      variant="ghost"
                      size="sm"
                      iconLeft={<Video className="w-3.5 h-3.5 text-cyan-400" />}
                    >
                      Video Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default ProjectsSection;
