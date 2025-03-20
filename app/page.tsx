import Hero from '../componentes/hero';
import SobreLaPagina from "@/componentes/SobreLaPagina";

export default function Home() {
  return (
    <div>
      <h1 className="text-white">Hola Mundo</h1>
     <Hero />
     <SobreLaPagina/> 
    </div>
  );
}


