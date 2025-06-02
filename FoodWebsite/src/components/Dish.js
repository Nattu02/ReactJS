import { DISH_IMG } from "../utils/constants";

const Dish = (props) => {
  const { dishlist } = props;
  const { name, description, imageId, defaultPrice, price, isVeg } =
    dishlist.card.info;

  return (
    <div className="flex justify-between items-start p-5 m-5 border border-gray-200 rounded-2xl shadow-sm w-full">
      <div className="flex flex-col gap-2 w-3/4">
        <div className="font-semibold text-lg">
          {name} {isVeg ? "🟢" : "🔺"}
        </div>
        <div className="text-gray-700">₹{(defaultPrice || price) / 100}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      <div className="w-28 h-28 relative">
        <img
          src={DISH_IMG + imageId}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
        <button className="absolute bg-white px-4 my-1 font-bold text-lg text-green-500 bottom-0 left-1/5 rounded-md cursor-pointer">ADD</button>
      </div>
    </div>
  );
};

export default Dish;
