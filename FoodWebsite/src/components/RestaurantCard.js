import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, areaName, cuisines, avgRating, costForTwo } =
    resData.info;

  return (
    <div className="h-[380px] border-2 p-2.5 flex-col items-center rounded-2xl bg-amber-100">
      <div className="flex justify-center">
        <img
          className="w-[280px] h-[200px] rounded-2xl"
          src={IMG_URL + cloudinaryImageId}
          alt="res-image"
        ></img>
      </div>
      <div className="mx-2.5 mt-5">
        <div className="text-xl font-bold truncate">{name}</div>
        <div className="font-medium">⭐ {avgRating} </div>
        <div className="font-medium">{costForTwo}</div>
        <div className="truncate font-medium">{cuisines.join(", ")}</div>
        <div>{areaName}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
