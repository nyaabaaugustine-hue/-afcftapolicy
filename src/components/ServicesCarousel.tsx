import { useState } from "react";
import React from "react";

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path d="m16 6-1.4 1.4 1.6 1.6H0v2h16.2l-1.6 1.6L16 14l4-4z"/>
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.18 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const OpenSourceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const ServicesCarousel = () => {
  const services = [
    {
      icon: <PlayIcon />,
      title: "Media sensitization and advocacy",
      description: "AfCFTA policy network has extensively done media and public advocacy through print, electronic...",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716829/fd2ce89b-3a0e-473d-b42f-d13f1c4eef29-300x212_x4qqnw.jpg"
    },
    {
      icon: <HandshakeIcon />,
      title: "Institutional partnerships",
      description: "AfCFTA policy network has done extensive institutional networking with CSO'S, private sector...",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/afcfta-institutional-partnership-384x256_negvck.jpg"
    },
    {
      icon: <OpenSourceIcon />,
      title: "Ongoing flagship programs",
      description: "The hope project is about acquiring land to build centre of Excellence in 1 trade, free trade...",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/slide111_ptbh1n.jpg"
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <div className="h-64 relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="text-white mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.description}</p>
                <a href="#" className="text-amber-400 font-medium text-sm flex items-center gap-2 hover:text-amber-300 transition-colors">
                  Read more
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;