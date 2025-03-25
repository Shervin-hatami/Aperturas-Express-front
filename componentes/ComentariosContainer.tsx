import React from 'react';
import { fetchFromStrapi } from './Fetcher';
import Comentarios from './Comentarios';

const ComentariosContainer: React.FC = async () => {
    // Realizar un único fetch para obtener comentarios, estrellas y fotos
    const response = await fetchFromStrapi<any>('comments?populate=*');
    console.log(response);
    const data = response ? response.data : [];

    // Asegurarse de que los datos tengan la estructura correcta
    const commentsWithPhotos = data.map((comentario: any) => {
        return {
            ...comentario,
            foto: comentario.foto // Asignar la foto obtenida directamente
        };
    });

    return <Comentarios data={commentsWithPhotos} />;
};

export default ComentariosContainer; 