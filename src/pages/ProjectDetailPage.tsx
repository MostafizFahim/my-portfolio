import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Video,
  FileText,
  Shield,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Info,
  Lock,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import Card, { CardHeader, CardTitle, CardContent } from '../components/common/Card';
import ProjectArchitectureDiagram from '../components/Projects/ProjectArchitectureDiagram';
import { projectsData } from '../data/projects';
import { getProjectThumbnail } from '../Assets/projectThumbnails';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Technical Case Study • Mostafiz Fahim`;
      window.scrollTo(0, 0);
    }
  }, [project]);

  if (!project) {
    return (
      <Container size="default" className="py-24 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
          <Layers className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-white">Project Case Study Not Found</h1>
        <p className="text-zinc-400 max-w-md mx-auto">
          The project case study you requested could not be located or may have been updated.
        </p>
        <Button href="/#projects" variant="primary" iconLeft={<ArrowLeft className="w-4 h-4" />}>
          Back to Selected Projects
        </Button>
      </Container>
    );
  }

  const thumbnailSrc = getProjectThumbnail(project.thumbnail);

  const ownershipBadges = {
    creator: { label: 'Personal Project', variant: 'cyan' as const },
    group: { label: 'Collaborative Group Project', variant: 'indigo' as const },
    contribution: { label: 'Implementation Contribution', variant: 'amber' as const },
    maintenance: { label: 'Commercial Maintenance', variant: 'default' as const },
  }[project.ownership] || { label: 'Project', variant: 'default' as const };

  const otherFeaturedProjects = projectsData
    .filter((p) => p.tier === 'featured' && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="py-12 sm:py-16 text-left">
      <Container size="wide" className="space-y-12">
        {/* Breadcrumb Navigation & Back Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Link to="/" className="hover:text-cyan-300 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <Link to="/#projects" className="hover:text-cyan-300 transition-colors">
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-zinc-200 truncate max-w-[200px] sm:max-w-xs">{project.title}</span>
          </nav>

          <Button
            href="/#projects"
            variant="ghost"
            size="sm"
            iconLeft={<ArrowLeft className="w-3.5 h-3.5" />}
          >
            Back to Projects
          </Button>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cyan" mono size="sm">
                {project.categoryLabel}
              </Badge>
              <Badge variant={ownershipBadges.variant} mono size="sm">
                {ownershipBadges.label}
              </Badge>
              <Badge variant="outline" mono size="sm">
                Engineering Case Study
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-lg text-zinc-300 leading-relaxed font-normal">
              {project.tagline}
            </p>

            {/* Quick Metrics Strip */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="flex flex-wrap gap-2.5 pt-2">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3 rounded-xl bg-surface-card border border-white/[0.08] min-w-[140px]"
                  >
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      {metric.label}
                    </span>
                    <span className="text-base font-bold text-cyan-300 font-mono mt-0.5 block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  variant="primary"
                  size="md"
                  iconLeft={<Github className="w-4 h-4" />}
                >
                  Source Repository
                </Button>
              )}

              {project.demoUrl && (
                <Button
                  href={project.demoUrl}
                  variant="outline"
                  size="md"
                  iconRight={<ExternalLink className="w-4 h-4" />}
                >
                  Live Deployment
                </Button>
              )}

              {project.paperUrl && (
                <Button
                  href={project.paperUrl}
                  variant="outline"
                  size="md"
                  iconRight={<ExternalLink className="w-4 h-4 text-cyan-400" />}
                >
                  Published Paper
                </Button>
              )}

              {project.videoUrl && (
                <Button
                  href={project.videoUrl}
                  variant="ghost"
                  size="md"
                  iconLeft={<Video className="w-4 h-4 text-cyan-400" />}
                >
                  Video Walkthrough
                </Button>
              )}
            </div>
          </div>

          {/* Thumbnail preview */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-white/[0.08] bg-zinc-900/60 overflow-hidden shadow-2xl">
              <img
                src={thumbnailSrc}
                alt={project.title}
                className="w-full h-auto max-h-[320px] object-cover object-top"
              />
              <div className="p-4 border-t border-white/[0.06] bg-zinc-950/80">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                  Verified Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" size="sm" mono>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer / Attribution Banner */}
        {project.disclaimerBox && (
          <div
            className={`p-4 sm:p-5 rounded-xl border flex items-start gap-3.5 text-sm leading-relaxed ${
              project.disclaimerBox.variant === 'security'
                ? 'bg-cyan-950/20 border-cyan-800/40 text-cyan-200'
                : project.disclaimerBox.variant === 'warning'
                ? 'bg-amber-950/20 border-amber-800/40 text-amber-200'
                : 'bg-zinc-900 border-zinc-800 text-zinc-300'
            }`}
          >
            {project.disclaimerBox.variant === 'security' ? (
              <Lock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            ) : project.disclaimerBox.variant === 'warning' ? (
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <strong className="block font-semibold text-white mb-0.5">
                {project.disclaimerBox.title}
              </strong>
              <p className="text-xs sm:text-sm text-zinc-300">{project.disclaimerBox.text}</p>
            </div>
          </div>
        )}

        {/* System Architecture Diagram */}
        {project.diagramType && (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Architecture &amp; Data Flow
            </h2>
            <ProjectArchitectureDiagram type={project.diagramType} title={project.title} />
            {project.architectureOverview && (
              <p className="text-sm text-zinc-400 leading-relaxed max-w-4xl">
                {project.architectureOverview}
              </p>
            )}
          </div>
        )}

        {/* Problem Statement & Motivation */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Problem Statement &amp; Motivation
          </h2>
          <Card className="p-5 sm:p-6 border border-white/[0.08] bg-surface-card/60">
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </Card>
        </div>

        {/* Architectural Decisions (if available) */}
        {project.architecturalDecisions && project.architecturalDecisions.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Key Architectural Decisions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.architecturalDecisions.map((dec) => (
                <Card key={dec.decision} hoverEffect className="p-4 sm:p-5">
                  <h3 className="text-sm font-semibold text-white mb-2">{dec.decision}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{dec.justification}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Technical Implementation Deep Dive */}
        {project.implementationDeepDive && project.implementationDeepDive.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Implementation Deep Dive
            </h2>
            <div className="space-y-4">
              {project.implementationDeepDive.map((section) => (
                <Card key={section.sectionTitle} className="p-5 sm:p-6 border border-white/[0.08]">
                  <h3 className="text-base font-semibold text-cyan-300 mb-2">
                    {section.sectionTitle}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-white/[0.04]">
                    {section.keyPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Comparative Benchmark Table (e.g. AgroNet) */}
        {project.comparisonTable && (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Experimental Results &amp; Benchmarking
            </h2>
            <Card className="overflow-x-auto p-4 sm:p-6 border border-white/[0.08]">
              {project.comparisonTable.caption && (
                <span className="text-xs font-mono text-cyan-400 mb-3 block">
                  {project.comparisonTable.caption}
                </span>
              )}
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-400">
                    {project.comparisonTable.headers.map((h) => (
                      <th key={h} className="py-2 px-3 font-semibold uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                  {project.comparisonTable.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-zinc-800/30 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="py-3 px-3">
                          {cIdx === 1 ? (
                            <span className="text-cyan-300 font-bold">{cell}</span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        )}

        {/* Individual Ownership & Contribution Statement */}
        {project.userContributionStatement && (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Individual Scope &amp; Contribution
            </h2>
            <Card className="p-5 sm:p-6 border border-cyan-800/30 bg-cyan-950/10">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {project.userContributionStatement}
                </p>
              </div>
            </Card>
          </div>
        )}

        {/* Challenges & Solutions */}
        {project.challengesAndSolutions && project.challengesAndSolutions.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Technical Challenges &amp; Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.challengesAndSolutions.map((item, idx) => (
                <Card key={idx} className="p-5 border border-white/[0.08] space-y-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                      Challenge
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed">{item.challenge}</p>
                  </div>
                  <div className="pt-2 border-t border-white/[0.04]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                      Engineered Solution
                    </span>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.solution}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Limitations & Future Work */}
        {project.limitationsAndFutureWork && project.limitationsAndFutureWork.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Known Limitations &amp; Future Engineering
            </h2>
            <Card className="p-5 sm:p-6 border border-white/[0.08]">
              <ul className="space-y-2">
                {project.limitationsAndFutureWork.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                    <span className="text-cyan-400 mt-1">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {/* Related Projects Navigation */}
        <div className="pt-8 border-t border-white/[0.06] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Explore Other Featured Projects</h3>
            <Link to="/#projects" className="text-xs font-mono text-cyan-400 hover:underline">
              View All Projects &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherFeaturedProjects.map((other) => (
              <Link
                key={other.id}
                to={`/projects/${other.slug}`}
                className="p-4 rounded-xl border border-white/[0.08] bg-surface-card/60 hover:bg-zinc-800/50 hover:border-cyan-500/30 transition-all group block"
              >
                <span className="text-[11px] font-mono text-cyan-400 block mb-1">
                  {other.categoryLabel}
                </span>
                <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {other.title}
                </h4>
                <p className="text-xs text-zinc-400 line-clamp-2 mt-1">{other.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetailPage;
