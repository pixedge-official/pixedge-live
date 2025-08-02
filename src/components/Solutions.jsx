import React from 'react';
import { FaChartLine, FaFireExtinguisher, FaShieldAlt, FaUserCheck, FaVideo } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";

const solutionsData = [
  {
    title: "Smart Surveillance",
    icon: <FaVideo />,
    description: "Real-time monitoring using AI-powered cameras to detect unsafe behaviors, intrusions, and violations."
  },
  {
    title: "PPE Detection",
    icon: <FaHardHat />,
    description: "Ensure workers are wearing helmets, vests, gloves, and boots with instant alerts for non-compliance."
  },
  {
    title: "Zone Intrusion Alerts",
    icon: <FaShieldAlt />,
    description: "Detect and alert when personnel enter restricted or hazardous zones — even in low visibility conditions."
  },
  {
    title: "Fall & Fire Detection",
    icon: <FaFireExtinguisher />,
    description: "Get notified in seconds during fall incidents or fire outbreaks using high-accuracy vision models."
  },
  {
    title: "Behavior Analysis",
    icon: <FaUserCheck />,
    description: "Monitor workforce movement patterns and spot abnormal behavior that may signal potential risks."
  },
  {
    title: "Analytics Dashboard",
    icon: <FaChartLine />,
    description: "Visualize safety data, compliance reports, and trends with actionable insights across your sites."
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="bg-gradient-to-tl from-indigo-50 via-purple-100 to-pink-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">🔍 Our Solutions</h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Explore our intelligent vision-based safety solutions designed to transform your workplace monitoring into a smart, scalable system.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-indigo-200 hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-full mb-4 mx-auto">
                <i className={`fas ${item.icon} text-indigo-600 text-2xl`}>{item.icon}</i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
