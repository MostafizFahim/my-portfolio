import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Copy,
  Check,
  FileText,
  Award,
  ChevronRight,
  Shield,
  Layers,
  ArrowRight,
  Sparkles,
  BookmarkCheck,
} from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import Card, { CardHeader, CardTitle, CardContent } from '../components/common/Card';
import { publicationsData } from '../data/publications';

export const PublicationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const publication = publicationsData.find((p) => p.slug === slug);

  useEffect(() => {
    if (publication) {
      document.title = `${publication.title} | Academic Publication • Mostafiz Fahim`;
      window.scrollTo(0, 0);
    }
  }, [publication]);

  const handleCopyBibtex = () => {
    if (publication?.bibtex) {
      navigator.clipboard.writeText(publication.bibtex).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  if (!publication) {
    return (
      <Container size="default" className="py-24 text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-white">Publication Not Found</h1>
        <p className="text-zinc-400 max-w-md mx-auto">
          The requested research publication could not be located or may have been updated.
        </p>
        <Button href="/#research" variant="primary" iconLeft={<ArrowLeft className="w-4 h-4" />}>
          Back to Research &amp; Publications
        </Button>
      </Container>
    );
  }

  const otherPublications = publicationsData
    .filter((p) => p.slug !== publication.slug)
    .slice(0, 3);

  return (
    <div className="py-12 sm:py-16 text-left">
      <Container size="wide" className="space-y-12">
        {/* Breadcrumbs & Back Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Link to="/" className="hover:text-cyan-300 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <Link to="/#research" className="hover:text-cyan-300 transition-colors">
              Research
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-zinc-200 truncate max-w-[200px] sm:max-w-xs">
              {publication.venue} ({publication.year})
            </span>
          </nav>

          <Button
            href="/#research"
            variant="ghost"
            size="sm"
            iconLeft={<ArrowLeft className="w-3.5 h-3.5" />}
          >
            Back to Research
          </Button>
        </div>

        {/* Hero Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="cyan" mono size="sm">
              {publication.venue}
            </Badge>
            <Badge variant="indigo" mono size="sm">
              {publication.authorship}
            </Badge>
            <Badge variant="emerald" mono size="sm" dot>
              Published ({publication.year})
            </Badge>
            {publication.publisher && (
              <Badge variant="outline" mono size="sm">
                Publisher: {publication.publisher}
              </Badge>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
            {publication.title}
          </h1>

          <div className="p-3.5 rounded-xl bg-surface-card border border-white/[0.06] text-xs font-mono text-zinc-300 space-y-1">
            <div className="text-zinc-400">
              <strong className="text-zinc-200">Authorship Order:</strong> {publication.authorList}
            </div>
            <div className="text-cyan-400 font-semibold">
              Verified Position: Mostafizur Rahman Fahim (2nd Author)
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {publication.paperUrl && (
              <Button
                href={publication.paperUrl}
                variant="primary"
                size="md"
                iconRight={<ExternalLink className="w-4 h-4" />}
              >
                View Official Paper
              </Button>
            )}

            {publication.doiUrl && (
              <Button
                href={publication.doiUrl}
                variant="outline"
                size="md"
                iconRight={<ExternalLink className="w-4 h-4 text-cyan-400" />}
              >
                DOI Reference
              </Button>
            )}

            {publication.certificateUrl && (
              <Button
                href={publication.certificateUrl}
                variant="outline"
                size="md"
                iconRight={<Award className="w-4 h-4 text-amber-400" />}
              >
                Acceptance Certificate
              </Button>
            )}

            <Button
              variant="ghost"
              size="md"
              onClick={handleCopyBibtex}
              iconLeft={
                copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-zinc-400" />
                )
              }
            >
              {copied ? 'Citation Copied!' : 'Copy BibTeX'}
            </Button>
          </div>
        </div>

        {/* Abstract */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            Abstract
          </h2>
          <Card className="p-5 sm:p-6 border border-white/[0.08] bg-surface-card/60">
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {publication.abstract}
            </p>
          </Card>
        </div>

        {/* Motivation & Methodology */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publication.researchMotivation && (
            <Card className="p-5 sm:p-6 border border-white/[0.08] space-y-2.5">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Research Motivation
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {publication.researchMotivation}
              </p>
            </Card>
          )}

          {publication.methodology && (
            <Card className="p-5 sm:p-6 border border-white/[0.08] space-y-2.5">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Research Methodology
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {publication.methodology}
              </p>
            </Card>
          )}
        </div>

        {/* Core Academic Contributions */}
        {publication.keyContributions && publication.keyContributions.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <BookmarkCheck className="w-5 h-5 text-cyan-400" />
              Main Research Contributions
            </h2>
            <Card className="p-5 sm:p-6 border border-white/[0.08]">
              <ul className="space-y-3">
                {publication.keyContributions.map((contrib, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 flex items-center justify-center text-xs font-mono flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {/* Results & Findings */}
        {publication.findingsAndResults && publication.findingsAndResults.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              Key Findings &amp; Results
            </h2>
            <Card className="p-5 sm:p-6 border border-white/[0.08] bg-surface-card/60">
              <ul className="space-y-2.5">
                {publication.findingsAndResults.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <span className="text-cyan-400 mt-1">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {/* Formatted BibTeX Citation Box */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              BibTeX Citation
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyBibtex}
              iconLeft={
                copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                )
              }
            >
              {copied ? 'Copied' : 'Copy Citation'}
            </Button>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto">
            <pre className="whitespace-pre">{publication.bibtex}</pre>
          </div>
        </div>

        {/* Related Project Bridge (if associated with NexTrip) */}
        {publication.relatedProjectSlug && (
          <div className="p-5 rounded-xl border border-cyan-800/40 bg-cyan-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                Associated Implementation Case Study
              </span>
              <p className="text-sm text-zinc-200">
                This academic paper originated from the NexTrip decentralized mobility thesis prototype.
              </p>
            </div>
            <Button
              href={`/projects/${publication.relatedProjectSlug}`}
              variant="primary"
              size="sm"
              iconRight={<ArrowRight className="w-3.5 h-3.5" />}
            >
              View NexTrip Case Study
            </Button>
          </div>
        )}

        {/* Other Publications Navigation */}
        <div className="pt-8 border-t border-white/[0.06] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Other Peer-Reviewed Publications</h3>
            <Link to="/#research" className="text-xs font-mono text-cyan-400 hover:underline">
              View All Publications &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherPublications.map((other) => (
              <Link
                key={other.id}
                to={`/research/${other.slug}`}
                className="p-4 rounded-xl border border-white/[0.08] bg-surface-card/60 hover:bg-zinc-800/50 hover:border-cyan-500/30 transition-all group block"
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Badge variant="cyan" size="sm" mono>
                    {other.venue}
                  </Badge>
                  <span className="text-[11px] font-mono text-zinc-400">({other.year})</span>
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {other.title}
                </h4>
                <span className="text-xs font-mono text-cyan-400 mt-2 block">
                  {other.authorship}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PublicationDetailPage;
