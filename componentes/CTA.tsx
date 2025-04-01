import { fetchFromStrapi } from './Fetcher';
import Link from 'next/link';

interface RichTextNode {
  type: string;
  children: {
    type: string;
    text?: string;
    bold?: boolean;
    // Otros posibles formatos de texto
  }[];
}

interface CTAImage {
  url: string;
  width: number;
  height: number;
  formats: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  } | null;
}

interface CTAData {
  title: string;
  description: RichTextNode[];
  telefono: CTAImage;
  whatsapp: CTAImage;
  contacta: string;
  // Otros campos que pueda tener
}

interface CTAResponse {
  id: number;
  documentId: string;
  title: string;
  description: RichTextNode[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  numero: number;
  whatsapp: CTAImage;
  telefono: CTAImage;
  contacta: string;
}

export default async function CTA() {
  const apiUrl = 'http://localhost:1337';
  const response = await fetchFromStrapi<CTAResponse>('cta?populate=*');
  
  if (!response || !response.data) return null;
  
  // Extraer los datos correctamente
  const ctaData = response.data;

  // Construir URLs completas para las imágenes
  const whatsappUrl = `${apiUrl}${ctaData.whatsapp.url}`;
  const phoneIconUrl = `${apiUrl}${ctaData.telefono.url}`;

  // Función para renderizar el rich text de la descripción
  const renderRichText = (content: RichTextNode[]) => {
    return content.map((block, index) => {
      if (block.type === 'paragraph') {
        const text = block.children.map((child, childIndex) => {
          if (child.bold) {
            return <strong key={childIndex}>{child.text}</strong>;
          }
          return child.text;
        });
        
        return <p key={index} className="mb-4">{text}</p>;
      }
      return null;
    });
  };

  // Usar el número de la API en lugar del número codificado
  const phoneNumber = ctaData.numero.toString();

  // Formatear el número para mejor legibilidad
  const formatPhone = (phone: string) => {
    if (phone.length === 9) {
      return `${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6, 9)}`;
    }
    return phone;
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="rotating-border-container rotating-border">
          <div className="rotating-border-content">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              {ctaData.title}
            </h2>
            
            <div className="text-gray-700 mb-8 text-center">
              {renderRichText(ctaData.description)}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={`tel:${phoneNumber}`} 
                className="py-3 px-6 bg-red-600 opacity-80 text-white font-semibold rounded-lg text-center hover:bg-red-700 transition duration-300 flex items-center justify-center"
              >
                <img 
                  src={phoneIconUrl} 
                  alt="Teléfono" 
                  className="w-5 h-5 mr-2" 
                />
                Llamar ahora: {formatPhone(phoneNumber)}
              </a>
              <a 
                href={`https://wa.me/${phoneNumber}`} 
                className="py-3 px-6 bg-green-500 opacity-85 text-white font-semibold rounded-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
              >
                <img 
                  src={whatsappUrl} 
                  alt="WhatsApp" 
                  className="w-5 h-5 mr-2" 
                />
                WhatsApp
              </a>
              {ctaData.contacta && (
                <Link 
                  href="/PaginaContacto"
                  className="py-3 px-6 bg-blue-600 opacity-85 text-white font-semibold rounded-lg flex items-center justify-center hover:bg-blue-700 transition duration-300"
                >
                  Contáctanos
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
