import React from "react";

const RestaurantsShimmer = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-5">
      {Array(15)
        .fill("")
        .map((_, idx) => (
          <div key={idx} className="w-72 h-52  bg-gray-300">
          </div>
        ))}
    </div>
  );
};

export default RestaurantsShimmer;
