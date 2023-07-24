import React from "react";
import img from "../img/girl.png";
import { NavLink } from "react-router-dom";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

function Home() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:h-[calc(100vh-90px)] items-center justify-between home flex flex-col-reverse mt-5 lg:mt-0 gap-4 lg:gap-0">
        <div className="flex flex-col gap-4 md:gap-8 items-center lg:items-start md:ms-7">
          <p className="text-black text-4xl md:text-7xl font-bold text-center lg:text-left ">
            Satisfy your cravings.
          </p>
          <p className="text-lg md:text-3xl font-medium text-center lg:text-left w-[80%]">
            Discover the best food and drinks near you - Order Online!
          </p>
          <NavLink to="restaurants">
            <button className="hover:shadow-xl transition-all p-2 px-4 bg-green-700 rounded w-[fit-content] text-white text-sm md:text-base font-bold">
              Explore your nearby Restaurants.
            </button>
          </NavLink>
        </div>

        <div className="flex lg:justify-end items-center justify-center">
          <img src={img} className="lg:w-[85%] w-[90%]" />
        </div>

        <div className="absolute flex gap-3 bottom-3 left-1/2 transform -translate-x-1/2 transition-all cursor-pointer z-50 text-xl ">
          <a href="https://www.instagram.com/letmedraw_you/" target="_blank">
            <BsInstagram className="hover:scale-125 transition-all" />
          </a>
          <a href="https://github.com/rakhikeshri" target="_blank">
            <BsGithub className="hover:scale-125 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/rakhi-keshri/" target="_blank">
            <BsLinkedin className="hover:scale-125 transition-all" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
