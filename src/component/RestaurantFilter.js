import React from 'react'

export default function RestaurantFilter({handleFilterChange}) {
  return (
    <select className="border border-black rounded p-2 py-1 cursor-pointer mb-1 md:mb-0 custom-dropdown" onChange={handleFilterChange} >
        <option value="" disabled selected>Filter Restaurants</option>
        <option value="timeAsc" className="bg-white">Sort by delivery time: low to hight</option>
        <option value="timeDesc" className="bg-white">Sort by delivery time: high to low</option>
        <option value="priceAsc" className="bg-white">Stort by price: low to hight</option>
        <option value="priceDesc" className="bg-white">Stort by price: high to low</option>
        <option value="ratingAsc" className="bg-white">Sort by rating: low to hight</option>
        <option value="ratingDesc" className="bg-white">Sort by rating: high to low</option>
    </select>
  )
}
