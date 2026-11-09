import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Video, Layers, AlertCircle, ArrowRight, ChevronDown, ChevronUp, Filter, FolderGit2 } from 'lucide-react';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { projectsData } from '../../data/projects';
import { getProjectThumbnail } from '../../Assets/projectThumbnails';
import { ProjectCategory } from '../../types/project.types';

export const ProjectsSection: React.FC = () => {
  const [showSecondary, setShowSecondary] = useState(false);
  const [secondaryFilter, setSecondaryFilter] = useState<'all' | ProjectCategory>('all');

  const featuredProjects = projectsData.filter((p) => p.tier === 'featured');
  const secondaryProjects = projectsData.filter((p) => p.tier === 'secondary' || p.tier === 'academic');

  const filteredSecondary = secondaryProjects.filter((p) => {
    if (secondaryFilter === 'all') return true;
    return p.category === secondaryFilter;
  });

  return (
    <Section id="projects" surface="default" borderBottom>
      <SectionHeading
        eyebrow="Featured Work"
        title="Selected"
        highlight="Projects"
        description="Verified full-stack applications, academic thesis implementations, deep learning models, and IoT prototypes with strict ownership transparency."
      />

      {/* Tier 1 Featured Projects Grid */}
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
              <Link
                to={`/projects/${project.slug}`}
                className="relative w-full h-48 sm:h-56 bg-zinc-950 overflow-hidden border-b border-white/[0.06] group block"
                aria-label={`View case study for ${project.title}`}
              >
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
              </Link>

              {/* Content Body */}
              <div className="flex flex-col flex-grow p-5 sm:p-6 space-y-4">
                <div className="space-y-1.5">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="hover:text-cyan-300 transition-colors inline-block"
                  >
                    <CardTitle as="h3" className="text-xl font-bold text-white tracking-tight">
                      {project.title}
                    </CardTitle>
                  </Link>
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
                <div className="pt-4 mt-auto border-t border-white/[0.04] flex flex-wrap items-center justify-between gap-2.5">
                  <Button
                    href={`/projects/${project.slug}`}
                    variant="primary"
                    size="sm"
                    iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    View Case Study
                  </Button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        variant="outline"
                        size="sm"
                        iconLeft={<Github className="w-3.5 h-3.5" />}
                      >
                        Code
                      </Button>
                    )}

                    {project.demoUrl && (
                      <Button
                        href={project.demoUrl}
                        variant="outline"
                        size="sm"
                        iconRight={<ExternalLink className="w-3.5 h-3.5" />}
                      >
                        Demo
                      </Button>
                    )}

                    {project.videoUrl && (
                      <Button
                        href={project.videoUrl}
                        variant="ghost"
                        size="sm"
                        iconLeft={<Video className="w-3.5 h-3.5 text-cyan-400" />}
                      >
                        Video
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Expandable Tier 2 & Tier 3 Projects Section */}
      <div className="mt-12 pt-8 border-t border-white/[0.06] text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-cyan-400" />
              Additional Engineering &amp; Academic Projects
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Secondary full-stack platforms, embedded hardware prototypes, native mobile clients, and computer graphics work.
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSecondary(!showSecondary)}
            iconRight={
              showSecondary ? (
                <ChevronUp className="w-4 h-4 text-cyan-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-cyan-400" />
              )
            }
          >
            {showSecondary ? 'Collapse Secondary Projects' : `Explore All (${secondaryProjects.length}) Projects`}
          </Button>
        </div>

        {showSecondary && (
          <div className="space-y-6 animate-fade-in">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pb-2">
              <span className="text-xs font-mono text-zinc-400 mr-2 flex items-center gap-1">
                <Filter className="w-3 h-3 text-cyan-400" /> Filter:
              </span>
              {[
                { label: 'All Projects', value: 'all' },
                { label: 'Full Stack Web', value: 'fullstack' },
                { label: 'Desktop & Backend', value: 'backend' },
                { label: 'IoT & Embedded', value: 'iot' },
                { label: 'Academic & Graphics', value: 'academic' },
              ].map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setSecondaryFilter(tab.value as typeof secondaryFilter)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                    secondaryFilter === tab.value
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-semibold'
                      : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Secondary Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredSecondary.map((proj) => {
                const thumb = getProjectThumbnail(proj.thumbnail);

                return (
                  <Card
                    key={proj.id}
                    hoverEffect
                    className="p-4 sm:p-5 flex flex-col justify-between border border-white/[0.08] bg-zinc-900/60"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <Badge variant="cyan" size="sm" mono>
                          {proj.categoryLabel}
                        </Badge>
                        {proj.tier === 'academic' && (
                          <Badge variant="outline" size="sm" mono>
                            Academic
                          </Badge>
                        )}
                      </div>

                      <h4 className="text-base font-bold text-white tracking-tight">
                        {proj.title}
                      </h4>

                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                        {proj.tagline}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {proj.technologies.slice(0, 4).map((t) => (
                          <Badge key={t} variant="outline" size="sm" mono>
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-3 border-t border-white/[0.04] flex items-center justify-between">
                      {proj.githubUrl ? (
                        <Button
                          href={proj.githubUrl}
                          variant="ghost"
                          size="sm"
                          iconLeft={<Github className="w-3.5 h-3.5" />}
                        >
                          Repository
                        </Button>
                      ) : (
                        <span className="text-[11px] font-mono text-zinc-400">Academic Lab Work</span>
                      )}

                      {proj.demoUrl && (
                        <Button
                          href={proj.demoUrl}
                          variant="outline"
                          size="sm"
                          iconRight={<ExternalLink className="w-3.5 h-3.5" />}
                        >
                          Demo
                        </Button>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default ProjectsSection;
