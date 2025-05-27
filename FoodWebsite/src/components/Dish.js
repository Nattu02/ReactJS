import { DISH_IMG } from "../utils/constants";

const Dish = (props) => {
  const { dishlist } = props;

  console.log(dishlist.card.info);

  const { name, description, imageId, defaultPrice, price } = dishlist.card.info;

  // console.log(price);

  return (
    <div className="dish-card">
      <div className="dish-details">
        {/* <h3>{name}</h3>
        <h4>₹{price/100}</h4>   
        <p>{description}</p> */}
        <h2>{name}</h2>
        <div>₹{defaultPrice/100 || price/100}</div>
        <div>{description}</div>
      </div>
      <div className="dish-img">
        <img src={DISH_IMG + imageId}></img>
      </div>
    </div>
  );
};

export default Dish;
