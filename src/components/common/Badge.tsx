import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'cyan' | 'indigo' | 'emerald' | 'amber' | 'outline';
  size?: 'sm' | 'md';
  mono?: boolean;
  dot?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'sm',
  mono = false,
  dot = false,
  icon,
  children,
  className,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-zinc-800/80 text-zinc-300 border-zinc-700/60',
    cyan: 'bg-cyan-950/40 text-cyan-300 border-cyan-800/50',
    indigo: 'bg-indigo-950/40 text-indigo-300 border-indigo-800/50',
    emerald: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/50',
    amber: 'bg-amber-950/40 text-amber-300 border-amber-800/50',
    outline: 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-700',
  }[variant];

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-sm px-3 py-1 gap-2',
  }[size];

  const dotColors = {
    default: 'bg-zinc-400',
    cyan: 'bg-cyan-400',
    indigo: 'bg-indigo-400',
    emerald: 'bg-emerald-400 animate-pulse',
    amber: 'bg-amber-400',
    outline: 'bg-zinc-500',
  }[variant];

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border transition-colors',
        mono && 'font-mono tracking-tight',
        variantClasses,
        sizeClasses,
        className
      )}
      {...props}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', dotColors)} />}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
