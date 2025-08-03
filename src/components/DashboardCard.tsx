import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon: Icon,
  title,
  description,
  buttonText,
  onClick
}) => {
  return (
    <div className="bg-white/5 text-white/90 rounded-2xl p-6 shadow hover:shadow-lg transition duration-300 ease-in-out">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-white/10 rounded-xl">
          <Icon className="w-6 h-6 text-white/80" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-white/60 mb-6">{description}</p>
      <button
        onClick={onClick}
        className="btn-secondary"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default DashboardCard;
