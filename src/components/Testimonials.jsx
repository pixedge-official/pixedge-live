import React from 'react';
import testimonialBg from '../assets/testimonial-bg.jpg'; // Placeholder image

function Testimonials() {
  return (
    <section className="py-16 bg-gray-100" style={{ backgroundImage: `url(${testimonialBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 bg-white bg-opacity-90 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">Trusted by Retail Innovators</h2>
        <p className="text-lg text-gray-600 mb-10 text-center">Join hundreds of retailers who are transforming their operations with PixEdge.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[ { quote: "PixEdge helped us reduce checkout wait times by 35% and increased our conversion rate by 18% in just three months. The insights were eye-opening and immediately actionable.", author: "Sarah Johnson", title: "COO, UrbanStyle Retail" },
             { quote: "The inventory tracking alone paid for the system within six months. We've dramatically reduced out-of-stock situations and improved restocking efficiency across all locations.", author: "Michael Chen", title: "Store Manager, HomePlus" },
             { quote: "As a privacy-conscious retailer, we appreciated that PixEdge processes everything locally. The data is incredibly valuable without being intrusive to our customers.", author: "Emma Rodriguez", title: "CEO, GreenEarth Organics" } ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 mb-4 italic">"{item.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-800">{item.author}</p>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;