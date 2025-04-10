
import React from "react";
import { MapPin } from "lucide-react";

const GoogleMap = () => {
  return (
    <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4996.115703452398!2d6.8593362775365!3d51.236429430461065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ceac8c7d1d71%3A0x93e2fd22c1b54833!2sK%C3%B6lner%20Tor%2011%2C%2040625%20D%C3%BCsseldorf!5e0!3m2!1sde!2sde!4v1744311975947!5m2!1sde!2sde"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="SharpCut Barbershop Standort"
        className="absolute inset-0"
      ></iframe>

    </div>
  );
};

export default GoogleMap;
