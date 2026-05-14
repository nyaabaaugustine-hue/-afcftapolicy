import React from "react";
const NewsletterSection = () => {
  return (
    <div className="py-16 bg-amber-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-white text-3xl font-bold mb-4">Newsletter</h2>
            <p className="text-amber-100">
              Subscribe our newsletter to get our latest update & news
            </p>
          </div>
          <div>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded focus:outline-none"
              />
              <button
                type="submit"
                className="bg-slate-900 text-white px-6 py-3 rounded font-medium uppercase hover:bg-slate-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;