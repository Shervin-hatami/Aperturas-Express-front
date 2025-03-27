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

// Cambiar la definición del componente a una función asíncrona
const FetchPagProv = async (): Promise<Provincia[]> => {
    const response = await fetchFromStrapi<{ data: Provincia[] }>('pagina-provincias?populate=*');

    // Verificamos si la respuesta es nula y manejamos el caso
    const data: Provincia[] = response?.data || [];
    
    // Retornamos los datos
    return data;
};

export default FetchPagProv;
