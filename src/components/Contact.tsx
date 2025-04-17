
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { MessageSquare } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Erro no envio",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    
    // Format the message for WhatsApp
    const whatsappMessage = formatWhatsAppMessage(formData);
    
    // Phone number (replace with the actual number)
    const phoneNumber = "5511999999999"; // Format: country code + number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Show success message
    toast({
      title: "Mensagem pronta!",
      description: "Redirecionando para o WhatsApp para enviar sua mensagem.",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      service: '',
      message: '',
    });
  };
  
  const formatWhatsAppMessage = (data: FormData): string => {
    return `*Nova solicitação de agendamento*
*Nome:* ${data.name}
*Telefone:* ${data.phone}
*Serviço:* ${data.service}
*Mensagem:* ${data.message || "Não informada"}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo para agendar seu horário ou tirar dúvidas sobre nossos serviços.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service">Serviço desejado *</Label>
              <Select
                value={formData.service}
                onValueChange={handleServiceChange}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Design Personalizado">Design Personalizado</SelectItem>
                  <SelectItem value="Henna">Henna</SelectItem>
                  <SelectItem value="Micropigmentação">Micropigmentação</SelectItem>
                  <SelectItem value="Design com Linha">Design com Linha</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Conte-nos mais sobre o que você precisa..."
                rows={4}
              />
            </div>
            
            <Button type="submit" className="w-full bg-beauty-gold hover:bg-beauty-gold/90">
              <MessageSquare className="mr-2 h-4 w-4" /> Enviar via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
