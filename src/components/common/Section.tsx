import React from 'react';
import { cn } from '../../utils/cn';
import Container, { ContainerProps } from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  containerSize?: ContainerProps['size'];
  spacing?: 'compact' | 'default' | 'spacious' | 'none';
  hasContainer?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  surface?: 'default' | 'elevated' | 'transparent';
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  containerSize = 'default',
  spacing = 'default',
  hasContainer = true,
  borderTop = false,
  borderBottom = false,
  surface = 'transparent',
  children,
  className,
  ...props
}) => {
  const spacingClasses = {
    none: 'py-0',
    compact: 'py-10 sm:py-14',
    default: 'py-16 sm:py-20 lg:py-24',
    spacious: 'py-20 sm:py-28 lg:py-32',
  }[spacing];

  const surfaceClasses = {
    transparent: 'bg-transparent',
    default: 'bg-surface/40',
    elevated: 'bg-surface-elevated/40',
  }[surface];

  const content = hasContainer ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={cn(
        'relative w-full',
        spacingClasses,
        surfaceClasses,
        borderTop && 'border-t border-white/[0.06]',
        borderBottom && 'border-b border-white/[0.06]',
        className
      )}
      {...props}
    >
      {content}
    </section>
  );
};

export default Section;
