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
      <div className="mx-auto my-8 p-5 w-4/12 flex flex-col items-center border-2 rounded-xl">
        <h1 className="m-2 font-bold text-2xl">{name}</h1>
        <h2 className="m-2 font-medium text-xl">{areaName}</h2>
        <h2>
          ⭐{avgRatingString} ({totalRatingsString})
        </h2>
      </div>

      <div className="p-10 bg-amber-50 flex flex-col items-center">
        {itemCards.map((item) => {
          return <Dish key={item.card.info.id} dishlist={item} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
