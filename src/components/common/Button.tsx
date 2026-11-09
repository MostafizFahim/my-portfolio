import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  download?: string | boolean;
  external?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      download,
      external,
      iconLeft,
      iconRight,
      isLoading = false,
      fullWidth = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      primary:
        'bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold shadow-sm hover:shadow-glow-cyan-sm active:bg-cyan-600',
      secondary:
        'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium border border-zinc-700/80 active:bg-zinc-800',
      outline:
        'bg-transparent hover:bg-zinc-800/60 text-zinc-200 font-medium border border-zinc-700/80 hover:border-zinc-600 active:bg-zinc-800',
      ghost:
        'bg-transparent hover:bg-zinc-800/60 text-zinc-300 hover:text-white font-medium active:bg-zinc-800/80',
      danger:
        'bg-red-600 hover:bg-red-500 text-white font-semibold active:bg-red-700',
    }[variant];

    const sizeClasses = {
      sm: 'text-xs px-3 py-1.5 rounded-lg gap-1.5 h-8',
      md: 'text-sm px-4 py-2 rounded-lg gap-2 h-10',
      lg: 'text-base px-6 py-2.5 rounded-xl gap-2.5 h-12',
    }[size];

    const baseClasses = cn(
      'inline-flex items-center justify-center transition-all duration-150 select-none cursor-pointer',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      fullWidth && 'w-full',
      variantClasses,
      sizeClasses,
      className
    );

    const content = (
      <>
        {isLoading && (
          <svg
            className="w-4 h-4 animate-spin text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {!isLoading && iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {!isLoading && iconRight && <span className="flex-shrink-0">{iconRight}</span>}
      </>
    );

    // If an external href is provided or explicitly set as external
    if (href) {
      const isExternal =
        external !== undefined
          ? external
          : href.startsWith('http://') ||
            href.startsWith('https://') ||
            href.startsWith('mailto:') ||
            href.endsWith('.pdf');

      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            download={typeof download === 'string' ? download : download ? '' : undefined}
            className={baseClasses}
            aria-disabled={disabled || isLoading}
          >
            {content}
          </a>
        );
      }

      // Internal routing (supports hashes # or router paths /)
      if (href.startsWith('#')) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            download={typeof download === 'string' ? download : download ? '' : undefined}
            className={baseClasses}
            aria-disabled={disabled || isLoading}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={href}
          className={baseClasses}
          aria-disabled={disabled || isLoading}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || isLoading}
        className={baseClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
