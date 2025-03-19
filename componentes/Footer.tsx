import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 text-center p-4">
            <div className="flex justify-between items-center">
                <p><Link href="/">Aperturas Express 24h © {currentYear} </Link>| Contacto: 123-456-789</p>
                <div className="flex space-x-4">
                    <Link href="/Municipios">municipios</Link>
                    <Link href="/Servicios">servicios</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
