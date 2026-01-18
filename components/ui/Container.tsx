import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className,
  size = 'lg',
  ...props 
}) => {
  const baseStyles = 'mx-auto px-4 sm:px-6 lg:px-8';
  
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[90rem]',
    full: 'max-w-full',
  };
  
  return (
    <div className={cn(baseStyles, sizes[size], className)} {...props}>
      {children}
    </div>
  );
};
