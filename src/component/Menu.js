import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import useGetRestaurantMenu from "../utils/useGetRestaurantMenu";
import MenuCard from "./MenuCard";
import { CgTimelapse } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "./Redux/features/cartSlice";
import { HiSearch } from "react-icons/hi";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Menu = () => {
  const { id } = useParams();

  const { cartItems, totalAmount } = useSelector((store) => store.cart);

  const [menuSearchInput, setMenuSearchInput] = useState("");

  const dispatch = useDispatch();

  const { menu, restaurantInfo, menuError } = useGetRestaurantMenu(id);

  const {
    totalRatingsString,
    avgRating,
    city,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    isOpen,
    locality,
    name,
    sla,
  } = restaurantInfo;

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const restaurantImg = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`;

  return (
    <div className="lg:mx-40 md:mt-5 relative">
      {cartItems.length > 0 ? (
        <NavLink to="/cart">
          <div
            className="font-medium absolute bg-green-200 text-black hover:bg-green-700 rounded hover:text-white p-2 bottom-[70px] left-1/2 text-xs md:text-sm
        transform -translate-x-1/2 hover:shadow-md transition-all cursor-pointer z-50"
          >
            <p>{cartItems.length} Items | View Cart</p>
          </div>
        </NavLink>
      ) : null}

      {name && (
        <div className="flex justify-between md:items-start flex-col md:flex-row gap-4">
          <div className="flex gap-3 items-center">
            <img
              src={restaurantImg}
              className="flex w-28 md:w-44 rounded shadow-md"
            />

            <div className="flex flex-col gap-1 md:gap-2">
              <h2 className="text-lg md:text-2xl font-bold leading-5">
                {name}
              </h2>

              <div className="flex md:gap-1 flex-col text-sm font-medium text-gray-500">
                <p className="hidden md:flex">
                  {cuisines && cuisines.join(", ")} <br />
                </p>
                <p>
                  {locality}, {city}
                </p>
              </div>

              <div className="flex gap-2">
                <div className="flex items-center gap-2 w-fit bg-slate-200 px-1 rounded">
                  <IoStar className="text-green-700" />
                  <p className="text-green-700 font-bold">{avgRating}</p>
                </div>
                <p>({totalRatingsString})</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:items-end md:gap-3 my-auto">
            <div className="hidden md:flex gap-2 items-center">
              <CgTimelapse className="text-xl" />
              <p className="font-bold me-2">{sla?.slaString}</p>
              <HiOutlineCurrencyRupee className="text-2xl" />
              <p className="font-bold">
                Rs. {costForTwo && costForTwo / 100} for two
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                placeholder="search menu.."
                className="border-green-600 w-full md:w-fit border p-1 rounded px-2 focus:outline-none hover:border-green-700"
                onChange={(e) => setMenuSearchInput(e.target.value)}
              />
              <HiSearch className="text-2xl text-green-700" />
            </div>
          </div>
        </div>
      )}

      <div className="main-scroll border-t mt-5">
        <MenuCard
          menu={menu}
          currentRestaurantInfo={restaurantInfo}
          menuError={menuError}
          menuSearchInput={menuSearchInput}
        />
      </div>

      <div className="flex justify-center font-medium items-center py-2 mt-4 px-4 mx-auto w-fit text-lg ">
        Made with &nbsp;
        <BsFillSuitHeartFill className="text-green-700" />
        &nbsp; by&nbsp;
        <a
          href="https://github.com/rakhikeshri?tab=repositories"
          className="font-bold"
          target="_blank"
        >
          Rakhi Keshri
        </a>
      </div>
    </div>
  );
};

export default Menu;
