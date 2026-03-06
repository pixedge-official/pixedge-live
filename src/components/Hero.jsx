


// import React from 'react';
// import { FaCalendarCheck, FaPlay } from 'react-icons/fa';
// import PixEdgePromo from './PixEdgePromo';
// import { Link } from 'react-router-dom';
// import RequestDemo from './RequestDemo';

// function Hero() {
//   return (
//     <section className="bg-no-repeat my-2 bg-cover bg-center bg-[url(https://kintronics.com/wp-content/uploads/2023/09/AI-Camera-Concept-1024x542.png)] h-screen">
//       <div className="bg-black/80 h-full flex items-center pt-20 pb-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8">

//           {/* Text Section */}
//           <div className="w-full md:w-1/2 text-center md:text-left">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-300 via-purple-700 to-white text-transparent bg-clip-text mb-6 leading-tight">
//               AI-Powered Safety Compliance in Industrial Environments
//             </h1>
//             <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6">
//               Ensure your workforce follows safety protocols with intelligent object detection—real-time helmet, PPE, and hazard monitoring to prevent accidents and enhance compliance.
//             </p>



//             <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-6">
//               <Link to='request-demo' element={<RequestDemo />} className="flex items-center gap-2 text-purple-300 text-lg sm:text-xl font-medium underline underline-offset-4 hover:text-purple-800 transition-colors duration-300 group">
//                 <FaCalendarCheck className="text-purple-200 group-hover:text-purple-800 transition-transform duration-300 group-hover:scale-110" />
//                 Request Demo</Link>

//               <Link to='/promovideo' element={<PixEdgePromo />} className="flex items-center gap-2 bg-gradient-to-r from-blue-300 to-indigo-600 text-black px-6 py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-200 text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

//                 <FaPlay className="text-black" />
//                 Watch Video

//               </Link>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="w-full md:w-1/2">
//             <img
//               src="https://nextbrain.ca/wp-content/uploads/2025/06/Enhance-Workplace-Safety-Prevent-Unsafe-Behavior_-Revolutionize-with-AI-driven-Protocols.png"
//               alt="Retail safety demo"
//               className="rounded-lg shadow-lg object-cover w-full h-auto transition-transform duration-500 hover:rotate-4 animate-float"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import React, { useEffect, useRef, useState } from 'react';
import { FaCalendarCheck, FaPlay, FaShieldAlt, FaRobot, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';

function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Floating animation variants
  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Text reveal animation
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  // Background particles effect
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10
  }));

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen mt-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative h-full flex items-center pt-20 pb-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-12">

            {/* Text Section */}
            <motion.div 
              className="w-full md:w-1/2 text-center md:text-left"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {/* Badge */}
              <motion.div 
                variants={textVariants}
                custom={0}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
              >
                <FaShieldAlt className="text-yellow-400 text-sm" />
                <span className="text-sm font-medium text-white/90">AI-POWERED SAFETY SOLUTION</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                variants={textVariants}
                custom={1}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
              >
                <span className="text-white">Industrial Safety</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text bg-gradient-to-r bg-300% animate-gradient">
                  Reimagined with AI
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                variants={textVariants}
                custom={2}
                className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto md:mx-0"
              >
                Ensure workforce compliance with real-time object detection—helmet, PPE, and hazard monitoring to prevent accidents and enhance workplace safety.
              </motion.p>

              {/* Feature Pills */}
              <motion.div 
                variants={textVariants}
                custom={3}
                className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
              >
                {['Real-time Detection', '98% Accuracy', 'Instant Alerts', 'Compliance Reports'].map((feature, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/20"
                  >
                    {feature}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={textVariants}
                custom={4}
                className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-6"
              >
                <Link 
                  to="/request-demo"
                  className="group relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <FaCalendarCheck className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Request Demo</span>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </Link>

                <Link 
                  to="/promovideo"
                  className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
                >
                  <div className="relative">
                    <FaPlay className="text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20 group-hover:opacity-30" />
                  </div>
                  <span>Watch Video</span>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={textVariants}
                custom={5}
                className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 pt-8 border-t border-white/20"
              >
                <div className="flex items-center gap-3">
                  <FaChartLine className="text-green-400 text-2xl" />
                  <div>
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-sm text-gray-300">Accuracy Rate</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaRobot className="text-purple-400 text-2xl" />
                  <div>
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-300">AI Monitoring</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
                }
              }}
            >
              <div className="relative group">
                {/* Animated gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-xy" />
                
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <motion.img
                    src="https://nextbrain.ca/wp-content/uploads/2025/06/Enhance-Workplace-Safety-Prevent-Unsafe-Behavior_-Revolutionize-with-AI-driven-Protocols.png"
                    alt="AI Safety Monitoring System"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    animate={floatAnimation}
                    onLoad={() => setIsVideoLoaded(true)}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Loading indicator */}
                  {!isVideoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </div>

                {/* Floating badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-lg font-bold shadow-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  AI Powered
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
