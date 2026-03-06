



import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from '../Hero';
import Features from '../Features';
import Solutions from '../Solutions';
import Demo from '../Demo';
import Detection from '../Detection';
import Contact from '../Contact';
import CallToAction from '../CallToAction';
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
              {/* <CallToAction /> */}
            </PageWrapper>
          }
        />
        <Route path="/features" element={<PageWrapper><Features /></PageWrapper>} />
        <Route path="/solutions" element={<PageWrapper><Solutions /></PageWrapper>} />
        <Route path="/detection" element={<PageWrapper><Detection addDetection={addDetection} /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/promovideo" element={<PageWrapper><PixEdgePromo /></PageWrapper>} />
        <Route path="/request-demo" element={<PageWrapper><RequestDemo /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;


// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import Hero from '../Hero';
// import Features from '../Features';
// import Solutions from '../Solutions';
// import Demo from '../Demo';
// import Detection from '../Detection';
// import Contact from '../Contact';
// import CallToAction from '../CallToAction';
// import PixEdgePromo from '../PixEdgePromo';
// import RequestDemo from '../RequestDemo';
// import About from '../About';
// import PageWrapper from './PageWrapper';

// // Page transition variants for smooth animations
// const pageTransitionVariants = {
//   initial: {
//     opacity: 0,
//     y: 20,
//     scale: 0.98
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.6, -0.05, 0.01, 0.99], // Custom easing curve
//       staggerChildren: 0.1
//     }
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     scale: 0.98,
//     transition: {
//       duration: 0.4,
//       ease: [0.6, -0.05, 0.01, 0.99]
//     }
//   }
// };

// // Route configuration for better maintainability
// const ROUTES = [
//   {
//     path: '/',
//     name: 'home',
//     component: ({ addDetection }) => (
//       <>
//         <Hero />
//         <Features />
//         <Demo />
//         <Detection addDetection={addDetection} />
//         <CallToAction />
//       </>
//     )
//   },
//   { path: '/features', name: 'features', component: Features },
//   { path: '/solutions', name: 'solutions', component: Solutions },
//   { path: '/detection', name: 'detection', component: Detection, needsAddDetection: true },
//   { path: '/contact', name: 'contact', component: Contact },
//   { path: '/promovideo', name: 'promovideo', component: PixEdgePromo },
//   { path: '/request-demo', name: 'request-demo', component: RequestDemo },
//   { path: '/about', name: 'about', component: About }
// ];

// function AnimatedRoutes({ detections, addDetection }) {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait" initial={false}>
//       <Routes location={location} key={location.pathname}>
//         {ROUTES.map(({ path, name, component: Component, needsAddDetection }) => (
//           <Route
//             key={path}
//             path={path}
//             element={
//               <motion.div
//                 variants={pageTransitionVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 style={{ originY: 0 }}
//               >
//                 <PageWrapper>
//                   {path === '/' ? (
//                     <Component addDetection={addDetection} />
//                   ) : (
//                     <Component 
//                       {...(needsAddDetection && { addDetection })}
//                       detections={detections}
//                     />
//                   )}
//                 </PageWrapper>
//               </motion.div>
//             }
//           />
//         ))}
//       </Routes>
//     </AnimatePresence>
//   );
// }

// export default AnimatedRoutes;