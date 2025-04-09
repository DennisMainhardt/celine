
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-primary">
          SHARP<span className="text-secondary">CUT</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-secondary transition-colors duration-300">Über Uns</a>
          <a href="#services" className="text-foreground hover:text-secondary transition-colors duration-300">Dienstleistungen</a>
          <a href="#gallery" className="text-foreground hover:text-secondary transition-colors duration-300">Galerie</a>
          <a href="#testimonials" className="text-foreground hover:text-secondary transition-colors duration-300">Kundenstimmen</a>
          <a href="#contact" className="text-foreground hover:text-secondary transition-colors duration-300">Kontakt</a>
          <Button className="bg-secondary hover:bg-secondary/90">
            Jetzt Buchen
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed top-[72px] left-0 right-0 bg-background/95 backdrop-blur-md shadow-md transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        )}
      >
        <nav className="container-custom flex flex-col py-6 space-y-4">
          <a href="#about" className="text-foreground hover:text-secondary transition-colors duration-300 py-2">Über Uns</a>
          <a href="#services" className="text-foreground hover:text-secondary transition-colors duration-300 py-2">Dienstleistungen</a>
          <a href="#gallery" className="text-foreground hover:text-secondary transition-colors duration-300 py-2">Galerie</a>
          <a href="#testimonials" className="text-foreground hover:text-secondary transition-colors duration-300 py-2">Kundenstimmen</a>
          <a href="#contact" className="text-foreground hover:text-secondary transition-colors duration-300 py-2">Kontakt</a>
          <Button className="bg-secondary hover:bg-secondary/90 w-full mt-4">
            Jetzt Buchen
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
