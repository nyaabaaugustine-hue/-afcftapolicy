import React from "react";
interface MembershipPageProps {
  onNavigate: (page: string) => void;
  membershipType?: string;
}

const MembershipPage = ({ onNavigate, membershipType }: MembershipPageProps) => {
  const membershipTypes = [
    {
      id: "ordinary-membership",
      title: "Ordinary Membership",
      description: "Open to individuals and organizations interested in AfCFTA implementation and African trade development.",
      benefits: [
        "Access to member-only resources",
        "Newsletter subscription",
        "Event discounts",
        "Networking opportunities"
      ],
      fee: "$100/year"
    },
    {
      id: "associate-membership",
      title: "Associate Membership",
      description: "For academic institutions, research organizations, and think tanks focused on African trade policy.",
      benefits: [
        "All Ordinary benefits",
        "Research collaboration opportunities",
        "Publication access",
        "Conference speaking opportunities"
      ],
      fee: "$250/year"
    },
    {
      id: "honorary-membership",
      title: "Honorary Membership",
      description: "By invitation only for distinguished individuals who have made significant contributions to African trade.",
      benefits: [
        "All Associate benefits",
        "Advisory board participation",
        "Special recognition",
        "Lifetime membership"
      ],
      fee: "By invitation"
    },
    {
      id: "apn-economist",
      title: "APN Economist",
      description: "For professional economists specializing in African trade and regional integration.",
      benefits: [
        "Economic research opportunities",
        "Policy brief authorship",
        "Expert network access",
        "Professional certification"
      ],
      fee: "$150/year"
    }
  ];

  const selectedMembership = membershipType 
    ? membershipTypes.find(m => m.id === membershipType) 
    : null;

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            {selectedMembership ? selectedMembership.title : "Membership"}
          </h1>
          <p className="text-gray-400">Home - Membership {selectedMembership ? `- ${selectedMembership.title}` : ''}</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {selectedMembership ? (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h2 className="text-gray-900 text-2xl font-bold mb-4">{selectedMembership.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{selectedMembership.description}</p>
                <div className="mb-6">
                  <h3 className="text-gray-900 font-bold mb-3">Benefits:</h3>
                  <ul className="space-y-2">
                    {selectedMembership.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-500 text-xl font-bold">{selectedMembership.fee}</span>
                  <button
                    onClick={() => onNavigate("register")}
                    className="bg-amber-500 text-white px-6 py-3 rounded font-medium uppercase hover:bg-amber-600 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              <button
                onClick={() => onNavigate("membership")}
                className="text-amber-500 font-medium flex items-center gap-2 hover:text-amber-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Back to Membership Overview
              </button>
            </div>
          ) : (
            <div>
              <div className="text-center mb-12">
                <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Join Us</span>
                <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2">Choose Your Membership Type</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  Become a member of the AfCFTA Policy Network and join a community dedicated to advancing African trade.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {membershipTypes.map((type) => (
                  <div key={type.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-gray-900 text-xl font-bold mb-3">{type.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                    <div className="mb-4">
                      <span className="text-amber-500 text-lg font-bold">{type.fee}</span>
                    </div>
                    <button
                      onClick={() => onNavigate(type.id)}
                      className="w-full bg-slate-900 text-white py-2 rounded font-medium hover:bg-slate-800 transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;