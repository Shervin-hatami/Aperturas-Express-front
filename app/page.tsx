import SeccionServicios from '@/componentes/SeccionServicios';
import Hero from '../componentes/hero';
import SobreLaPagina from "@/componentes/SobreLaPagina";
import TarjetaServicios from '@/componentes/TarjetaServicios';
import ComentariosContainer from '@/componentes/ComentariosContainer';
import CTA from "@/componentes/CTA";


export default function Home() {
  return (
    <div>
      <h1 className="text-white"></h1>
     <Hero />
     <SobreLaPagina/> 
     <SeccionServicios/>
     <ComentariosContainer />
     <TarjetaServicios/>
     <CTA/>
    </div>
  );
}


