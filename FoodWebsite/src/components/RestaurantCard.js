import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, areaName, cuisines, avgRating, costForTwo } =
    resData.info;

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={IMG_URL + cloudinaryImageId}
        alt="res-image"
      ></img>
      <div className="rescardinfo">
        <div className="resname">{name}</div>
        <div>{avgRating} ⭐</div>
        <div>{costForTwo}</div>
        <div>{cuisines.join(", ")}</div>
        <div>{areaName}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
