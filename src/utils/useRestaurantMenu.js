import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);

    const filteredResInfo = json?.data?.cards?.filter(
      (card) =>
        card?.card?.card?.info || card?.groupedCard?.cardGroupMap?.REGULAR
    );

    setResInfo(filteredResInfo);
  };

  return resInfo;
};

export default useRestaurantMenu;
