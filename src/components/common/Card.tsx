import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  hoverEffect?: boolean;
  glow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ as: Component = 'div', hoverEffect = false, glow = false, children, className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'relative rounded-xl border border-white/[0.08] bg-surface-card/80 backdrop-blur-sm transition-all duration-200',
          hoverEffect &&
            'hover:border-white/[0.18] hover:bg-surface-hover/80 hover:-translate-y-0.5 hover:shadow-surface-card',
          glow && 'card-glow',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ className, children, ...props }) => (
  <div className={cn('p-5 sm:p-6 pb-3 sm:pb-4 flex flex-col gap-1.5', className)} {...props}>
    {children}
  </div>
);

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h2' | 'h3' | 'h4' | 'h5';
  className?: string;
  children: React.ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  as: Component = 'h3',
  className,
  children,
  ...props
}) => (
  <Component
    className={cn('text-lg sm:text-xl font-semibold tracking-tight text-white', className)}
    {...props}
  >
    {children}
  </Component>
);

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  children,
  ...props
}) => (
  <p className={cn('text-sm text-zinc-400 leading-relaxed', className)} {...props}>
    {children}
  </p>
);

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ className, children, ...props }) => (
  <div className={cn('p-5 sm:p-6 pt-0 sm:pt-0', className)} {...props}>
    {children}
  </div>
);

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ className, children, ...props }) => (
  <div
    className={cn(
      'p-5 sm:p-6 pt-0 sm:pt-0 border-t border-white/[0.04] mt-auto flex items-center gap-3',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default Card;
