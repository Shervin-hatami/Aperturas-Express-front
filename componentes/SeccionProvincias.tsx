'use client';

import GridBackground from "@/componentes/GridBackground";
import React, { useState, useEffect } from 'react';
import FetchPagProv from './FetchPagProv';
import Link from 'next/link';

interface Provincia {
    id: number;
    slug: string;
    Provincia: string;
}

const SeccionProvincias: React.FC = () => {
    const [data, setData] = useState<Provincia[]>([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const provinces = await FetchPagProv();
            setData(provinces);
            setLoading(false);
        };
        fetchData();
    }, []);

    const displayedProvinces = showAll ? data : data.slice(0, 20);

    return (

        <div className="mt-5 p-2 bg-emerald-50 rounded-lg shadow-md w-1/2 mx-auto">
            <GridBackground className="w-full rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-center text-teal-950">Provincias</h1>
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                        {displayedProvinces.map((provincia) => (
                            <Link key={provincia.id} href={`/Provincias/${provincia.slug}`} className="bg-teal-50 rounded-lg">
                                <div className="border border-gray-300 p-2 rounded-lg text-center hover:bg-gradient-to-r hover:from-green-300 hover:to-teal-50 transition duration-200">
                                    <h2 className="italic">{provincia.Provincia}</h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {data.length > 20 && (
                        <div className="m-4 text-center">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="bg-teal-800 hover:bg-teal-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                            >
                                {showAll ? 'Mostrar menos' : `Mostrar ${data.length - 20} más`}
                            </button>
                        </div>
                    )}
                </>
            )}
          </GridBackground>
            
        </div>
    );
};

export default SeccionProvincias;
