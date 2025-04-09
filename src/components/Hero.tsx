
import React from "react";
import { Button } from "@/components/ui/button";
import { Scissors, Calendar, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-primary/10 to-background">
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
        style={{ opacity: 0.05 }}
      ></div>
      
      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 lg:w-5/12 text-center md:text-left py-12 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-5">Premium Barbershop Erlebnis</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Entdecke deinen <span className="text-secondary">besten Look</span> mit uns
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto md:mx-0">
            Experten-Styling, persönlicher Service und ein entspannendes Erlebnis in einer freundlichen Atmosphäre. Dein bester Look beginnt bei SharpCut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="btn-secondary text-base px-8 py-6 h-auto group" size="lg">
              <Calendar className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Termin buchen
            </Button>
            <Button variant="outline" className="text-base px-8 py-6 h-auto flex items-center gap-2 border-2 hover:border-secondary hover:text-secondary" size="lg">
              <Scissors className="h-5 w-5" />
              Services ansehen
            </Button>
          </div>
          
          <div className="mt-10 flex items-center justify-center md:justify-start space-x-8">
            <div className="text-center md:text-left card-hover p-3 rounded-lg">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground text-sm">Zufriedene Kunden</p>
            </div>
            <div className="h-10 w-px bg-border"></div>
            <div className="text-center md:text-left card-hover p-3 rounded-lg">
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-muted-foreground text-sm">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 lg:w-7/12 relative hidden md:block">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Professioneller Barbier beim Haareschneiden" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl border-l-4 border-secondary card-hover">
            <div className="flex items-center gap-4">
              <div className="bg-secondary/20 p-3 rounded-full">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="font-bold">Nächster freier Termin</p>
                <p className="text-secondary font-medium">Heute um 14:00 Uhr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
