'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface InfoItem {
  id: number;
  number: number | null;
  texto: string;
  texto2: string;
}

interface HeroImage {
  url: string;
  width: number;
  height: number;
  formats: {
    thumbnail: { url: string };
    small: { url: string };
    medium: { url: string };
    large: { url: string };
  };
}

interface HeroData {
  title: string;
  description: string;
  telefono: string;
  detalle: any[]; // Tipo para el rich text
  image: HeroImage;
  whatsapp: HeroImage;
  info1: InfoItem[]; // Nueva propiedad para los datos estructurados
}

export default function Hero() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  
  useEffect(() => {
    async function fetchHeroData() {
      try {
        const apiUrl ='http://localhost:1337';
        
        const response = await fetch(`${apiUrl}/api/hero?populate=*`, {
          next: { revalidate: 120 }
        });
        
        if (!response.ok) return;
        
        const result = await response.json();
        
        if (result?.data) {
          setHeroData(result.data);
          console.log("Datos recibidos:", result.data);
        }
      } catch (error) {
        console.error('Error al cargar datos del hero:', error);
      }
    }
    
    fetchHeroData();
  }, []);

  if (!heroData) return null;

  // Construir URLs completas para las imágenes
  const apiUrl ='http://localhost:1337';
  const imageUrl = `${apiUrl}${heroData.image.url}`;
  const whatsappUrl = `${apiUrl}${heroData.whatsapp.url}`;
  
  // Formatear número de teléfono para mejor legibilidad
  const formatPhone = (phone: string) => {
    if (phone.length === 9) {
      return `${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6, 9)}`;
    }
    return phone;
  };

  return (
    <section className="bg-gray-100 pt-0 -mt-[72px]">
      <div className="container mx-auto pt-[72px] pb-12 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center">
        {/* Contenido del lado izquierdo */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {heroData.title}
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            {heroData.description}
          </p>
          
          {/* Botones de contacto */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href={`tel:${heroData.telefono}`} 
              className="py-3 px-6 bg-red-600 text-white font-semibold rounded-lg text-center hover:bg-red-700 transition duration-300"
            >
              Llamar ahora: {formatPhone(heroData.telefono)}
            </a>
            <a 
              href={`https://wa.me/${heroData.telefono}`} 
              className="py-3 px-6 bg-green-500 text-white font-semibold rounded-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
            >
              <img 
                src={whatsappUrl} 
                alt="WhatsApp" 
                className="w-6 h-6 mr-2" 
              />
              WhatsApp
            </a>
          </div>
          
          {/* Detalles/Estadísticas utilizando los componentes anidados */}
          {heroData.info1 && heroData.info1.length > 0 && (
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex flex-wrap justify-center">
                {heroData.info1.map((item) => (
                  <div key={item.id} className="text-center px-4 py-2 flex-1 min-w-[150px]">
                    <h3 className="font-bold text-xl text-blue-900">
                      {item.number !== null && item.texto 
                        ? `${item.number} ${item.texto}`
                        : item.number !== null 
                          ? item.number 
                          : item.texto}
                    </h3>
                    <p className="text-gray-600 mt-1">{item.texto2}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Imagen del lado derecho */}
        <div className="lg:w-1/2 flex justify-end">
          <div className="relative lg:right-[-150px] p-1 border-4 border-white/30 rounded-lg bg-white/5 shadow-xl">
            <img 
              src={imageUrl} 
              alt={heroData.title}
              className="rounded-md w-full h-auto max-w-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
