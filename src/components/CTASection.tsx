import React from "react";
interface CTASectionProps {
  onNavigate: (page: string) => void;
}

const CTASection = ({ onNavigate }: CTASectionProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-800 rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Want to know more about AfCFTA?
              </h3>
              <p className="text-gray-400">Join our network and stay updated with the latest developments.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate("contact")}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 font-medium uppercase tracking-wider transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={() => onNavigate("register")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-medium uppercase tracking-wider transition-colors"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;