
import React from 'react';

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    alt: "Sobrancelha design perfeito",
    label: "Design Natural"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1617887021567-fe83c6c3c914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Design com henna",
    label: "Henna"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1696446701834-bbc7a5a0571b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Micropigmentação de sobrancelha",
    label: "Micropigmentação"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1619942243259-62fdecb376b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Design com linha",
    label: "Design Profissional"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Antes e depois",
    label: "Transformação"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1066&q=80",
    alt: "Cliente satisfeita",
    label: "Resultados Reais"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeria de Trabalhos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos resultados dos nossos serviços de design de sobrancelhas e transformações realizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md aspect-square hover-scale">
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-white font-medium p-4">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
