import { useState } from "react";
import React from "react";

interface RegisterPageProps {
  onNavigate?: (page: string) => void;
}

const RegisterPage = ({ onNavigate }: RegisterPageProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    membershipType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your registration! We will review your application and get back to you shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Register</h1>
          <p className="text-gray-400">Home - Register</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Join Us</span>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mt-2">Become a Member</h2>
            <p className="text-gray-600 mt-4">
              Join the AfCFTA Policy Network and become part of Africa's leading trade policy community.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Organization</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Membership Type *</label>
              <select
                name="membershipType"
                value={formData.membershipType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              >
                <option value="">Select membership type</option>
                <option value="ordinary">Ordinary Membership ($100/year)</option>
                <option value="associate">Associate Membership ($250/year)</option>
                <option value="honorary">Honorary Membership (By invitation)</option>
                <option value="economist">APN Economist ($150/year)</option>
                <option value="business">Business Export Club 500 ($500/year)</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Additional Information</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Tell us about your interest in AfCFTA..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-white px-8 py-4 rounded font-medium uppercase hover:bg-amber-600 transition-colors"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;