
import React from "react";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Precision Cuts by a<br />
              <span className="text-secondary">Master Barber</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              With over 15 years of experience, I've built SharpCut on a foundation of precision, personalized service, and attention to detail. Every cut is tailored to enhance your natural features and match your unique style.
            </p>
            <p className="text-muted-foreground mb-8">
              My one-chair barbershop offers an intimate, relaxed experience where you'll never feel rushed. Enjoy complimentary beverages, great conversation, and leave looking and feeling your absolute best.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Premium Products</h4>
                  <p className="text-sm text-muted-foreground">Only using the highest quality tools and products</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Precision Cuts</h4>
                  <p className="text-sm text-muted-foreground">Meticulous attention to detail with every client</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Signature Styles</h4>
                  <p className="text-sm text-muted-foreground">Customized looks that enhance your features</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Clean Environment</h4>
                  <p className="text-sm text-muted-foreground">Impeccably maintained for your comfort and safety</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute top-0 left-0 w-full h-full bg-secondary/30 rounded-lg transform -translate-x-4 -translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1614159868126-0a18d71e90c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1152&q=80" 
                alt="Master barber" 
                className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-6 right-6 z-20 bg-white p-4 rounded-lg shadow-md">
                <p className="font-bold text-primary">James Wilson</p>
                <p className="text-sm text-secondary">Master Barber & Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
