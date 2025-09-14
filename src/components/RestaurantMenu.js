import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(-1);

  const { resId } = useParams();

  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo[0]?.card?.card?.info;
  const { cards } = resInfo[1]?.groupedCard?.cardGroupMap?.REGULAR;

  const categories = cards?.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const filteredCards = cards?.filter((card) => card?.card?.card?.itemCards)[0]
    ?.card?.card?.itemCards;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {/* Categories Accordions */}
      {categories?.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          index={index}
          data={category?.card?.card}
          showItems={index === showIndex}
          showIndex={showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? -1 : index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
