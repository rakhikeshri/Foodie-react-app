import React from "react";

const RestaurantsShimmer = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 w-full">
      {Array(15)
        .fill("")
        .map((_, idx) => (
          <div key={idx} className="w-full h-52  bg-gray-300">
          </div>
        ))}
    </div>
  );
};

export default RestaurantsShimmer;
