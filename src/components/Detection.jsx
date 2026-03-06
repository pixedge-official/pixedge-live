// import React, { useState } from 'react';
// import detectionBg from '../assets/detection-bg.jpg'; // Placeholder image

// function Detection({ addDetection }) {
//   const [newDetection, setNewDetection] = useState({ label: "", title: "", desc: "", time: "", camera: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addDetection(newDetection);
//     setNewDetection({ label: "", title: "", desc: "", time: "", camera: "" });
//   };

//   return (
//     <section className=" bg-white" style={{ backgroundImage: `url(${detectionBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 bg-white bg-opacity-90 p-30 rounded-lg">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">YOLO Object Detection in Retail</h2>
//         <p className="text-lg text-gray-600 mb-10 text-center">See how our computer vision system identifies and analyzes objects in real-time</p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {[ {img:"https://infohub.delltechnologies.com/static/media/9198938f-8c47-5a0e-82d9-6db6a62cd3f7/DAM-b9db17e1-5ab9-48e4-ab8e-0516734ad0e6/out/2769.011.png", label: "Customer: 87%", title: "Customer Interaction",  desc: "Identifying customers and tracking their movement patterns", tech: ["YOLOv8", "Real-time"] },
//              {img:"https://images.axios.com/tKv482wRXhfXaQxpVWv5br9J2Gw=/2022/01/20/1642701833484.jpg", label: "Empty Shelf: 92%", title: "Inventory Monitoring", desc: "Detecting out-of-stock items and misplaced products", tech: ["YOLOv8", "95% accuracy"] },
//              {img:"https://i.guim.co.uk/img/media/62773a4a77d97c5bc18fe1d34f7fc6898f5bac40/0_251_5017_3010/master/5017.jpg?width=465&dpr=1&s=none&crop=none", label: "Queue: 6 people", title: "Checkout Optimization", desc: "Counting customers in line to optimize staffing", tech: ["YOLOv8", "Real-time"] } ].map((item, index) => (
//             <div key={index} className=" bg-gray-50 rounded-lg shadow-md">
//               <div>
//                 <img src={item.img} alt="" className='rounded-lg h-full w-full'  />
//                 <div className="text-sm mt-2 ml-10 flex justify-center font-bold rounded-4xl  bg-gray-300 w-50 p-2 text-blue-400 ">{item.label}</div>
//                 </div>
//               <div className='p-6'>
//               <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
//               <p className="text-gray-600">{item.desc}</p>
//               <ul className="text-sm flex justify-between text-gray-500">
//                 {item.tech.map((tech, i) => <li key={i}>{tech}</li>)}
//               </ul>
//               </div>
//             </div>
//           ))}
//         </div>
        
//       </div>
//     </section>
//   );
// }

// export default Detection;


import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  FaCamera, 
  FaChartLine, 
  FaCube, 
  FaEye, 
  FaBrain,
  FaMicrochip,
  FaClock,
  FaMapMarkerAlt,
  FaExpand,
  FaDownload,
  FaShareAlt
} from 'react-icons/fa';
import detectionBg from '../assets/detection-bg.jpg';

function Detection({ addDetection }) {
  const [newDetection, setNewDetection] = useState({ label: "", title: "", desc: "", time: "", camera: "" });
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const detectionItems = [
    {
      id: 1,
      img: "https://infohub.delltechnologies.com/static/media/9198938f-8c47-5a0e-82d9-6db6a62cd3f7/DAM-b9db17e1-5ab9-48e4-ab8e-0516734ad0e6/out/2769.011.png",
      label: "Customer: 87%",
      title: "Customer Interaction Analytics",
      desc: "Identifying customers and tracking their movement patterns in real-time",
      tech: ["YOLOv8", "Real-time", "98% accuracy"],
      color: "from-blue-500 to-cyan-500",
      icon: <FaEye />,
      stats: { confidence: 87, fps: 30, latency: '45ms' }
    },
    {
      id: 2,
      img: "https://images.axios.com/tKv482wRXhfXaQxpVWv5br9J2Gw=/2022/01/20/1642701833484.jpg",
      label: "Empty Shelf: 92%",
      title: "Smart Inventory Monitoring",
      desc: "Detecting out-of-stock items and misplaced products with AI precision",
      tech: ["YOLOv8", "95% accuracy", "Auto-alert"],
      color: "from-orange-500 to-red-500",
      icon: <FaCube />,
      stats: { confidence: 92, fps: 25, latency: '60ms' }
    },
    {
      id: 3,
      img: "https://i.guim.co.uk/img/media/62773a4a77d97c5bc18fe1d34f7fc6898f5bac40/0_251_5017_3010/master/5017.jpg?width=465&dpr=1&s=none&crop=none",
      label: "Queue: 6 people",
      title: "Queue Management System",
      desc: "Counting customers in line to optimize staffing and reduce wait times",
      tech: ["YOLOv8", "Real-time", "Predictive"],
      color: "from-green-500 to-emerald-500",
      icon: <FaChartLine />,
      stats: { confidence: 94, fps: 30, latency: '40ms' }
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    addDetection(newDetection);
    setNewDetection({ label: "", title: "", desc: "", time: "", camera: "" });
  };

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
    hidden: { y: 50, opacity: 0 },
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

  const floatingIcons = [
    { icon: <FaCamera />, delay: 0, duration: 3, x: 10, y: -10 },
    { icon: <FaBrain />, delay: 1, duration: 4, x: -15, y: 20 },
    { icon: <FaMicrochip />, delay: 2, duration: 3.5, x: 20, y: 15 },
  ];

  return (
    <section 
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-white/10 text-4xl"
            style={{ 
              left: `${20 + index * 30}%`, 
              top: `${20 + index * 20}%`,
            }}
            animate={{
              x: [0, item.x, 0],
              y: [0, item.y, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center mb-16"
        >
          {/* Live Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20"
          >
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white text-sm font-medium">Live Detection Active</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display"
          >
            YOLO Object Detection
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              in Retail Environment
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Experience real-time AI-powered computer vision that identifies and analyzes objects 
            with unprecedented accuracy and speed
          </motion.p>

          {/* Stats Counter */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-8 mt-8"
          >
            {[
              { value: '99.9%', label: 'Accuracy' },
              { value: '<50ms', label: 'Latency' },
              { value: '30fps', label: 'Processing' },
              { value: '24/7', label: 'Availability' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, transition: { delay: 0.4 } }
          }}
          className="flex justify-center gap-4 mb-12"
        >
          {['all', 'customers', 'inventory', 'queue'].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Detection Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {detectionItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60`}></div>
                
                {/* Live Badge */}
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-4 left-4 bg-black/50 backdrop-blur-md rounded-full px-3 py-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-white text-xs font-medium">LIVE</span>
                  </div>
                </motion.div>

                {/* Confidence Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.3 }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-3 py-1"
                >
                  <span className="text-white text-sm font-bold">{item.label}</span>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20
                  }}
                  className="absolute bottom-4 right-4 flex gap-2"
                >
                  <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-colors">
                    <FaExpand className="text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-colors">
                    <FaDownload className="text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-colors">
                    <FaShareAlt className="text-white" />
                  </button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-2xl text-${item.color.split('-')[1]}-400`}>
                    {item.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-white/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                  {Object.entries(item.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-300 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 pointer-events-none`}
                animate={{
                  opacity: hoveredIndex === index ? 0.1 : 0,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 0.8 } }
          }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden shadow-2xl"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
            <span className="relative flex items-center gap-2">
              <FaCamera className="group-hover:rotate-12 transition-transform" />
              Start New Detection
            </span>
          </motion.button>
          
          <p className="text-gray-300 mt-4 text-sm">
            Experience the power of AI-driven retail analytics
          </p>
        </motion.div>
      </div>

      {/* Add Detection Form (Hidden by default, can be shown on demand) */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Add New Detection</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Label"
                  value={newDetection.label}
                  onChange={(e) => setNewDetection({...newDetection, label: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Title"
                  value={newDetection.title}
                  onChange={(e) => setNewDetection({...newDetection, title: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Description"
                  value={newDetection.desc}
                  onChange={(e) => setNewDetection({...newDetection, desc: e.target.value})}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Time"
                    value={newDetection.time}
                    onChange={(e) => setNewDetection({...newDetection, time: e.target.value})}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Camera"
                    value={newDetection.camera}
                    onChange={(e) => setNewDetection({...newDetection, camera: e.target.value})}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
                  >
                    Add Detection
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Detection;
