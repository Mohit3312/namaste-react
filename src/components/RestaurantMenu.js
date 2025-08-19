import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
