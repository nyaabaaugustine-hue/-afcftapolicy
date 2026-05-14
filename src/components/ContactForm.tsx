import { useState } from "react";
import React from "react";

interface ContactFormProps {
  variant?: "default" | "dark";
}

export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    service: "Services",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const bgColor = variant === "dark" ? "bg-gray-800" : "bg-white";
  const borderColor = variant === "dark" ? "border-gray-600" : "border-gray-300";
  const textColor = variant === "dark" ? "text-white" : "text-gray-900";
  const placeholderColor = variant === "dark" ? "placeholder-gray-400" : "placeholder-gray-500";

  return (
    <div className={`${bgColor} rounded-lg p-8 ${variant === "default" ? "shadow-sm" : ""}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name *"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-3 ${borderColor} border rounded focus:outline-none focus:border-amber-500 ${variant === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"} ${placeholderColor}`}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name *"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-3 ${borderColor} border rounded focus:outline-none focus:border-amber-500 ${variant === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"} ${placeholderColor}`}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="Your mail *"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 ${borderColor} border rounded focus:outline-none focus:border-amber-500 ${variant === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"} ${placeholderColor}`}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number *"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 ${borderColor} border rounded focus:outline-none focus:border-amber-500 ${variant === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"} ${placeholderColor}`}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="profession"
            placeholder="Profession *"
            value={formData.profession}
            onChange={handleChange}
            className={`w-full px-4 py-3 ${borderColor} border rounded focus:outline-none focus:border-amber-500 ${variant === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"} ${placeholderColor}`}
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 ${borderColor} border rounded focus:outline-none focus:border-amber-500 ${variant === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"}`}
          >
            <option value="Services">Services</option>
            <option value="Projects">Projects</option>
            <option value="Partnership">Partnership</option>
            <option value="Become A Member">Become A Member</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Message..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 ${borderColor} border rounded focus:outline-none focus:border-amber-500 resize-none ${variant === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900"} ${placeholderColor}`}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded font-medium uppercase tracking-wide transition-colors flex items-center justify-center gap-2"
        >
          Send now
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </form>
    </div>
  );
}