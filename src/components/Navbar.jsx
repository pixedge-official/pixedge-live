
// import React, { useState, useEffect } from 'react';
// import { FaBars } from 'react-icons/fa';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import PixEdgeLogo from '../assets/PixEdge_logo.png';

// function Navbar({ user, setUser }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const isHomePage = location.pathname === '/';
//   const navBackground = isHomePage && !isScrolled ? 'bg-white/70' : 'bg-white/50 backdrop-blur-sm';
//   const navText = isHomePage && !isScrolled ? 'text-black' : 'text-black';

//   const navLinks = [
//     { to: '/features', label: 'Features' },
//     { to: '/solutions', label: 'Solutions' },
//     { to: '/detection', label: 'Detection' },
//     // { to: '/pricing', label: 'Pricing' },
//     { to: '/contact', label: 'Contact' },
//     { to: '/about', label: 'About' },
//   ];

//   return (
//     <nav className={`w-full fixed top-0 z-50 transition-colors duration-300 shadow-md ${navBackground}`}>
//       <div className="max-w-7xl mx-auto flex items-center justify-between  py-3 ">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-sky-500 to-indigo-900 bg-clip-text text-transparent hover:text-fuchsia-800 transition-colors duration-300 ">
//           <img src={PixEdgeLogo} alt="PixEdge Logo" className="h-10  w-auto rounded-md " />
//           PixEdge
//         </Link>

//         {/* Mobile menu toggle */}
//         <button className="md:hidden mx-5 text-black focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//           <FaBars className="text-2xl" />
//         </button>

//         {/* Desktop nav links */}
//         <div className="hidden md:flex  justify-center  items-center space-x-6 ">
//           {navLinks.map((link, i) => (
//             <Link
//               key={i}
//               to={link.to}
//               className={`text-black hover:text-indigo-800 transition-transform duration-300 ease-in-out hover:scale-120  text-base font-medium ${navText}`}
//             >
//               {link.label}
//             </Link>
//           ))}

//           {/* User dropdown */}
//           {user && (
//             <div className="relative group">
//               <button className="text-gray-200 hover:text-purple-500 font-medium">{user.name}</button>
//               <div className="absolute right-0 mt-2 w-48 bg-white text-left shadow-lg rounded-md hidden group-hover:block z-50">
//                 <Link to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
//                 <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</Link>
//                 <button
//                   onClick={() => {
//                     setUser(null);
//                     navigate('/');
//                   }}
//                   className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile dropdown */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-black/90 text-white flex flex-col items-center justify-center px-4 pb-4 space-y-4">
//           {navLinks.map((link, i) => (
//             <Link
//               key={i}
//               to={link.to}
//               className="block text-yellow-500 hover:text-purple-400 text-lg font-medium"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
          
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PixEdgeLogo from '../assets/PixEdge_logo.png';

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const navBackground = isHomePage && !isScrolled ? 'bg-white/70' : 'bg-white/50 backdrop-blur-sm';
  const navText = isHomePage && !isScrolled ? 'text-black' : 'text-black';

  const navLinks = [
    { to: '/features', label: 'Features' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/detection', label: 'Detection' },
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'About' },
  ];

  return (
    <nav className={`w-full fixed top-0 z-50 transition-colors duration-300 shadow-md ${navBackground}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-sky-500 to-indigo-900 bg-clip-text text-transparent hover:text-fuchsia-800 transition-colors duration-300"
        >
          <img src={PixEdgeLogo} alt="PixEdge Logo" className="h-10 w-auto rounded-md" />
          PixEdge
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden mx-5 text-black focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FaBars className="text-2xl" />
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex justify-center items-center space-x-6">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={i}
                to={link.to}
                className={`text-base font-medium transition-transform duration-300 ease-in-out hover:scale-110 ${
                  isActive ? 'text-indigo-800 font-semibold' : `text-black hover:text-indigo-800 ${navText}`
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* User dropdown */}
          {user && (
            <div className="relative group ml-4">
              <button className="text-black hover:text-purple-500 font-medium">{user.name}</button>
              <div className="absolute right-0 mt-2 w-48 bg-white text-left shadow-lg rounded-md hidden group-hover:block z-50">
                <Link to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Dashboard
                </Link>
                <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Settings
                </Link>
                <button
                  onClick={() => {
                    setUser(null);
                    navigate('/');
                  }}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 text-white flex flex-col items-center justify-center px-4 pb-4 space-y-4">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={i}
                to={link.to}
                className={`block text-lg font-medium ${
                  isActive ? 'text-purple-400' : 'text-yellow-500 hover:text-purple-400'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
