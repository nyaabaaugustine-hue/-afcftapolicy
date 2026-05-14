import React from "react";
export default function ContactInfoSection() {
  const contactItems = [
    {
      id: 1,
      title: "Office address",
      content: "P.O.BOX SK 2290 SAKUMONO Accra, Ghana",
      icon: "location",
      link: "#",
    },
    {
      id: 2,
      title: "Telephone number",
      content: "+233 (0)23 331 1789",
      icon: "phone",
      link: "tel:+233233311789",
    },
    {
      id: 3,
      title: "Mail address",
      content: "info@afcftapolicy.net",
      icon: "mail",
      link: "mailto:info@afcftapolicy.net",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {contactItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="bg-white rounded-lg p-6 flex items-center gap-4 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                {item.icon === "location" && (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                {item.icon === "phone" && (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )}
                {item.icon === "mail" && (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.content}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}