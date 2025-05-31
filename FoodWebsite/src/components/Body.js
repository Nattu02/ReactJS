import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [restaList, setRestaList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0175845&lng=76.9674075&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return restaList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center justify-center">
        <div className="m-8">
        <input
          type="text"
          placeholder="Search a restaurant..."
          className="border-2 border-gray-400 p-2 rounded-lg"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        ></input>
        <button
          className="m-4 bg-green-100 px-4 py-2 rounded-lg cursor-pointer"
          onClick={() => {
            let searchResult = restaList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(searchResult);
            console.log(searchResult);
          }}
        >
          Search
        </button>
      </div>

      <div>
        <button
          className="m-4 bg-green-100 px-4 py-2 rounded-lg cursor-pointer"
          onClick={() => {
            let filteredList = restaList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      </div>
      <div className="grid grid-cols-4 gap-10 mx-10  p-10">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

