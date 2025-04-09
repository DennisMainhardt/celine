
import React from "react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    name: "Classic Haircut",
    description: "Precision cut tailored to your face shape and style preferences, includes wash and styling.",
    price: "$30",
    duration: "45 min",
    popular: true
  },
  {
    id: 2,
    name: "Beard Trim & Shape",
    description: "Expert beard grooming to enhance your facial features with precision detailing.",
    price: "$25",
    duration: "30 min",
    popular: false
  },
  {
    id: 3,
    name: "Premium Package",
    description: "Complete grooming experience including haircut, beard trim, hot towel treatment and styling.",
    price: "$50",
    duration: "75 min",
    popular: false
  },
  {
    id: 4,
    name: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towel preparation for the smoothest finish.",
    price: "$35",
    duration: "45 min",
    popular: false
  },
  {
    id: 5,
    name: "Hair & Beard Coloring",
    description: "Professional color application to cover grays or try a new look with natural-looking results.",
    price: "$45+",
    duration: "60+ min",
    popular: false
  },
  {
    id: 6,
    name: "Kids Haircut (Under 12)",
    description: "Gentle, patient service for our younger clients with style options suitable for their age.",
    price: "$20",
    duration: "30 min",
    popular: false
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-primary/5">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Barbering Services</h2>
          <p className="text-muted-foreground">
            Expert grooming services tailored to enhance your unique features. From precision haircuts to luxurious hot towel shaves, experience barbering at its finest.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-item bg-white rounded-lg p-8 border border-border hover:border-secondary/50 transition-all duration-300 ${
                service.popular ? "relative overflow-hidden shadow-lg border-secondary/50" : "shadow-sm"
              }`}
            >
              {service.popular && (
                <div className="absolute right-0 top-6 bg-secondary text-white px-4 py-1 text-sm font-medium -mr-8 transform rotate-45">
                  Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-3">{service.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <span className="text-muted-foreground text-sm"> / {service.duration}</span>
                </div>
                <Button variant="outline" size="sm" className="hover:bg-secondary hover:text-white">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            All services include a consultation to understand your preferences and styling needs.
          </p>
          <Button className="bg-secondary hover:bg-secondary/90">
            View Full Service Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
