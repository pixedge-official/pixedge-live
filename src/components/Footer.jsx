


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaLinkedinIn } from 'react-icons/fa';

// function Footer() {
//   return (
//     <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 animate-fade-in">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

//         {/* Brand Info */}
//         <div>
//           <h3 className="text-2xl font-extrabold mb-4 text-blue-400">PixEdge</h3>
//           <p className="text-gray-400 leading-relaxed">
//             Turning retail spaces into intelligent environments with computer vision and AI.
//           </p>
//         </div>

//         {/* Product Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-blue-300">Product</h3>
//           <ul className="space-y-2">
//             <li><Link to="/features" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Features</Link></li>
//             <li><Link to="/solutions" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Solutions</Link></li>
//             <li><Link to="/request-demo" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Demo</Link></li>
//           </ul>
//         </div>

//         {/* Resources */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-blue-300">Resources</h3>
//           <ul className="space-y-2">
//             <li><Link to="/docs" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Documentation</Link></li>
//             <li><Link to="/api" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">API Reference</Link></li>
//             <li><Link to="/case-studies" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Case Studies</Link></li>
//             <li><Link to="/blog" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Blog</Link></li>
//             <li><Link to="/help" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Help Center</Link></li>
//           </ul>
//         </div>

//         {/* Company Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-blue-300">Company</h3>
//           <ul className="space-y-2">
//             <li><Link to="/about" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">About Us</Link></li>
//             <li><Link to="/careers" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Careers</Link></li>
//             <li><Link to="/privacy-policy" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Privacy Policy</Link></li>
//             <li><Link to="/terms" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Terms of Service</Link></li>
//             <li><Link to="/contact" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Contact Us</Link></li>
//           </ul>

//           <p className="mt-4 text-gray-400 text-sm leading-relaxed">
//             <a href="mailto:support@pixedge.com" className="hover:text-blue-400">infopixedge@gmail.com</a><br />
//             Hingane Home Colony<br />
//             Karve Nagar, Pune (411058), Maharashtra, India
//           </p>
//         </div>
//       </div>

//       {/* LinkedIn */}
//       <div className="mt-4 flex items-center justify-center gap-3">
//         <a
//           href="https://www.linkedin.com/company/pixedge/posts/?feedView=all"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-3 rounded-full bg-blue-700 hover:bg-blue-500 transition-colors duration-300"
//         >
//           <FaLinkedinIn size={18} />
//         </a>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
//         © 2025 PixEdge. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  FaLinkedinIn, 
  FaTwitter, 
  FaGithub, 
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaRocket,
  FaNewspaper,
  FaShieldAlt,
  FaHeart
} from 'react-icons/fa';

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/pixedge/posts/?feedView=all", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: <FaTwitter />, href: "https://twitter.com/pixedge", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: <FaGithub />, href: "https://github.com/pixedge", label: "GitHub", color: "hover:bg-gray-700" },
    { icon: <FaYoutube />, href: "https://youtube.com/pixedge", label: "YouTube", color: "hover:bg-red-600" },
  ];

  const quickLinks = {
    product: [
      { name: "Features", path: "/features", icon: <FaRocket className="w-3 h-3" /> },
      { name: "Solutions", path: "/solutions", icon: <FaShieldAlt className="w-3 h-3" /> },
      { name: "Demo", path: "/request-demo", icon: <FaNewspaper className="w-3 h-3" /> },
    ],
    resources: [
      { name: "Documentation", path: "/docs" },
      { name: "API Reference", path: "/api" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Blog", path: "/blog" },
      { name: "Help Center", path: "/help" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers", badge: "Hiring" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Contact Us", path: "/contact" },
    ],
  };

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16 z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section - 4 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            {/* Logo with Animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <h3 className="text-3xl font-extrabold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  PixEdge
                </span>
              </h3>
            </motion.div>

            <p className="text-gray-400 leading-relaxed text-lg">
              Turning retail spaces into intelligent environments with cutting-edge 
              computer vision and AI technology.
            </p>

            {/* Contact Info with Icons */}
            <div className="space-y-3">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:infopixedge@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <FaEnvelope className="group-hover:scale-110 transition-transform" />
                <span>infopixedge@gmail.com</span>
              </motion.a>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-gray-400"
              >
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>
                  Hingane Home Colony<br />
                  Karve Nagar, Pune (411058)<br />
                  Maharashtra, India
                </span>
              </motion.div>

              <motion.a
                whileHover={{ x: 5 }}
                href="tel:+912012345678"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <FaPhone className="group-hover:rotate-12 transition-transform" />
                <span>+91 20 1234 5678</span>
              </motion.a>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Product Links - 2 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Product
            </h3>
            <ul className="space-y-3">
              {quickLinks.product.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  custom={index}
                >
                  <Link
                    to={link.path}
                    state={{ scrollTo: 'top' }}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <span className="text-blue-400/50 group-hover:text-blue-400 transition-colors">
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources - 2 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Resources
            </h3>
            <ul className="space-y-3">
              {quickLinks.resources.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={link.path}
                    state={{ scrollTo: 'top' }}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company - 4 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Company
            </h3>
            <ul className="space-y-3">
              {quickLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between"
                >
                  <Link
                    to={link.path}
                    state={{ scrollTo: 'top' }}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.badge && (
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                      {link.badge}
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section with Social Links and Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full bg-white/5 ${social.color} transition-all duration-300 border border-white/10 hover:border-transparent`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Made with love */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="flex items-center gap-2 text-gray-400"
            >
              <span>Made with</span>
              <FaHeart className="text-red-500" />
              <span>by PixEdge Team</span>
            </motion.div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} PixEdge. All rights reserved.
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-gray-600">
            <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-gray-400 transition-colors">Cookie Policy</Link>
            <Link to="/sitemap" className="hover:text-gray-400 transition-colors">Sitemap</Link>
          </div>
        </motion.div>
      </div>

      {/* Animated Bottom Bar */}
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.footer>
  );
}

export default Footer;
