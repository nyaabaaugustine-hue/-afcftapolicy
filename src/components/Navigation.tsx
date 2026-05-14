import React, { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", page: "home" },
    { label: "About Us", page: "about" },
    { label: "Membership", page: "membership", hasDropdown: true },
    { label: "Business Export Club 500", page: "business-export-club" },
    { label: "Contact Us", page: "contact" },
    { label: "More", page: "more", hasDropdown: true },
  ];

  const moreItems = [
    { label: "Events", page: "events" },
    { label: "Blog", page: "blog" },
    { label: "Gallery", page: "gallery" },
    { label: "FAQ", page: "faq" },
    { label: "Team", page: "team" },
    { label: "Partners", page: "partners" },
  ];

  return (
    <nav className="bg-slate-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div key={item.page} className="relative group">
                <button
                  onClick={() => onNavigate(item.page)}
                  className={`px-3 py-4 text-xs font-medium uppercase tracking-wider transition-colors ${
                    currentPage === item.page ? "text-amber-500" : "text-white hover:text-amber-400"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <span className="ml-1">+</span>}
                </button>
                {item.page === "more" && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-b opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {moreItems.map((subItem) => (
                      <button
                        key={subItem.page}
                        onClick={() => onNavigate(subItem.page)}
                        className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="p-2 text-white hover:text-amber-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Register Button */}
          <button
            onClick={() => onNavigate("register")}
            className="hidden lg:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm font-medium uppercase tracking-wider transition-colors"
          >
            Register
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-800 py-4">
            {[...menuItems, ...moreItems].map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-white hover:bg-slate-700 hover:text-amber-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate("register");
                setMobileMenuOpen(false);
              }}
              className="block w-full mt-4 mx-4 bg-red-600 text-white py-3 text-center uppercase font-medium"
            >
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;