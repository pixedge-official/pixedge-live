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


import React from 'react';

const About = () => {
  const sections = [
    {
      emoji: '💡',
      title: 'How It Works',
      content: `Our AI leverages advanced deep learning models, including object detection, pose estimation, and behavior recognition, trained on real-world safety footage using TensorFlow and PyTorch. It identifies helmets, gloves, vests, falls, fire, unsafe postures, and zone intrusions, transforming every camera into a vigilant safety supervisor.`
    },
    {
      emoji: '🏗️',
      title: 'Built for Industry',
      content: `We empower safety-critical sectors:
      🏭 Manufacturing | 🚧 Construction | 📦 Logistics & Warehousing | 🚛 Transportation.
      From detecting PPE violations to alerting fall risks, our system ensures compliance, prevents accidents, and safeguards lives.`
    },
    {
      emoji: '🌐',
      title: 'Why Choose Us?',
      list: [
        'Real-time alerts',
        '24/7 intelligent surveillance',
        'Seamless integration with existing cameras',
        'Proactive risk prevention',
        'Zero fatigue. Full focus. Always.'
      ]
    },
    {
      emoji: '🚀',
      title: 'The Future of Safety',
      content: `VisionSafe AI pioneers automated safety assurance for the 21st century, where every frame is analyzed, every threat is detected, and every life is protected. We don’t just monitor safety — we redefine it with smarter solutions.`
    }
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-gray-100 py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Animated Heading */}
        <h2
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight animate-fade-in-up"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            🚧 Revolutionizing Safety
          </span>
          <br />
          with Vision-Driven Intelligence
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          At <span className="font-bold text-indigo-600">VisionSafe AI</span>, we’re transforming high-risk industries with cutting-edge computer vision solutions that <strong>detect, analyze, and prevent danger</strong> in real time.
        </p>

        {/* Grid Layout for Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((sec, i) => (
            <div
              key={i}
              className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              {/* Decorative hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center relative z-10">
                <span className="mr-3 text-3xl transform group-hover:scale-110 transition-transform duration-300">{sec.emoji}</span>
                {sec.title}
              </h3>
              {sec.list ? (
                <ul className="text-gray-700 space-y-3">
                  {sec.list.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-lg transition-colors duration-300 group-hover:text-indigo-600"
                    >
                      <span className="mr-2 text-indigo-500">✅</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                  {sec.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS for Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </section>
  );
};

export default About;