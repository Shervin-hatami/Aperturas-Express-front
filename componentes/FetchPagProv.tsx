import { fetchFromStrapi } from './Fetcher';

// Definimos la interfaz para la respuesta de la API
interface FotoHero {
    id: number;
    url: string;
}

interface Provincia {
    id: number;
    Provincia: string;
    slug: string;
    NumeroProvincia: string;
    fotoHero: FotoHero;
}

interface StrapiResponse {
    data: Provincia[];
}

// Cambiar la definición del componente a una función asíncrona
const FetchPagProv = async (): Promise<Provincia[]> => {
    try {
        const response = await fetchFromStrapi<StrapiResponse>('pagina-provincias?populate=*&pagination[pageSize]=100');
        return Array.isArray(response?.data) ? response.data : [];
    } catch (error) {
        console.error('Error fetching provinces:', error);
        return [];
    }
};

export default FetchPagProv;
