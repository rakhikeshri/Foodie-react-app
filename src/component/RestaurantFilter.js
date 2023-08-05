import React from 'react'

export default function RestaurantFilter({handleFilterChange}) {
  return (
    <select className="border border-black rounded p-2 py-1 me-2" onChange={handleFilterChange} >
        <option value="" disabled selected>Select an option</option>
        <option value="timeAsc" className="bg-white">Sort by delivery time: low to hight</option>
        <option value="timeDesc" className="bg-white">Sort by delivery time: high to low</option>
        <option value="priceAsc" className="bg-white">Stort by price: low to hight</option>
        <option value="priceDesc" className="bg-white">Stort by price: high to low</option>
        <option value="ratingAsc" className="bg-white">Sort by rating: low to hight</option>
        <option value="ratingDesc" className="bg-white">Sort by rating: high to low</option>
    </select>
  )
}
