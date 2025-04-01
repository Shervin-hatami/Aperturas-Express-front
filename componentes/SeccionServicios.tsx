import React from 'react';
import { fetchFromStrapi } from './Fetcher';
import FetchTituloNav from './FetchTituloNav';

// Definimos la interfaz para la respuesta de la API
interface Icono {
    id: number;
    url: string;
    // Agrega más propiedades según la estructura de icono
}

interface fondo {
    id: number;
    url: string;
}

interface TarjetaServicio {
    icono: Icono; // Cambiamos a Icono para reflejar la estructura correcta
    titulo: string;
    descripcion: string;
    shortDescripcion: string;
    // Agrega más propiedades según la estructura de tarjeta_servicios
}

interface SeccionServicio {
    fondo: fondo;
    titulo: string;
    icono: Icono; // Cambiamos a Icono para reflejar la estructura correcta
    descripcion: string;
    tarjeta_servicios: TarjetaServicio[];
}
interface SeccionServicioProps{
    slug: string;
}

const SeccionServicios: React.FC<SeccionServicioProps> = async ({slug}) => {
    const response = await fetchFromStrapi<SeccionServicio>('seccion-servicio?populate=fondo&populate=icono&populate=tarjeta_servicios.icono');
    const tituloProvincia = await FetchTituloNav(slug);
    // Accedemos a la propiedad data de la respuesta
    const data: SeccionServicio | null = response ? response.data : null;

    if (!data) return <div>Cargando...</div>;

    return (
        <div className="relative flex flex-col items-center p-5 w-full md:w-3/4 rounded-lg bg-gray-100 m-5 mx-auto overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-white/1 to-white/80 z-10"></div>
                <img 
                    src={`http://localhost:1337${data.fondo.url}`} 
                    alt={data.fondo.url} 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative z-20">
                <div className="text-center flex items-center mb-5 justify-center">
                    <img src={`http://localhost:1337${data.icono.url}`} alt={data.titulo} className="my-2 mx-2 w-10 h-10 md:w-16 md:h-16" />
                    <div className="text-xl md:text-2xl font-bold flex items-center whitespace-nowrap backdrop-blur-xs rounded-lg p-2">
                        <h1 className="mr-1 text-lg md:text-2xl">{data.titulo} </h1>
                        <h1 className="mr-1 text-lg md:text-2xl">{tituloProvincia?.titulo || 'Cargando...'}</h1>
                    </div>
                </div>
                <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg shadow-lg mx-5">
                    <p className="text-lg text-center">{data.descripcion}</p> 
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 z-20 w-full justify-items-center">
                {data.tarjeta_servicios.slice(0, 9).map((tarjeta, index) => (
                    <div 
                        key={index} 
                        className="p-4 backdrop-blur-sm bg-white/50 w-full max-w-[280px] m-2 rounded shadow flex flex-col items-center"
                    >
                        <img 
                            src={`http://localhost:1337${tarjeta.icono.url}`} 
                            alt={`Icono de ${tarjeta.titulo}`} 
                            className="w-12 h-12 md:w-16 md:h-16 mt-4" 
                        />
                        <h4 className="font-bold text-center py-4">{tarjeta.titulo}</h4>
                        <p className="text-sm text-center overflow-hidden">{tarjeta.shortDescripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeccionServicios;
