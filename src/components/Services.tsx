import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Scissors, Clock } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Klassischer Haarschnitt",
    description: "Präziser Schnitt, abgestimmt auf Ihre Gesichtsform und Stilvorlieben, inklusive Waschen und Styling.",
    price: "30€",
    popular: true
  },
  {
    id: 2,
    name: "Bart Trimmen & Formen",
    description: "Professionelle Bartpflege zur Verbesserung Ihrer Gesichtszüge mit präziser Detailarbeit.",
    price: "25€",
    popular: false
  },
  {
    id: 3,
    name: "Premium Paket",
    description: "Komplettes Pflegeerlebnis inklusive Haarschnitt, Barttrimmen, Heißtuchbehandlung und Styling.",
    price: "50€",
    popular: false
  },
  {
    id: 4,
    name: "Heißtuch-Rasur",
    description: "Traditionelle Rasur mit dem Rasiermesser und Heißtuchvorbereitung für das glatteste Finish.",
    price: "35€",
    popular: false
  },
  {
    id: 5,
    name: "Haar- & Bartfärbung",
    description: "Professionelles Färben zum Abdecken grauer Haare oder für einen natürlichen Look.",
    price: "45€+",
    popular: false
  },
  {
    id: 6,
    name: "Kinderhaarschnitt (Unter 12)",
    description: "Sanfter, geduldiger Service für unsere jüngeren Kunden mit altersgerechten Stiloptionen.",
    price: "20€",
    popular: false
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-primary/5">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 section-title">Unsere Leistungen</h2>
          <p className="text-muted-foreground mt-6">
            Professionelle Pflegedienstleistungen, maßgeschneidert zur Verbesserung Ihrer individuellen Merkmale. Von präzisen Haarschnitten bis hin zu luxuriösen Heißtuch-Rasuren - erleben Sie Barbierkunst auf höchstem Niveau.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (

            < div
              key={service.id}
              className={`service-item bg-white rounded-xl p-8 border border-border hover:border-secondary/50 transition-all duration-300 ${service.popular ? "relative overflow-hidden shadow-xl border-secondary/50" : "shadow-md"
                }`}
            >
              {service.popular && (
                <div className="absolute right-4 top-4 bg-secondary text-white px-4 py-1 text-sm font-medium -mr-8 transform rotate-45 shadow-md">
                  Beliebt
                </div>
              )}
              <h3 className="text-xl font-bold mb-3">{service.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
                <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                  <Calendar className="h-4 w-4 mr-1" />
                  Jetzt Buchen
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-md">
          <p className="text-muted-foreground mb-6">
            Alle Leistungen beinhalten eine Beratung, um Ihre Vorlieben und Styling-Bedürfnisse zu verstehen.
          </p>
          <Button className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary shadow-md">
            <Scissors className="h-4 w-4 mr-2" />
            Komplette Leistungsliste Ansehen
          </Button>
        </div>
      </div>
    </section >
  );
};

export default Services;
