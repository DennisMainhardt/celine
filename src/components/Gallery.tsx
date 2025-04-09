
import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";

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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 section-title">Our Gallery</h2>
          <p className="text-muted-foreground mt-6">
            Browse through our finest cuts and styles that have transformed our clients. 
            Each image represents our commitment to precision and personalized service.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-md card-hover">
              <div className="aspect-square w-full">
                <img 
                  src={image.url} 
                  alt={`Haircut style - ${image.style}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end">
                <div className="p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-lg">{image.style}</p>
                  <button className="mt-2 text-secondary flex items-center text-sm font-medium hover:text-white transition-colors">
                    <span>View details</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-primary/5 py-8 px-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-4">See More of Our Work</h3>
          <Button className="flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary shadow-md">
            <Instagram className="h-5 w-5" />
            Follow Us on Instagram
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            Stay updated with our latest styles and transformations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
