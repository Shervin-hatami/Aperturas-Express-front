import { fetchFromStrapi } from './Fetcher';
import React from 'react';
import PubliCard from './PubliCard';

interface PubliImage {
  id: number;
  documentId: string;
  name: string;
  width: number;
  height: number;
  formats: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
  url: string;
}

interface PubliData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: PubliImage[];
  video: any;
}

interface PubliResponse {
  data: PubliData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
}

interface PubliProps {
  className?: string;
}

export default async function Publi({ className }: PubliProps) {
  const apiUrl = 'http://localhost:1337';
  const response = await fetchFromStrapi<PubliResponse>('publis?populate=*');
  
  if (!response || !response.data || !Array.isArray(response.data)) {
    return null;
  }

  const publis = response.data.map(item => ({
    id: item.id,
    documentId: item.documentId,
    titulo: item.title,
    descripcion: item.description,
    imagenes: item.image && item.image.length > 0 
      ? item.image.map((img: PubliImage) => ({
          ...img,
          url: `${apiUrl}${img.url}`
        }))
      : []
  }));

  return (
    <section className={`py-8 ${className || ''}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publis.map((publi) => (
            <PubliCard key={publi.id} publi={publi} />
          ))}
        </div>
      </div>
    </section>
  );
}
