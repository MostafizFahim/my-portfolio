import React from 'react';
import { cn } from '../../utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: 'narrow' | 'default' | 'wide' | 'full';
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  as: Component = 'div',
  size = 'default',
  children,
  className,
  ...props
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
    full: 'max-w-full',
  }[size];

  return (
    <Component
      className={cn('w-full mx-auto px-4 sm:px-6 lg:px-8', sizeClasses, className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
