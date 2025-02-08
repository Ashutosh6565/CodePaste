// import React from 'react'
// import { NavLink } from 'react-router-dom'
// const Navbar = () => {
//   return (
//     <div className='flex flex-row gap-4 place-content-evenly '>
//       <NavLink to = "/">
//       Home
//       </NavLink>
//       <NavLink to = "/pastes">
//     Pastes
//       </NavLink>
//     </div>
//   )
// }

// export default Navbar


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-evenly bg-gray-900 text-white py-4 shadow-lg w-full">
    <NavLink
      to="/"
      className="text-lg font-semibold hover:text-blue-400 transition-all duration-300 ease-in-out"
    >
      Home
    </NavLink>
    <NavLink
      to="/pastes"
      className="text-lg font-semibold hover:text-blue-400 transition-all duration-300 ease-in-out"
    >
      Pastes
    </NavLink>
  </div>
  
  );
};

export default Navbar;
