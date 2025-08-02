import React, { useState } from "react";

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl bg-[#111827] rounded-3xl p-10 shadow-2xl border border-gray-700">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
          Request a Free Demo
        </h2>

        {submitted ? (
          <div className="text-center py-10 animate-fadeIn">
            <div className="text-green-400 text-xl font-semibold">
              ✅ Thank you! We’ll be in touch shortly.
            </div>
            <p className="text-gray-400 mt-2">Our team will contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-300 mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-1 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm text-gray-300 mb-1 font-medium">Company / Organization</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                placeholder="PixEdge AI Solutions"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-300 mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                placeholder="Tell us about your use case or specific requirements..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 font-semibold bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-xl text-white text-lg"
            >
              🚀 Request Demo
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RequestDemo;
