import React from 'react';
import FetchLogoNav from './FetchLogoNav';
import FetchTituloNav from './FetchTituloNav';

const NavBar: React.FC = async () => {
    return (
        <div className="bg-red-400 w-full px-5 fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between">
            <FetchLogoNav />
            <FetchTituloNav />
        </div>
    );
};

export default NavBar;
