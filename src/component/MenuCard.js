import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { addToCart, addRestaurantInfo } from "./Redux/features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import ModalPopup from "./ModalPopup";
import AlternateMenuImg from '.././img/food-alternate-img.jpg'
import MenuShimmer from "./MenuShimmer";
import { menuImgUrl } from "../utils/constants";

const MenuCard = ({ menu, currentRestaurantInfo, menuSearchInput }) => {

  const dispatch = useDispatch();

  const { restaurantInfo } = useSelector((store) => store.cart);

  const [isOtherRestarurant, setIsOtherRestaurant] = useState(false);

  return (
    <>
      {isOtherRestarurant && (
        <ModalPopup setIsOtherRestaurant={setIsOtherRestaurant} />
      )}

      {menu && menu.length > 0 ? (
        menu
          .filter(({ card }) =>
            card?.info?.name
              .toLowerCase()
              .includes(menuSearchInput.toLowerCase())
          )
          .map(({ card }) => {
            const {
              id,
              name,
              price,
              imageId,
              description,
            } = card.info;

            return (
              
                <div
                  key={id}
                  className=" flex justify-between py-4 md:py-5 md:pe-3  border-b"
                >
                  <div className="flex flex-col justify-center gap-2 md:w-[85%] w-[65%]">
                    <h2 className="md:text-xl font-medium">{name && name}</h2>

                    <div className="flex items-center">
                      <BiRupee className="md:text-lg" />
                      <p className="md:text-lg font-bold">
                        {price && (price / 100).toFixed(0)}
                      </p>
                    </div>
                    <p className="hidden md:flex text-sm w-[90%] md:w-4/5 text-gray-400">
                      {description && description}
                    </p>
                  </div>

                  <div className="w-[33%] md:w-[15%]  flex items-center justify-center ">
                    <div className="relative">
                      <img
                        src={imageId ? menuImgUrl + imageId : AlternateMenuImg}
                        alt="name"
                        className="h-full object-cover w-full rounded"
                      />
                      {/* for desktop */}
                      <button
                        onClick={() => {
                          if (restaurantInfo.length === 0) {
                            dispatch(addToCart(card.info));
                            dispatch(addRestaurantInfo(currentRestaurantInfo));
                          } else if (
                            restaurantInfo.name ===
                              currentRestaurantInfo.name &&
                            restaurantInfo.locality ===
                              currentRestaurantInfo.locality
                          ) {
                            dispatch(addToCart(card.info));
                            dispatch(addRestaurantInfo(currentRestaurantInfo));
                          } else {
                            setIsOtherRestaurant(true);
                          }
                        }}
                        className="hidden md:block bg-white shadow hover:bg-green-700 hover:text-white transition-all font-medium py-1 px-4 rounded absolute bottom-[-15px] left-1/2 transform -translate-x-1/2"
                      >
                        Add
                      </button>

                      {/* for mobiles */}
                      <button
                        className="block md:hidden bg-white shadow hover:bg-green-700 hover:text-white transition-all font-medium text-xs p-1 px-3 rounded absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 "
                        onClick={() => {
                          if (restaurantInfo.length === 0) {
                            dispatch(addToCart(card.info));
                            dispatch(addRestaurantInfo(currentRestaurantInfo));
                          } else if (
                            restaurantInfo.name ===
                              currentRestaurantInfo.name &&
                            restaurantInfo.locality ===
                              currentRestaurantInfo.locality
                          ) {
                            dispatch(addToCart(card.info));
                            dispatch(addRestaurantInfo(currentRestaurantInfo));
                          } else {
                            setIsOtherRestaurant(true);
                          }
                        }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              
            );
          })
      ) : (
        <MenuShimmer />
      )}
    </>
  );
};

export default MenuCard;
