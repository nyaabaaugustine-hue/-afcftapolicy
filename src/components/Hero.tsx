import React from "react";
const Hero = () => {
  return (
    <div className="bg-slate-950 py-16 px-4 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-white text-4xl md:text-5xl font-serif font-bold mb-4">
          Home
        </h2>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-gray-300">Welcome to AfCFTA Policy Network</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;