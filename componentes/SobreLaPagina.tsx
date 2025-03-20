import React from 'react';
import { fetchFromStrapi } from './Fetcher';
import FetchTituloNav from './FetchTituloNav';

// Definición de las interfaces
interface IconoBP {
    id: number;
    url: string;
    name: string;
    alternativeText: string | null;
}

interface BulletPoint {
    id: number;
    tituloBP: string;
    descripcionBP: string;
    iconoBP: IconoBP;
}

interface SobrePaginaData {
    data: {
        id: number;
        documentId: string;
        titulo: string;
        descripcion: string;
        bulletPoints: BulletPoint[];
    }[];
}

const SobreLaPagina: React.FC = async () => {
    const data: SobrePaginaData | null = await fetchFromStrapi('sobre-paginas?populate[bulletPoints][populate]=*');

    if (!data) return <div>Cargando...</div>;

    return (
        <div className="bg-red-100 rounded-lg">

            <div className="text-center flex items-center justify-center py-5">
                <h2 className="font-bold text-2xl mr-2">{data.data[0].titulo}</h2>
                <div className="font-bold text-2xl mr-2"><FetchTituloNav /></div>
            </div>

            <h3 className="text-xl text-center">{data.data[0].descripcion}</h3>

            <div className="flex flex-wrap justify-center p-5">
            {data.data[0].bulletPoints.map((bulletPoint) => (
                <div key={bulletPoint.id} className="flex-none w-full sm:w-1/2 md:w-1/4 mb-4 p-4">
                    <div className="flex flex-row items-center justify-center p-5">
                        <h4 className="font-bold text-xl mb-2 mx-5">{bulletPoint.tituloBP}</h4>
                        <img 
                            className="w-10 h-10 object-cover ml-2"
                            src={`http://localhost:1337${bulletPoint.iconoBP.url}`} 
                            alt={bulletPoint.tituloBP} 
                        />
                    </div>
                    <p className="text-gray-700 text-lg mb-4">{bulletPoint.descripcionBP}</p>
                </div>
            ))}    
            </div>
            
        </div>
    );
};

export default SobreLaPagina;
