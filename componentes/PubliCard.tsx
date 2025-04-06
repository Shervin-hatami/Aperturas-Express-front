'use client';

import React, { useState, useEffect } from 'react';

interface PubliProps {
  id: number;
  documentId: string;
  titulo: string;
  descripcion: string;
  imagenes: Array<{
    id: number;
    url: string;
    [key: string]: any;
  }>;
}

export default function PubliCard({ publi }: { publi: PubliProps }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Efecto para cambiar automáticamente las imágenes
  useEffect(() => {
    // Solo configurar el intervalo si hay más de una imagen
    if (publi.imagenes && publi.imagenes.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => 
          prevIndex === publi.imagenes.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Cambiar cada 4 segundos
      
      return () => clearInterval(interval);
    }
  }, [publi.imagenes]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
      {publi.imagenes && publi.imagenes.length > 0 && (
        <div className="relative h-auto w-full sm:h-80 w-full md:h-96 w-full overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={publi.imagenes[currentImageIndex].url} 
              alt={`${publi.titulo} - imagen ${currentImageIndex + 1}`}
              className="max-w-full max-h-full w-auto h-auto object-contain transition-opacity duration-500 rounded-lg"
              style={{ margin: 0, padding: 0 }}
            />
          </div>
        </div>
      )}
      <div className="p-5 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{publi.titulo}</h3>
        <p className="text-gray-700">{publi.descripcion}</p>
      </div>
    </div>
  );
} 