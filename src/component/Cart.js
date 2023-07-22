import React, { useEffect } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import { Navigate, useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AlternateMenuImg from ".././img/food-alternate-img.jpg";
import CartImg from ".././img/cart-img.webp";

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

  const imgUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";

  const restroImgUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="md:mx-28 mt-1 md:mt-6 flex gap-2 md:gap-10 flex-col lg:flex-row ">
          <div className="lg:w-3/4 cart-scroll">
            {cartItems &&
              cartItems.map((item) => {
                return (
                  <div className="flex mb-5 items-center gap-2 md:gap-3 ">
                    <div className="w-[18%] ">
                      <img
                        src={
                          item.imageId
                            ? imgUrl + item.imageId
                            : AlternateMenuImg
                        }
                        className="rounded-md"
                      />
                    </div>

                    <div className="w-[60%] md:w-[52%] ">
                      <p className="text-base md:mb-2">{item.name}</p>
                      <div className="flex font-bold items-center mx-auto">
                        <LiaRupeeSignSolid /> {item.price / 100}
                      </div>
                    </div>

                    <div className="flex gap-2 w-[22%] md:w-[30%]  flex-col md:flex-row items-center">
                      <div className="border-green-200 rounded shadow w-fit mx-auto">
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
                        className="md:hidden transition-all text-red-600 cursor-pointer rounded my-auto px-2 shadow"
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="flex flex-col lg:w-2/5">
            <div className="p-4 text-center bg-green-100  h-fit">
              <div className="font-medium text-xl ">
                <div className="flex gap-2 mb-2">
                  <img
                    src={restroImgUrl + restaurantInfo.cloudinaryImageId}
                    className="h-14 rounded shadow"
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
                onClick={() => dispatch(clearCart())}
              >
                Checkout
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <button
                className="bg-green-100 p-2 text-black hover:bg-green-600 hover:shadow-md hover:text-white transition-all shadow"
                onClick={() => goBack()}
              >
                Continue Ordering
              </button>

              <button
                className="bg-red-100 p-2 text-black hover:bg-red-600 hover:shadow-md hover:text-white transition-all shadow"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-10 flex items-center justify-center flex-col gap-4">
          <img src={CartImg} className="md:w-[30%]" />
          <p className="text-xl font-bold text-green-700">Your Cart is Empty</p>
          <button className="hover:shadow-xl capitalize transition-all p-2 px-4 bg-green-700 rounded w-[fit-content] text-white text-sm font-bold">
            <NavLink to="/restaurants">See Restaurants Near You!</NavLink>
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
