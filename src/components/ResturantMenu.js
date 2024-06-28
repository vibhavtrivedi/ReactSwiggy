import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";
import './ResturantMenu.css';

const ResturantMenuComponent = () => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    const jsonData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2589476&lng=72.96889039999999&restaurantId=29211&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await jsonData.json();
    setMenuData(json?.data);
    };
    if (menuData === null) {
        return <ShimmerComponent />
    }
    console.log('menu data', menuData);
    const { name, avgRating, costForTwoMessage, cuisines, areaName } = menuData?.cards[2]?.card?.card?.info;
  const { minDeliveryTime, deliveryTime } = menuData?.cards[2]?.card?.card?.info.sla;
  const { title, itemCards} = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;
  console.log("menu data", menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card); 
  return (
    <div className="resturant-menu">
              <h1>{name}</h1>
              <div className="menu-card">
                  <h3>{avgRating} . {costForTwoMessage}</h3>
                  <h3 className="cuisines">{cuisines.join(', ')}</h3>
                  <h3 className="areaname">{areaName}</h3>
                  <h3>{minDeliveryTime } - { deliveryTime} mins</h3>
              </div>
      <div>{title}</div>
      {itemCards.map((cards) => {
        return (
          <ul>
            <li key={cards?.card?.info?.id}>{ cards?.card?.info?.name} - { cards?.card?.info?.defaultPrice}</li>
          </ul>
        )
      })}
    </div>
  );
};

export default ResturantMenuComponent;
