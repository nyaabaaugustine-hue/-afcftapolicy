import React from "react";

const LOGO_URL = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778750984/logo-afcfta-policy-network_oyf0rb.png";

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <div className="mb-5">
              <img
                src={LOGO_URL}
                alt="AfCFTA Policy Network"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              AfCFTA policy network was established in 2019 as the lead and largest
              international nongovernmental organization (NGO) focused primarily as a think
              tank on African continental free trade area implementation.
            </p>
            <button
              onClick={() => onNavigate("about")}
              className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold uppercase px-5 py-2 transition-colors"
            >
              About us
            </button>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-5 text-sm">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe our newsletter to get our latest update &amp; news
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address..."
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-gray-300 text-sm focus:outline-none focus:border-amber-500 rounded"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold uppercase px-5 py-2 transition-colors rounded">
                Subscribe
              </button>
            </div>
          </div>

          {/* Official Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-5 text-sm">Official Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="font-medium text-gray-300">P. O. Box SK 2290 SAKUMONO, Accra, Ghana</li>
              <li className="mt-3">+233 (0)25 331 1789</li>
              <li>+233 (0)50 360 1010</li>
              <li>+233 (0)24 486 8395</li>
              <li>+233 (0)50 360 7065</li>
              <li>+233 (0)26 846 7683</li>
              <li>+233 (0)59 997 6010</li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Open Hours:</p>
              <p className="text-gray-400 text-sm">Mon – Fri: 8am – 5pm</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-5 text-sm">Social Media</h4>
            <p className="text-gray-400 text-sm mb-5">
              Follow us on social media to know more about our event!
            </p>
            <div className="flex gap-3 flex-wrap">
              {[
                {
                  name: "facebook",
                  icon: (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  ),
                },
                {
                  name: "twitter",
                  icon: (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  ),
                },
                {
                  name: "instagram",
                  icon: (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
                    </svg>
                  ),
                },
                {
                  name: "youtube",
                  icon: (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.55a29 29 0 00.46 5.13A2.78 2.78 0 003.4 18.6c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.13 29 29 0 00-.46-5.13z" />
                      <polygon points="9.75 15.02 15.5 11.55 9.75 8.08 9.75 15.02" fill="white" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 bg-slate-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All Rights Reserved by{" "}
            <span className="text-amber-500 font-medium">AFCFTA POLICY NETWORK</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
