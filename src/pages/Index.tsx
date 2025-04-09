
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <section id="location" className="section-padding bg-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-3">
              Unser Standort
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 section-title">Besuchen Sie uns</h2>
            <p className="text-muted-foreground">
              Wir befinden uns im Herzen von Berlin, leicht zu erreichen mit öffentlichen Verkehrsmitteln oder mit dem Auto. Kostenlose Parkplätze sind vorhanden.
            </p>
          </div>
          <div className="w-full h-[500px]">
            <GoogleMap />
          </div>
        </div>
      </section>
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
