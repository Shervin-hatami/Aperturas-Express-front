import React from 'react';
import FetchLogoNav from './FetchLogoNav';
import FetchTituloNav from './FetchTituloNav';

interface NavbarProps {
    slug: string;
}

const Navbar: React.FC<NavbarProps> = async ({ slug }) => {
    const tituloProvincia = await FetchTituloNav(slug);
    console.log('Título de la provincia:', tituloProvincia);

    return (
        <div className="bg-gray-100 w-full px-4 fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-between">
                <div className="scale-130">
                    <FetchLogoNav />
                </div>
            </div>
            <div className="flex flex-row items-center justify-between text-xs">
                Aperturas Express - {tituloProvincia?.titulo || 'Cargando...'}
            </div>
        </div>
    );
};

export default Navbar;
