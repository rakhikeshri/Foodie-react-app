import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { getTotals } from "./Redux/features/cartSlice";

const Body = () => {

  const dispatch = useDispatch()

  dispatch(getTotals())

  return (
    <div>
      <Navbar />
      <div className="md:mx-16 mx-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
