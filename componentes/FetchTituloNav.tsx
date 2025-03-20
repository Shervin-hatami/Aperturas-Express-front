import React from 'react';
import { fetchFromStrapi } from './Fetcher';

const FetchTituloNav: React.FC = async () => {
    const data = await fetchFromStrapi<{ data: { tituloPagina: string } }>('titulo-pagina');
    console.log('Title Data:', data);
    const titulo = data && data.data && data.data.tituloPagina ? data.data.tituloPagina : null;

    return (
        <>
            {titulo ? <h1>Aperturas Express - {titulo}</h1> : <p>No title found</p>}
        </>
    );
};

export default FetchTituloNav;
