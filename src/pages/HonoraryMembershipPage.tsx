import React from "react";
export default function HonoraryMembershipPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-amber-500/30 to-green-500/30"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Honorary Membership Registration</h1>
            <nav className="flex items-center gap-2 text-sm">
              <a href="#" className="text-amber-400 hover:text-amber-300">Home</a>
              <span className="text-gray-500">-</span>
              <span className="text-gray-400">Honorary Membership Registration</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Honorary Membership Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left - Information */}
            <div className="lg:w-1/2">
              {/* Logo */}
              <div className="mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" opacity="0.3" />
                    </svg>
                  </div>
                  <span className="text-amber-500 font-bold text-xl">AfCFTA POLICY NETWORK</span>
                </div>
              </div>

              {/* Title */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-1 bg-amber-500 rounded"></div>
                  <h2 className="text-3xl font-bold text-gray-900">Honorary Membership</h2>
                </div>
              </div>

              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  The Executive Council may from time to time admit Honorary Members pursuant to Regulation 12 and the Honorary Member so admitted shall have the prescribed rights under the Regulations.
                </p>
              </div>

              {/* Values Section */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Values, culture and identity of members
                </h3>
                <p className="text-gray-700 mb-4">Members shall share the following values:</p>
                <ol className="list-decimal list-inside space-y-3 text-gray-600">
                  <li>Advocate for and promote the development of free trade across the African Continent.</li>
                  <li>Foster partnership and collaboration towards the promotion of free trade within Africa.</li>
                  <li>Embrace diversity of individuals, ideas, and expressions.</li>
                </ol>
                <p className="text-gray-700 mt-4 font-medium">
                  Exercise stewardship of the AfCFTA-PN global community
                </p>
              </div>

              {/* Resignation/Exclusion Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Resignation or Exclusion of Members
                </h3>
                <p className="text-gray-700 mb-4">
                  In furtherance of Regulation 13 the following procedures shall apply:
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Exclusion of Membership</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm">
                    <li>In the unfortunate event that the conduct of a member contravenes the values, objectives and purposes of AfCFTA-PN, the Executive Council shall review the case and seek a possible resolution with the member.</li>
                    <li>The member shall be informed of the proposed resolution and the timeframe for implementation.</li>
                  </ol>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm mb-4">
                  <li>Where the proposed resolution is not amenable to the member or the member fails to implement the recommendations within a specified timeframe, the member shall be excluded and duly informed.</li>
                </ul>

                <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm" start={3}>
                  <li>There shall be no refund of subscription fees to the affected person upon exclusion from membership.</li>
                  <li>Where a member fails to pay subscription fees on or before the 30th day of March of each year, the member shall be deemed to have been excluded until payment is made.</li>
                </ol>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Resignation of Membership:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm">
                    <li>A member may resign from membership at any time subject to a written notice to the Executive Council to that effect.</li>
                    <li>Notwithstanding, a member who is a subscriber or Executive Council member or who has been appointed to any position, shall give 30 days-notice to the Executive Council and shall relinquish all property of AfCFTA-PN and fulfill all financial obligations.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Right - Registration CTA */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 sticky top-24">
                {/* Title */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-1 bg-amber-500 rounded"></div>
                    <h2 className="text-2xl font-bold text-gray-900">Register to become a Member Now.</h2>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Honorary Membership Benefits:</h4>
                  <ul className="space-y-3">
                    {[
                      "Recognition as a distinguished member of AfCFTA-PN",
                      "Prescribed rights under the Regulations",
                      "Opportunity to serve on International Advisory Board",
                      "Participation in high-level policy discussions",
                      "Networking with African trade leaders",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded font-medium uppercase tracking-wide transition-colors flex items-center justify-center gap-2">
                  Register Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                {/* Additional Info */}
                <p className="text-center text-gray-500 text-sm mt-4">
                  Contact us for more information about Honorary Membership
                </p>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600 text-sm">info@afcftapolicy.net</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600 text-sm">+233 (0)24 486 8395</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}