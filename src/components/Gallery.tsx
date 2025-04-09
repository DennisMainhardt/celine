
import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1622296089772-5381173736b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80",
    style: "Classic Fade",
  },
  {
    url: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    style: "Modern Textured",
  },
  {
    url: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    style: "Beard Styling",
  },
  {
    url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    style: "Precision Taper",
  },
  {
    url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    style: "Textured Crop",
  },
  {
    url: "https://images.unsplash.com/photo-1593702288056-f5834bcfa762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    style: "Clean Shave",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Showcase of Our Work</h2>
          <p className="text-muted-foreground">
            Browse through a selection of our finest cuts and styles. Each image represents our commitment to precision, quality, and personalized service.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="aspect-square w-full">
                <img 
                  src={image.url} 
                  alt={`Haircut style - ${image.style}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white font-bold">{image.style}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="flex items-center gap-2">
            <Instagram className="h-5 w-5" />
            Follow Us on Instagram
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            See more of our work and daily updates on our Instagram
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
