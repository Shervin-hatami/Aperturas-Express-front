'use client';

import { useState, useEffect } from 'react';

export default function BannerEmergencia() {
  const [banner, setBanner] = useState('');
  const [urgente, setUrgente] = useState('');
  
  useEffect(() => {
    async function fetchBanner() {
      try {
        const apiUrl ='http://localhost:1337';
        
        const response = await fetch(`${apiUrl}/api/banner`, {
          next: { revalidate: 120 },
        });
        
        if (!response.ok) return;
        
        const data = await response.json();
        
        if (data?.data) {
          setBanner(data.data.banner);
          setUrgente(data.data.urgente);
        }
      } catch (error) {
        console.error('Error al cargar el banner');
      }
    }
    
    fetchBanner();
  }, []);

  const handleBannerClick = () => {
    console.log('Banner clickeado');
    // Implementa aquí la navegación o acción deseada
  };

  if (!banner) return null;

  return (
    <>
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0.5;
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          
          70% {
            opacity: 1;
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
          }
          
          100% {
            opacity: 0.5;
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        .banner-fixed {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transition: background-color 0.2s ease;
          cursor: pointer;
        }
        
        .banner-fixed:hover {
          background-color: #b91c1c; /* Un rojo más oscuro al pasar el mouse */
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
      
      <div 
        className="bg-red-600 text-white py-2 px-4 banner-fixed z-60"
        onClick={handleBannerClick}
        role="button"
        tabIndex={0}
        aria-label="Banner de emergencia"
      >
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          <div className="flex items-center mb-1">
            <div className="h-4 w-4 rounded-full bg-emerald-500 mr-2 pulse-animation"></div>
            <h3 className="font-bold text-lg">{banner}</h3>
          </div>
          <p>{urgente}</p>
        </div>
      </div>
      
      {/* Espacio para evitar que el contenido quede detrás del banner */}
      <div className="h-[72px]"></div>
    </>
  );
}

