import { useEffect, useState } from "react";
import { MENU_URL } from "../constants";

const useResturantMenu = (id) => {
  const [resturantData, setResturantData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const fetchData = await fetch(MENU_URL + id);
    const json = await fetchData.json();
    setResturantData(json?.data);
  };
  return resturantData;
};

export default useResturantMenu;
