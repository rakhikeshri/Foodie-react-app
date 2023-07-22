// import React,{useState} from "react";
// // import logo from '../img/logo-6.jpg'
// import logo from "../img/foodie.png";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { BsFillCartFill } from "react-icons/bs";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = () => {
//   const { cartItemsCount } = useSelector((store) => store.cart);
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="flex items-center justify-between h-20 lg:px-16 px-5">
//       <div className="flex items-center">
//         <NavLink to="/">
//           <img src={logo} alt="Logo" className="lg:h-16 h-10" />
//         </NavLink>
//       </div>
//       <ul className="space-x-12 menu hidden lg:flex">
//         <li>
//           <NavLink to="/" className="text-xl font-medium p-2">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/restaurants" className="text-xl font-medium p-2">
//             Restaurants
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/recipe" className="text-xl font-medium p-2">
//             Recipes
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact" className="text-xl font-medium p-2">
//             Contact
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/cart" className="flex relative">
//             <BsFillCartFill className="text-4xl text-green-700 " />
//             <div className="absolute text-white text-xs inset-0 flex justify-center items-center font-bold ">
//               {cartItemsCount}
//             </div>
//           </NavLink>
//         </li>
//       </ul>

//       <GiHamburgerMenu className="text-2xl md:hidden" />
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/foodie.png";
import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { cartItemsCount } = useSelector((store) => store.cart);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between h-16 lg:px-16 md:h-20 px-5 ">
      <div className="flex items-center">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="lg:h-16 h-10" />
        </NavLink>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <GiHamburgerMenu
          className="text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <ul className="absolute h-80 top-16 left-0 right-0 flex flex-col justify-evenly items-center bg-white shadow-md pb-5 z-20 ">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="text-green-700"
                className="text-xl font-medium block p-2"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/restaurants"
                activeClassName="text-green-700"
                className="text-xl font-medium block p-2"
                onClick={toggleMenu}
              >
                Restaurants
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipe"
                activeClassName="text-green-700"
                className="text-xl font-medium block p-2"
                onClick={toggleMenu}
              >
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="text-green-700"
                className="text-xl font-medium block p-2"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className="flex relative"
                onClick={toggleMenu}
              >
                <BsFillCartFill className="text-4xl text-green-700" />
                <div className="absolute text-white text-xs inset-0 flex justify-center items-center font-bold">
                  {cartItemsCount}
                </div>
              </NavLink>
            </li>
          </ul>
        )}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-12 menu">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="text-green-700"
            className="text-xl font-medium p-2"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/restaurants"
            activeClassName="text-green-700"
            className="text-xl font-medium p-2"
          >
            Restaurants
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName="text-green-700"
            className="text-xl font-medium p-2"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="text-green-700"
            className="text-xl font-medium p-2"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="flex relative">
            <BsFillCartFill className="text-4xl text-green-700" />
            <div className="absolute text-white text-xs inset-0 flex justify-center items-center font-bold">
              {cartItemsCount}
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
