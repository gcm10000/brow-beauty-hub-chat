
import React from 'react';
import { Instagram, Facebook, MapPin, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-beauty-beige/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80')] bg-cover bg-center"
                aria-label="Profissional de design de sobrancelhas"
              >
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-beauty-gold/30 shadow-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-beauty-pink shadow-lg"></div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nós</h2>
            <p className="text-muted-foreground mb-6">
              Com mais de 8 anos de experiência em design de sobrancelhas, nossa profissional é especialista em técnicas que valorizam a beleza natural de cada cliente.
            </p>
            <p className="text-muted-foreground mb-6">
              Nossa missão é realçar sua beleza natural, respeitando suas características e proporcionando um atendimento personalizado e de alta qualidade.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-beauty-gold/20 flex items-center justify-center">
                  <MapPin className="text-beauty-gold" size={20} />
                </div>
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-beauty-gold/20 flex items-center justify-center">
                  <Clock className="text-beauty-gold" size={20} />
                </div>
                <span>Seg - Sáb: 09:00 - 19:00</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-beauty-gold/20 flex items-center justify-center hover:bg-beauty-gold hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-beauty-gold/20 flex items-center justify-center hover:bg-beauty-gold hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
