import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const useGetRestaurants = () => {
  const [restaurantData, setRestaurantData] = useState({
    restaurants: [],
    restaurantError: "",
  });

  const { latitude, longitude } = useSelector((store) => store.coords);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        let restaurants_api = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`;
        const response = await axios.get(restaurants_api);

        const data = response.data.data?.cards;
        if (data) {
          const elements = data.filter(
            (card) => card.card?.card?.gridElements?.infoWithStyle.restaurants
          );
          // console.log(elements[0]);

          const restroData =
            elements[0].card.card.gridElements.infoWithStyle.restaurants;
          setRestaurantData((prevData) => ({
            restaurants: restroData || prevData.restaurants,
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setRestaurantData((prevData) => ({
          restaurantError: error.message || prevData.restaurantError,
        }));
      }
    };

    fetchRestaurants();
  }, [latitude, longitude]);

  return restaurantData;
};

export default useGetRestaurants;
