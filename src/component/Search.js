import React from "react";

const Search = ({ setCity, searchRestaurants, city }) => {
  return (
    <div>
      <input
        placeholder="search by city.."
        className="border border-black rounded p-2 py-1 me-2"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />

      <button
        onClick={() => searchRestaurants()}
        className="p-2 px-4 bg-green-700 rounded w-[fit-content] text-white text-sm font-bold"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
