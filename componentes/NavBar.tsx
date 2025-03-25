import React from 'react';
import FetchLogoNav from './FetchLogoNav';
import FetchTituloNav from './FetchTituloNav';

const NavBar: React.FC = async () => {
    return (
        <div className="bg-gray-100 w-full px-4 fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-between">
                <div className="scale-130">
                    <FetchLogoNav />
                </div>
            </div>
            <div className="flex flex-row items-center justify-between text-xs">
                Aperturas Express -<FetchTituloNav />
            </div>
        </div>
    );
};

export default NavBar;
