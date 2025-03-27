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
            <Navbar slug={slug} />
            <h1>Provincia: {slug}</h1>
            <Hero slug={slug} />
            <SobreLaPagina/> 
            <SeccionServicios/>
            <CTA/>
            <ComentariosContainer />
            <SeccionProvincias/>
            <TarjetaServicios/>
        </div>
    );
}
