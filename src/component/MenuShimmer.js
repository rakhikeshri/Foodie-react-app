import React from "react";

const MenuShimmer = () => {
  return (
    <div className="flex flex-col gap-4 mt-5">
      {Array(5)
        .fill("")
        .map((_, idx) => (
          <div key={idx} className="w-full h-40 bg-gray-300">
          </div>
        ))}
    </div>
  );
};

export default MenuShimmer;
