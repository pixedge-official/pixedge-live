// import React, { useState } from 'react';
// import { FaChartPie, FaCashRegister, FaBox, FaShieldAlt, FaChartLine, FaPlug } from 'react-icons/fa';
// // import featureBg from '../assets/feature-bg.jpg'; // Uncomment and adjust path if you have a background image

// function Features() {
//   const [selectedFeature, setSelectedFeature] = useState(0);

//   const features = [
//     { title: "Customer Analytics", desc: "Track demographics, dwell times, and traffic patterns to optimize store layout and product placement.", icon: FaChartPie },
//     { title: "Checkout Optimization", desc: "Monitor queue lengths and wait times to dynamically adjust staffing and improve customer experience.", icon: FaCashRegister },
//     { title: "Inventory Tracking", desc: "Automatically detect out-of-stock items and misplaced products with real-time shelf monitoring.", icon: FaBox },
//     { title: "Loss Prevention", desc: "Identify suspicious behavior and potential theft with advanced behavior analysis algorithms.", icon: FaShieldAlt },
//     { title: "Performance Metrics", desc: "Generate comprehensive reports on store performance, peak hours, and conversion rates.", icon: FaChartLine },
//     { title: "Seamless Integration", desc: "Works with your existing CCTV infrastructure - no expensive hardware upgrades required.", icon: FaPlug },
//   ];

//   // Get the selected icon component
//   const SelectedIcon = features[selectedFeature].icon;

//   return (
//     <section
//       className="py-16 bg-gradient-to-b from-gray-50 to-white"
//       // style={{ backgroundImage: `url(${featureBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
//     >
//       <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 bg-white/95 p-8 rounded-xl shadow-2xl">
//         <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">
//           AI-Powered Retail Intelligence
//         </h2>
//         <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto animate-fade-in-up">
//           Transform your existing CCTV cameras into powerful sensors that deliver actionable insights across your retail operations.
//         </p>
//         <div className="flex mb-12 h-64 gap-6 items-center overflow-x-auto scrollbar-hide">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`flex h-64 w-64 flex-col items-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
//                 selectedFeature === index ? 'border-2 border-teal-500 ring-2 ring-teal-100' : ''
//               }`}
//               onClick={() => setSelectedFeature(index)}
//             >
//               <feature.icon className="text-4xl text-teal-500 mb-4 animate-bounce-in" />
//               <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
//               <p className="text-gray-600 text-center text-sm line-clamp-3">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//         <div className="bg-white p-8 rounded-xl shadow-lg min-h-[200px] animate-slide-up">
//           <div className="flex items-center gap-4 mb-4">
//             <SelectedIcon className="text-3xl text-teal-500" />
//             <h3 className="text-2xl font-bold text-gray-900">{features[selectedFeature].title}</h3>
//           </div>
//           <p className="text-gray-700 leading-relaxed">{features[selectedFeature].desc}</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Features;

// import React, { useState } from 'react';
// import { FaChartPie, FaCashRegister, FaBox, FaShieldAlt, FaChartLine, FaPlug } from 'react-icons/fa';

// function Features() {
//   const [selectedFeature, setSelectedFeature] = useState(0);

//   const features = [
//     { title: "Customer Analytics", desc: "Track demographics, dwell times, and traffic patterns to optimize store layout and product placement.", icon: FaChartPie },
//     { title: "Checkout Optimization", desc: "Monitor queue lengths and wait times to dynamically adjust staffing and improve customer experience.", icon: FaCashRegister },
//     { title: "Inventory Tracking", desc: "Automatically detect out-of-stock items and misplaced products with real-time shelf monitoring.", icon: FaBox },
//     { title: "Loss Prevention", desc: "Identify suspicious behavior and potential theft with advanced behavior analysis algorithms.", icon: FaShieldAlt },
//     { title: "Performance Metrics", desc: "Generate comprehensive reports on store performance, peak hours, and conversion rates.", icon: FaChartLine },
//     { title: "Seamless Integration", desc: "Works with your existing CCTV infrastructure - no expensive hardware upgrades required.", icon: FaPlug },
//   ];

//   const SelectedIcon = features[selectedFeature].icon;

//   return (
//     <section className=" py-16 bg-gradient-to-b from-gray-50 my-auto   to-white">
//         <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">
//           AI-Powered Retail Intelligence
//         </h2>
//         <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto animate-fade-in-up">
//           Transform your existing CCTV cameras into powerful sensors that deliver actionable insights across your retail operations.
//         </p>
//       <div className="flex max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 overflow-auto bg-white/95 p-6 sm:p-8 rounded-xl shadow-2xl">
//         <div className=" mb-90 mr-5 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 h-60 gap-5 items-center">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`flex h-64  flex-col items-center p-5 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
//                 selectedFeature === index ? 'border-2 border-purple-600 ring-2 ring-teal-100 scale-105' : ''
//               }`}
//               onClick={() => setSelectedFeature(index)}
//             >
//               <feature.icon className="text-5xl text-indigo-500 mb-4 animate-bounce-in" />
//               <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
//               <p className="text-gray-600 text-center text-sm line-clamp-3">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//         <div className="bg-gray-100 p-6 sm:p-8 rounded-xl shadow-lg h-133 animate-slide-up">
//           <div className="flex items-center  gap-4 mb-4">
//             <SelectedIcon className="text-3xl text-blue-400" />
//             <h3 className="text-2xl font-bold text-gray-900">{features[selectedFeature].title}</h3>
//           </div>
//           <p className="text-gray-700 leading-relaxed">{features[selectedFeature].desc}</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Features;

// import React, { useState } from 'react';
// import { FaChartPie, FaCashRegister, FaBox, FaShieldAlt, FaChartLine, FaPlug } from 'react-icons/fa';

// function Features() {
//   const [selectedFeature, setSelectedFeature] = useState(0);

//   const features = [
//     { title: "Customer Analytics", desc: "Track demographics, dwell times, and traffic patterns to optimize store layout and product placement.", icon: FaChartPie },
//     { title: "Checkout Optimization", desc: "Monitor queue lengths and wait times to dynamically adjust staffing and improve customer experience.", icon: FaCashRegister },
//     { title: "Inventory Tracking", desc: "Automatically detect out-of-stock items and misplaced products with real-time shelf monitoring.", icon: FaBox },
//     { title: "Loss Prevention", desc: "Identify suspicious behavior and potential theft with advanced behavior analysis algorithms.", icon: FaShieldAlt },
//     { title: "Performance Metrics", desc: "Generate comprehensive reports on store performance, peak hours, and conversion rates.", icon: FaChartLine },
//     { title: "Seamless Integration", desc: "Works with your existing CCTV infrastructure - no expensive hardware upgrades required.", icon: FaPlug },
//   ];

//   const SelectedIcon = features[selectedFeature].icon;

//   return (
//     <section className="py-8 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
//       <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center animate-fade-in-up">
//         AI-Powered Retail Intelligence
//       </h2>
//       <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 text-center max-w-xl mx-auto animate-fade-in-up">
//         Transform your existing CCTV cameras into powerful sensors that deliver actionable insights across your retail operations.
//       </p>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row gap-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col items-center p-4 sm:p-5 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
//                   selectedFeature === index ? 'border-2 border-purple-600 ring-2 ring-teal-100 sm:scale-105' : ''
//                 }`}
//                 onClick={() => setSelectedFeature(index)}
//               >
//                 <feature.icon className="text-4xl sm:text-5xl text-indigo-500 mb-3 sm:mb-4 animate-bounce-in" />
//                 <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
//                 <p className="text-gray-600 text-sm sm:text-base text-center line-clamp-3">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="bg-gray-100 p-4 sm:p-6 rounded-xl shadow-lg lg:min-w-[300px] animate-slide-up">
//             <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
//               <SelectedIcon className="text-2xl sm:text-3xl text-blue-400" />
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{features[selectedFeature].title}</h3>
//             </div>
//             <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{features[selectedFeature].desc}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Features;

import React, { useState } from 'react';
import { FaChartPie, FaCashRegister, FaBox, FaShieldAlt, FaChartLine, FaPlug } from 'react-icons/fa';

function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    { title: "Customer Analytics", desc: "Track demographics, dwell times, and traffic patterns to optimize store layout and product placement.", icon: FaChartPie },
    { title: "Checkout Optimization", desc: "Monitor queue lengths and wait times to dynamically adjust staffing and improve customer experience.", icon: FaCashRegister },
    { title: "Inventory Tracking", desc: "Automatically detect out-of-stock items and misplaced products with real-time shelf monitoring.", icon: FaBox },
    { title: "Loss Prevention", desc: "Identify suspicious behavior and potential theft with advanced behavior analysis algorithms.", icon: FaShieldAlt },
    { title: "Performance Metrics", desc: "Generate comprehensive reports on store performance, peak hours, and conversion rates.", icon: FaChartLine },
    { title: "Seamless Integration", desc: "Works with your existing CCTV infrastructure - no expensive hardware upgrades required.", icon: FaPlug },
  ];

  const SelectedIcon = features[selectedFeature].icon;

  return (
    <section className="py-8 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center animate-fade-in-up">
        AI-Powered Retail Intelligence
      </h2>
      <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 text-center max-w-xl mx-auto animate-fade-in-up">
        Transform your existing CCTV cameras into powerful sensors that deliver actionable insights across your retail operations.
      </p>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index}>
                <div
                  className={`flex flex-col items-center p-4 sm:p-5 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    selectedFeature === index ? 'border-2 border-purple-600 ring-2 ring-teal-100 sm:scale-105' : ''
                  }`}
                  onClick={() => setSelectedFeature(index)}
                  role="button"
                  aria-label={`Select ${feature.title} feature`}
                >
                  <feature.icon className="text-4xl sm:text-5xl text-indigo-500 mb-3 sm:mb-4 animate-bounce-in" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base text-center line-clamp-3 sm:line-clamp-none">{feature.desc}</p>
                </div>
                {selectedFeature === index && (
                  <div className="sm:hidden mt-4 p-4 bg-gray-100 rounded-xl shadow-md animate-slide-up">
                    <div className="flex items-center gap-3 mb-3">
                      <SelectedIcon className="text-2xl text-blue-400" />
                      <h3 className="text-xl font-bold text-gray-900">{features[selectedFeature].title}</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{features[selectedFeature].desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden sm:block bg-gray-100 p-4 sm:p-6 rounded-xl shadow-lg lg:min-w-[300px] animate-slide-up">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <SelectedIcon className="text-2xl sm:text-3xl text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{features[selectedFeature].title}</h3>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{features[selectedFeature].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;