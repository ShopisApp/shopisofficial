import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

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
  className = "" 
}) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group ${className}`}>
      <div className="p-4 bg-blue-100 rounded-full inline-block mb-4 group-hover:bg-blue-200 transition-colors">
        <Icon className="h-6 w-6 text-blue-800" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;