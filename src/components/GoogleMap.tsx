
import React from "react";
import { MapPin } from "lucide-react";

const GoogleMap = () => {
  return (
    <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.654294919!2d13.347334776855493!3d52.50788003981067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8505e880d86cf%3A0x39fc673e95a7a7d5!2sPotsdamer%20Platz%2C%20Berlin!5e0!3m2!1sde!2sde!4v1681812345678!5m2!1sde!2sde"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="SharpCut Barbershop Standort"
        className="absolute inset-0"
      ></iframe>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-primary/90 text-white">
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-secondary mr-2" />
          <div>
            <p className="font-bold">SharpCut Barbershop</p>
            <p className="text-sm text-white/80">Potsdamer Platz, 10785 Berlin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
