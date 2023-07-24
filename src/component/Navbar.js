import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/foodie.png";
import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { cartItemsCount } = useSelector((store) => store.cart);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navmenu = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/restaurants",
      name: "Restaurants",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ];

  return (
    <nav className="flex items-center justify-between h-16 lg:px-[70px] md:h-20 px-5 ">
      <div className="flex items-center">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="lg:h-16 h-10" />
        </NavLink>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {
          isMenuOpen === true ? 
          <IoMdClose
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          /> :
          < GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          /> 
        }
        {isMenuOpen && (
          <ul className="absolute h-80 top-16 left-0 right-0 flex flex-col justify-evenly items-center bg-white shadow-md pb-5 z-20 ">
            {navmenu.map((menu) => {
              return (
                <li key={menu.name}>
                  <NavLink
                    to={menu.link}
                    activeclassname="text-green-700"
                    className="text-xl font-medium p-2"
                    onClick={toggleMenu}
                  >
                    {menu.name}
                  </NavLink>
                </li>
              );
            })}
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
        {navmenu.map((menu, idx) => {
          return (
            <li key={idx}>
              <NavLink
                to={menu.link}
                activeclassname="text-green-700"
                className="text-[22px] font-medium p-2"
              >
                {menu.name}
              </NavLink>
            </li>
          );
        })}

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
