import React from 'react';

interface GridBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ className = '', children }) => {
  return (
    <div className={`relative ${className} overflow-hidden`}>
      {/* Grid background */}
      <div className="grid-background absolute inset-0 p-2 grid grid-cols-16 gap-3 transform scale-125 overflow-hidden -skew-y-10">
        {/* Fila 1 */}
        <div className="col-span-2 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-5 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-1 bg-teal-800/30 rounded animate-pulse-fast"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-fast"></div>

        {/* Fila 2 */}
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-2 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-2 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-fast"></div>

        {/* Fila 3 */}
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-fast"></div>
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-2 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-fast"></div>
        

        {/* Fila 4 */}
        <div className="col-span-2 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-fast"></div>
        <div className="col-span-6 bg-teal-800/30 rounded animate-pulse-fast"></div>
        

        {/* Fila 5 */}
        <div className="col-span-5 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-5 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse-fast"></div>
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse-slow"></div>
        

        {/* Fila 6 */}
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-1 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-7 bg-teal-800/30 rounded animate-pulse-fast"></div>

        {/* Fila 7 */}
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-7 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-2 bg-teal-800/30 rounded animate-pulse-fast"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>

        {/* Fila 8 */}
        <div className="col-span-6 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-5 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-2 bg-teal-800/30 rounded animate-pulse-fast"></div>

        {/* Fila 9 */}
        <div className="col-span-6 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse-fast"></div>

        {/* Fila 10 */}
        <div className="col-span-5 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-2 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-5 bg-teal-800/30 rounded animate-pulse-fast"></div>

        {/* Fila 11 */}
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-5 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse-fast"></div>

        {/* Fila 12 */}
        <div className="col-span-5 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-5 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-2 bg-teal-800/30 rounded animate-pulse-fast"></div>

        {/* Fila 13 */}
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-6 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse-fast"></div>

        {/* Fila 14 */}
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-fast"></div>

        {/* Fila 15 */}
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-5 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse-fast"></div>
        <div className="col-span-5 bg-teal-800/30 rounded animate-pulse-slow"></div>

        {/* Fila 16 */}
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-fast"></div>

        {/* Fila 17 */}
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-5 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-3 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-5 bg-teal-800/30 rounded animate-pulse-fast"></div>

        {/* Fila 18 */}
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-slow"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse"></div>
        <div className="col-span-4 bg-teal-800/30 rounded animate-pulse-fast"></div>
        

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GridBackground; 