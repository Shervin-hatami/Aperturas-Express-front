import React from 'react';

interface DotBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const DotBackground: React.FC<DotBackgroundProps> = ({ className = '', children }) => {
  return (
    <div className={`relative ${className} overflow-hidden`}>
      {/* Dot background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DotBackground; 