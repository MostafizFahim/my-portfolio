import React, { useState } from 'react';
import { BookOpen, ExternalLink, Copy, Check, FileText, Award } from 'lucide-react';
import Section from '../common/Section';
import SectionHeading from '../common/SectionHeading';
import Card, { CardHeader, CardTitle, CardContent } from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { publicationsData } from '../../data/publications';

export const ResearchSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyBibtex = (id: string, bibtex: string) => {
    navigator.clipboard.writeText(bibtex).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  return (
    <Section id="research" borderBottom>
      <SectionHeading
        eyebrow="Peer-Reviewed Academic Papers"
        title="Research &"
        highlight="Publications"
        description="Verified peer-reviewed conference and journal publications. Mostafizur Rahman Fahim served as 2nd Author on all four studies."
      />

      <div className="space-y-6 text-left">
        {publicationsData.map((pub) => {
          const isCopied = copiedId === pub.id;

          return (
            <Card
              key={pub.id}
              hoverEffect
              className="p-1 sm:p-2 border border-white/[0.08] bg-zinc-900/60"
            >
              <CardHeader className="flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-2">
                <div className="space-y-2 max-w-3xl">
                  {/* Badges row */}
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="cyan" mono size="sm">
                      {pub.venue}
                    </Badge>
                    <Badge variant="indigo" mono size="sm">
                      {pub.authorship}
                    </Badge>
                    <Badge variant="emerald" mono size="sm" dot>
                      Published ({pub.year})
                    </Badge>
                  </div>

                  <CardTitle as="h3" className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {pub.title}
                  </CardTitle>
                </div>

                <div className="flex items-center gap-2 self-start flex-shrink-0">
                  {pub.paperUrl && (
                    <Button
                      href={pub.paperUrl}
                      variant="outline"
                      size="sm"
                      iconRight={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      View Paper
                    </Button>
                  )}
                  {pub.bibtex && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopyBibtex(pub.id, pub.bibtex!)}
                      iconLeft={
                        isCopied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        )
                      }
                    >
                      {isCopied ? 'Copied' : 'BibTeX'}
                    </Button>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-3.5">
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {pub.abstract}
                </p>

                {/* Key Contributions */}
                {pub.keyContributions && pub.keyContributions.length > 0 && (
                  <div className="p-3.5 rounded-lg bg-zinc-950/60 border border-zinc-800/80 space-y-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                      Core Academic Contributions:
                    </span>
                    <ul className="space-y-1">
                      {pub.keyContributions.map((contrib, cIdx) => (
                        <li
                          key={cIdx}
                          className="text-xs text-zinc-400 leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{contrib}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                {pub.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pub.tags.map((tag) => (
                      <Badge key={tag} variant="outline" size="sm" mono>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default ResearchSection;
