import React from "react";
import img from "../img/food2.jpg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:h-[calc(100vh-90px)] items-center justify-between home flex flex-col-reverse mt-5 lg:mt-0 gap-10 lg:gap-0">
        <div className="flex flex-col gap-4 md:gap-8">
          <span className="text-black text-4xl md:text-7xl  font-bold">
            EAT HEALTHY <br />
            STAY HEALTHY
          </span>
          <p className="text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            commodi libero.
          </p>
          <button className="hover:shadow-xl transition-all p-2 px-4 bg-green-700 rounded w-[fit-content] text-white text-sm font-bold">
            <NavLink to="restaurants">Explore your nearby Restaurants.</NavLink>
          </button>
        </div>

        <div className="flex lg:justify-end ">
          <img src={img} className="lg:w-4/5 " />
        </div>
      </div>
    </>
  );
}

export default Home;
