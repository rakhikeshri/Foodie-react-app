import React, { useEffect } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AlternateMenuImg from ".././img/food-alternate-img.jpg";
import CartImg from ".././img/cart-img.webp";
import { menuImgUrl, restroImgUrl } from "../utils/constants";
import { BsFillSuitHeartFill } from "react-icons/bs";

import {
  addToCart,
  clearCart,
  getTotals,
  descreaseCartItem,
  removeCartItem,
} from "./Redux/features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { cartItems, totalAmount, restaurantInfo } = useSelector(
    (store) => store.cart
  );

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="md:mx-28 mt-1 md:mt-6 flex md:gap-10 flex-col lg:flex-row ">
          <div className="lg:w-3/4 cart-scroll">
            {cartItems &&
              cartItems.map((item) => {
                return (
                  <div className="flex mb-5 items-center gap-2 md:gap-3" key={item.id}>
                    <div className="w-[18%] ">
                      <img
                        src={
                          item.imageId
                            ? menuImgUrl + item.imageId
                            : AlternateMenuImg
                        }
                        className="rounded-md"
                        alt="menu"
                      />
                    </div>

                    <div className="w-[60%] md:w-[52%] ">
                      <p className="text-base md:mb-2">{item.name}</p>
                      <div className="flex font-bold items-center mx-auto">
                        <LiaRupeeSignSolid /> {item.price / 100}
                      </div>
                    </div>

                    <div className="flex gap-2 w-[23%] md:w-[30%]  flex-col md:flex-row items-center">
                      <div className="border-green-200 rounded shadow mx-auto text-xs md:text-base">
                        <button
                          className="text-lg px-2 hover:text-green-700 "
                          onClick={() => dispatch(descreaseCartItem(item))}
                        >
                          -
                        </button>
                        <span className="px-1 md:px-2 font-medium">
                          {item.itemCount}
                        </span>
                        <button
                          className="font-medium px-2 hover:text-green-700"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          +
                        </button>
                      </div>

                      <div
                        onClick={() => dispatch(removeCartItem(item))}
                        className="hidden md:flex transition-all hover:text-red-600 cursor-pointer p-2 rounded my-auto"
                      >
                        <RxCross1 />
                      </div>

                      <div
                        onClick={() => dispatch(removeCartItem(item))}
                        className="md:hidden transition-all w-18 text-red-600 cursor-pointer rounded my-auto px-1 shadow text-sm"
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="flex flex-col lg:w-2/5 ">
            <div className="p-4 text-center bg-green-100  h-fit">
              <div className="font-medium text-xl ">
                <div className="flex gap-2 mb-2">
                  <img
                    src={restroImgUrl + restaurantInfo.cloudinaryImageId}
                    className="h-14 rounded shadow" alt="restro"
                  />
                  <div className="text-left flex flex-col justify-center ">
                    <p className="text-base font-bold">{restaurantInfo.name}</p>
                    <div className="flex">
                      <span className="text-sm ">
                        {restaurantInfo.areaName},{" "}
                      </span>
                      <span className="text-sm">
                        &nbsp;{restaurantInfo.city}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="">To Pay </p>
                  <div className="flex items-center">
                    <LiaRupeeSignSolid /> {totalAmount.toFixed(0)}
                  </div>
                </div>
              </div>

              <button
                className="bg-green-600 text-white p-2 w-full mt-3 hover:shadow-xl shadow-md transition-all"
                onClick={() => alert('Order Successful 🤤😜')}
              >
                Checkout
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <button
                className="bg-green-100 p-2 text-black hover:bg-green-600 hover:shadow-md hover:text-white transition-all shadow text-sm md:text-base"
                onClick={() => goBack()}
              >
                Continue Ordering
              </button>

              <button
                className="bg-red-100 p-2 text-black hover:bg-red-600 hover:shadow-md hover:text-white transition-all shadow text-sm md:text-base"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-10 flex items-center justify-center flex-col gap-4">
          <img src={CartImg} className="md:w-[30%]" alt="cart" />
          <p className="text-xl font-bold text-green-700">Your Cart is Empty</p>
          <button className="hover:shadow-xl capitalize transition-all p-2 px-4 bg-green-700 rounded w-[fit-content] text-white text-sm font-bold">
            <NavLink to="/restaurants">See Restaurants Near You!</NavLink>
          </button>
        </div>
      )}
      <div className="flex justify-center font-medium items-center py-2 mt-4 px-4 mx-auto w-fit text-lg ">
        Made with &nbsp;
        <BsFillSuitHeartFill className="text-green-700" />
        &nbsp; by&nbsp;
        <a
          href="https://github.com/rakhikeshri?tab=repositories"
          className="font-bold"
          target="_blank"
          rel="noreferrer" 
        >
          Rakhi Keshri
        </a>
      </div>
    </>
  );
};

export default Cart;
