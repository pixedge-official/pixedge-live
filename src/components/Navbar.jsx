


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

//   const handleNavClick = (path) => {
//     navigate(path);
//     setMobileMenuOpen(false);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const isHomePage = location.pathname === '/';
//   const navBackground = isHomePage && !isScrolled ? 'bg-white/70' : 'bg-white/50 backdrop-blur-sm';
//   const navText = isHomePage && !isScrolled ? 'text-black' : 'text-black';

//   const navLinks = [
//     { to: '/features', label: 'Features' },
//     { to: '/solutions', label: 'Solutions' },
//     { to: '/detection', label: 'Detection' },
//     { to: '/contact', label: 'Contact' },
//     { to: '/about', label: 'About' },
//   ];

//   return (
//     <nav className={`w-full fixed top-0 z-50 transition-colors duration-300 shadow-md ${navBackground}`}>
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
//         {/* Logo */}
//         <button
//           onClick={() => handleNavClick('/')}
//           className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-sky-500 to-indigo-900 bg-clip-text text-transparent hover:text-fuchsia-800 transition-colors duration-300"
//         >
//           <img src={PixEdgeLogo} alt="PixEdge Logo" className="h-10 w-auto rounded-md" />
//           PixEdge
//         </button>

//         {/* Mobile menu toggle */}
//         <button
//           className="md:hidden mx-5 text-black focus:outline-none"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <FaBars className="text-2xl" />
//         </button>

//         {/* Desktop nav links */}
//         <div className="hidden md:flex justify-center items-center space-x-6">
//           {navLinks.map((link, i) => {
//             const isActive = location.pathname === link.to;
//             return (
//               <button
//                 key={i}
//                 onClick={() => handleNavClick(link.to)}
//                 className={`text-base font-medium transition-transform duration-300 ease-in-out hover:scale-110 ${
//                   isActive ? 'text-indigo-800 font-semibold' : `text-black hover:text-indigo-800 ${navText}`
//                 }`}
//               >
//                 {link.label}
//               </button>
//             );
//           })}

//           {/* User dropdown */}
//           {user && (
//             <div className="relative group ml-4">
//               <button className="text-black hover:text-purple-500 font-medium">{user.name}</button>
//               <div className="absolute right-0 mt-2 w-48 bg-white text-left shadow-lg rounded-md hidden group-hover:block z-50">
//                 <button
//                   onClick={() => handleNavClick('/dashboard')}
//                   className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Dashboard
//                 </button>
//                 <button
//                   onClick={() => handleNavClick('/settings')}
//                   className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Settings
//                 </button>
//                 <button
//                   onClick={() => {
//                     setUser(null);
//                     handleNavClick('/');
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
//           {navLinks.map((link, i) => {
//             const isActive = location.pathname === link.to;
//             return (
//               <button
//                 key={i}
//                 onClick={() => handleNavClick(link.to)}
//                 className={`block text-lg font-medium ${
//                   isActive ? 'text-purple-400' : 'text-yellow-500 hover:text-purple-400'
//                 }`}
//               >
//                 {link.label}
//               </button>
//             );
//           })}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { FaBars, FaTimes, FaUser, FaCog, FaSignOutAlt, FaChevronDown, FaChartLine, FaShieldAlt, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
// import { useLocation, useNavigate } from 'react-router-dom';
// import PixEdgeLogo from '../assets/PixEdge_logo.png';

// function Navbar({ user, setUser }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setMobileMenuOpen(false);
//     setDropdownOpen(false);
//     setActiveDropdown(null);
//   }, [location]);

//   const handleNavClick = (path) => {
//     navigate(path);
//     setMobileMenuOpen(false);
//     setDropdownOpen(false);
//     setActiveDropdown(null);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const navBackground = isScrolled
//     ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] backdrop-blur-none'
//     : 'bg-white';

//   const navLinks = [
//     { 
//       to: '/features', 
//       label: 'Features',
//     },
//     { to: '/solutions', label: 'Solutions' },
//     { to: '/detection', label: 'Detection' },
//     { to: '/contact', label: 'Contact', icon: FaEnvelope },
//     { to: '/about', label: 'About', icon: FaInfoCircle },
//   ];

//   return (
//     <nav className={`w-full  top-0 z-50 bg-gradient-to-br from-indigo-400 via-white to-cyan-200 opacity-80 transition-all duration-300 ${navBackground}`}>
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
//         {/* Logo */}
//         <button
//           onClick={() => handleNavClick('/')}
//           className="flex items-center gap-3 focus:outline-none"
//         >
//           <img 
//             src={PixEdgeLogo} 
//             alt="PixEdge" 
//             className="h-10 w-auto" 
//           />
//           <span className="text-2xl font-sans text-gray-900 tracking-tight">
//             PixEdge
//           </span>
//         </button>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-1">
//           {navLinks.map((link) => {
//             const isActive = location.pathname === link.to;
            
//             if (link.dropdownItems) {
//               return (
//                 <div key={link.to} className="relative group">
//                   <button
//                     className={`px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1 ${
//                       isActive ? 'text-gray-900' : ''
//                     }`}
//                     onMouseEnter={() => setActiveDropdown(link.to)}
//                     onMouseLeave={() => setActiveDropdown(null)}
//                   >
//                     {link.label}
//                     <FaChevronDown className={`text-xs text-gray-500 transition-transform duration-200 ${activeDropdown === link.to ? 'rotate-180' : ''}`} />
//                   </button>
                  
//                   {/* Dropdown Menu */}
//                   {activeDropdown === link.to && (
//                     <div 
//                       className="absolute left-0 mt-2 w-64 bg-white/50 rounded-lg shadow-lg border border-gray-100 py-2"
//                       onMouseEnter={() => setActiveDropdown(link.to)}
//                       onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                       {link.dropdownItems.map((item) => (
//                         <button
//                           key={item.to}
//                           onClick={() => handleNavClick(item.to)}
//                           className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
//                         >
//                           <item.icon className="text-gray-400 text-base" />
//                           <span>{item.label}</span>
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               );
//             }

//             return (
//               <button
//                 key={link.to}
//                 onClick={() => handleNavClick(link.to)}
//                 className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
//                   isActive
//                     ? 'text-gray-900'
//                     : 'text-gray-700 hover:text-gray-900'
//                 }`}
//               >
//                 {link.label}
//               </button>
//             );
//           })}

         
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors duration-200"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? (
//             <FaTimes className="text-xl text-gray-600" />
//           ) : (
//             <FaBars className="text-xl text-gray-600" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden fixed inset-x-0 top-[72px] bg-white border-t border-gray-100 shadow-lg transform transition-all duration-300 ${
//         mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
//       }`}>
//         <div className="px-4 py-6 space-y-1">
//           {navLinks.map((link) => (
//             <div key={link.to}>
//               <button
//                 onClick={() => {
//                   if (link.dropdownItems) {
//                     // Handle dropdown differently for mobile if needed
//                     handleNavClick(link.to);
//                   } else {
//                     handleNavClick(link.to);
//                   }
//                 }}
//                 className={`flex items-center justify-between w-full px-4 py-3 text-base rounded-lg transition-colors duration-200 ${
//                   location.pathname === link.to
//                     ? 'bg-gray-50 text-gray-900'
//                     : 'text-gray-700 hover:bg-gray-50'
//                 }`}
//               >
//                 <span>{link.label}</span>
//                 {link.dropdownItems && (
//                   <FaChevronDown className="text-xs text-gray-400" />
//                 )}
//               </button>
              
//               {/* Mobile dropdown items - optional expandable section */}
//               {link.dropdownItems && mobileMenuOpen && (
//                 <div className="ml-6 mt-1 space-y-1">
//                   {link.dropdownItems.map((item) => (
//                     <button
//                       key={item.to}
//                       onClick={() => handleNavClick(item.to)}
//                       className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
//                     >
//                       <item.icon className="text-gray-400" />
//                       <span>{item.label}</span>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

          
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
// import { useLocation, useNavigate } from 'react-router-dom';
// import PixEdgeLogo from '../assets/PixEdge_logo.png';

// function Navbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
      
//       // Show navbar when scrolling up, hide when scrolling down
//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
      
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     setMobileMenuOpen(false);
//     setActiveDropdown(null);
//   }, [location]);

//   const handleNavClick = (path) => {
//     navigate(path);
//     setMobileMenuOpen(false);
//     setActiveDropdown(null);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const navLinks = [
//     { to: '/features', label: 'Features' },
//     { to: '/solutions', label: 'Solutions' },
//     { to: '/detection', label: 'Detection' },
//     { to: '/contact', label: 'Contact' },
//     { to: '/about', label: 'About' },
//   ];

//   return (
//     <nav className={`w-full fixed top-0 z-50 mb-4 bg-gradient-to-br from-indigo-400 via-white to-cyan-200 opacity-80 transition-all duration-300 transform ${
//       isVisible ? 'translate-y-0' : '-translate-y-full'
//     }`}>
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6 lg:px-8">
//         {/* Logo */}
//         <button
//           onClick={() => handleNavClick('/')}
//           className="flex items-center gap-3 focus:outline-none"
//         >
//           <img 
//             src={PixEdgeLogo} 
//             alt="PixEdge" 
//             className="h-10 w-auto" 
//           />
//           <span className="text-2xl font-sans text-gray-900 tracking-tight">
//             PixEdge
//           </span>
//         </button>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-1">
//           {navLinks.map((link) => {
//             const isActive = location.pathname === link.to;
            
//             return (
//               <button
//                 key={link.to}
//                 onClick={() => handleNavClick(link.to)}
//                 className={`px-4 py-3 text-m font-sans transition-colors duration-200 ${
//                   isActive
//                     ? 'text-gray-900'
//                     : 'text-gray-700 hover:text-gray-900'
//                 }`}
//               >
//                 {link.label}
//               </button>
//             );
//           })}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors duration-200"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? (
//             <FaTimes className="text-xl text-gray-600" />
//           ) : (
//             <FaBars className="text-xl text-gray-600" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden fixed inset-x-0 top-[72px] bg-white border-t border-gray-100 shadow-lg transform transition-all duration-300 ${
//         mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
//       }`}>
//         <div className="px-4 py-6 space-y-1">
//           {navLinks.map((link) => (
//             <button
//               key={link.to}
//               onClick={() => handleNavClick(link.to)}
//               className={`flex items-center justify-between w-full px-4 py-3 text-base rounded-lg transition-colors duration-200 ${
//                 location.pathname === link.to
//                   ? 'bg-gray-50 text-gray-900'
//                   : 'text-gray-700 hover:bg-gray-50'
//               }`}
//             >
//               <span>{link.label}</span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import PixEdgeLogo from '../assets/PixEdge_logo.png';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setClickedLink(null);
  }, [location]);

  const handleNavClick = (path, label) => {
    // Set clicked link for animation
    setClickedLink(label);
    
    // Navigate after a small delay for animation
    setTimeout(() => {
      navigate(path);
      setMobileMenuOpen(false);
      setActiveDropdown(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
    
    // Reset clicked link after animation
    setTimeout(() => {
      setClickedLink(null);
    }, 300);
  };

  const navLinks = [
    { to: '/features', label: 'Features' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/detection', label: 'Detection' },
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'About' },
  ];

  // Function to check if a link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`w-full fixed top-0 z-50 bg-gradient-to-br from-indigo-400 via-white to-cyan-200 opacity-80 transition-all duration-300 transform ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6 lg:px-8">
        {/* Logo with active effect */}
        <button
          onClick={() => handleNavClick('/', 'Home')}
          className={`flex items-center gap-3 focus:outline-none group transition-all duration-300 ${
            isActiveLink('/') ? 'scale-105' : ''
          }`}
        >
          <div className="relative">
            <img 
              src={PixEdgeLogo} 
              alt="PixEdge" 
              className="h-10 w-auto transition-all duration-300 group-hover:scale-110" 
            />
            {/* Active indicator for logo */}
            {isActiveLink('/') && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full"></span>
            )}
          </div>
          <span className={`text-2xl font-sans tracking-tight transition-all duration-300 ${
            isActiveLink('/') 
              ? 'text-indigo-700 font-semibold' 
              : 'text-gray-900 group-hover:text-indigo-600'
          }`}>
            PixEdge
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.to);
            const isClicked = clickedLink === link.label;
            
            return (
              <button
                key={link.to}
                onClick={() => handleNavClick(link.to, link.label)}
                className={`
                  relative px-4 py-3 text-m font-sans mx-4 transition-all duration-300
                  ${isActive 
                    ? 'text-indigo-700 font-medium' 
                    : 'text-gray-700 hover:text-indigo-600'
                  }
                  ${isClicked ? 'scale-95' : ''}
                  group overflow-hidden
                `}
              >
                {/* Text with hover effect */}
                <span className="relative z-10">{link.label}</span>
                
                {/* Bottom border animation for active link */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5  bg-red-600 rounded-full transform transition-all duration-300"></span>
                )}
                
                {/* Hover background effect */}
                <span className="absolute inset-0 bg-fuchsia-700/20 opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg z-0"></span>
                
                {/* Ripple effect on click */}
                {isClicked && (
                  <span className="absolute inset-0 bg-indigo-200 rounded-lg animate-pulse"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button with active state */}
        <button
          className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
            mobileMenuOpen 
              ? 'bg-indigo-100 text-indigo-700' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FaTimes className="text-xl transform rotate-90 transition-transform duration-300" />
          ) : (
            <FaBars className="text-xl transition-transform duration-300 hover:scale-110" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-x-0 top-[72px] bg-white border-t border-gray-100 shadow-lg transform transition-all duration-500 ${
        mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.to);
            
            return (
              <button
                key={link.to}
                onClick={() => handleNavClick(link.to, link.label)}
                className={`
                  relative flex items-center w-full px-4 py-3 text-base rounded-lg transition-all duration-300
                  ${isActive 
                    ? 'bg-indigo-50 text-indigo-700 font-medium pl-6' 
                    : 'text-gray-700 hover:bg-gray-50 hover:pl-6'
                  }
                  group
                `}
              >
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute left-2 w-2 h-2 bg-indigo-600 rounded-full"></span>
                )}
                
                <span>{link.label}</span>
                
                {/* Right arrow on hover */}
                <span className={`absolute right-4 transition-all duration-300 ${
                  isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}>
                  →
                </span>
              </button>
            );
          })}
          
          {/* Home link for mobile (optional) */}
          <button
            onClick={() => handleNavClick('/', 'Home')}
            className={`
              relative flex items-center w-full px-4 py-3 text-base rounded-lg transition-all duration-300 mt-2 border-t border-gray-100 pt-4
              ${isActiveLink('/') 
                ? 'bg-indigo-50 text-indigo-700 font-medium pl-6' 
                : 'text-gray-700 hover:bg-gray-50 hover:pl-6'
              }
            `}
          >
            {isActiveLink('/') && (
              <span className="absolute left-2 w-2 h-2 bg-indigo-600 rounded-full"></span>
            )}
            <span>Home</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;