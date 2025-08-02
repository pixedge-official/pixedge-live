// import React from 'react';

// function Demo() {
//   return (
//     <section className=" flex py-16 p-15 bg-slate-900 animate-fade-in">
//       <div className=" max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 text-left">
//         <h2 className="text-4xl font-bold text-white mb-4 font-serif">See the Future of Retail Analytics</h2>
//         <p className="text-2xl text-gray-400 mb-6 max-w-xl ">
//           Our platform processes video streams in real-time to deliver actionable insights while preserving customer privacy. All analysis happens on-premises or in the cloud - your data never leaves your control.
//         </p>
//         <p className="text-xl text-gray-200 mb-6">Experience how VisionRetail can transform your retail operations with a personalized demo.</p>
//         <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Schedule Demo</a>

       
//       </div>
//       <div className='w-1/2 p-10'>  
//          <img src="https://miro.medium.com/v2/resize:fit:1400/1*nXw8npXO9UGgEmAw4d6JlQ.png" alt=""  className='rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-150  object-cover w-full h-auto  ' />
//        </div>
//     </section>
//   );
// }

// export default Demo;

import React from 'react';

function Demo() {
  return (
    <section className="flex flex-col lg:flex-row py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 min-h-[600px] animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start w-full">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif leading-tight">
            See the Future of Retail Analytics
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-lg mx-auto lg:mx-0">
            Our platform processes video streams in real-time to deliver actionable insights while preserving customer privacy. All analysis happens on-premises or in the cloud - your data never leaves your control.
          </p>
          <p className="text-base sm:text-lg text-gray-200 mb-6">
            Experience how PixEdge can transform your retail operations with a personalized demo.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-700"
          >
            Schedule Demo
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 transition-transform duration-300 ease-in-out hover:scale-120">
          <div className="relative rounded-lg shadow-lg overflow-hidden group">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*nXw8npXO9UGgEmAw4d6JlQ.png"
              alt="PixEdge analytics platform illustration"
              className="object-cover w-full h-auto max-h-[400px] "
            />
          </div>
        </div>
      </div>

     
    </section>
  );
}

export default Demo;