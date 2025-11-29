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
//               <div key={index}>
//                 <div
//                   className={`flex flex-col items-center p-4 sm:p-5 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
//                     selectedFeature === index ? 'border-2 border-purple-600 ring-2 ring-teal-100 sm:scale-105' : ''
//                   }`}
//                   onClick={() => setSelectedFeature(index)}
//                   role="button"
//                   aria-label={`Select ${feature.title} feature`}
//                 >
//                   <feature.icon className="text-4xl sm:text-5xl text-indigo-500 mb-3 sm:mb-4 animate-bounce-in" />
//                   <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
//                   {/* <p className="text-gray-600 text-sm sm:text-base text-center line-clamp-3 sm:line-clamp-none">{feature.desc}</p> */}
//                 </div>
//                 {selectedFeature === index && (
//                   <div className="sm:hidden mt-4 p-4 bg-gray-100 rounded-xl shadow-md animate-slide-up">
//                     <div className="flex items-center gap-3 mb-3">
//                       <SelectedIcon className="text-2xl text-blue-400" />
//                       <h3 className="text-xl font-bold text-gray-900">{features[selectedFeature].title}</h3>
//                     </div>
//                     <p className="text-gray-700 text-sm leading-relaxed">{features[selectedFeature].desc}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="hidden sm:block bg-gray-100 p-4 sm:p-6 rounded-xl shadow-lg lg:min-w-[300px] animate-slide-up">
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
import { 
  FaChartPie, 
  FaCashRegister, 
  FaBox, 
  FaShieldAlt, 
  FaChartLine, 
  FaPlug,
  FaArrowRight,
  FaUsers,
  FaShoppingCart,
  FaEye
} from 'react-icons/fa';

function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    { 
      title: "Customer Analytics", 
      desc: "Track demographics, dwell times, and traffic patterns to optimize store layout and product placement with precision heatmaps and behavioral insights.", 
      icon: FaChartPie,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      stats: "95% accuracy",
      benefits: ["Heatmap Analysis", "Dwell Time Tracking", "Demographic Insights"]
    },
    { 
      title: "Checkout Optimization", 
      desc: "Monitor queue lengths and wait times in real-time to dynamically adjust staffing levels and dramatically improve customer experience.", 
      icon: FaCashRegister,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      stats: "40% faster checkout",
      benefits: ["Queue Management", "Staff Allocation", "Wait Time Reduction"]
    },
    { 
      title: "Inventory Tracking", 
      desc: "Automatically detect out-of-stock items and misplaced products with real-time shelf monitoring and intelligent restocking alerts.", 
      icon: FaBox,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      stats: "99% stock accuracy",
      benefits: ["Stock Alerts", "Planogram Compliance", "Restock Notifications"]
    },
    { 
      title: "Loss Prevention", 
      desc: "Identify suspicious behavior and potential theft with advanced behavior analysis algorithms and real-time security alerts.", 
      icon: FaShieldAlt,
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
      stats: "60% theft reduction",
      benefits: ["Behavior Analysis", "Real-time Alerts", "Incident Reporting"]
    },
    { 
      title: "Performance Metrics", 
      desc: "Generate comprehensive reports on store performance, peak hours, conversion rates, and customer engagement metrics.", 
      icon: FaChartLine,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      stats: "Data-driven insights",
      benefits: ["Custom Reports", "Performance Dashboards", "KPI Tracking"]
    },
    { 
      title: "Seamless Integration", 
      desc: "Works with your existing CCTV infrastructure - no expensive hardware upgrades required. Plug and play setup.", 
      icon: FaPlug,
      gradient: "from-gray-600 to-blue-600",
      bgGradient: "from-gray-50 to-blue-50",
      stats: "Zero hardware cost",
      benefits: ["CCTV Integration", "Cloud-Based", "Easy Setup"]
    },
  ];

  const SelectedIcon = features[selectedFeature].icon;

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <FaEye className="text-white" />
            AI-Powered Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Retail Operations with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Intelligent Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leverage advanced computer vision to turn your existing cameras into powerful business intelligence tools that drive growth and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Features Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 ${
                  selectedFeature === index 
                    ? `border-${feature.gradient.split('-')[1]}-500 ring-4 ring-${feature.gradient.split('-')[1]}-100 scale-105` 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
                onClick={() => setSelectedFeature(index)}
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className={`p-4 bg-gradient-to-r ${feature.gradient} rounded-2xl shadow-lg w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-2xl text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Stats Badge */}
                  <div className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    {feature.stats}
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <FaArrowRight className="text-blue-400 text-xs" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Feature Details Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r ${features[selectedFeature].gradient} p-6 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <SelectedIcon className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold">{features[selectedFeature].title}</h3>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {features[selectedFeature].stats}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {features[selectedFeature].desc}
                </p>

                {/* Key Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <FaChartLine className="text-blue-500" />
                    Key Benefits
                  </h4>
                  {features[selectedFeature].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 bg-gradient-to-r from-gray-900 to-purple-900 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-purple-900 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Retail Operations?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join leading retailers who are already using our AI solutions to drive efficiency, increase sales, and enhance customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Request Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;