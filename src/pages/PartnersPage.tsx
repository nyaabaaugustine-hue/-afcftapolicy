import React from "react";
const PartnersPage = () => {
  const partners = [
    { name: "African Union", logo: "AU" },
    { name: "AfCFTA Secretariat", logo: "AfCFTA" },
    { name: "UN Economic Commission for Africa", logo: "UNECA" },
    { name: "African Development Bank", logo: "AfDB" },
    { name: "Trade Mark Africa", logo: "TMA" },
    { name: "GIZ", logo: "GIZ" }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Our Partners</h1>
          <p className="text-gray-400">Home - Partners</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Collaboration</span>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2">Strategic Partners</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We work with leading organizations across Africa and globally to advance trade policy and economic integration.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-amber-600 font-bold text-sm">{partner.logo}</span>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-gray-900 text-2xl font-bold mb-4">Become a Partner</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Interested in partnering with AfCFTA Policy Network? We welcome collaborations with organizations that share our vision for African trade.
            </p>
            <button className="bg-amber-500 text-white px-8 py-3 rounded font-medium uppercase hover:bg-amber-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;