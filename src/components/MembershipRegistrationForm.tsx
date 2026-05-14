import { useState } from "react";
import React from "react";

const LOGO_URL = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778750984/logo-afcfta-policy-network_oyf0rb.png";

const countries = [
  { code: "GH", name: "Ghana" },
  { code: "NG", name: "Nigeria" },
  { code: "KE", name: "Kenya" },
  { code: "ZA", name: "South Africa" },
  { code: "EG", name: "Egypt" },
  { code: "ET", name: "Ethiopia" },
  { code: "TZ", name: "Tanzania" },
  { code: "UG", name: "Uganda" },
  { code: "RW", name: "Rwanda" },
  { code: "SN", name: "Senegal" },
  { code: "CI", name: "Ivory Coast" },
  { code: "CM", name: "Cameroon" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "OTHER", name: "Other" },
];

export default function MembershipRegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    country: "GH",
    areaOfExpertise: "",
    email: "",
    phone: "",
    information: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registration submitted successfully!");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
      {/* Logo */}
      <div className="text-center mb-6">
        <img src={LOGO_URL} alt="AfCFTA Policy Network" className="h-16 w-auto object-contain mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-900">Membership Registration</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Occupation <span className="text-red-500">*</span></label>
            <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
            <select name="country" value={formData.country} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white">
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>{country.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Area of Expertise <span className="text-red-500">*</span></label>
            <input type="text" name="areaOfExpertise" value={formData.areaOfExpertise} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+233 244 868 395" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Information</label>
            <textarea name="information" value={formData.information} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none"></textarea>
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded font-medium uppercase tracking-wide transition-colors mt-6">
          Submit Registration
        </button>
      </form>
    </div>
  );
}
