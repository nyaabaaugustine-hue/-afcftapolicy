import React from "react";
const AboutPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">About us</h1>
          <p className="text-gray-400">Home - About Us</p>
        </div>
      </div>

      {/* About Content */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <span className="text-gray-400 text-sm uppercase tracking-wider origin-bottom-left" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>About us</span>
                <div className="w-1 h-20 bg-orange-500 rounded"></div>
                <div>
                  <h2 className="text-gray-900 text-3xl font-bold mb-4">Afcfta Policy Network Ghana and Diaspora</h2>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                AfCFTA policy network was established in 2019 as the lead and largest international nongovernmental organization (NGO) focused primarily as a think tank on African continental free trade area implementation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The organization brings together experts, policymakers, business leaders, and stakeholders from across Africa and the diaspora to facilitate the successful implementation of the African Continental Free Trade Area agreement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our mission is to promote intra-African trade, enhance economic integration, and support the development of a unified African market that benefits all member states and their citizens.
              </p>
              <a href="#" className="text-amber-500 font-medium hover:text-amber-600 transition-colors">APN profile</a>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <img
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/Landmark-MOU-signing-between-AfCFTA-Secretariat-and-APN-Group3-1_ufvv5e.jpg"
                alt="AfCFTA Policy Network"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-gray-900 text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading voice in African trade policy, fostering economic growth and prosperity across the continent through strategic partnerships and evidence-based advocacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Our Mission</span>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-gray-900 text-xl font-bold mb-3">Advocacy</h3>
              <p className="text-gray-600">Promoting policies that facilitate trade and economic integration across Africa.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-gray-900 text-xl font-bold mb-3">Networking</h3>
              <p className="text-gray-600">Connecting stakeholders across the continent to foster collaboration and partnership.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-gray-900 text-xl font-bold mb-3">Research</h3>
              <p className="text-gray-600">Providing evidence-based analysis to inform trade policy decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;