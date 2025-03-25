import PaginaLegal from '@/componentes/PaginaLegal';
import FetchLogoNav from '@/componentes/FetchLogoNav';

export default function LegalPage({ params }: { params: { slug: string } }) {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center">
        <div className="transform scale-325 pt-10">
          <FetchLogoNav />
        </div>
      </div>
      <div className="mt-20">
        <PaginaLegal slug={params.slug} />
      </div>
    </div>
  ); 
}



