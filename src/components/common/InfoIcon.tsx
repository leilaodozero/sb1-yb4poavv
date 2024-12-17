import React from 'react';
import { HelpCircle } from 'lucide-react';

interface InfoIconProps {
  tooltip: string;
}

export function InfoIcon({ tooltip }: InfoIconProps) {
  return (
    <div className="relative group">
      <HelpCircle className="h-4 w-4 text-gray-400 hover:text-gray-500 cursor-help" />
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
        {tooltip}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
          <div className="border-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  );
}