import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const useGetRestaurantMenu = (id) => {
  const [data, setData] = useState({
    menu: [],
    restaurantInfo: [],
    menuError: "",
  });

  const { latitude, longitude } = useSelector((store) => store.coords);

  //   fetching menu of restaurant with the obtained latitude, longitude and params id (restaurant id)
  useEffect(() => {
    const fetchRestaurantMenu = async () => {
      try {
        let restaurantmenu_api = `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${id}&submitAction=ENTER`;

        const response = await axios.get(restaurantmenu_api);

        const menuData = response.data.data?.cards?.find(
          (card) => card.groupedCard
        );

        const newMenu =
          menuData?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
            ?.itemCards;

        const newRestaurantInfo =
          response.data.data?.cards[0]?.card?.card?.info;

        setData((prevData) => ({
          menu: newMenu || prevData.menu,
          restaurantInfo: newRestaurantInfo || prevData.restaurantInfo,
        }));
      } catch (error) {
        setData((prevData) => ({
          menuError: error.message || prevData.menuError,
        }));
      }
    };

    fetchRestaurantMenu();
  }, [latitude, longitude]);

  return data;
};

export default useGetRestaurantMenu;
