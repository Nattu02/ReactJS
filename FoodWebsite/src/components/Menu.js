import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import Dish from "./Dish";
import { useParams } from "react-router";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const Menu = () => {
  const { id } = useParams();

  const resInfo = useRestaurantInfo(id);

  if (resInfo === null) return <Shimmer />;

  const { name, areaName, avgRatingString, totalRatingsString } =
    resInfo.data?.cards[2]?.card.card.info;

  const { itemCards } =
    resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <div className="res-info">
        <h1>{name}</h1>
        <h2>{areaName}</h2>
        <h2>
          ⭐{avgRatingString} ({totalRatingsString})
        </h2>
      </div>

      <div className="menulist">
        {itemCards.map((item) => {
          return <Dish key={item.card.info.id} dishlist={item} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
