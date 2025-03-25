import React from 'react';
import { fetchFromStrapi } from './Fetcher';
import FetchTituloNav from './FetchTituloNav';

// Definimos la interfaz para la respuesta de la API
interface Icono {
    id: number;
    url: string;
    // Agrega más propiedades según la estructura de icono
}

interface TarjetaServicio {
    icono: Icono; // Cambiamos a Icono para reflejar la estructura correcta
    titulo: string;
    descripcion: string;
    shortDescripcion: string;
    // Agrega más propiedades según la estructura de tarjeta_servicios
}

interface SeccionServicio {
    titulo: string;
    icono: Icono; // Cambiamos a Icono para reflejar la estructura correcta
    descripcion: string;
    tarjeta_servicios: TarjetaServicio[];
}

const SeccionServicios: React.FC = async () => {
    const response = await fetchFromStrapi<SeccionServicio>('seccion-servicio?populate=icono&populate=tarjeta_servicios.icono');

    // Accedemos a la propiedad data de la respuesta
    const data: SeccionServicio | null = response ? response.data : null;

    if (!data) return <div>Cargando...</div>;

    return (
        <div className="flex flex-col items-center p-5 w-full md:w-3/4 rounded-lg bg-gray-200 m-5 mx-auto">
            <div className="text-center flex items-center mb-5">
                <img src={`http://localhost:1337${data.icono.url}`} alt={data.titulo} className="my-2 mx-2 w-10 h-10 md:w-16 md:h-16" />
                <div className="text-xl md:text-2xl font-bold flex items-center whitespace-nowrap">
                    <h1 className="mr-1 text-lg md:text-2xl">{data.titulo} </h1>
                    <h1 className="mr-1 text-lg md:text-2xl"><FetchTituloNav /></h1>
                </div>
            </div>
            <p className="text-lg mx-5 text-center">{data.descripcion}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {data.tarjeta_servicios.slice(0, 9).map((tarjeta, index) => (
                    <div key={index} className="p-4 bg-gray-300 w-64 m-5 rounded shadow flex flex-col items-center">
                        <img src={`http://localhost:1337${tarjeta.icono.url}`} alt={`Icono de ${tarjeta.titulo}`} className="w-16 h-16 mt-4" />
                        <h4 className="font-bold text-center py-4">{tarjeta.titulo}</h4>
                        <p className="text-sm text-center overflow-hidden">{tarjeta.shortDescripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeccionServicios;
