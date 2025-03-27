import React from 'react';
import FetchPagProv from './FetchPagProv';
import Link from 'next/link';

const SeccionProvincias: React.FC = async () => {
    const data = await FetchPagProv();

    return (
        <div className="mt-5 p-4 bg-gray-100 rounded-lg shadow-md w-1/2 mx-auto">
            <h1 className="text-2xl font-bold mb-4">Provincias</h1>
            {data.length === 0 ? (
                <div>Cargando...</div>
            ) : (
                <div className="grid grid-cols-4 gap-1">
                    {data.map((provincia) => (
                        <Link key={provincia.id} href={`/Provincias/${provincia.slug}`}>
                            <div className="border border-gray-300 p-2 rounded-lg text-center hover:bg-gray-200 transition duration-200">
                                <h2 className="text-lg font-semibold">{provincia.Provincia}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SeccionProvincias;
