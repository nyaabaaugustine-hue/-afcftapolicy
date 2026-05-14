import React, { useState } from "react";

const TeamSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const team = [
    { name: "Joe Tackie", role: "Board Chairman", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778751233/Joe-Tackie-270x315_hztdld.jpg" },
    { name: "Prudence Sebahizi", role: "Head of Int. Advisory Board", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/prudence-270x315_zoepyu.jpg" },
    { name: "Louis Yaw Afful", role: "Group Executive Director", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/Afful-270x315_a4brbm.jpg" },
    { name: "Emmanuel K Bensah", role: "1st Deputy Executive Director", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/emmanuel-270x315_ho2yl2.jpg" },
    { name: "Kwasi Okyere-Boateng", role: "2nd Deputy Executive Director", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/Kwasi-Okyere-Boateng--270x315_r79yrk.jpg" },
    { name: "Audrey Akua Serwaa Biney", role: "3rd Deputy Executive Director", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/Mrs.-Audrey-Akua-Serwaa-Biney-270x315_as4ecq.png" },
    { name: "Ms. Joyce Williams Esq.", role: "Executive Council member Diaspora", image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/WhatsApp-Image-2020-09-11-at-5.46.16-AM-1-270x315_gh7r37.jpg" },
  ];

  const visible = 4;
  const canPrev = startIndex > 0;
  const canNext = startIndex + visible < team.length;

  const prev = () => canPrev && setStartIndex(startIndex - 1);
  const next = () => canNext && setStartIndex(startIndex + 1);

  const visibleTeam = team.slice(startIndex, startIndex + visible);

  return (
    <div className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">— Team —</span>
            <h2 className="text-white text-3xl md:text-4xl font-bold mt-2">
              Our expert team will<br />help you.
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            AfCFTA policy network was established in 2019 as the lead and largest international nongovernmental organization (NGO) focused primarily as a think tank on African continental free trade area implementation.
          </p>
        </div>

        {/* Slider wrapper with side arrows */}
        <div className="relative">
          {/* Prev Arrow */}
          <button
            onClick={prev}
            disabled={!canPrev}
            className={`absolute -left-8 top-1/2 -translate-y-1/2 z-10 w-8 h-16 bg-slate-700 hover:bg-amber-500 flex items-center justify-center text-white transition-colors ${!canPrev ? "opacity-30 cursor-default" : "cursor-pointer"}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Team Grid — always 4 columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleTeam.map((member, index) => (
              <div key={startIndex + index} className="group">
                <div className="relative overflow-hidden mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-white font-bold text-base leading-tight">{member.name}</h3>
                <p className="text-amber-400 text-sm mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={next}
            disabled={!canNext}
            className={`absolute -right-8 top-1/2 -translate-y-1/2 z-10 w-8 h-16 bg-slate-700 hover:bg-amber-500 flex items-center justify-center text-white transition-colors ${!canNext ? "opacity-30 cursor-default" : "cursor-pointer"}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
