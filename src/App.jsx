
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React from 'react'
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import Demo from './components/Demo';
// import Detection from './components/Detection';
// import Testimonials from './components/Testimonials';
// import CallToAction from './components/CallToAction';
// import Dashboard from './components/Dashboard';
// import Footer from './components/Footer';
// import LoginModal from './components/LoginModal';
// import SignupModal from './components/SignupModal';

// function App() {
//   const [isLoginOpen, setIsLoginOpen] = React.useState(false);
//   const [isSignupOpen, setIsSignupOpen] = React.useState(false);
//   const [user, setUser] = React.useState(null);
//   const [detections, setDetections] = React.useState([
//     { id: 1, label: "Customer: 87%", title: "Aisle 3 - Customer Interaction", desc: "Customer spending time near premium products section", time: "Today, 10:45 AM", camera: "Camera 3" },
//     { id: 2, label: "Queue: 5 people", title: "Checkout Area - Queue Alert", desc: "Queue length exceeds threshold, consider opening another register", time: "Today, 12:30 PM", camera: "Camera 1" },
//     { id: 3, label: "Empty Shelf: 92%", title: "Aisle 5 - Stock Alert", desc: "Popular product running low on shelf, consider restocking", time: "Today, 09:15 AM", camera: "Camera 2" },
//   ]);

//   const handleLogin = (email, password) => {
//     if (email === "test@visionretail.com" && password === "password") {
//       setUser({ email, name: "JD" });
//       setIsLoginOpen(false);
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   const handleSignup = (name, email, password) => {
//     setUser({ name, email });
//     setIsSignupOpen(false);
//   };

//   const addDetection = (newDetection) => {
//     setDetections([...detections, { id: Date.now(), ...newDetection }]);
//   };

//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Navbar user={user} setIsLoginOpen={setIsLoginOpen} setIsSignupOpen={setIsSignupOpen} />
//         <main className="flex-grow pt-16">
//           <Routes>
//             <Route path="/" element={<><Hero /><Features /><Demo /><Detection addDetection={addDetection} /><Testimonials /><CallToAction /></>} />
//             <Route path="/dashboard" element={<Dashboard detections={detections} />} />
//           </Routes>
//         </main>
//         <Footer />
//         <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onSignup={() => { setIsLoginOpen(false); setIsSignupOpen(true); }} onLogin={handleLogin} />
//         <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} onLogin={() => { setIsSignupOpen(false); setIsLoginOpen(true); }} onSignup={handleSignup} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import Solutions from './components/Solutions';
// import Demo from './components/Demo';
// import Detection from './components/Detection';
// import Pricing from './components/Pricing';
// import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';
// import CallToAction from './components/CallToAction';
// import Dashboard from './components/Dashboard';
// import Settings from './components/Settings';
// import Footer from './components/Footer';
// import LoginModal from './components/LoginModal';
// import SignupModal from './components/SignupModal';

// function App() {
//   const [isLoginOpen, setIsLoginOpen] = React.useState(false);
//   const [isSignupOpen, setIsSignupOpen] = React.useState(false);
//   const [user, setUser] = React.useState(null);
//   const [detections, setDetections] = React.useState([
//     { id: 1, label: "Customer: 87%", title: "Aisle 3 - Customer Interaction", desc: "Customer spending time near premium products section", time: "Today, 10:45 AM", camera: "Camera 3" },
//     { id: 2, label: "Queue: 5 people", title: "Checkout Area - Queue Alert", desc: "Queue length exceeds threshold, consider opening another register", time: "Today, 12:30 PM", camera: "Camera 1" },
//     { id: 3, label: "Empty Shelf: 92%", title: "Aisle 5 - Stock Alert", desc: "Popular product running low on shelf, consider restocking", time: "Today, 09:15 AM", camera: "Camera 2" },
//   ]);

//   const handleLogin = (email, password) => {
//     if (email === "test@visionretail.com" && password === "password") {
//       setUser({ email, name: "JD" });
//       setIsLoginOpen(false);
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   const handleSignup = (name, email, password) => {
//     setUser({ name, email });
//     setIsSignupOpen(false);
//   };

//   const addDetection = (newDetection) => {
//     setDetections([...detections, { id: Date.now(), ...newDetection }]);
//   };

//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Navbar user={user} setIsLoginOpen={setIsLoginOpen} setIsSignupOpen={setIsSignupOpen} setUser={setUser} />
//         <main className="flex-grow pt-16">
//           <Routes>
//             <Route path="/" element={<><Hero /><Features /><Demo /><Detection addDetection={addDetection} /><Testimonials /><CallToAction /></>} />
//             <Route path="/features" element={<Features />} />
//             <Route path="/solutions" element={<Solutions />} />
//             <Route path="/detection" element={<Detection addDetection={addDetection} />} />
//             <Route path="/pricing" element={<Pricing />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/dashboard" element={<Dashboard detections={detections} />} />
//             <Route path="/settings" element={<Settings />} />
//           </Routes>
//         </main>
//         <Footer />
//         <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onSignup={() => { setIsLoginOpen(false); setIsSignupOpen(true); }} onLogin={handleLogin} />
//         <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} onLogin={() => { setIsSignupOpen(false); setIsLoginOpen(true); }} onSignup={handleSignup} />
//       </div>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import Solutions from './components/Solutions';
// import Demo from './components/Demo';
// import Detection from './components/Detection';
// import Pricing from './components/Pricing';
// import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';
// import CallToAction from './components/CallToAction';
// import Dashboard from './components/Dashboard';
// import Settings from './components/Settings';
// import Footer from './components/Footer';
// import LoginModal from './components/LoginModal';
// import SignupModal from './components/SignupModal';
// import About from './components/About';
// import PipelineFlow from './components/PipelineFlow';
// import PixEdgePromo from './components/PixEdgePromo';
// import RequestDemo from './components/RequestDemo';

// function App() {
//   const [isLoginOpen, setIsLoginOpen] = React.useState(false);
//   const [isSignupOpen, setIsSignupOpen] = React.useState(false);
//   const [user, setUser] = React.useState(null);
//   const [detections, setDetections] = React.useState([
//     { id: 1, label: "Customer: 87%", title: "Aisle 3 - Customer Interaction", desc: "Customer spending time near premium products section", time: "Today, 10:45 AM", camera: "Camera 3" },
//     { id: 2, label: "Queue: 5 people", title: "Checkout Area - Queue Alert", desc: "Queue length exceeds threshold, consider opening another register", time: "Today, 12:30 PM", camera: "Camera 1" },
//     { id: 3, label: "Empty Shelf: 92%", title: "Aisle 5 - Stock Alert", desc: "Popular product running low on shelf, consider restocking", time: "Today, 09:15 AM", camera: "Camera 2" },
//   ]);

//   const handleLogin = (email, password) => {
//     if (email === "test@pixedge.com" && password === "password") {
//       setUser({ email, name: "JD" });
//       setIsLoginOpen(false);
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   const handleSignup = (name, email, password) => {
//     setUser({ name, email });
//     setIsSignupOpen(false);
//   };

//   const addDetection = (newDetection) => {
//     setDetections([...detections, { id: Date.now(), ...newDetection }]);
//   };

//   return (
//     <Router>
//       <div className="min-h-screen flex bg-gray-200 flex-col sm:max-w-screen">
// <div className='mb-2'>
//         <Navbar user={user} setIsLoginOpen={setIsLoginOpen} setIsSignupOpen={setIsSignupOpen} setUser={setUser} />
//   </div>        <main className="flex-grow pt-14">
//           <Routes>
//             <Route path="/" element={<><Hero /><Features /><Demo /><Detection addDetection={addDetection} /><Testimonials /><CallToAction /></>} />
//             <Route path="/features" element={<Features />} />
//             <Route path="/solutions" element={<Solutions />} />
//             <Route path="/detection" element={<Detection addDetection={addDetection} />} />
//             <Route path="/pricing" element={<Pricing />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/dashboard" element={<Dashboard detections={detections} />} />
//             <Route path="/settings" element={<Settings />} />
//             <Route path="/promovideo" element={<PixEdgePromo />} />
//             <Route path="/request-demo" element={<RequestDemo />} />
//             <Route path="/about" element={<About/>}/>
//           </Routes>
//         </main>
//         <Footer />
//         <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onSignup={() => { setIsLoginOpen(false); setIsSignupOpen(true); }} onLogin={handleLogin} />
//         <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} onLogin={() => { setIsSignupOpen(false); setIsLoginOpen(true); }} onSignup={handleSignup} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { Router } from 'react-router-dom';
// import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import LoginModal from './components/LoginModal';
// import SignupModal from './components/SignupModal';
// import AnimatedRoutes from './components/AnimatedRoutes';
// import { Router } from 'react-router-dom';

// function App() {
//   const [isLoginOpen, setIsLoginOpen] = React.useState(false);
//   const [isSignupOpen, setIsSignupOpen] = React.useState(false);
//   const [user, setUser] = React.useState(null);

//   const [detections, setDetections] = React.useState([
//     {
//       id: 1,
//       label: 'Customer: 87%',
//       title: 'Aisle 3 - Customer Interaction',
//       desc: 'Customer spending time near premium products section',
//       time: 'Today, 10:45 AM',
//       camera: 'Camera 3',
//     },
//     {
//       id: 2,
//       label: 'Queue: 5 people',
//       title: 'Checkout Area - Queue Alert',
//       desc: 'Queue length exceeds threshold, consider opening another register',
//       time: 'Today, 12:30 PM',
//       camera: 'Camera 1',
//     },
//     {
//       id: 3,
//       label: 'Empty Shelf: 92%',
//       title: 'Aisle 5 - Stock Alert',
//       desc: 'Popular product running low on shelf, consider restocking',
//       time: 'Today, 09:15 AM',
//       camera: 'Camera 2',
//     },
//   ]);

//   const handleLogin = (email, password) => {
//     if (email === 'test@pixedge.com' && password === 'password') {
//       setUser({ email, name: 'JD' });
//       setIsLoginOpen(false);
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   const handleSignup = (name, email, password) => {
//     setUser({ name, email });
//     setIsSignupOpen(false);
//   };

//   const addDetection = (newDetection) => {
//     setDetections([...detections, { id: Date.now(), ...newDetection }]);
//   };

//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col bg-gray-200 sm:max-w-screen">
//         <div className="mb-2">
//           <Navbar
//             user={user}
//             setIsLoginOpen={setIsLoginOpen}
//             setIsSignupOpen={setIsSignupOpen}
//             setUser={setUser}
//           />
//         </div>
//         <main className="flex-grow pt-14">
//           <AnimatedRoutes detections={detections} addDetection={addDetection} />
//         </main>
//         <Footer />
//         <LoginModal
//           isOpen={isLoginOpen}
//           onClose={() => setIsLoginOpen(false)}
//           onSignup={() => {
//             setIsLoginOpen(false);
//             setIsSignupOpen(true);
//           }}
//           onLogin={handleLogin}
//         />
//         <SignupModal
//           isOpen={isSignupOpen}
//           onClose={() => setIsSignupOpen(false)}
//           onLogin={() => {
//             setIsSignupOpen(false);
//             setIsLoginOpen(true);
//           }}
//           onSignup={handleSignup}
//         />
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import LoginModal from './components/LoginModal';
// import SignupModal from './components/SignupModal';
// import AnimatedRoutes from './components/AnimatedRoutes';

// function App() {
//   const [isLoginOpen, setIsLoginOpen] = React.useState(false);
//   const [isSignupOpen, setIsSignupOpen] = React.useState(false);
//   const [user, setUser] = React.useState(null);

//   const [detections, setDetections] = React.useState([
//     {
//       id: 1,
//       label: 'Customer: 87%',
//       title: 'Aisle 3 - Customer Interaction',
//       desc: 'Customer spending time near premium products section',
//       time: 'Today, 10:45 AM',
//       camera: 'Camera 3',
//     },
//     {
//       id: 2,
//       label: 'Queue: 5 people',
//       title: 'Checkout Area - Queue Alert',
//       desc: 'Queue length exceeds threshold, consider opening another register',
//       time: 'Today, 12:30 PM',
//       camera: 'Camera 1',
//     },
//     {
//       id: 3,
//       label: 'Empty Shelf: 92%',
//       title: 'Aisle 5 - Stock Alert',
//       desc: 'Popular product running low on shelf, consider restocking',
//       time: 'Today, 09:15 AM',
//       camera: 'Camera 2',
//     },
//   ]);

//   const handleLogin = (email, password) => {
//     if (email === 'test@pixedge.com' && password === 'password') {
//       setUser({ email, name: 'JD' });
//       setIsLoginOpen(false);
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   const handleSignup = (name, email, password) => {
//     setUser({ name, email });
//     setIsSignupOpen(false);
//   };

//   const addDetection = (newDetection) => {
//     setDetections([...detections, { id: Date.now(), ...newDetection }]);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-200 sm:max-w-screen">
//       <div className="mb-2">
//         <Navbar
//           user={user}
//           setIsLoginOpen={setIsLoginOpen}
//           setIsSignupOpen={setIsSignupOpen}
//           setUser={setUser}
//         />
//       </div>
//       <main className="flex-grow pt-14">
//         <AnimatedRoutes detections={detections} addDetection={addDetection} />
//       </main>
//       <Footer />
//       <LoginModal
//         isOpen={isLoginOpen}
//         onClose={() => setIsLoginOpen(false)}
//         onSignup={() => {
//           setIsLoginOpen(false);
//           setIsSignupOpen(true);
//         }}
//         onLogin={handleLogin}
//       />
//       <SignupModal
//         isOpen={isSignupOpen}
//         onClose={() => setIsSignupOpen(false)}
//         onLogin={() => {
//           setIsSignupOpen(false);
//           setIsLoginOpen(true);
//         }}
//         onSignup={handleSignup}
//       />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/routes/AnimatedRoutes';

function App() {
  const [user, setUser] = React.useState(null);

  const [detections, setDetections] = React.useState([
    {
      id: 1,
      label: 'Customer: 87%',
      title: 'Aisle 3 - Customer Interaction',
      desc: 'Customer spending time near premium products section',
      time: 'Today, 10:45 AM',
      camera: 'Camera 3',
    },
    {
      id: 2,
      label: 'Queue: 5 people',
      title: 'Checkout Area - Queue Alert',
      desc: 'Queue length exceeds threshold, consider opening another register',
      time: 'Today, 12:30 PM',
      camera: 'Camera 1',
    },
    {
      id: 3,
      label: 'Empty Shelf: 92%',
      title: 'Aisle 5 - Stock Alert',
      desc: 'Popular product running low on shelf, consider restocking',
      time: 'Today, 09:15 AM',
      camera: 'Camera 2',
    },
  ]);

  const addDetection = (newDetection) => {
    setDetections([...detections, { id: Date.now(), ...newDetection }]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 sm:max-w-screen">
      {/* Navbar */}
      <Navbar user={user} setUser={setUser} />

      {/* Main content */}
      <main className="flex-grow pt-14">
        <AnimatedRoutes detections={detections} addDetection={addDetection} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
