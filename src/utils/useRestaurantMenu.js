import { useEffect, useState } from "react";
import { MENU_URL, RES_MENU_MOCK_RESPONSE } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json =
      data?.status === 200 ? await data.json() : RES_MENU_MOCK_RESPONSE;

    const filteredResInfo = json?.data?.cards?.filter(
      (card) =>
        card?.card?.card?.info || card?.groupedCard?.cardGroupMap?.REGULAR
    );

    setResInfo(filteredResInfo);
  };

  return resInfo;
};

export default useRestaurantMenu;
