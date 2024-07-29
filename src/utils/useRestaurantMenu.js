import { useState, useEffect } from "react";
import { Menu_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  return resInfo;
};
export default useRestaurantMenu;
