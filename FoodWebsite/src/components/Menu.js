import { MENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Dish from "./Dish";
import { useParams } from "react-router";

const Menu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [vegonly, setVegonly] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    getResInfo();
  }, []);


  const getResInfo = async () => {
    const resMenu = await fetch(MENU_URL + id);
    const json = await resMenu.json();

    setResInfo(json);
  };

  if (resInfo === null) return <Shimmer />;


  const { name, areaName, avgRatingString, totalRatingsString } =
    resInfo.data?.cards[2]?.card.card.info;

  const { itemCards } =
    resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

    
      const filterVeg = () => {
        if(vegonly === 0){
          setMenuItems(itemCards);
        }
        else{
          const vegmenu = itemCards.filter((item) => item.card.info.isVeg === 1);
          setMenuItems(vegmenu);
        }
      }


  console.log(vegonly);
  return (
    <div className="menu">
      <div className="res-info">
        <h1>{name}</h1>
        <h2>{areaName}</h2>
        <h2>
          ⭐{avgRatingString} ({totalRatingsString})
        </h2>
      </div>
      <div>
        <button
          onClick={() => {
            vegonly === 0 ? setVegonly(1) : setVegonly(0);
            filterVeg()
          }}
        >
          Veg only
        </button>
      </div>
      <div className="menulist">
        {menuItems.map((item) => {
          return <Dish key={item.card.info.id} dishlist={item} />;
          // return <h3 key={item.card.info.id}> {item.card.info.name}</h3>;
        })}
      </div>
    </div>
  );
};

export default Menu;
