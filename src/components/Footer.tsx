
import React from "react";
import { Facebook, Instagram, Twitter, Scissors } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Scissors className="h-6 w-6 text-secondary" />
              <h3 className="text-2xl font-bold">SHARP<span className="text-secondary">CUT</span></h3>
            </div>
            <p className="text-white/80 max-w-md mb-6">
              Premium barbering services with a focus on precision, quality, and customer satisfaction. Experience the art of grooming at SharpCut.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-secondary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-secondary transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-secondary transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-secondary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-secondary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-white/80">
                123 Main Street, Downtown<br />
                New York, NY 10001
              </li>
              <li>
                <a href="tel:+15551234567" className="text-white/80 hover:text-secondary transition-colors">(555) 123-4567</a>
              </li>
              <li>
                <a href="mailto:info@sharpcut.com" className="text-white/80 hover:text-secondary transition-colors">info@sharpcut.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} SharpCut Barbershop. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
