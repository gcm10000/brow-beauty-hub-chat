
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 min-h-screen flex items-center hero-gradient">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-beauty-soft-brown leading-tight">
              Realce sua beleza natural com design de sobrancelhas profissional
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Transforme seu olhar com técnicas exclusivas de design que valorizam sua expressão e harmonia facial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact} 
                className="bg-beauty-gold hover:bg-beauty-gold/90 text-white"
              >
                Agende Agora
              </Button>
              <Button 
                variant="outline" 
                className="border-beauty-gold text-beauty-gold hover:bg-beauty-gold/10"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative animate-fade-in">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center"
                aria-label="Imagem de sobrancelha perfeita"
              >
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-beauty-pink shadow-lg"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-beauty-gold/30 shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
