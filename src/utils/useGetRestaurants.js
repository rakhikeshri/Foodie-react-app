import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const useGetRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  const { latitude, longitude } = useSelector(store => store.coords)
  
  //   fetching restaurants with the obtained latitude and longitude
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        let restaurants_api = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`;
        const response = await axios.get(restaurants_api);
        setRestaurants(response.data?.data?.cards[2]?.data?.data?.cards);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchRestaurants()
  }, [latitude, longitude]);

  return restaurants;
};

export default useGetRestaurants;
