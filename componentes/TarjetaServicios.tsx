import React from 'react';
import { fetchFromStrapi } from './Fetcher';

// Definimos la interfaz para la respuesta de la API
interface Icono {
    id: number;
    url: string;
}

interface TarjetaServicio {
    icono: Icono;
    titulo: string;
    descripcion: string;
    tarifaServicio?: TarifaServicio[]; // Opcional, en caso de que existan tarifas
}

interface TarifaServicio {
    horario: string;
    horarioDiaIni: string;
    horarioDiaFin: string;
    precio: number;
}

const TarjetaServicios: React.FC = async () => {
    const response = await fetchFromStrapi<TarjetaServicio[]>('tarjeta-servicios?populate=*');

    // Accedemos a la propiedad data de la respuesta
    const data: TarjetaServicio[] | null = response ? response.data : null;

    if (!data) return <div>Cargando...</div>;

    return (
        <div className="flex flex-col items-center w-screen px-10 py-10 bg-white">
            {data.map((tarjeta, index) => (
                <div key={index} className="m-4 p-5 border-2 border-gray-100 rounded shadow-xl w-full bg-gray-100">
                    <div className="flex items-center mx-10">
                        <img src={`http://localhost:1337${tarjeta.icono.url}`} alt={`Icono de ${tarjeta.titulo}`} className="mb-2 w-16 h-16 mr-4" />
                        <h4 className="font-bold text-xl">{tarjeta.titulo}</h4>
                    </div>
                    <p className="py-2 px-4 md:px-20 text-lg leading-relaxed">{tarjeta.descripcion}</p>
                    {tarjeta.tarifaServicio && (
                        <div className="flex justify-center flex-wrap mt-2 text-center">
                            {tarjeta.tarifaServicio.map((tarifa, tarifaIndex) => (
                                <div key={tarifaIndex} className="m-2">
                                    <div className=" w-60 rounded-lg bg-white mt-2 py-2 shadow-xl">
                                        <p className="font-bold">{tarifa.horario}</p>
                                        {tarifa.horarioDiaIni && tarifa.horarioDiaFin && (
                                            <p>De: {new Date(`1970-01-01T${tarifa.horarioDiaIni}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} Hasta: {new Date(`1970-01-01T${tarifa.horarioDiaFin}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                        )}
                                        <p>Precio: {tarifa.precio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TarjetaServicios;
