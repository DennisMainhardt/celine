
import React from "react";
import { Facebook, Instagram, Twitter, Scissors } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Scissors className="h-6 w-6 text-secondary" />
              <h3 className="text-2xl font-bold">SHARP<span className="text-secondary">CUT</span></h3>
            </div>
            <p className="text-white/80 max-w-md mb-6">
              Premium Barber-Services mit Fokus auf Präzision, Qualität und Kundenzufriedenheit. Erleben Sie die Kunst der Pflege bei SharpCut.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Schnelllinks</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-secondary transition-colors">Über Uns</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors">Dienstleistungen</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-secondary transition-colors">Galerie</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-secondary transition-colors">Kundenstimmen</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-secondary transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Kontaktinformationen</h4>
            <ul className="space-y-3">
              <li className="text-white/80">
                Potsdamer Platz<br />
                10785 Berlin, Deutschland
              </li>
              <li>
                <a href="tel:+4915512345678" className="text-white/80 hover:text-secondary transition-colors">+49 155 1234 5678</a>
              </li>
              <li>
                <a href="mailto:info@sharpcut.de" className="text-white/80 hover:text-secondary transition-colors">info@sharpcut.de</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} SharpCut Barbershop. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm">Datenschutz</a>
            <a href="#" className="text-white/60 hover:text-white text-sm">AGB</a>
            <a href="#" className="text-white/60 hover:text-white text-sm">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
