import {IMG_URL} from "../utils/constants";


const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name,cuisines, avgRating, costForTwo  } = resData.info;
    return (
        <div className="res-card">
            <img className="res-img" src={IMG_URL+cloudinaryImageId} alt="res-image"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;