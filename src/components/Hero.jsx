


import React from 'react';
import { FaCalendarCheck, FaPlay } from 'react-icons/fa';
import PixEdgePromo from './PixEdgePromo';
import { Link } from 'react-router-dom';
import RequestDemo from './RequestDemo';

function Hero() {
  return (
    <section className="bg-no-repeat  bg-cover bg-center bg-[url(https://kintronics.com/wp-content/uploads/2023/09/AI-Camera-Concept-1024x542.png)] h-screen">
      <div className="bg-black/80 h-full flex items-center pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8">

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-300 via-purple-700 to-white text-transparent bg-clip-text mb-6 leading-tight">
              AI-Powered Safety Compliance in Industrial Environments
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6">
              Ensure your workforce follows safety protocols with intelligent object detection—real-time helmet, PPE, and hazard monitoring to prevent accidents and enhance compliance.
            </p>



            <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-6">
              <Link to='request-demo' element={<RequestDemo />} className="flex items-center gap-2 text-purple-300 text-lg sm:text-xl font-medium underline underline-offset-4 hover:text-purple-800 transition-colors duration-300 group">
                <FaCalendarCheck className="text-purple-200 group-hover:text-purple-800 transition-transform duration-300 group-hover:scale-110" />
                Request Demo</Link>

              <Link to='/promovideo' element={<PixEdgePromo />} className="flex items-center gap-2 bg-gradient-to-r from-blue-300 to-indigo-600 text-black px-6 py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-200 text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

                <FaPlay className="text-black" />
                Watch Video

              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://nextbrain.ca/wp-content/uploads/2025/06/Enhance-Workplace-Safety-Prevent-Unsafe-Behavior_-Revolutionize-with-AI-driven-Protocols.png"
              alt="Retail safety demo"
              className="rounded-lg shadow-lg object-cover w-full h-auto transition-transform duration-500 hover:rotate-4 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
