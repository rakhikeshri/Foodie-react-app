import React, { useEffect, useState } from "react";
import { BiRupee } from "react-icons/bi";
import { addToCart, addRestaurantInfo } from "./Redux/features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import ModalPopup from "./ModalPopup";

const MenuCard = ({ menu, currentRestaurantInfo, menuSearchInput }) => {
  const imgUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";

  const dispatch = useDispatch();

  const { restaurantInfo } = useSelector((store) => store.cart);

  const [isOtherRestarurant, setIsOtherRestaurant] = useState(false);

  return (
    <>
      {isOtherRestarurant && (
        <ModalPopup setIsOtherRestaurant={setIsOtherRestaurant} />
      )}

      {menu.length > 0 ? (
        menu
          .filter(({ card }) =>
            card?.info?.name
              .toLowerCase()
              .includes(menuSearchInput.toLowerCase())
          )
          .map(({ card }) => {
            const {
              id,
              isVeg,
              name,
              price,
              imageId,
              offerTags,
              ratings,
              description,
            } = card.info;

            return (
              <>
                <div
                  key={id}
                  className=" flex justify-between py-3 md:p-2 border-b "
                >
                  <div className="flex flex-col justify-center gap-2 md:w-[85%] w-[80%]">
                    <h2 className="md:text-lg font-medium">{name && name}</h2>

                    <div className="flex items-center">
                      <BiRupee />
                      <p className="text-base font-bold">
                        {price && (price / 100).toFixed(0)}
                      </p>
                    </div>
                    <p className="text-sm w-[90%] md:w-4/5 text-gray-400">
                      {description && description}
                    </p>
                  </div>

                  <div className="w-[20%] md:w-[15%] text-center md:p-3 relative h-full ">
                    <div>
                      <img
                        src={imgUrl + imageId}
                        alt="name"
                        className="rounded"
                      />
                    </div>
                    {/* for desktop */}
                    <button
                      onClick={() => {
                        if (restaurantInfo.length === 0) {
                          dispatch(addToCart(card.info));
                          dispatch(addRestaurantInfo(currentRestaurantInfo));
                        } else if (
                          restaurantInfo.name === currentRestaurantInfo.name &&
                          restaurantInfo.locality ===
                            currentRestaurantInfo.locality
                        ) {
                          dispatch(addToCart(card.info));
                          dispatch(addRestaurantInfo(currentRestaurantInfo));
                        } else {
                          setIsOtherRestaurant(true);
                        }
                      }}
                      className="hidden md:block bg-slate-100 shadow hover:bg-green-700 hover:text-white transition-all px-5 py-1 rounded absolute bottom-0 left-1/2 transform -translate-x-1/2"
                    >
                      Add
                    </button>

                      {/* for mobiles */}
                    <button
                      onClick={() => {
                        if (restaurantInfo.length === 0) {
                          dispatch(addToCart(card.info));
                          dispatch(addRestaurantInfo(currentRestaurantInfo));
                        } else if (
                          restaurantInfo.name === currentRestaurantInfo.name &&
                          restaurantInfo.locality ===
                            currentRestaurantInfo.locality
                        ) {
                          dispatch(addToCart(card.info));
                          dispatch(addRestaurantInfo(currentRestaurantInfo));
                        } else {
                          setIsOtherRestaurant(true);
                        }
                      }}
                      className="md:hidden bg-slate-100 shadow hover:bg-green-700 hover:text-white transition-all md:px-5 px-3 py-1 rounded mt-2 text-xs"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </>
            );
          })
      ) : (
        <p>The menu is currently not available</p>
      )}
    </>
  );
};

export default MenuCard;
