import SeccionServicios from '@/componentes/SeccionServicios';
import Hero from '../componentes/hero';
import SobreLaPagina from "@/componentes/SobreLaPagina";
import TarjetaServicios from '@/componentes/TarjetaServicios';
import ComentariosContainer from '@/componentes/ComentariosContainer';
import CTA from "@/componentes/CTA";
import SeccionProvincias from '@/componentes/SeccionProvincias';
import Navbar from '@/componentes/NavBar';
import Publi from '@/componentes/Publi';

export default function Home() {
  const slug = 'default-slug'; // Define un slug por defecto o obténlo de alguna manera

  return (
    <div>
      <Navbar slug={slug} />
      <h1 className="text-white"></h1>
      <Hero slug={slug} />
      <SobreLaPagina slug={slug} /> 
      <SeccionServicios slug={slug}/>
      <CTA/>
      <ComentariosContainer />
      <SeccionProvincias/>
      <Publi/>
      <TarjetaServicios/>
    </div>
  );
}


