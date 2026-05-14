import React from "react";
const GalleryPage = () => {
  const galleries = [
    {
      title: "MOU Signing Ceremony",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/Landmark-MOU-signing-between-AfCFTA-Secretariat-and-APN-Group3-1_ufvv5e.jpg"
    },
    {
      title: "Women in Trade Conference",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/WhatsApp-Image-2020-08-28-at-08.11.21-384x256_vch3ni.jpg"
    },
    {
      title: "Institutional Partnership",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/afcfta-institutional-partnership-384x256_negvck.jpg"
    },
    {
      title: "Conference Highlights",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/slide111_ptbh1n.jpg"
    },
    {
      title: "Networking Event",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716829/Landmark-MOU-signing-between-AfCFTA-Secretariat-and-APN-Group4-300x200_diytdr.jpg"
    },
    {
      title: "Annual Gala",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/WhatsApp-Image-2020-08-28-at-07.56.48-384x256_entc91.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-gray-400">Home - Gallery</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Photo Gallery</span>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2">Our Events & Activities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    <div className="mt-2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;