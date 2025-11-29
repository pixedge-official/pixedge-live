


import React from 'react';
import { FaCalendarCheck, FaPlay } from 'react-icons/fa';
import PixEdgePromo from './PixEdgePromo';
import { Link } from 'react-router-dom';
import RequestDemo from './RequestDemo';

function Hero() {
  return (
    <section className="bg-no-repeat my-2 bg-cover bg-center bg-[url(https://kintronics.com/wp-content/uploads/2023/09/AI-Camera-Concept-1024x542.png)] h-screen">
      <div className="bg-black/80 h-full flex items-center pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8">

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-300 via-purple-700 to-white text-transparent bg-clip-text mb-6 leading-tight">
              AI-Powered Safety Compliance in Industrial Environments
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6">
              Ensure your workforce follows safety protocols with intelligent object detection—real-time helmet, PPE, and hazard monitoring to prevent accidents and enhance compliance.
            </p>



            <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-6">
              <Link to='request-demo' element={<RequestDemo />} className="flex items-center gap-2 text-purple-300 text-lg sm:text-xl font-medium underline underline-offset-4 hover:text-purple-800 transition-colors duration-300 group">
                <FaCalendarCheck className="text-purple-200 group-hover:text-purple-800 transition-transform duration-300 group-hover:scale-110" />
                Request Demo</Link>

              <Link to='/promovideo' element={<PixEdgePromo />} className="flex items-center gap-2 bg-gradient-to-r from-blue-300 to-indigo-600 text-black px-6 py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-200 text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

                <FaPlay className="text-black" />
                Watch Video

              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://nextbrain.ca/wp-content/uploads/2025/06/Enhance-Workplace-Safety-Prevent-Unsafe-Behavior_-Revolutionize-with-AI-driven-Protocols.png"
              alt="Retail safety demo"
              className="rounded-lg shadow-lg object-cover w-full h-auto transition-transform duration-500 hover:rotate-4 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


// import React from 'react';
// import { FaCalendarCheck, FaPlay, FaShieldAlt, FaChartLine, FaEye } from 'react-icons/fa';
// import PixEdgePromo from './PixEdgePromo';
// import { Link } from 'react-router-dom';
// import RequestDemo from './RequestDemo';

// function Hero() {
//   return (
//     <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900"></div>
//       <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      
//       {/* Grid Pattern Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

//       <div className="relative h-screen flex items-center pt-20 pb-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

//           {/* Text Section */}
//           <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 px-4 py-2 rounded-full backdrop-blur-sm">
//               <FaShieldAlt className="text-purple-300 text-sm" />
//               <span className="text-purple-200 text-sm font-medium">Enterprise-Grade Safety Solutions</span>
//             </div>

//             {/* Main Heading */}
//             <div className="space-y-4">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
//                 <span className="bg-gradient-to-r from-red-300 via-purple-300 to-blue-300 text-transparent bg-clip-text">
//                   AI-Powered
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-white via-purple-100 to-blue-100 text-transparent bg-clip-text">
//                   Safety Compliance
//                 </span>
//               </h1>
//               <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed">
//                 Transform workplace safety with intelligent monitoring that <span className="text-purple-300 font-semibold">prevents accidents</span> before they happen
//               </p>
//             </div>

//             {/* Features Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4">
//               {[
//                 { icon: FaEye, text: "Real-time Monitoring", color: "text-green-400" },
//                 { icon: FaShieldAlt, text: "PPE Detection", color: "text-blue-400" },
//                 { icon: FaChartLine, text: "Compliance Analytics", color: "text-purple-400" }
//               ].map((feature, index) => (
//                 <div key={index} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
//                   <feature.icon className={`${feature.color} group-hover:scale-110 transition-transform duration-300`} />
//                   <span className="text-gray-200 text-sm font-medium">{feature.text}</span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
//               <Link 
//                 to='request-demo' 
//                 element={<RequestDemo />} 
//                 className="group relative flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
//                 <FaCalendarCheck className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300" />
//                 <span className="relative z-10">Request Demo</span>
//               </Link>

//               <Link 
//                 to='/promovideo' 
//                 element={<PixEdgePromo />} 
//                 className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
//                   <FaPlay className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300" />
//                 </div>
//                 <span>Watch Video</span>
//               </Link>
//             </div>

//             {/* Stats */}
//             <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-8">
//               {[
//                 { number: "99.9%", label: "Accuracy" },
//                 { number: "24/7", label: "Monitoring" },
//                 { number: "50%", label: "Fewer Incidents" }
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-2xl font-bold text-white">{stat.number}</div>
//                   <div className="text-gray-400 text-sm">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="w-full md:w-1/2 relative">
//             {/* Floating Card Background */}
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
//               <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 p-2 shadow-2xl">
//                 <img
//                   src="https://nextbrain.ca/wp-content/uploads/2025/06/Enhance-Workplace-Safety-Prevent-Unsafe-Behavior_-Revolutionize-with-AI-driven-Protocols.png"
//                   alt="AI Safety Monitoring Dashboard"
//                   className="rounded-lg shadow-2xl object-cover w-full h-auto transform transition-transform duration-700 hover:scale-105"
//                 />
                
//                 {/* Floating Elements */}
//                 <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
//                   LIVE
//                 </div>
//                 <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
//                   <div className="text-xs opacity-80">AI Detection</div>
//                   <div className="font-bold">Active</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;