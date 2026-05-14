import React from "react";
const TeamPage = () => {
  const teamMembers = [
    {
      name: "Dr. Samuel Doe",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Ama Boadu",
      role: "Director of Research",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Mr. Kwame Asante",
      role: "Director of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1cb7a49e84?w=400&h=400&fit=crop"
    },
    {
      name: "Mrs. Fatima Ibrahim",
      role: "Director of Finance",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Mr. John Mensah",
      role: "Head of Communications",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Aisha Mohammed",
      role: "Policy Analyst",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-gray-400">Home - Team</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Leadership</span>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2">Meet Our Team</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our dedicated team of professionals working to advance African trade and economic integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-gray-900 text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-amber-500 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;