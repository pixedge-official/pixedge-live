// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import Hero from './Hero';
// import Features from './Features';
// import Solutions from './Solutions';
// import Demo from './Demo';
// import Detection from './Detection';
// import Pricing from './Pricing';
// import Contact from './Contact';
// // import Testimonials from './Testimonials';
// import CallToAction from './CallToAction';
// import Dashboard from './Dashboard';
// import Settings from './Settings';
// import PixEdgePromo from './PixEdgePromo';
// import RequestDemo from './RequestDemo';
// import About from './About';

// const pageVariants = {
//   initial: { opacity: 0, y: 20 },
//   in: { opacity: 1, y: 0 },
//   out: { opacity: 0, y: -20 },
// };

// const pageTransition = {
//   duration: 0.5,
//   ease: "easeInOut"
// };

// function AnimatedRoutes({ detections, addDetection }) {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route
//           path="/"
//           element={
//             <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
//               <Hero />
//               <Features />
//               <Demo />
//               <Detection addDetection={addDetection} />
//               {/* <Testimonials /> */}
//               <CallToAction />
//             </motion.div>
//           }
//         />
//         <Route path="/features" element={<PageWrapper><Features /></PageWrapper>} />
//         <Route path="/solutions" element={<PageWrapper><Solutions /></PageWrapper>} />
//         <Route path="/detection" element={<PageWrapper><Detection addDetection={addDetection} /></PageWrapper>} />
//         <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
//         <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
//         <Route path="/dashboard" element={<PageWrapper><Dashboard detections={detections} /></PageWrapper>} />
//         <Route path="/settings" element={<PageWrapper><Settings /></PageWrapper>} />
//         <Route path="/promovideo" element={<PageWrapper><PixEdgePromo /></PageWrapper>} />
//         <Route path="/request-demo" element={<PageWrapper><RequestDemo /></PageWrapper>} />
//         <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
//       </Routes>
//     </AnimatePresence>
//   );
// }

// // Reusable wrapper with motion
// const PageWrapper = ({ children }) => (
//   <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
//     {children}
//   </motion.div>
// );

// export default AnimatedRoutes;


// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import Hero from './Hero';
// import Features from './Features';
// import Solutions from './Solutions';
// import Demo from './Demo';
// import Detection from './Detection';
// import Pricing from './Pricing';
// import Contact from './Contact';
// import CallToAction from './CallToAction';
// import Dashboard from './Dashboard';
// import Settings from './Settings';
// import PixEdgePromo from './PixEdgePromo';
// import RequestDemo from './RequestDemo';
// import About from './About';

// const pageVariants = {
//   initial: { opacity: 0, y: 20 },
//   in: { opacity: 1, y: 0 },
//   out: { opacity: 0, y: -20 },
// };

// const pageTransition = {
//   duration: 0.5,
//   ease: "easeInOut"
// };

// function AnimatedRoutes({ detections, addDetection }) {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route
//           path="/"
//           element={
//             <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
//               <Hero />
//               <Features />
//               <Demo />
//               <Detection addDetection={addDetection} />
//               <CallToAction />
//             </motion.div>
//           }
//         />
//         <Route path="/features" element={<PageWrapper><Features /></PageWrapper>} />
//         <Route path="/solutions" element={<PageWrapper><Solutions /></PageWrapper>} />
//         <Route path="/detection" element={<PageWrapper><Detection addDetection={addDetection} /></PageWrapper>} />
//         <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
//         <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
//         <Route path="/dashboard" element={<PageWrapper><Dashboard detections={detections} /></PageWrapper>} />
//         <Route path="/settings" element={<PageWrapper><Settings /></PageWrapper>} />
//         <Route path="/promovideo" element={<PageWrapper><PixEdgePromo /></PageWrapper>} />
//         <Route path="/request-demo" element={<PageWrapper><RequestDemo /></PageWrapper>} />
//         <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
//       </Routes>
//     </AnimatePresence>
//   );
// }

// const PageWrapper = ({ children }) => (
//   <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
//     {children}
//   </motion.div>
// );

// export default AnimatedRoutes;



import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from '../Hero';
import Features from '../Features';
import Solutions from '../Solutions';
import Demo from '../Demo';
import Detection from '../Detection';
import Pricing from '../Pricing';
import Contact from '../Contact';
import CallToAction from '../CallToAction';
import Dashboard from '../Dashboard';
import Settings from '../Settings';
import PixEdgePromo from '../PixEdgePromo';
import RequestDemo from '../RequestDemo';
import About from '../About';
import PageWrapper from './PageWrapper';

function AnimatedRoutes({ detections, addDetection }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Hero />
              <Features />
              <Demo />
              <Detection addDetection={addDetection} />
              <CallToAction />
            </PageWrapper>
          }
        />
        <Route path="/features" element={<PageWrapper><Features /></PageWrapper>} />
        <Route path="/solutions" element={<PageWrapper><Solutions /></PageWrapper>} />
        <Route path="/detection" element={<PageWrapper><Detection addDetection={addDetection} /></PageWrapper>} />
        <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/dashboard" element={<PageWrapper><Dashboard detections={detections} /></PageWrapper>} />
        <Route path="/settings" element={<PageWrapper><Settings /></PageWrapper>} />
        <Route path="/promovideo" element={<PageWrapper><PixEdgePromo /></PageWrapper>} />
        <Route path="/request-demo" element={<PageWrapper><RequestDemo /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
