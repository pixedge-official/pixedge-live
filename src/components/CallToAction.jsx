import React from 'react';

function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-center animate-fade-in">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">Ready to Transform Your Retail Operations?</h2>
        <p className="text-lg text-gray-50 mb-6">Schedule a personalized demo to see how PixEdge can help you make data-driven decisions and boost your bottom line.</p>
        <div className="space-x-4">
          {/* <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Get Started</a> */}
          <a href="/contact" className="inline-block  bg-sky-300 text-black px-6 py-3 rounded hover:bg-sky-500">Contact Sales</a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;