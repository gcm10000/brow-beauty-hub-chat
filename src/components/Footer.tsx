
import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beauty-soft-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">BrowBeauty</h3>
            <p className="mb-4 text-sm opacity-80">
              Transforme seu olhar com design de sobrancelhas profissional. Realçamos sua beleza natural com técnicas exclusivas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-beauty-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-beauty-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-beauty-gold" />
                <span className="text-sm">Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-beauty-gold" />
                <span className="text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-beauty-gold" />
                <span className="text-sm">contato@browbeauty.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li className="text-sm">Segunda a Sexta: 09:00 - 19:00</li>
              <li className="text-sm">Sábado: 09:00 - 17:00</li>
              <li className="text-sm">Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-70">
          <p>&copy; {currentYear} BrowBeauty - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
