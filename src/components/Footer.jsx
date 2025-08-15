// import React from 'react';
// import About from './About';
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-8 animate-fade-in">
//       <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div>
//           <h3 className="text-xl font-bold mb-4">PixEdge</h3>
//           <p className="text-gray-400">Turning retail spaces into intelligent environments with computer vision and AI.</p>
//         </div>
//         <div>
//           <h3 className="text-xl font-bold mb-4">Product</h3>
//           <a href="/features" className="block text-gray-400 hover:text-white">Features</a>
//           <a href="/solutions" className="block text-gray-400 hover:text-white">Solutions</a>
//           {/* <a href="" className="block text-gray-400 hover:text-white">Pricing</a> */}
//           <a href="/request-demo" className="block text-gray-400 hover:text-white">Demo</a>
//           {/* <a href="" className="block text-gray-400 hover:text-white">Integrations</a> */}
//         </div>
//         <div>
//           <h3 className="text-xl font-bold mb-4">Resources</h3>
//           <a href="#" className="block text-gray-400 hover:text-white">Documentation</a>
//           <a href="#" className="block text-gray-400 hover:text-white">API Reference</a>
//           <a href="#" className="block text-gray-400 hover:text-white">Case Studies</a>
//           <a href="#" className="block text-gray-400 hover:text-white">Blog</a>
//           <a href="#" className="block text-gray-400 hover:text-white">Help Center</a>
//         </div>
//         <div>
//           <h3 className="text-xl font-bold mb-4">Company</h3>
//           <a href="/about" className="block text-gray-400 hover:text-white"><Link to='/about' element={<About/>} >About Us</Link></a>
//           <a href="/careers" className="block text-gray-400 hover:text-white">Careers</a>
//           <a href="/privacy-policy" className="block text-gray-400 hover:text-white">Privacy Policy</a>
//           <a href="/terms" className="block text-gray-400 hover:text-white">Terms of Service</a>
//           <a href="/contact" className="block text-gray-400 hover:text-white">Contact Us</a>
//           <p className="mt-4 text-gray-400"><a href="support@pixedge.com" className='hover:text-blue-300'>support@pixedge.com</a><br />+91 1234567890<br />Hingane Home Colony<br />Karve nagar, Pune(411058) , Maharashtra , India</p>
//         </div>
//       </div>
//       <div className="text-center text-gray-500 mt-8">© 2025 PixEdge . All rights reserved.</div>
//     </footer>
//   );
// }

// export default Footer;

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-8 animate-fade-in">
//       <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Brand Info */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">PixEdge</h3>
//           <p className="text-gray-400">
//             Turning retail spaces into intelligent environments with computer vision and AI.
//           </p>
//         </div>

//         {/* Product Links */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Product</h3>
//           <Link to="/features" className="block text-gray-400 hover:text-white">Features</Link>
//           <Link to="/solutions" className="block text-gray-400 hover:text-white">Solutions</Link>
//           <Link to="/request-demo" className="block text-gray-400 hover:text-white">Demo</Link>
//         </div>

//         {/* Resources Links */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Resources</h3>
//           <Link to="/docs" className="block text-gray-400 hover:text-white">Documentation</Link>
//           <Link to="/api" className="block text-gray-400 hover:text-white">API Reference</Link>
//           <Link to="/case-studies" className="block text-gray-400 hover:text-white">Case Studies</Link>
//           <Link to="/blog" className="block text-gray-400 hover:text-white">Blog</Link>
//           <Link to="/help" className="block text-gray-400 hover:text-white">Help Center</Link>
//         </div>

//         {/* Company Info */}
//         <div>
//           <h3 className="text-xl font-bold mb-4">Company</h3>
//           <Link to="/about" className="block text-gray-400 hover:text-white">About Us</Link>
//           <Link to="/careers" className="block text-gray-400 hover:text-white">Careers</Link>
//           <Link to="/privacy-policy" className="block text-gray-400 hover:text-white">Privacy Policy</Link>
//           <Link to="/terms" className="block text-gray-400 hover:text-white">Terms of Service</Link>
//           <Link to="/contact" className="block text-gray-400 hover:text-white">Contact Us</Link>

//           <p className="mt-4 text-gray-400">
//             <a href="mailto:support@pixedge.com" className="hover:text-blue-300">infopixedge@gmail.com</a><br />
//             {/* +91 1234567890<br /> */}
//             Hingane Home Colony<br />
//             Karve Nagar, Pune (411058), Maharashtra, India
//           </p>
//         </div>
//       </div>

//       <div className="text-center text-gray-500 mt-8">
//         © 2025 PixEdge. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;


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
//             <li><Link to="/features" className="hover:text-blue-400 transition">Features</Link></li>
//             <li><Link to="/solutions" className="hover:text-blue-400 transition">Solutions</Link></li>
//             <li><Link to="/request-demo" className="hover:text-blue-400 transition">Demo</Link></li>
//           </ul>
//         </div>

//         {/* Resources Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-blue-300">Resources</h3>
//           <ul className="space-y-2">
//             <li><Link to="/docs" className="hover:text-blue-400 transition">Documentation</Link></li>
//             <li><Link to="/api" className="hover:text-blue-400 transition">API Reference</Link></li>
//             <li><Link to="/case-studies" className="hover:text-blue-400 transition">Case Studies</Link></li>
//             <li><Link to="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
//             <li><Link to="/help" className="hover:text-blue-400 transition">Help Center</Link></li>
//           </ul>
//         </div>

//         {/* Company Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 text-blue-300">Company</h3>
//           <ul className="space-y-2">
//             <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
//             <li><Link to="/careers" className="hover:text-blue-400 transition">Careers</Link></li>
//             <li><Link to="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
//             <li><Link to="/terms" className="hover:text-blue-400 transition">Terms of Service</Link></li>
//             <li><Link to="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
//           </ul>

//           <p className="mt-4 text-gray-400 text-sm leading-relaxed">
//             <a href="mailto:support@pixedge.com" className="hover:text-blue-400">infopixedge@gmail.com</a><br />
//             Hingane Home Colony<br />
//             Karve Nagar, Pune (411058), Maharashtra, India
//           </p>

//           {/* LinkedIn Icon */}
//         </div>
//       </div>
//           <div className="mt-4 flex items-center justify-center gap-3">
//             <a
//               href="https://www.linkedin.com/company/pixedge/posts/?feedView=all" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="p-3 rounded-full bg-blue-700 hover:bg-blue-500 transition-colors duration-300"
//             >
//               <FaLinkedinIn size={18} />
//             </a>
//           </div>

//       {/* Divider */}
//       <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
//         © 2025 PixEdge. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4 text-blue-400">PixEdge</h3>
          <p className="text-gray-400 leading-relaxed">
            Turning retail spaces into intelligent environments with computer vision and AI.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-300">Product</h3>
          <ul className="space-y-2">
            <li><Link to="/features" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Features</Link></li>
            <li><Link to="/solutions" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Solutions</Link></li>
            <li><Link to="/request-demo" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Demo</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-300">Resources</h3>
          <ul className="space-y-2">
            <li><Link to="/docs" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Documentation</Link></li>
            <li><Link to="/api" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">API Reference</Link></li>
            <li><Link to="/case-studies" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Case Studies</Link></li>
            <li><Link to="/blog" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Blog</Link></li>
            <li><Link to="/help" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Help Center</Link></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-300">Company</h3>
          <ul className="space-y-2">
            <li><Link to="/about" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/careers" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Careers</Link></li>
            <li><Link to="/privacy-policy" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Privacy Policy</Link></li>
            <li><Link to="/terms" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Terms of Service</Link></li>
            <li><Link to="/contact" state={{ scrollTo: 'top' }} className="hover:text-blue-400 transition">Contact Us</Link></li>
          </ul>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            <a href="mailto:support@pixedge.com" className="hover:text-blue-400">infopixedge@gmail.com</a><br />
            Hingane Home Colony<br />
            Karve Nagar, Pune (411058), Maharashtra, India
          </p>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <a
          href="https://www.linkedin.com/company/pixedge/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-blue-700 hover:bg-blue-500 transition-colors duration-300"
        >
          <FaLinkedinIn size={18} />
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2025 PixEdge. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
