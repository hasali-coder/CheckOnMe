
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-5xl',
    xl: 'text-6xl md:text-7xl'
  };

  return (
    <div className={`wordmark ${sizeClasses[size]} text-primary ${className}`}>
      Check<span className="text-muted-foreground">On</span>Me
    </div>
  );
};

export default Logo;
