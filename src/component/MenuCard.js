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
                  className=" flex justify-between py-2 px-2 border-b "
                >
                  <div className="flex flex-col justify-center gap-2 w-[85%]">
                    <h2 className="text-lg font-medium">{name && name}</h2>

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

                  <div className="w-[15%] text-center p-3 relative">
                    <div>
                      <img
                        src={imgUrl + imageId}
                        alt="name"
                        className="rounded"
                      />
                    </div>
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
                      className=" bg-slate-100 shadow hover:bg-green-700 hover:text-white transition-all px-5 py-1 rounded absolute bottom-0 left-1/2 transform -translate-x-1/2"
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
