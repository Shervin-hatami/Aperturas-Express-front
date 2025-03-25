import { fetchFromStrapi } from './Fetcher';
import Link from 'next/link';

// Interfaces para tipar los datos de la API
interface LegalItem {
  id: number;
  titulo: string;
  numero: number;
  tituloDescription: string | null;
  description: string;
}

interface PaginaLegal {
  id: number;
  documentId: string;
  titulo: string;
  FechaActualizacion: string;
  fecha: string;
  slug: string;
  legal1: LegalItem[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface PaginaLegalResponse {
  data: PaginaLegal[];  // Array de PaginaLegal directamente
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Nueva función para mostrar solo los títulos
export async function MostrarTitulosLegales() {
  const endpoint = 'pagina-legals?populate=*';
  
  const response = await fetchFromStrapi<PaginaLegalResponse>(endpoint);
  
  if (!response || !response.data || (Array.isArray(response.data) && response.data.length === 0)) {
    return <div className="container mx-auto py-8 px-4">No se encontraron páginas legales</div>;
  }
  
  if (!Array.isArray(response.data)) {
    return <div className="container mx-auto py-8 px-4">Error en el formato de datos</div>;
  }
  
  return (
    <div className="py-2 px-2">
      {response.data.map((pagina) => (
        <Link key={pagina.id} href={`/Legales/${pagina.slug}`} className="mb-0">
          <h2 className="">{pagina.titulo}</h2>
        </Link>
      ))}
    </div>
  );
}

export default async function PaginaLegal({ slug }: { slug?: string }) {
  const endpoint = slug 
    ? `pagina-legals?populate=*&filters[slug][$eq]=${slug}` 
    : 'pagina-legals?populate=*';
  
  const response = await fetchFromStrapi<PaginaLegalResponse>(endpoint);
  
  if (!response || !response.data || (Array.isArray(response.data) && response.data.length === 0)) {
    return <div className="container mx-auto py-8 px-4">No se encontró la página legal</div>;
  }
  
  if (!Array.isArray(response.data)) {
    return <div className="container mx-auto py-8 px-4">Error en el formato de datos</div>;
  }
  
  // Obtenemos la primera página legal (o la que coincide con el slug si se proporcionó uno)
  const paginaLegal = response.data[0];
  
  // Formateamos la fecha si existe
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };
  
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-black-800 text-center">{paginaLegal.titulo}</h1>
      
      <div className="space-y-8 mb-4">
        {paginaLegal.legal1.map((item: LegalItem) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-black-900">
              {item.numero}. {item.titulo}
            </h2>
            
            {item.tituloDescription && (
              <h3 className="font-medium text-gray-800 mb-2">{item.tituloDescription}</h3>
            )}
            
            <div className="text-gray-700 whitespace-pre-line">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      
      {/* Fecha de actualización con mayor visibilidad */}
      {paginaLegal.fecha && (
        <div className="pt-2 mb-10 text-center p-3 rounded-md">
          <p className="text-base text-gray-600 font-medium">
            {paginaLegal.FechaActualizacion} {formatDate(paginaLegal.fecha)}
          </p>
        </div>
      )}
    </div>
  );
}
