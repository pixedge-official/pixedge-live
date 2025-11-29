// import React from 'react';

// const About = () => {
//   const sections = [
//     {
//       emoji: '💡',
//       title: 'How It Works',
//       content: `Our AI is built on deep learning models — including object detection, pose estimation, and behavior recognition — trained on real-world safety footage using TensorFlow and PyTorch. It recognizes helmets, gloves, vests, falls, fire, unsafe postures, zone intrusions, and more — turning every camera into a real-time safety supervisor.`
//     },
//     {
//       emoji: '🏗️',
//       title: 'Built for Industry',
//       content: `We serve industries where safety is mission-critical:
//       🏭 Manufacturing | 🚧 Construction | 📦 Logistics & Warehousing | 🚛 Transportation.
//       From detecting PPE violations to alerting fall risks — our system helps teams stay compliant, avoid accidents, and protect lives.`
//     },
//     {
//       emoji: '🌐',
//       title: 'Why Choose Us?',
//       list: [
//         '✅ Real-time alerts',
//         '✅ 24/7 intelligent surveillance',
//         '✅ Seamless integration with existing cameras',
//         '✅ Proactive risk prevention',
//         '✅ Zero fatigue. Full focus. Always.'
//       ]
//     },
//     {
//       emoji: '🚀',
//       title: 'The Future of Safety',
//       content: `VisionSafe AI brings automated safety assurance into the 21st century — where every frame is analyzed, every threat detected, and every life protected. We don’t just monitor safety — we make it smarter.`
//     }
//   ];

//   return (
//     <section id="about" className="bg-gradient-to-br from-white via-purple-100 to-gray-300 py-20 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
//           🚧 Revolutionizing Safety with Vision-Driven Intelligence
//         </h2>
//         <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
//           At <span className="font-semibold text-indigo-600">VisionSafe AI</span>, we’re transforming high-risk industries with real-time computer vision solutions that <strong>see, understand, and prevent danger</strong> before it happens.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {sections.map((sec, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-indigo-200 transition-all duration-300 hover:-translate-y-1"
//             >
//               <h3 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center">
//                 <span className="mr-2 text-2xl">{sec.emoji}</span> {sec.title}
//               </h3>
//               {sec.list ? (
//                 <ul className="list-disc list-inside text-gray-700 space-y-1">
//                   {sec.list.map((item, idx) => (
//                     <li key={idx} className="transition-colors duration-200 hover:text-indigo-600">
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-700 whitespace-pre-line leading-relaxed">
//                   {sec.content}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// import React from 'react';

// const About = () => {
//   const sections = [
//     {
//       emoji: '💡',
//       title: 'How It Works',
//       content: `Our AI leverages advanced deep learning models, including object detection, pose estimation, and behavior recognition, trained on real-world safety footage using TensorFlow and PyTorch. It identifies helmets, gloves, vests, falls, fire, unsafe postures, and zone intrusions, transforming every camera into a vigilant safety supervisor.`
//     },
//     {
//       emoji: '🏗️',
//       title: 'Built for Industry',
//       content: `We empower safety-critical sectors:
//       🏭 Manufacturing | 🚧 Construction | 📦 Logistics & Warehousing | 🚛 Transportation.
//       From detecting PPE violations to alerting fall risks, our system ensures compliance, prevents accidents, and safeguards lives.`
//     },
//     {
//       emoji: '🌐',
//       title: 'Why Choose Us?',
//       list: [
//         'Real-time alerts',
//         '24/7 intelligent surveillance',
//         'Seamless integration with existing cameras',
//         'Proactive risk prevention',
//         'Zero fatigue. Full focus. Always.'
//       ]
//     },
//     {
//       emoji: '🚀',
//       title: 'The Future of Safety',
//       content: `VisionSafe AI pioneers automated safety assurance for the 21st century, where every frame is analyzed, every threat is detected, and every life is protected. We don’t just monitor safety — we redefine it with smarter solutions.`
//     }
//   ];

//   return (
//     <section
//       id="about"
//       className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-gray-100 py-24 px-6 md:px-12 overflow-hidden"
//     >
//       {/* Subtle background decoration */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      
//       <div className="max-w-7xl mx-auto text-center relative z-10">
//         {/* Animated Heading */}
//         <h2
//           className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight animate-fade-in-up"
//         >
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
//             🚧 Revolutionizing Safety
//           </span>
//           <br />
//           with Vision-Driven Intelligence
//         </h2>
//         <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
//           At <span className="font-bold text-indigo-600">VisionSafe AI</span>, we’re transforming high-risk industries with cutting-edge computer vision solutions that <strong>detect, analyze, and prevent danger</strong> in real time.
//         </p>

//         {/* Grid Layout for Sections */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {sections.map((sec, i) => (
//             <div
//               key={i}
//               className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
//               style={{ animationDelay: `${(i + 1) * 150}ms` }}
//             >
//               {/* Decorative hover effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500"></div>
              
//               <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center relative z-10">
//                 <span className="mr-3 text-3xl transform group-hover:scale-110 transition-transform duration-300">{sec.emoji}</span>
//                 {sec.title}
//               </h3>
//               {sec.list ? (
//                 <ul className="text-gray-700 space-y-3">
//                   {sec.list.map((item, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-start text-lg transition-colors duration-300 group-hover:text-indigo-600"
//                     >
//                       <span className="mr-2 text-indigo-500">✅</span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-600 text-lg leading-relaxed relative z-10">
//                   {sec.content}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Inline CSS for Animations */}
//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//         }
//         .delay-200 {
//           animation-delay: 200ms;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { FaBrain, FaIndustry, FaShieldAlt, FaRocket, FaCheckCircle, FaEye, FaClock, FaSyncAlt } from 'react-icons/fa';
import RequestDemo from './RequestDemo';
import { Link } from 'react-router-dom';

const About = () => {
  const sections = [
    {
      icon: FaBrain,
      title: 'How It Works',
      content: `Our AI leverages advanced deep learning models, including object detection, pose estimation, and behavior recognition, trained on real-world safety footage using TensorFlow and PyTorch.`,
      features: ['Object Detection', 'Pose Estimation', 'Behavior Recognition', 'Real-time Analysis'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: FaIndustry,
      title: 'Built for Industry',
      content: `We empower safety-critical sectors with tailored solutions that ensure compliance, prevent accidents, and safeguard lives.`,
      industries: [
        { name: 'Manufacturing', icon: '🏭' },
        { name: 'Construction', icon: '🚧' },
        { name: 'Logistics & Warehousing', icon: '📦' },
        { name: 'Transportation', icon: '🚛' }
      ],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: FaShieldAlt,
      title: 'Why Choose Us?',
      features: [
        'Real-time alerts & notifications',
        '24/7 intelligent surveillance',
        'Seamless integration with existing cameras',
        'Proactive risk prevention',
        'Zero fatigue. Full focus. Always.'
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: FaRocket,
      title: 'The Future of Safety',
      content: `VisionSafe AI pioneers automated safety assurance for the 21st century, where every frame is analyzed, every threat is detected, and every life is protected.`,
      stats: [
        { value: '99.9%', label: 'Accuracy Rate' },
        { value: '24/7', label: 'Monitoring' },
        { value: '<1s', label: 'Response Time' }
      ],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ];

  return (
    <section id="about" className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <FaShieldAlt className="text-white" />
            About VisionSafe AI
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Revolutionizing{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Workplace Safety
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming high-risk industries with cutting-edge computer vision solutions that{' '}
            <span className="font-semibold text-gray-800">detect, analyze, and prevent danger</span> in real-time.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-50`}></div>
              
              <div className="relative p-8">
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${section.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>

                {/* Content */}
                {section.content && (
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {section.content}
                  </p>
                )}

                {/* Features List */}
                {section.features && (
                  <ul className="space-y-3">
                    {section.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        <FaCheckCircle className={`text-${section.gradient.split('-')[1]}-500 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Industries Grid */}
                {section.industries && (
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {section.industries.map((industry, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 bg-white/50 rounded-lg border border-gray-200">
                        <span className="text-2xl">{industry.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{industry.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Stats */}
                {section.stats && (
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {section.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-3 bg-white/70 rounded-lg border border-gray-200">
                        <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[2px] rounded-2xl bg-white z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-purple-900 rounded-2xl p-8 text-white text-center shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Safety Protocols?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join hundreds of companies that trust VisionSafe AI to protect their workforce and ensure compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button  className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
               <Link to='/request-demo' element={<RequestDemo />}>Request Demo</Link> 
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;