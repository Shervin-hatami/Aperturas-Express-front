'use client';

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
        <div className="mt-5 p-4 bg-gray-100 rounded-lg shadow-md w-1/2 mx-auto">
            <h1 className="text-2xl font-bold mb-4">Provincias</h1>
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <>
                    <div className="grid grid-cols-4 gap-1">
                        {displayedProvinces.map((provincia) => (
                            <Link key={provincia.id} href={`/Provincias/${provincia.slug}`}>
                                <div className="border border-gray-300 p-2 rounded-lg text-center hover:bg-gray-200 transition duration-200">
                                    <h2 className="text-lg font-semibold">{provincia.Provincia}</h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {data.length > 20 && (
                        <div className="mt-4 text-center">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                            >
                                {showAll ? 'Mostrar menos' : `Mostrar ${data.length - 20} más`}
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default SeccionProvincias;
