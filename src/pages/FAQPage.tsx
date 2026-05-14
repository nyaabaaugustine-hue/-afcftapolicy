import { useState } from "react";
import React from "react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is AfCFTA?",
      answer: "The African Continental Free Trade Area (AfCFTA) is a free trade area founded in 2018, with trade commencing from 1 January 2021. It was created by the African Continental Free Trade Agreement among 54 of the 55 African Union nations. The free-trade area is the largest in the world in terms of participating countries since the formation of the World Trade Organization."
    },
    {
      question: "How can I become a member of AfCFTA Policy Network?",
      answer: "To become a member, you can register through our website by filling out the membership application form. We offer various membership types including Ordinary Membership, Associate Membership, Honorary Membership, and APN Economist membership. Each type has different benefits and requirements."
    },
    {
      question: "What are the benefits of AfCFTA?",
      answer: "AfCFTA aims to create a single continental market for goods and services, with free movement of business persons and investments. Key benefits include: increased intra-African trade, industrial development, job creation, poverty reduction, and improved food security. It is expected to boost intra-African trade by 52% by 2022."
    },
    {
      question: "What is the Business Export Club 500?",
      answer: "The Business Export Club 500 is an exclusive network of leading African exporters committed to expanding intra-African trade under the AfCFTA framework. Members receive access to market intelligence, business matchmaking, trade finance advisory, and networking opportunities."
    },
    {
      question: "How can I participate in AfCFTA Policy Network events?",
      answer: "You can participate in our events by registering through our website or contacting us directly. We organize conferences, workshops, webinars, and networking events throughout the year. Members receive priority registration and discounted rates for paid events."
    },
    {
      question: "What services does AfCFTA Policy Network offer?",
      answer: "We offer policy research and analysis, capacity building programs, networking opportunities, advocacy services, and business support. Our services are designed to help businesses, policymakers, and other stakeholders navigate and benefit from the AfCFTA agreement."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">FAQ</h1>
          <p className="text-gray-400">Home - FAQ</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Support</span>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-900 font-medium">{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-amber-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;