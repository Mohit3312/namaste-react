import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

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

  if (resInfo === null) return <Shimmer />;

  console.log("resInfo: ", resInfo);

  const { name, cuisines, costForTwoMessage } = resInfo[0]?.card?.card?.info;
  const { cards } = resInfo[1]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log(cards);

  const filteredCards = cards?.filter((card) => card?.card?.card?.itemCards)[0]
    ?.card?.card?.itemCards;
  console.log("filteredCards: ", filteredCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {filteredCards?.map((item, index) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{" "}
            {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
