import Link from 'next/link';
import React from 'react';
import { MostrarTitulosLegales } from './PaginaLegal';  

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 text-center p-1 text-sm">
            <div className="flex justify-between items-center">
                <p className="text-[15px]"><Link href="/">Aperturas Express 24h © {currentYear} </Link>| Contacto: 123-456-789</p>
                <div className="flex space-x-2">
                    <Link href="/Municipios">municipios</Link>
                    <Link href="/Servicios">servicios</Link>
                    <MostrarTitulosLegales />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
