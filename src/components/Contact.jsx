// import React from 'react';

// function Contact() {
//   return (
//     <section id="contact" className="bg-gray-50 py-16 px-4">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-indigo-700 mb-4">📬 Contact Us</h2>
//         <p className="text-lg text-gray-600 mb-10">
//           Get in touch with our team for support, demo requests, or any inquiries.
//         </p>

//         <form className="bg-white rounded-xl shadow-md p-8 space-y-6 text-left">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="Enter your Full Name"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//               <input
//                 type="email"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="you@example.com"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//             <textarea
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
//               rows="5"
//               placeholder="How can we help you?"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full md:w-auto bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;

// import React from 'react';

// function Contact() {
//   return (
//     <section id="contact" className="relative bg-gradient-to-br from-white via-indigo-50 to-purple-100 py-5 px-6">
//       {/* Decorative Circles */}
//       <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-100 rounded-full blur-2xl opacity-30"></div>
//       <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-100 rounded-full blur-2xl opacity-30"></div>

//       <div className="max-w-5xl mx-auto text-center relative z-10">
//         <h2 className="text-5xl font-extrabold text-indigo-700 mb-6">📨 Let's Connect</h2>
//         <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
//           Whether you have questions, want to collaborate, or need help — we’re here for you. Reach out through the form below!
//         </p>

//         <div className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl shadow-xl p-10 md:p-14 transition-all duration-500">
//           <form className="space-y-8 text-left">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Full Name */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder=" "
//                   required
//                   className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//                 <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
//                   Full Name
//                 </label>
//               </div>

//               {/* Email Address */}
//               <div className="relative">
//                 <input
//                   type="email"
//                   placeholder=" "
//                   required
//                   className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//                 <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
//                   Email Address
//                 </label>
//               </div>
//             </div>

//             {/* Message */}
//             <div className="relative">
//               <textarea
//                 rows="5"
//                 placeholder=" "
//                 required
//                 className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
//                 Your Message
//               </label>
//             </div>

//             <div className="text-center mt-6">
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-10 py-3 rounded-full shadow-md hover:scale-105 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
//               >
//                 🚀 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React, { useState } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <FaPaperPlane className="text-white animate-bounce" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your workplace safety? Reach out to us and discover how our AI solutions can benefit your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 96*******1</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">infopixedge@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office</h4>
                    <p className="text-gray-600">Hingane Home Colony
Karve Nagar<br />Pune (411058), Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: FaLinkedin, color: 'from-blue-600 to-blue-700', href: '#' },
                    { icon: FaTwitter, color: 'from-sky-400 to-sky-500', href: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 bg-gradient-to-r ${social.color} rounded-xl text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300`}
                    >
                      <social.icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 bg-transparent text-gray-800 focus:outline-none focus:border-purple-500 transition-all duration-300"
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-600">
                      Full Name *
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 bg-transparent text-gray-800 focus:outline-none focus:border-purple-500 transition-all duration-300"
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-600">
                      Email Address *
                    </label>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 bg-transparent text-gray-800 focus:outline-none focus:border-purple-500 transition-all duration-300 resize-none"
                  />
                  <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-600">
                    Your Message *
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-12 py-4 rounded-xl shadow-lg hover:shadow-purple-500/25 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="flex items-center gap-3">
                      <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">🚀 Ready to Get Started?</h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team typically responds within 2 hours during business days. For urgent inquiries, 
              please call us directly at <span className="text-purple-600 font-semibold">+91 96*******1</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;