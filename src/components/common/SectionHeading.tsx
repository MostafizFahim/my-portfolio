import React from 'react';
import { cn } from '../../utils/cn';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  action?: React.ReactNode;
  id?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  action,
  id,
  className,
}) => {
  const isCentered = align === 'center';

  return (
    <div
      className={cn(
        'mb-8 md:mb-12',
        isCentered ? 'text-center max-w-3xl mx-auto' : 'flex flex-col md:flex-row md:items-end md:justify-between gap-4',
        className
      )}
    >
      <div className={cn(isCentered ? 'mx-auto' : 'max-w-2xl')}>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded-full bg-cyan-950/40 border border-cyan-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-medium tracking-wider text-cyan-300 uppercase">
              {eyebrow}
            </span>
          </div>
        )}
        <h2
          id={id}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
        >
          {title}{' '}
          {highlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              {highlight}
            </span>
          )}
        </h2>
        {description && (
          <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            {description}
          </p>
        )}
      </div>

      {action && !isCentered && (
        <div className="flex-shrink-0 pt-2 md:pt-0">{action}</div>
      )}
    </div>
  );
};

export default SectionHeading;
