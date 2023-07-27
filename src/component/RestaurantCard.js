import React from "react";
import { useNavigate } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import AlternateMenuImg from '.././img/food-alternate-img.jpg'
import { restroImgUrl } from "../utils/constants";

const RestaurantCard = ({ restaurants }) => {
  const navigate = useNavigate();

  const openRestaurantMenu = (id) => {
    navigate(`/menu/${id}`);
  };

  return (
    <>
      {restaurants && 
        restaurants.map(({ info }) => {
          
          const {
            name,
            id,
            cuisines,
            deliveryTime,
            avgRating,
            costForTwo,
            cloudinaryImageId,
          } = info;

          return (
            
              <div
                key={id}
                className="hover:border-gray-300 hover:shadow flex flex-col md:gap-1 cursor-pointer rounded transition-all border-gray-200 md:border-white border p-4 md:p-5"
                onClick={() => openRestaurantMenu(id)}
              >
                <img
                  src={cloudinaryImageId ? restroImgUrl + cloudinaryImageId : AlternateMenuImg}
                  alt="name"
                  className="rounded"
                />

                <h2 className="text-xl font-bold mt-1">{name}</h2>
                
                <p className="text-gray-800 text-sm">
                  {cuisines && cuisines.join(", ")}
                </p>

                <div className="flex justify-between text-sm mt-2">
                  <div className="flex items-center gap-2 text-sm bg-slate-200 px-1 rounded w-fit">
                    <IoStar className="text-green-700" />
                    <p className="text-green-700 font-bold">{avgRating}</p>
                  </div>
                  <span>{deliveryTime && deliveryTime} MINS</span>
                  <span>{costForTwo && costForTwo / 100} FOR TWO</span>
                </div>
              </div>
            
          );
        })}
    </>
  );
};

export default RestaurantCard;
