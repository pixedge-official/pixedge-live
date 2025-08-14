import React, { useState } from 'react';
import detectionBg from '../assets/detection-bg.jpg'; // Placeholder image

function Detection({ addDetection }) {
  const [newDetection, setNewDetection] = useState({ label: "", title: "", desc: "", time: "", camera: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addDetection(newDetection);
    setNewDetection({ label: "", title: "", desc: "", time: "", camera: "" });
  };

  return (
    <section className=" bg-white" style={{ backgroundImage: `url(${detectionBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 bg-white bg-opacity-90 p-30 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in-up">YOLO Object Detection in Retail</h2>
        <p className="text-lg text-gray-600 mb-10 text-center">See how our computer vision system identifies and analyzes objects in real-time</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[ {img:"https://infohub.delltechnologies.com/static/media/9198938f-8c47-5a0e-82d9-6db6a62cd3f7/DAM-b9db17e1-5ab9-48e4-ab8e-0516734ad0e6/out/2769.011.png", label: "Customer: 87%", title: "Customer Interaction",  desc: "Identifying customers and tracking their movement patterns", tech: ["YOLOv8", "Real-time"] },
             {img:"https://images.axios.com/tKv482wRXhfXaQxpVWv5br9J2Gw=/2022/01/20/1642701833484.jpg", label: "Empty Shelf: 92%", title: "Inventory Monitoring", desc: "Detecting out-of-stock items and misplaced products", tech: ["YOLOv8", "95% accuracy"] },
             {img:"https://i.guim.co.uk/img/media/62773a4a77d97c5bc18fe1d34f7fc6898f5bac40/0_251_5017_3010/master/5017.jpg?width=465&dpr=1&s=none&crop=none", label: "Queue: 6 people", title: "Checkout Optimization", desc: "Counting customers in line to optimize staffing", tech: ["YOLOv8", "Real-time"] } ].map((item, index) => (
            <div key={index} className=" bg-gray-50 rounded-lg shadow-md">
              <div>
                <img src={item.img} alt="" className='rounded-lg h-full w-full'  />
                <div className="text-sm mt-2 ml-10 flex justify-center font-bold rounded-4xl  bg-gray-300 w-50 p-2 text-blue-400 ">{item.label}</div>
                </div>
              <div className='p-6'>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
              <ul className="text-sm flex justify-between text-gray-500">
                {item.tech.map((tech, i) => <li key={i}>{tech}</li>)}
              </ul>
              </div>
            </div>
          ))}
        </div>
        {/* <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Add New Detection</h3>
          <input type="text" value={newDetection.label} onChange={(e) => setNewDetection({ ...newDetection, label: e.target.value })} placeholder="Label (e.g., Customer: 87%)" className="w-full p-2 mb-2 border rounded" />
          <input type="text" value={newDetection.title} onChange={(e) => setNewDetection({ ...newDetection, title: e.target.value })} placeholder="Title" className="w-full p-2 mb-2 border rounded" />
          <input type="text" value={newDetection.desc} onChange={(e) => setNewDetection({ ...newDetection, desc: e.target.value })} placeholder="Description" className="w-full p-2 mb-2 border rounded" />
          <input type="text" value={newDetection.time} onChange={(e) => setNewDetection({ ...newDetection, time: e.target.value })} placeholder="Time (e.g., Today, 10:45 AM)" className="w-full p-2 mb-2 border rounded" />
          <input type="text" value={newDetection.camera} onChange={(e) => setNewDetection({ ...newDetection, camera: e.target.value })} placeholder="Camera (e.g., Camera 3)" className="w-full p-2 mb-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Detection</button>
        </form> */}
      </div>
    </section>
  );
}

export default Detection;

// import React, { useState } from 'react';
// import detectionBg from '../assets/detection-bg.jpg'; // Background image

// function Detection({ addDetection }) {
//   const [newDetection, setNewDetection] = useState({
//     label: '',
//     title: '',
//     desc: '',
//     time: '',
//     camera: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addDetection(newDetection);
//     setNewDetection({
//       label: '',
//       title: '',
//       desc: '',
//       time: '',
//       camera: '',
//     });
//   };

//   const detectionItems = [
//     {
//       img: 'https://infohub.delltechnologies.com/static/media/9198938f-8c47-5a0e-82d9-6db6a62cd3f7/DAM-b9db17e1-5ab9-48e4-ab8e-0516734ad0e6/out/2769.011.png',
//       label: 'Customer: 87%',
//       title: 'Customer Interaction',
//       desc: 'Tracking customer movement and interest zones',
//       tech: ['YOLOv8', 'Real-time'],
//     },
//     {
//       img: 'https://images.axios.com/tKv482wRXhfXaQxpVWv5br9J2Gw=/2022/01/20/1642701833484.jpg',
//       label: 'Empty Shelf: 92%',
//       title: 'Inventory Monitoring',
//       desc: 'Detecting out-of-stock and misplaced items',
//       tech: ['YOLOv8', '95% Accuracy'],
//     },
//     {
//       img: 'https://i.guim.co.uk/img/media/62773a4a77d97c5bc18fe1d34f7fc6898f5bac40/0_251_5017_3010/master/5017.jpg?width=465&dpr=1&s=none&crop=none',
//       label: 'Queue: 6 people',
//       title: 'Checkout Optimization',
//       desc: 'Queue detection for efficient staff management',
//       tech: ['YOLOv8', 'Real-time'],
//     },
//   ];

//   return (
//     <section
//       className="relative py-20 text-gray-800"
//       style={{
//         backgroundImage: `url(${detectionBg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm"></div>

//       <div className="relative max-w-7xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-indigo-900 mb-3 animate-fade-in-up">
//             YOLO Object Detection in Retail
//           </h2>
//           <p className="text-lg text-gray-700">
//             Real-time computer vision to improve retail intelligence and customer experience
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {detectionItems.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
//             >
//               <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <div className="mb-2 inline-block px-3 py-1 text-sm font-semibold rounded-full bg-indigo-100 text-indigo-700">
//                   {item.label}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
//                 <div className="flex flex-wrap gap-2 text-xs text-gray-500">
//                   {item.tech.map((tech, i) => (
//                     <span key={i} className="bg-gray-100 px-2 py-1 rounded">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Optional Form Below (Uncomment if needed) */}
//         {/*
//         <form
//           onSubmit={handleSubmit}
//           className="mt-16 max-w-2xl mx-auto bg-white bg-opacity-90 p-6 rounded-xl shadow-md"
//         >
//           <h3 className="text-2xl font-bold mb-4 text-center">Add New Detection</h3>
//           {['label', 'title', 'desc', 'time', 'camera'].map((field) => (
//             <input
//               key={field}
//               type="text"
//               placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//               value={newDetection[field]}
//               onChange={(e) =>
//                 setNewDetection({ ...newDetection, [field]: e.target.value })
//               }
//               className="w-full p-3 mb-3 border border-gray-300 rounded-lg"
//             />
//           ))}
//           <button
//             type="submit"
//             className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
//           >
//             Add Detection
//           </button>
//         </form>
//         */}
//       </div>
//     </section>
//   );
// }

// export default Detection;
