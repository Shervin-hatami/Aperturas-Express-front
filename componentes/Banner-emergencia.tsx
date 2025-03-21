import { fetchFromStrapi } from './Fetcher';

interface BannerData {
  data: {
    banner: string;
  };
}

export default async function BannerEmergencia() {
  const data: BannerData | null = await fetchFromStrapi('banner');

  if (!data) return null;

  const { banner } = data.data;

  return (
    <>
      <div className="bg-red-600 text-white py-2 px-4 fixed top-0 left-0 right-0 z-60 hover:bg-red-700 hover:text-white transition duration-300">
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          <div className="flex items-center mb-1">
            <div className="h-4 w-4 rounded-full bg-emerald-500 mr-2 animate-pulse"></div>
          <a 
            href={"/"}
            className="font-bold text-lg "
          >
            {banner}
          </a>
          </div>
        </div>
      </div>
      
      {/* Espacio para evitar que el contenido quede detrás del banner */}
      <div className="h-[72px]"></div>
    </>
  );
}

