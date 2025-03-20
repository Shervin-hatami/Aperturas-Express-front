import React from 'react';
import { fetchFromStrapi } from './Fetcher';

const FetchLogoNav: React.FC = async () => {
    const data = await fetchFromStrapi<{ data: { logoImagen: { formats: { thumbnail: { url: string } } } } }>('imagen-logo?populate=*');
    console.log('Logo Data:', data);
    const logo = data && data.data && data.data.logoImagen && data.data.logoImagen.formats.thumbnail ? `http://localhost:1337${data.data.logoImagen.formats.thumbnail.url}` : null;

    return (
        <>
            {logo ? <img src={logo} alt="Logo" style={{ maxWidth: '100px', height: 'auto' }} /> : <p>No logo found</p>}
        </>
    );
};

export default FetchLogoNav;
