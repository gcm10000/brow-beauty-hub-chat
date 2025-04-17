
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scissors, Brush, Sparkles, PenTool } from 'lucide-react';

const services = [
  {
    title: "Design Personalizado",
    description: "Design exclusivo que valoriza seus traços naturais e harmoniza com o formato do seu rosto.",
    icon: PenTool,
    color: "text-beauty-gold"
  },
  {
    title: "Henna",
    description: "Coloração natural que preenche falhas e dá definição às sobrancelhas por até 2 semanas.",
    icon: Brush,
    color: "text-beauty-soft-brown"
  },
  {
    title: "Micropigmentação",
    description: "Técnica semipermanente para definição e preenchimento que dura até 2 anos.",
    icon: Sparkles,
    color: "text-beauty-pink"
  },
  {
    title: "Design com Linha",
    description: "Método preciso que remove pelos com fio de linha, ideal para peles sensíveis.",
    icon: Scissors,
    color: "text-beauty-gold"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-beauty-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços de design de sobrancelhas, personalizados para realçar sua beleza natural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover-scale bg-white border-none shadow-md">
              <CardHeader>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${service.color} bg-opacity-10 bg-current mb-4`}>
                  <service.icon className={service.color} size={24} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
