
import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";

const images = [
  {
    url: "/IMG_0165.webp",
    style: "Classic Fade",
  },
  {
    url: "/IMG_0166.webp",
    style: "Modern Textured",
  },
  {
    url: "/IMG_3421.webp",
    style: "Beard Styling",
  },
  {
    url: "/IMG_3481.webp",
    style: "Precision Taper",
  },
  {
    url: "/IMG_4818.webp",
    style: "Textured Crop",
  },
  {
    url: "/IMG_5101.webp",
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
          <Button className="flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary shadow-md justify-self-center">
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
