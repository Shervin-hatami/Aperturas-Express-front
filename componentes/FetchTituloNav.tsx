import { fetchFromStrapi } from './Fetcher';

interface Provincia {
    id: number;
    documentId: string;
    Provincia: string;
    slug: string;
}

interface TituloPaginaResponse {
    data: {
        id: number;
        documentId: string;
        tituloPagina: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        pagina_provincias: Provincia[];
    } | null;
}

const FetchTituloNav = async (slug: string): Promise<string | null> => {
    const response = await fetchFromStrapi<TituloPaginaResponse>('titulo-pagina?populate=*');
    
    if (response && response.data) {
        const provincias = response.data.pagina_provincias;
        const provinciaEncontrada = provincias.find(provincia => provincia.slug === slug);
        return provinciaEncontrada ? provinciaEncontrada.Provincia : response.data.tituloPagina;
    }
    return null;
};

export default FetchTituloNav;
