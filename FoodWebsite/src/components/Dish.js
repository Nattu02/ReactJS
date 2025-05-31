import { DISH_IMG } from "../utils/constants";

const Dish = (props) => {
  const { dishlist } = props;

  const { name, description, imageId, defaultPrice, price } =
    dishlist.card.info;

  return (
    <div className="h-48 w-6/12 flex justify-between items-center px-5 m-5 border-b-2 border-r-2 rounded-2xl">
      <div className="dish-details">
        <h2>{name}</h2>
        <div>₹{defaultPrice / 100 || price / 100}</div>
        <div>{description}</div>
      </div>
      <div className="h-48">
        <img src={DISH_IMG + imageId} className="h-4/5 w-sm my-5 rounded-xl"></img>
      </div>
    </div>
  );
};

export default Dish;
