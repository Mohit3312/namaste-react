import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  // export default () => {
  // export default function Body() {

  // Local State Variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.601586&lng=77.306868&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const actualListOfRestaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const modifiedListOfRestaurants = actualListOfRestaurants?.map(
      (restaurant) => {
        let { info } = restaurant;
        info = {
          ...info,
          promoted: restaurant?.info?.avgRating >= 4.3,
        };

        return {
          ...restaurant,
          info,
        };
      }
    );

    setListOfRestaurant(modifiedListOfRestaurants);
    setFilteredListOfRestaurant(modifiedListOfRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurant?.filter(
                (restaurant) =>
                  restaurant?.info?.name
                    ?.toLowerCase()
                    ?.includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-3 py-1 bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="ml-1 px-1 border border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurant?.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
          >
            {/** If the restaurant is promoted then add a promoted label to it. */}
            {restaurant?.info?.promoted ? (
              <PromotedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
