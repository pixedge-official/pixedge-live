import React from 'react';
import About from './About';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">PixEdge</h3>
          <p className="text-gray-400">Turning retail spaces into intelligent environments with computer vision and AI.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Product</h3>
          <a href="/features" className="block text-gray-400 hover:text-white">Features</a>
          <a href="/solutions" className="block text-gray-400 hover:text-white">Solutions</a>
          {/* <a href="" className="block text-gray-400 hover:text-white">Pricing</a> */}
          <a href="/request-demo" className="block text-gray-400 hover:text-white">Demo</a>
          {/* <a href="" className="block text-gray-400 hover:text-white">Integrations</a> */}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Resources</h3>
          <a href="#" className="block text-gray-400 hover:text-white">Documentation</a>
          <a href="#" className="block text-gray-400 hover:text-white">API Reference</a>
          <a href="#" className="block text-gray-400 hover:text-white">Case Studies</a>
          <a href="#" className="block text-gray-400 hover:text-white">Blog</a>
          <a href="#" className="block text-gray-400 hover:text-white">Help Center</a>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <a href="/about" className="block text-gray-400 hover:text-white"><Link to='/about' element={<About/>} >About Us</Link></a>
          <a href="/careers" className="block text-gray-400 hover:text-white">Careers</a>
          <a href="/privacy-policy" className="block text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="/terms" className="block text-gray-400 hover:text-white">Terms of Service</a>
          <a href="/contact" className="block text-gray-400 hover:text-white">Contact Us</a>
          <p className="mt-4 text-gray-400"><a href="support@pixedge.com" className='hover:text-blue-300'>support@pixedge.com</a><br />+91 1234567890<br />Hingane Home Colony<br />Karve nagar, Pune(411058) , Maharashtra , India</p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">© 2025 PixEdge . All rights reserved.</div>
    </footer>
  );
}

export default Footer;