import React from "react";
interface BlogPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

const BlogPage = ({ onNavigate }: BlogPageProps) => {
  const blogPosts = [
    {
      title: "APN NEWSLETTER (27th May 2024)",
      date: "May 30, 2024",
      author: "AFCFTA Policy Network",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/Landmark-MOU-signing-between-AfCFTA-Secretariat-and-APN-Group3-1_ufvv5e.jpg",
      slug: "apn-newsletter-27-may-2024"
    },
    {
      title: "Landmark MOU signing between AfCFTA Secretariat and APN Group",
      date: "May 15, 2024",
      author: "AFCFTA Policy Network",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716829/Landmark-MOU-signing-between-AfCFTA-Secretariat-and-APN-Group4-300x200_diytdr.jpg",
      slug: "landmark-mou-signing-afcfta-secretariat-apn-group"
    },
    {
      title: "[Zoom Link Registration] THE 4TH WOMEN IN TRADE CONFERENCE",
      date: "April 15, 2024",
      author: "AFCFTA Policy Network",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/slide111_ptbh1n.jpg",
      slug: "zoom-registration-4th-women-in-trade-conference"
    },
    {
      title: "THE 4TH WOMEN IN TRADE CONFERENCE",
      date: "April 12, 2024",
      author: "AFCFTA Policy Network",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/WhatsApp-Image-2020-08-28-at-08.11.21-384x256_vch3ni.jpg",
      slug: "4th-women-in-trade-conference"
    },
    {
      title: "Institutional Partnership Launch",
      date: "March 26, 2024",
      author: "AFCFTA Policy Network",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/afcfta-institutional-partnership-384x256_negvck.jpg",
      slug: "institutional-partnership-launch"
    },
    {
      title: "Compliment of the Season from Management of APN Group",
      date: "December 27, 2023",
      author: "AFCFTA Policy Network",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/WhatsApp-Image-2020-08-28-at-07.56.48-384x256_entc91.jpg",
      slug: "compliment-of-the-season-apn-group"
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-gray-400">Home - Blog</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">News & Updates</span>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2">Latest from AfCFTA Policy Network</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onNavigate("blog-post", post.slug)}
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                    <span className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <span className="text-amber-500 font-medium text-sm flex items-center gap-2">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;