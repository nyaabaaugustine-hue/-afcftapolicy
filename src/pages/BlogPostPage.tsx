import React from "react";
interface BlogPostPageProps {
  slug: string;
  onNavigate: (page: string) => void;
}

const BlogPostPage = ({ slug }: BlogPostPageProps) => {
  const blogPosts: Record<string, { title: string; date: string; author: string; image: string; content: string }> = {
    "apn-newsletter-27-may-2024": {
      title: "APN NEWSLETTER (27th May 2024)",
      date: "May 30, 2024",
      author: "AFCFTA Policy Network",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/Landmark-MOU-signing-between-AfCFTA-Secretariat-and-APN-Group3-1_ufvv5e.jpg",
      content: "The latest newsletter from AfCFTA Policy Network covering recent developments and upcoming events. This edition covers recent policy developments in AfCFTA implementation, upcoming events and workshops, member spotlight and achievements, and new partnership announcements. Stay connected with the AfCFTA Policy Network for the latest updates on African continental trade."
    },
    "landmark-mou-signing-afcfta-secretariat-apn-group": {
      title: "Landmark MOU signing between AfCFTA Secretariat and APN Group",
      date: "May 15, 2024",
      author: "AFCFTA Policy Network",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716829/Landmark-MOU-signing-between-AfCFTA-Secretariat-and-APN-Group4-300x200_diytdr.jpg",
      content: "A historic moment as AfCFTA Secretariat and APN Group sign a Memorandum of Understanding. This landmark agreement signifies a major step forward in the collaboration between the AfCFTA Secretariat and the APN Group. The MOU outlines areas of cooperation including capacity building programs, research collaboration, policy advocacy, and stakeholder engagement. The signing ceremony was attended by key stakeholders from both organizations."
    },
    "zoom-registration-4th-women-in-trade-conference": {
      title: "[Zoom Link Registration] THE 4TH WOMEN IN TRADE CONFERENCE",
      date: "April 15, 2024",
      author: "AFCFTA Policy Network",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716830/slide111_ptbh1n.jpg",
      content: "Register for the 4th Women in Trade Conference via Zoom. Join us virtually for this important conference celebrating women entrepreneurs across Africa. The conference will feature keynote speeches from leading women in trade, panel discussions on opportunities for women in AfCFTA, networking sessions, and workshops on trade facilitation. Registration is free and open to all interested participants."
    },
    "4th-women-in-trade-conference": {
      title: "THE 4TH WOMEN IN TRADE CONFERENCE",
      date: "April 12, 2024",
      author: "AFCFTA Policy Network",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716832/WhatsApp-Image-2020-08-28-at-08.11.21-384x256_vch3ni.jpg",
      content: "Join us for the 4th Women in Trade Conference celebrating women entrepreneurs across Africa. This annual conference brings together women business leaders, policymakers, and entrepreneurs to discuss opportunities and challenges in African trade. The conference aims to empower women entrepreneurs, create networking opportunities, share success stories, and discuss policy recommendations."
    },
    "institutional-partnership-launch": {
      title: "Institutional Partnership Launch",
      date: "March 26, 2024",
      author: "AFCFTA Policy Network",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/afcfta-institutional-partnership-384x256_negvck.jpg",
      content: "Launching new institutional partnerships to strengthen AfCFTA implementation. The AfCFTA Policy Network is proud to announce new institutional partnerships with leading organizations across Africa. These partnerships will enhance research capabilities, expand outreach programs, strengthen advocacy efforts, and build capacity for trade policy development."
    },
    "compliment-of-the-season-apn-group": {
      title: "Compliment of the Season from Management of APN Group",
      date: "December 27, 2023",
      author: "AFCFTA Policy Network",
      image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778716831/WhatsApp-Image-2020-08-28-at-07.56.48-384x256_entc91.jpg",
      content: "Seasons greetings from the APN Group management team. As we celebrate this festive season, we thank all our members, partners, and stakeholders for their continued support throughout the year. We look forward to another year of advancing African trade and implementing the AfCFTA agreement."
    }
  };

  const post = blogPosts[slug] || {
    title: "Post Not Found",
    date: "",
    author: "",
    image: "",
    content: "The requested blog post could not be found."
  };

  return (
    <div>
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-400">Home - Blog - {post.title}</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />

          <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <line x1="16" x2="16" y1="2" y2="6"></line>
                <line x1="8" x2="8" y1="2" y2="6"></line>
                <line x1="3" x2="21" y1="10" y2="10"></line>
              </svg>
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              {post.author}
            </span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">{post.content}</p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={() => window.history.back()}
              className="text-amber-500 font-medium flex items-center gap-2 hover:text-amber-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;