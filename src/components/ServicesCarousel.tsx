import React from "react";

const ServicesCarousel = () => {
  const services = [
    {
      title: "Media sensitization and advocacy",
      description: "AfCFTA policy network has extensively done media and public advocacy through print, electronic....",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716829/fd2ce89b-3a0e-473d-b42f-d13f1c4eef29-300x212_x4qqnw.jpg",
      iconBg: "bg-red-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l4 2A1 1 0 0020 14V8a1 1 0 00-1.447-.894l-4 2zM4 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      title: "Institutional partnerships",
      description: "AfCFTA policy network has done extensive institutional networking with CSO's, private sector....",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/afcfta-institutional-partnership-384x256_negvck.jpg",
      iconBg: "bg-amber-500",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Ongoing flagship programs",
      description: "The hope project is about acquiring land to build centre of Excellence in I trade, free trade....",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/slide111_ptbh1n.jpg",
      iconBg: "bg-red-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  return (
    /* Full-width, no container padding — matches the HeroSlider edge-to-edge width */
    <div className="w-full grid grid-cols-1 md:grid-cols-3">
      {services.map((service, index) => (
        <div key={index} className="group relative overflow-hidden cursor-pointer" style={{ minHeight: "320px" }}>
          {/* Full-bleed background image */}
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-slate-900/65 group-hover:bg-slate-900/75 transition-colors"></div>

          {/* Icon badge — top-left */}
          <div className={`absolute top-6 left-6 w-14 h-14 ${service.iconBg} flex items-center justify-center z-10`}>
            {service.icon}
          </div>

          {/* Text content — bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <h3 className="text-white text-lg font-bold mb-2 leading-snug">{service.title}</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase px-4 py-2 transition-colors"
            >
              Read more
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCarousel;
