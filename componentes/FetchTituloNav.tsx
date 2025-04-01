import { fetchFromStrapi } from './Fetcher';

interface FotoHero {
    url: string;
    formats: {
        thumbnail?: { url: string };
        small?: { url: string };
        medium?: { url: string };
        large?: { url: string };
    };
}

interface Provincia {
    id: number;
    documentId: string;
    Provincia: string;
    slug: string;
    NumeroProvincia: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    fotoHero: FotoHero;
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
    };
    meta: Record<string, unknown>;
}

interface FetchTituloNavResult {
    titulo: string;
    imagenUrl?: string;
}

const FetchTituloNav = async (slug: string): Promise<FetchTituloNavResult | null> => {
    const response = await fetchFromStrapi<TituloPaginaResponse>('titulo-pagina?populate[pagina_provincias][populate]=fotoHero');
    
    if (response?.data) {
        const provincias = response.data.pagina_provincias;
        const provinciaEncontrada = provincias.find((provincia: Provincia) => provincia.slug === slug);
        
        if (provinciaEncontrada) {
            return {
                titulo: provinciaEncontrada.Provincia,
                imagenUrl: provinciaEncontrada.fotoHero?.url
            };
        }
        
        return {
            titulo: response.data.tituloPagina
        };
    }
    return null;
};

export default FetchTituloNav;
