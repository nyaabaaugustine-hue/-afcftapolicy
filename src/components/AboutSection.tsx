import React from "react";

interface AboutSectionProps {
  onNavigate: (page: string) => void;
}

const AboutSection = ({ onNavigate }: AboutSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section label */}
        <div className="text-center mb-2">
          <span className="text-amber-500 text-sm font-medium uppercase tracking-widest">— About Us —</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mt-8">
          {/* Left - Logo */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-40 h-40 rounded-full border-4 border-amber-500 flex items-center justify-center bg-slate-900 shadow-xl">
              <div className="text-center">
                <div className="text-amber-500 font-extrabold text-2xl tracking-widest leading-tight">APN</div>
                <div className="text-white text-[9px] font-medium tracking-wider leading-tight mt-1">
                  AfCFTA<br />Policy Network
                </div>
              </div>
            </div>
          </div>

          {/* Center - Text */}
          <div className="flex-1">
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mb-5">
              AFCFTA Policy Network
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              The local network of the AfCFTA was established for the purpose of highlighting and upholding the
              implementation of Intra-Africa trade with its pillars of trade partnerships, economies of scale,
              linkages, food security, accelerated economic activity and infrastructural development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-gray-900 font-bold text-base">Our Values</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-8">
                  Collaboration, Advocacy Focus, Inclusivity, Integrity, Innovation
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-gray-900 font-bold text-base">Growth</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-8">
                  A wider policy network with a globally-relevant, continental perspective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
