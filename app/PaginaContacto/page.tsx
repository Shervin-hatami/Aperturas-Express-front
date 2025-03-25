'use client';

import { useState, useEffect } from 'react';

interface ContactoField {
  id: number;
  NombreDato: string;
  valorDato: string | null;
}

interface ContactoData {
  id: number;
  documentId: string;
  titulo: string;
  Boton: string;
  contacto: ContactoField[];
}

export default function PaginaContacto() {
  const [contactoData, setContactoData] = useState<ContactoData | null>(null);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/pagina-contacto?populate=*');
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: No se pudieron cargar los datos de contacto`);
        }
        
        const result = await response.json();
        
        // Verificar que los datos tienen la estructura esperada
        if (!result.data || !result.data.contacto || !Array.isArray(result.data.contacto)) {
          throw new Error('Formato de datos inesperado');
        }
        
        setContactoData(result.data);
        
        // Inicializar formData con campos vacíos
        const initialFormData: { [key: string]: string } = {};
        result.data.contacto.forEach((field: ContactoField) => {
          initialFormData[field.NombreDato] = '';
        });
        setFormData(initialFormData);
        
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
        setError(`Error al cargar los datos de contacto: ${errorMessage}`);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar los datos del formulario
    console.log('Datos del formulario enviados:', formData);
    // Podrías hacer un fetch POST a tu API aquí
    alert('Formulario enviado con éxito');
  };

  if (isLoading) return <div className="text-center p-8">Cargando...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;
  if (!contactoData) return <div className="text-center p-8">No hay datos disponibles</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center my-4">
        <div className="transform scale-325">
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md shadow-gray-300">
        <h1 className="text-3xl font-bold text-center mb-8">{contactoData.titulo}</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {contactoData.contacto.map((campo) => (
            <div key={campo.id} className="space-y-2">
              <label htmlFor={`campo-${campo.id}`} className="block text-gray-700 font-medium">
                {campo.NombreDato}
              </label>
              <input
                id={`campo-${campo.id}`}
                type={campo.NombreDato.toLowerCase() === 'mail' ? 'email' : 'text'}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData[campo.NombreDato] || ''}
                onChange={(e) => handleInputChange(campo.NombreDato, e.target.value)}
                required
              />
            </div>
          ))}
          
          <div className="text-center">
            <button 
              type="submit" 
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {contactoData.Boton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
