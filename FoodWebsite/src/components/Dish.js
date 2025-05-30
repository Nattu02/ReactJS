import { DISH_IMG } from "../utils/constants";

const Dish = (props) => {
  const { dishlist } = props;

  const { name, description, imageId, defaultPrice, price } =
    dishlist.card.info;

  return (
    <div className="dish-card">
      <div className="dish-details">
        <h2>{name}</h2>
        <div>₹{defaultPrice / 100 || price / 100}</div>
        <div>{description}</div>
      </div>
      <div className="dish-img">
        <img src={DISH_IMG + imageId}></img>
      </div>
    </div>
  );
};

export default Dish;
