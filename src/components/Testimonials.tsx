import React from "react";
import { Star, Quote, ThumbsUp, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Michael Schmidt",
    role: "Stammkunde seit 2019",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    rating: 5,
    text: "James ist der beste Barbier, den ich je hatte. Er nimmt sich die Zeit, genau zu verstehen, was ich möchte, und liefert jedes Mal. Die Atmosphäre ist entspannt und professionell. Sehr empfehlenswert!",
    date: "vor 2 Wochen",
    verified: true
  },
  {
    id: 2,
    name: "David Müller",
    role: "Stammkunde seit 2021",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    rating: 5,
    text: "Ich gehe seit über einem Jahr zu SharpCut. Die Liebe zum Detail ist unübertroffen und ich gehe immer mit Selbstvertrauen. Jeden Cent wert.",
    date: "vor 1 Monat",
    verified: true
  },
  {
    id: 3,
    name: "Thomas Wagner",
    role: "Neukunde",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 5,
    text: "Endlich einen Barbier gefunden, der wirklich zuhört. James nahm sich Zeit, um zu verstehen, was ich suchte, und gab mir fachkundige Ratschläge. Die Behandlung mit dem heißen Handtuch ist ein Gamechanger!",
    date: "vor 3 Wochen",
    verified: true
  }
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <Star
      key={index}
      className={`h-5 w-5 ${index < rating ? "text-secondary fill-secondary" : "text-gray-300"
        }`}
    />
  ));
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-primary/5 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block mx-auto px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-3 w-fit">
            Kundenbewertungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 section-title">Was unsere Kunden sagen</h2>
          <p className="text-muted-foreground">
            Nehmen Sie nicht nur unser Wort dafür. Lesen Sie, was unsere zufriedenen Kunden über ihre Erfahrungen bei SharpCut Barbershop sagen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}
              className="bg-white rounded-lg p-8 shadow-sm border border-border relative card-hover animate-fade-in"
            >
              <div className="absolute top-8 right-8 text-secondary/20">
                <Quote className="h-12 w-12" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-secondary">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm mb-1">{testimonial.role}</p>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>

              <div className="flex justify-between items-center mt-4">
                <p className="text-xs text-muted-foreground/80">
                  {testimonial.date}
                </p>
                {testimonial.verified && (
                  <div className="flex items-center text-green-600 text-xs">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    Verifizierter Kunde
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-white rounded-lg shadow-sm border border-border max-w-3xl mx-auto card-hover">
          <h3 className="text-2xl font-bold mb-4">Bereit, den Unterschied zu erleben?</h3>
          <p className="text-muted-foreground mb-8">
            Schließen Sie sich Hunderten von zufriedenen Kunden an, die SharpCut für ihre Pflege vertrauen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-secondary">
              <Calendar className="h-5 w-5" />
              Termin buchen
            </a>
            <a href="tel:+4915512345678" className="btn-primary">
              Anrufen: +49 155 1234 5678
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
