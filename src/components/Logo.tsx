import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const navigate = useNavigate();

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-5xl',
    xl: 'text-6xl md:text-7xl'
  };

  return (
    <div
      className={`cursor-pointer wordmark ${sizeClasses[size]} font-extrabold ${className}`}
      onClick={() => navigate('/')}
    >
      Check
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-red-400">
        On
      </span>
      Me
    </div>
  );
};

export default Logo;
