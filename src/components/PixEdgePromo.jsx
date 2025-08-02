


import React from "react";
import PixEdgeVideo from "../assets/pixedge-promo4.mp4"; // Adjust path if needed

const PixEdgePromo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-fuchsia-950 to-pink-950 text-white px-4 py-12">
      
      {/* Text Section */}
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug">
          PixEdge – Vision. Delivered.
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl">
          Experience next-gen camera vision with real-time AI detection, analytics, and control—all from PixEdge.
        </p>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-4xl aspect-video rounded-xl shadow-lg overflow-hidden">
        <video
          src={PixEdgeVideo}
          controls
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default PixEdgePromo;

