import React, { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import useGetRestaurantMenu from "../utils/useGetRestaurantMenu";
import StarRatingIcon from "../img/star-rating.png";
import DeliveryGuyIcon from "../img/delivery_guy.png";
import Search from "./Search";
import MenuCard from "./MenuCard";
import { CgTimelapse } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "./Redux/features/cartSlice";
import { HiSearch } from "react-icons/hi";
import MenuShimmer from "./MenuShimmer";

const Menu = () => {
  const { id } = useParams();

  const { cartItems, totalAmount } = useSelector((store) => store.cart);

  const [menuSearchInput, setMenuSearchInput] = useState("");

  const dispatch = useDispatch();

  const { menu, restaurantInfo } = useGetRestaurantMenu(id);

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
            className="flex justify-between w-fit gap-4 font-medium absolute bg-green-200 text-black hover:bg-green-700 rounded hover:text-white p-2 bottom-1 left-1/2 
        transform -translate-x-1/2 hover:shadow-md transition-all cursor-pointer z-50"
          >
            <div>
              {cartItems.length} Items 
            </div>
            <p>View Cart</p>
          </div>
        </NavLink>
      ) : null}

      <div className="flex justify-between md:items-start flex-col md:flex-row">
        <div className="flex gap-3 items-center">
          <img
            src={restaurantImg}
            className="flex w-28 md:w-44 rounded shadow-md"
          />

          <div className="flex flex-col gap-1 md:gap-2 ">
            <h2 className="text-lg md:text-2xl font-bold ">{name}</h2>

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

        <div className="flex flex-col md:items-end gap-3 md:gap-4 my-auto mt-5 md-mt-auto">
          <div className="flex gap-2 items-center">
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

      {menu && menu.length > 0 ? (
        <div className="main-scroll border-t mt-5">
          <MenuCard
            menu={menu}
            currentRestaurantInfo={restaurantInfo}
            menuSearchInput={menuSearchInput}
          />
        </div>
      ) : (
        <MenuShimmer />
      )}
    </div>
  );
};

export default Menu;
