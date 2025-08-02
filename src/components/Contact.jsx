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

import React from 'react';

function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-white via-indigo-50 to-purple-100 py-5 px-6">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-100 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-100 rounded-full blur-2xl opacity-30"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-indigo-700 mb-6">📨 Let's Connect</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Whether you have questions, want to collaborate, or need help — we’re here for you. Reach out through the form below!
        </p>

        <div className="backdrop-blur-md bg-white/80 border border-white/30 rounded-3xl shadow-xl p-10 md:p-14 transition-all duration-500">
          <form className="space-y-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  required
                  className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                  Full Name
                </label>
              </div>

              {/* Email Address */}
              <div className="relative">
                <input
                  type="email"
                  placeholder=" "
                  required
                  className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                  Email Address
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                rows="5"
                placeholder=" "
                required
                className="peer w-full border border-gray-300 rounded-xl px-4 pt-6 pb-2 bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                Your Message
              </label>
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-10 py-3 rounded-full shadow-md hover:scale-105 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                🚀 Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
