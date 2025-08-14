  
import React, { useState } from 'react';
import { FaChartLine, FaFireExtinguisher, FaShieldAlt, FaUserCheck, FaVideo, FaHardHat } from "react-icons/fa";
import imgsmart from "../assets/SmartSurveillance.jpg";
import PPE from "../assets/PPE.jpg";
import Ana from "../assets/Analytics.jpg";
import FallFire from "../assets/Fall&Fire.jpg";
import Zone from "../assets/Zone.jpg";
import Behave from "../assets/Behave.png";

const solutionsData = [
  {
    img: imgsmart,
    title: "Smart Surveillance",
    icon: <FaVideo />,
    description: "Real-time monitoring using AI-powered cameras to detect unsafe behaviors, intrusions, and violations.",
    applications: ["Traffic Law Enforcement", "Urban Traffic Management"]
  },
  {
    img: PPE,
    title: "PPE Detection",
    icon: <FaHardHat />,
    description: "Ensure workers are wearing helmets, vests, gloves, and boots with instant alerts for non-compliance.",
    applications: ["Manufacturing Plant Compliance", "Construction Site Safety Monitoring"]
  },
  {
    img: Zone,
    title: "Zone Intrusion Alerts",
    icon: <FaShieldAlt />,
    description: "Detect and alert when personnel enter restricted or hazardous zones — even in low visibility conditions.",
    applications: ["Port & Shipyard Operations", "Restricted Area Protection"]
  },
  {
    img: FallFire,
    title: "Fall & Fire Detection",
    icon: <FaFireExtinguisher />,
    description: "Get notified in seconds during fall incidents or fire outbreaks using high-accuracy vision models.",
    applications: ["Manufacturing & Warehouse Safety", "Oil & Gas Facility Protection"]
  },
  {
    img: Behave,
    title: "Behavior Analysis",
    icon: <FaUserCheck />,
    description: "Monitor workforce movement patterns and spot abnormal behavior that may signal potential risks.",
    applications: ["Customer Flow Monitoring", "Suspicious Activity Detection"]
  },
  {
    img: Ana,
    title: "Analytics Dashboard",
    icon: <FaChartLine />,
    description: "Visualize safety data, compliance reports, and trends with actionable insights across your sites.",
    applications: ["Worker Productivity Insights", "Operational Efficiency Metrics"]
  }
];

const Solutions = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleSelect = (index) => {
    if (selectedIndex === index) return;
    setFade(false);
    setTimeout(() => {
      setSelectedIndex(index);
      setFade(true);
    }, 300);
  };

  return (
    <section id="solutions" className="bg-gradient-to-tl from-indigo-50 via-purple-100 to-pink-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">🔍 Our Solutions</h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Explore our intelligent vision-based safety solutions designed to transform your workplace monitoring into a smart, scalable system.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {solutionsData.map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-indigo-200 hover:-translate-y-1 transition duration-300 cursor-pointer
                  ${selectedIndex === i ? "border-2 border-purple-600 ring-2 ring-indigo-100 scale-105" : ""}`}
                onClick={() => handleSelect(i)}
              >
                <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 text-indigo-600 text-2xl rounded-full mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center text-sm">{item.description}</p>

                {/* Mobile Image + Applications Preview */}
                {selectedIndex === i && (
                  <div
                    key={item.title}
                    className={`lg:hidden mt-4 transform transition-all duration-500 ease-in-out ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                  >
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.title}
                        className="rounded-lg shadow-md mb-2 w-full h-auto transition-transform duration-500 ease-in-out hover:scale-105"
                      />
                    ) : (
                      <div className="h-40 flex items-center justify-center text-gray-400">No Image Available</div>
                    )}

                    {/* Applications for Mobile */}
                    {item.applications && (
                      <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
                        {item.applications.map((app, index) => (
                          <li key={index}>{app}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Desktop Preview */}
          <div className="hidden lg:block lg:w-1/3 bg-white rounded-xl shadow-lg p-4 overflow-hidden">
            <div
              key={solutionsData[selectedIndex].title}
              className={`transform transition-all duration-500 ease-in-out ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              {solutionsData[selectedIndex].img ? (
                <img
                  src={solutionsData[selectedIndex].img}
                  alt={solutionsData[selectedIndex].title}
                  className="rounded-lg shadow-md mb-4 w-full h-auto transition-transform duration-500 ease-in-out hover:scale-105"
                />
              ) : (
                <div className="h-64 flex items-center justify-center text-gray-400">No Image Available</div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-2">{solutionsData[selectedIndex].title}</h3>

              {/* Applications as bullet points */}
              {solutionsData[selectedIndex].applications && (
                <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
                  {solutionsData[selectedIndex].applications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
