import React from 'react';
import dashboardBg from '../assets/dashboard-bg.jpg'; // Placeholder image
import PipelineFlow from './PipelineFlow';

function Dashboard({ detections }) {
  return (
    <section className="py-16 bg-gray-100" style={{ backgroundImage: `url(${dashboardBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 bg-white bg-opacity-90 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Retail Detection Dashboard</h2>
        <p className="text-lg text-gray-600 mb-6">Real-time object detection from your CCTV cameras</p>
        <div className="mb-4">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2">Last 24 hours</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2">Last 7 days</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Last 30 days</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detections.map((item) => (
            <div key={item.id} className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-2xl font-bold text-blue-600 mb-2">{item.label}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.desc}</p>
              <p className="text-sm text-gray-500">{item.time} | {item.camera}</p>
            </div>
          ))}
        </div>
      </div>
      <PipelineFlow/>
    </section>
  );
}

export default Dashboard;