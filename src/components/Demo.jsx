// import React from 'react';

// function Demo() {
//   return (
//     <section className=" flex py-16 p-15 bg-slate-900 animate-fade-in">
//       <div className=" max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 text-left">
//         <h2 className="text-4xl font-bold text-white mb-4 font-serif">See the Future of Retail Analytics</h2>
//         <p className="text-2xl text-gray-400 mb-6 max-w-xl ">
//           Our platform processes video streams in real-time to deliver actionable insights while preserving customer privacy. All analysis happens on-premises or in the cloud - your data never leaves your control.
//         </p>
//         <p className="text-xl text-gray-200 mb-6">Experience how VisionRetail can transform your retail operations with a personalized demo.</p>
//         <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Schedule Demo</a>

       
//       </div>
//       <div className='w-1/2 p-10'>  
//          <img src="https://miro.medium.com/v2/resize:fit:1400/1*nXw8npXO9UGgEmAw4d6JlQ.png" alt=""  className='rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-150  object-cover w-full h-auto  ' />
//        </div>
//     </section>
//   );
// }

// export default Demo;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import RequestDemo from './RequestDemo';

// function Demo() {
//   return (
//     <section className="flex flex-col lg:flex-row py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 min-h-[600px] animate-fade-in">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start w-full">
//         {/* Text Content */}
//         <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 text-center lg:text-left mb-8 lg:mb-0">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif leading-tight">
//             See the Future of Retail Analytics
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-lg mx-auto lg:mx-0">
//             Our platform processes video streams in real-time to deliver actionable insights while preserving customer privacy. All analysis happens on-premises or in the cloud - your data never leaves your control.
//           </p>
//           <p className="text-base sm:text-lg text-gray-200 mb-6">
//             Experience how PixEdge can transform your retail operations with a personalized demo.
//           </p>
//           <Link to='request-demo' element={<RequestDemo/>}  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-700">Schedule Demo</Link>
//         </div>

//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 transition-transform duration-300 ease-in-out hover:scale-120">
//           <div className="relative rounded-lg shadow-lg overflow-hidden group">
//             <img
//               src="https://miro.medium.com/v2/resize:fit:1400/1*nXw8npXO9UGgEmAw4d6JlQ.png"
//               alt="PixEdge analytics platform illustration"
//               className="object-cover w-full h-auto max-h-[400px] "
//             />
//           </div>
//         </div>
//       </div>

     
//     </section>
//   );
// }

// export default Demo;

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaCloud, 
  FaChartLine, 
  FaVideo,
  FaArrowRight,
  FaPlayCircle,
  FaCheckCircle 
} from 'react-icons/fa';
import RequestDemo from './RequestDemo';

function Demo() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, x: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4,
      },
    },
  };

  const features = [
    { icon: <FaShieldAlt />, text: "Privacy First", color: "from-blue-400 to-blue-600" },
    { icon: <FaCloud />, text: "On-Premise or Cloud", color: "from-purple-400 to-purple-600" },
    { icon: <FaChartLine />, text: "Real-time Analytics", color: "from-green-400 to-green-600" },
    { icon: <FaVideo />, text: "Live Processing", color: "from-orange-400 to-orange-600" },
  ];


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
    <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[700px] overflow-hidden">

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
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0,300 Q 150,200 300,300 T 600,300"
            stroke="url(#grad1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16"
        >
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-500/20"
            >
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-blue-300 text-sm font-medium">Live Demo Available</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight"
            >
              See the Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Retail Analytics
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Our platform processes video streams in real-time to deliver actionable insights 
              while preserving customer privacy. All analysis happens on-premises or in the cloud - 
              your data never leaves your control.
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`bg-gradient-to-r ${feature.color} p-px rounded-full`}
                >
                  <div className="bg-slate-900 rounded-full px-4 py-2 flex items-center gap-2">
                    <span className="text-white">{feature.icon}</span>
                    <span className="text-sm text-white">{feature.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 mb-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-gray-300 text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-gray-300 text-sm">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-gray-300 text-sm">End-to-End Encryption</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="request-demo"
                element={<RequestDemo />}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Schedule Demo
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 gap-2">
                <FaPlayCircle className="group-hover:scale-110 transition-transform duration-300" />
                Watch Video
              </button>
            </motion.div>
          </motion.div>

          {/* Image Section with Enhanced Animation */}
          <motion.div 
            variants={imageVariants}
            className="w-full lg:w-1/2 relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {/* Main Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {/* Image */}
              <motion.img
                src="https://miro.medium.com/v2/resize:fit:1400/1*nXw8npXO9UGgEmAw4d6JlQ.png"
                alt="PixEdge analytics platform illustration"
                className="w-full h-auto object-cover"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Live Processing</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="text-white text-sm font-medium">📊 247 Customers</span>
              </motion.div>

              {/* Play Button Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <FaPlayCircle className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
        >
          {[
            { value: "99.9%", label: "Accuracy Rate" },
            { value: "<50ms", label: "Latency" },
            { value: "500+", label: "Stores Deployed" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      
    </section>
  );
}

export default Demo;