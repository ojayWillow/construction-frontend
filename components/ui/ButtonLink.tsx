import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-600 shadow-lg hover:shadow-xl focus:ring-primary',
      secondary: 'bg-secondary text-white hover:bg-secondary-600 shadow-lg hover:shadow-xl focus:ring-secondary',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
      ghost: 'text-primary hover:bg-primary/10 focus:ring-primary',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    
    return (
      <a
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';
