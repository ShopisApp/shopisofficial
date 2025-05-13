import React from 'react';
import { Apple, PlayCircle } from 'lucide-react';

interface DownloadButtonsProps {
  className?: string;
  buttonClassName?: string;
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ 
  className = "", 
  buttonClassName = "" 
}) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <a 
        href="#" 
        className={`bg-black hover:bg-gray-900 text-white flex items-center justify-center space-x-4 px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg ${buttonClassName}`}
      >
        <Apple className="h-8 w-8" strokeWidth={1} />
        <div className="flex flex-col items-start">
          <span className="text-sm font-normal">Télécharger dans</span>
          <span className="text-xl font-semibold tracking-tight">l'App Store</span>
        </div>
      </a>
      
      <a 
        href="#" 
        className={`bg-black hover:bg-gray-900 text-white flex items-center justify-center space-x-4 px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg ${buttonClassName}`}
      >
        <div className="relative">
          <PlayCircle className="h-8 w-8" strokeWidth={1} fill="currentColor" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[30%] h-[30%] bg-black transform translate-x-[15%]"></div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-normal">DISPONIBLE SUR</span>
          <span className="text-xl font-semibold tracking-tight">Google Play</span>
        </div>
      </a>
    </div>
  );
};

export default DownloadButtons;