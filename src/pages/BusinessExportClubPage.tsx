import React from "react";
const BusinessExportClubPage = () => {
  const benefits = [
    "Access to export market intelligence",
    "Business matchmaking opportunities",
    "Trade finance advisory",
    "Capacity building workshops",
    "Networking with fellow exporters",
    "Policy advocacy representation"
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Business Export Club 500</h1>
          <p className="text-gray-400">Home - Business Export Club 500</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Exclusive Club</span>
              <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2 mb-6">
                Join Africa's Premier Export Business Network
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The Business Export Club 500 is an exclusive network of leading African exporters committed to expanding intra-African trade under the AfCFTA framework.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Membership provides access to market intelligence, business matchmaking, trade finance advisory, and networking opportunities with fellow exporters across the continent.
              </p>

              <h3 className="text-gray-900 text-xl font-bold mb-4">Member Benefits:</h3>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>

              <button className="bg-amber-500 text-white px-8 py-3 rounded font-medium uppercase hover:bg-amber-600 transition-colors">
                Apply for Membership
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-gray-900 text-xl font-bold mb-6">Eligibility Criteria</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-500 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium">Registered Business</h4>
                    <p className="text-gray-600 text-sm">Must be a legally registered business in an African country</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-500 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium">Export Experience</h4>
                    <p className="text-gray-600 text-sm">Minimum 2 years of export experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-500 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium">Annual Revenue</h4>
                    <p className="text-gray-600 text-sm">Minimum annual revenue of $100,000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-500 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium">Compliance</h4>
                    <p className="text-gray-600 text-sm">Good standing with tax and regulatory authorities</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                <p className="text-amber-800 text-sm">
                  <strong>Annual Membership Fee:</strong> $500 for businesses with revenue under $1M, $1,000 for larger businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessExportClubPage;