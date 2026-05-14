import React from "react";
const EventsPage = () => {
  const events = [
    {
      title: "5th Women in Trade Conference",
      date: "June 15-16, 2024",
      location: "Accra, Ghana",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/WhatsApp-Image-2020-08-28-at-08.11.21-384x256_vch3ni.jpg",
      description: "Join us for the 5th annual Women in Trade Conference celebrating women entrepreneurs across Africa."
    },
    {
      title: "AfCFTA Implementation Workshop",
      date: "July 20, 2024",
      location: "Virtual",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/slide111_ptbh1n.jpg",
      description: "A comprehensive workshop on AfCFTA implementation strategies for businesses."
    },
    {
      title: "Trade Policy Summit 2024",
      date: "August 5-7, 2024",
      location: "Lagos, Nigeria",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/afcfta-institutional-partnership-384x256_negvck.jpg",
      description: "Annual summit bringing together policymakers, business leaders, and trade experts."
    },
    {
      title: "Youth Entrepreneurship Forum",
      date: "September 10, 2024",
      location: "Nairobi, Kenya",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/Landmark-MOU-signing-between-AfCFTA-Secretariat-and-APN-Group3-1_ufvv5e.jpg",
      description: "Empowering young entrepreneurs to leverage AfCFTA opportunities."
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-gray-400">Home - Events</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Upcoming Events</span>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2">Join Our Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded text-sm font-medium">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {event.location}
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="text-amber-500 font-medium flex items-center gap-2 hover:text-amber-600 transition-colors">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;