"use client"
import React, { useState, useEffect } from 'react';

// Definición de la interfaz para la respuesta de la API
interface Foto {
    formats: {
        thumbnail: {
            url: string;
        };
    };
}

interface Comentario {
    id: number;
    nombre: string;
    fecha: string;
    comentario: string;
    puntos: string;
    foto: Foto;
    starFull: {
        url: string;
    };
    starEmpt: {
        url: string;
    };
}

interface ComentariosProps {
    data: Comentario[]; // Usar la interfaz Comentario
}

const Comentarios: React.FC<ComentariosProps> = ({ data }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) { // xl breakpoint
                setItemsPerPage(4);
            } else if (window.innerWidth >= 1024) { // lg breakpoint
                setItemsPerPage(3);
            } else if (window.innerWidth >= 768) { // md breakpoint
                setItemsPerPage(2);
            } else { // sm and smaller
                setItemsPerPage(1);
            }
        };

        handleResize(); // Llamada inicial
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!Array.isArray(data)) {
        return <div>No hay comentarios disponibles.</div>;
    }

    const handleNext = () => {
        if (startIndex + itemsPerPage < data.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center w-full px-4 md:px-6 lg:px-8 xl:px-10 py-5 md:py-8 xl:py-10 gap-4">
                {data.slice(startIndex, startIndex + itemsPerPage).map((comentario) => { 
                    const puntos = parseInt(comentario.puntos.split(' ')[1]);
                    console.log('Comentario:', comentario); // Imprime el comentario para depuración

                    // Asignar las URLs directamente desde el objeto comentario
                    const starFullUrl = `http://localhost:1337${comentario.starFull.url}`;
                    const starEmptUrl = `http://localhost:1337${comentario.starEmpt.url}`;

                    // Verificar que foto y formats estén definidos
                    const thumbnailUrl = comentario.foto?.formats?.thumbnail?.url 
                        ? `http://localhost:1337${comentario.foto.formats.thumbnail.url}` 
                        : 'http://localhost:1337/uploads/default_thumbnail.png'; // URL por defecto

                    return (
                        <div key={comentario.id} 
                            className={`p-4 md:p-5 bg-white rounded shadow-md h-72 flex flex-col
                                w-[calc(100%-1rem)]
                                md:w-[calc(50%-1rem)]
                                lg:w-[calc(33.33%-1rem)]
                                xl:w-[calc(25%-1rem)]`}
                        >
                            <div className="flex items-center mx-10">
                                <img 
                                    src={thumbnailUrl} 
                                    alt={`Foto de ${comentario.nombre}`} 
                                    className="mb-2 w-16 h-16 mr-4 rounded-full object-cover" 
                                />
                                <h4 className="font-bold text-xl">{comentario.nombre}</h4>
                            </div>
                            <div className="flex-grow overflow-hidden">
                                <p className="py-2 px-4 md:px-5 text-lg leading-relaxed line-clamp-3">
                                    {comentario.comentario}
                                </p>
                            </div>
                            <p className="text-gray-500 text-right">{comentario.fecha}</p>
                            <div className="flex mt-2">
                                {[...Array(5)].map((_, index) => {
                                    return (
                                        <div key={index} className="w-12 h-12 mr-0">
                                            <img src={index < puntos ? starFullUrl : starEmptUrl} alt={index < puntos ? 'Estrella llena' : 'Estrella vacía'} className="w-full h-full" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-between w-full px-4 md:px-6 lg:px-8 xl:px-10">
                <button onClick={handlePrev} disabled={startIndex === 0} className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50">←</button>
                <button onClick={handleNext} disabled={startIndex + itemsPerPage >= data.length} className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50">→</button>
            </div>
        </div>
    );
};

export default Comentarios;
