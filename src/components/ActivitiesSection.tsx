import React from "react";

const ActivitiesSection = () => {
  const activities = [
    {
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.069A1 1 0 0121 8.882V15.12a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
        </svg>
      ),
      title: "Media sensitization and advocacy",
      description: "AfCFTA policy network has extensively done media and public advocacy through print, electronic....",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Institutional partnerships",
      description: "AfCFTA policy network has done extensive institutional networking with CSO's, private sector....",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
      title: "Ongoing flagship programs",
      description: "The hope project is about acquiring land to build centre of Excellence in I trade, free trade....",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global investment summit",
      description: "This program is aimed at wooing investors beyond Africa to take opportunities through....",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">— What We Do —</span>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2">Our Activities</h2>
          </div>
          <p className="text-gray-600 max-w-md">
            The local network of the AfCFTA was established for the purpose of highlighting and upholding the
            implementation of Intra-Africa trade with its pillars of trade partnerships, economies of scale, linkages,
            food security, accelerated economic activity and infrastructural development.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="group text-center">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-amber-100 transition-colors">
                {activity.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">{activity.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{activity.description}</p>
              <a href="#" className="text-amber-500 text-sm font-medium hover:text-amber-600 transition-colors">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
