import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`bg-white/5 text-white/90 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 ease-in-out ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-white/10 rounded-2xl">
          <Icon className="w-6 h-6 text-white/80" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="leading-relaxed text-white/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
