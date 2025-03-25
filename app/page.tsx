import Hero from '../componentes/hero';
import SobreLaPagina from "@/componentes/SobreLaPagina";
import CTA from "@/componentes/CTA";

export default function Home() {
  return (
    <div>
      <h1 className="text-white"></h1>
     <Hero />
     <SobreLaPagina/> 
     <CTA/>
    </div>
  );
}


