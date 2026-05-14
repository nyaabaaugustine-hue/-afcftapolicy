import { useState, useEffect } from "react";
import React from "react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Landmark MOU Signing",
      subtitle: "AfCFTA Secretariat and APN Group",
      description: "Strengthening partnerships for African trade",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/Landmark-MOU-signing-between-AfCFTA-Secretariat-and-APN-Group3-1_ufvv5e.jpg"
    },
    {
      title: "African Continental Free Trade",
      subtitle: "Implementation & Advocacy",
      description: "Building bridges across the continent",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/slide111_ptbh1n.jpg"
    },
    {
      title: "Policy Network Ghana",
      subtitle: "Think Tank for AfCFTA",
      description: "Leading the way in trade policy research",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716827/afctfa-45_dhoyzp.jpg"
    },
    {
      title: "Women in Trade Conference",
      subtitle: "4th Annual Summit",
      description: "Empowering women across Africa",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/WhatsApp-Image-2020-08-28-at-08.11.21-384x256_vch3ni.jpg"
    },
    {
      title: "Building Capacity for Trade",
      subtitle: "Training & Development",
      description: "Empowering businesses across Africa",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716826/afctfa-132_sq4kvo.jpg"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6"></path>
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  );

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>

          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
              <div className="max-w-2xl">
                <p className="text-amber-400 text-sm md:text-base font-medium mb-2 uppercase tracking-wider">
                  {slide.subtitle}
                </p>
                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-6">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <button className="bg-amber-500 text-white px-6 py-3 rounded font-medium uppercase text-sm hover:bg-amber-600 transition-colors">
                    Learn More
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded font-medium uppercase text-sm hover:bg-white hover:text-slate-900 transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
      >
        <ChevronRightIcon />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-amber-400" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;