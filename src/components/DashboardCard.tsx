
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText, 
  onClick,
  className = '' 
}) => {
  return (
    <div className={`card-gentle cursor-pointer hover:border-primary/20 ${className}`} onClick={onClick}>
      <div className="flex items-center gap-4 mb-4">
        <div className="p-4 bg-muted rounded-2xl">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-primary mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      <button className="w-full btn-secondary text-sm py-3">
        {buttonText}
      </button>
    </div>
  );
};

export default DashboardCard;
