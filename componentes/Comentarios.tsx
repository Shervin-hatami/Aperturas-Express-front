"use client"
import React, { useState } from 'react';

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
    console.log(data); // Agrega este log para verificar los datos recibidos
    const [startIndex, setStartIndex] = useState(0);

    if (!Array.isArray(data)) {
        return <div>No hay comentarios disponibles.</div>; // Manejo de caso donde data no es un array
    }

    const handleNext = () => {
        if (startIndex + 4 < data.length) { 
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
            <div className="flex flex-wrap justify-center w-screen px-10 py-10">
                {data.slice(startIndex, startIndex + 4).map((comentario) => { 
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
                        <div key={comentario.id} className="m-4 p-5 border border-gray-300 rounded shadow-md w-96 h-72 flex flex-col">
                            <div className="flex items-center mx-10">
                                <img src={thumbnailUrl} alt={`Foto de ${comentario.nombre}`} className="mb-2 w-16 h-16 mr-4" />
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
            <div className="flex justify-between w-full px-10">
                <button onClick={handlePrev} disabled={startIndex === 0} className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50">←</button>
                <button onClick={handleNext} disabled={startIndex + 4 >= data.length} className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50">→</button>
            </div>
        </div>
    );
};

export default Comentarios;
