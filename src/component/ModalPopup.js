import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "./Redux/features/cartSlice";

const ModalPopup = ({setIsOtherRestaurant}) => {

  const dispatch = useDispatch()

  const clearCartItems = () => {
    dispatch(clearCart())
    setIsOtherRestaurant(false)
  }

  const handleOnClose = (e) => {
    if(e.target.id === 'modalBlurPortion') setIsOtherRestaurant(false)
  }

  return (
    <div id="modalBlurPortion" onClick={(e)=>handleOnClose(e)} className="z-50 fixed inset-0 bg-black bg-opacity-30 backrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-96 p-4 rounded shadow m-2">
        <h1></h1>
        <p>
          Your cart contains items from other restaurant. Would you like to
          reset your cart for adding items from this restaurant?
        </p>
        <div className="grid mt-3 grid-cols-2 gap-4">
          <button onClick={()=>setIsOtherRestaurant(false)} className="font-medium hover:shadow-md p-2 bg-green-200 shadow">
            No
          </button>
          <button onClick={clearCartItems} className="font-medium hover:shadow-md p-2 bg-green-700 shadow text-white">
            Yes, Start Fresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;
