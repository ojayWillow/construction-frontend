import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'primary' | 'secondary' | 'gradient';
  container?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className,
  padding = 'lg',
  background = 'white',
  container = true,
  containerSize = 'lg',
  ...props 
}) => {
  const paddingSizes = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };
  
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    gradient: 'bg-gradient-to-br from-secondary to-secondary-700 text-white',
  };
  
  const content = container ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );
  
  return (
    <section 
      className={cn(paddingSizes[padding], backgrounds[background], className)} 
      {...props}
    >
      {content}
    </section>
  );
};
