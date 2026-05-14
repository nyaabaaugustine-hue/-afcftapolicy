import React from "react";
const TeamSection = () => {
  const team = [
    { name: "Joe Tackie", role: "Board Chairman", office: "Ghana Office", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716829/WhatsApp-Image-2023-12-25-at-07.44.51-300x300_sh6kw2.jpg" },
    { name: "Prudence Sebahizi", role: "Head of Int. Advisory Board", office: "Ghana Office", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/prudence-270x315_zoepyu.jpg" },
    { name: "Louis Yaw Afful", role: "Group Executive Director", office: "Ghana Office", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/Afful-270x315_a4brbm.jpg" },
    { name: "Emmanuel K Bensah", role: "1st Deputy Executive Director", office: "Ghana Office", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/emmanuel-270x315_ho2yl2.jpg" },
    { name: "Kwasi Okyere-Boateng", role: "2nd Deputy Executive Director", office: "Ghana Office", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/Kwasi-Okyere-Boateng--270x315_r79yrk.jpg" },
    { name: "Audrey Akua Serwaa Biney", role: "3rd Deputy Executive Director", office: "Ghana Office", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/Mrs.-Audrey-Akua-Serwaa-Biney-270x315_as4ecq.png" },
    { name: "Ms. Joyce Williams Esq.", role: "Executive Council member Diaspora", office: "Diaspora Office", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/WhatsApp-Image-2020-09-11-at-5.46.16-AM-1-270x315_gh7r37.jpg" },
  ];

  return (
    <div className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">Team</span>
            <h2 className="text-white text-3xl md:text-4xl font-bold mt-2">Our expert team will help you.</h2>
          </div>
          <p className="text-gray-400 max-w-md">
            AfCFTA policy network was established in 2019 as the lead and largest international nongovernmental organization (NGO) focused primarily as a think tank on African continental free trade area implementation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="h-72 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white text-sm">{member.office}</div>
                </div>
              </div>
              <h3 className="text-white font-bold text-lg">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;