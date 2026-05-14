import React from "react";

const LOGO_URL = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778750984/logo-afcfta-policy-network_oyf0rb.png";

const Header = () => {
  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-slate-900 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="text-white text-sm">
            Welcome to{" "}
            <span className="text-amber-500 font-medium cursor-pointer hover:text-amber-400">
              AfCFTA Policy Network
            </span>
          </p>
          <div className="flex items-center gap-3">
            {["facebook", "twitter", "instagram", "youtube"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group"
              >
                {social === "facebook" && (
                  <svg className="w-3 h-3 text-slate-900 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                )}
                {social === "twitter" && (
                  <svg className="w-3 h-3 text-slate-900 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                )}
                {social === "instagram" && (
                  <svg className="w-3 h-3 text-slate-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
                  </svg>
                )}
                {social === "youtube" && (
                  <svg className="w-3 h-3 text-slate-900 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.55a29 29 0 00.46 5.13A2.78 2.78 0 003.4 18.6c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.13 29 29 0 00-.46-5.13z" />
                    <polygon points="9.75 15.02 15.5 11.55 9.75 8.08 9.75 15.02" fill="white" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Logo and Contact Section */}
      <div className="bg-white py-3 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="cursor-pointer flex-shrink-0">
              <img
                src={LOGO_URL}
                alt="AfCFTA Policy Network"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Requesting a Call:</p>
                  <p className="text-gray-900 font-medium">+233 244 868 395</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Mail us for help:</p>
                  <p className="text-gray-900 font-medium">info@afctapolicy.net</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">P. O. Box SK 2290</p>
                  <p className="text-gray-500 text-xs">Sakumono Accra - Ghana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
