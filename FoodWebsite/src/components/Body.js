import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaList, setRestaList] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        ></input>
        <button className="search-btn">Search</button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = restaList.filter(
              (res) => res.info.avgRating > 4.4
            );
            setRestaList(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {restaList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
