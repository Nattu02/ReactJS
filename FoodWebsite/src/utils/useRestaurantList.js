import { useEffect, useState } from "react";
import { RESTALIST_URL } from "./constants";

const useRestaurantList = () => {
  const [resList, setResList] = useState();

  useEffect(() => {}, []);

  const getData = async () => {
    const data = await fetch(RESTALIST_URL);
    const json = await data.json();
    setResList(json);
  };

  return resList;
};

export default useRestaurantList;
