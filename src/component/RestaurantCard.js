import React from "react";
import { useNavigate } from "react-router-dom";
import { IoStar } from "react-icons/io5";

const RestaurantCard = ({ restaurants }) => {
  const imgUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  const navigate = useNavigate();

  const openRestaurantMenu = (id) => {
    navigate(`/menu/${id}`);
  };

  return (
    <>
      {restaurants && 
        restaurants.map(({ data }) => {
          const {
            name,
            id,
            cuisines,
            deliveryTime,
            avgRating,
            costForTwo,
            cloudinaryImageId,
          } = data;


          return (
            <>
              <div
                key={id}
                className="hover:border-gray-300 hover:shadow flex flex-col gap-1 cursor-pointer rounded transition-all border-white border p-4"
                onClick={() => openRestaurantMenu(id)}
              >
                <img
                  src={imgUrl + cloudinaryImageId}
                  alt="name"
                  className="rounded"
                />

                <h2 className="text-lg font-medium mt-1">{name}</h2>
                
                <p className="text-gray-500 text-sm">
                  {cuisines && cuisines.join(", ")}
                </p>

                <div className="flex justify-between text-xs mt-2">
                  <div className="flex items-center gap-2 text-sm bg-slate-200 px-1 rounded w-fit">
                    <IoStar className="text-green-700" />
                    <p className="text-green-700 font-bold">{avgRating}</p>
                  </div>
                  <span>{deliveryTime && deliveryTime} MINS</span>
                  <span>{costForTwo && costForTwo / 100} FOR TWO</span>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default RestaurantCard;
