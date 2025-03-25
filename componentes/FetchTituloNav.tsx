import React from 'react';
import { fetchFromStrapi } from './Fetcher';

interface TituloPaginaResponse {
    data: {
        id: number;
        documentId: string;
        tituloPagina: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

const FetchTituloNav: React.FC = async () => {
    const response = await fetchFromStrapi<TituloPaginaResponse>('titulo-pagina');
    console.log('Title Data:', response);

    const titulo = response && response.data ? response.data.tituloPagina : null;

    return (
        <>
<<<<<<< HEAD
            {titulo ? <p>{titulo}</p> : <p>No title found</p>}
=======
            {titulo ? <h1>{titulo}</h1> : <p>No title found</p>}
>>>>>>> branch-sam
        </>
    );
};

export default FetchTituloNav;
