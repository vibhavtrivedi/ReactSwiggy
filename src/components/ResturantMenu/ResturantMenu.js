import { useState } from "react";
import ShimmerComponent from "../Shimmer";
import "./ResturantMenu.css";
import { useParams } from "react-router-dom";
import useResturantMenu from "../../utils/CustomHooks/useResturantMenu";
import useOnlineStatus from "../../utils/CustomHooks/useOnlineStatus";

const ResturantMenuComponent = () => {
  const { id } = useParams();
  const menuData = useResturantMenu(id);
  const status = useOnlineStatus();

  if (menuData === null) {
    return <ShimmerComponent />;
  }

  const { name, avgRating, costForTwoMessage, cuisines, areaName } =
    menuData?.cards[2]?.card?.card?.info;
  const { minDeliveryTime, deliveryTime } =
    menuData?.cards[2]?.card?.card?.info.sla;
  const { title, itemCards } =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;

  if (!status) {
    return <div>Check your internet connection</div>;
  } else {
    return (
      <div className="resturant-menu">
        <h1>{name}</h1>
        <div className="menu-card">
          <h3>
            {avgRating} . {costForTwoMessage}
          </h3>
          <h3 className="cuisines">{cuisines.join(", ")}</h3>
          <h3 className="areaname">{areaName}</h3>
          <h3>
            {minDeliveryTime} - {deliveryTime} mins
          </h3>
        </div>
        <h1>{title}</h1>

        <ul className="menu-details">
          {itemCards.map((cards) => {
            return (
              <li className="menu-name" key={cards?.card?.info?.id}>
                <span>{cards?.card?.info?.name}</span>{" "}
                <span>
                  {cards?.card?.info?.price / 100 ||
                    cards?.card?.info?.defaultPrice / 100}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default ResturantMenuComponent;
