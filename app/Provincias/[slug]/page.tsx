import React from 'react';
import SeccionServicios from '@/componentes/SeccionServicios';
import SobreLaPagina from "@/componentes/SobreLaPagina";
import TarjetaServicios from '@/componentes/TarjetaServicios';
import ComentariosContainer from '@/componentes/ComentariosContainer';
import CTA from "@/componentes/CTA";
import SeccionProvincias from '@/componentes/SeccionProvincias';
import Hero from '@/componentes/hero';
import Navbar from '@/componentes/NavBar';


export default async function Page({ params }: { params: { slug: string } }) {
    const slug = params.slug; // Accede a slug directamente

    return (
        <div className="mt-10">
            <div className="z-30">
                <Navbar slug={slug} /> 
            </div>
           
            <Hero slug={slug} />
            <SobreLaPagina slug={slug} /> 
            <SeccionServicios slug={slug}/>
            <CTA/>
            <ComentariosContainer />
            <SeccionProvincias/>
            <TarjetaServicios/>
        </div>
    );
}
