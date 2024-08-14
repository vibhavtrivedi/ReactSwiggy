import { useState } from "react";
import ShimmerComponent from "../Shimmer";
import "./ResturantMenu.css";
import { useParams } from "react-router-dom";
import useResturantMenu from "../../utils/CustomHooks/useResturantMenu";
import useOnlineStatus from "../../utils/CustomHooks/useOnlineStatus";
import ResturantCategory from "./ResturantCategory";

const ResturantMenuComponent = () => {
  const { id } = useParams();
  const menuData = useResturantMenu(id);
  const status = useOnlineStatus();
  const [showIndex, setShowIndex] = useState(null);
  const categories =
    menuData?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  if (!status) {
    return <div>Check your internet connection</div>;
  }
  if (menuData === null) {
    return <ShimmerComponent />;
  } else {
    const { name, avgRating, costForTwoMessage, cuisines, areaName } =
      menuData?.cards[2]?.card?.card?.info;
    const { minDeliveryTime, deliveryTime } =
      menuData?.cards[2]?.card?.card?.info.sla;
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
        {categories.map((category, index) => (
          <ResturantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItem={index == showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    );
  }
};

export default ResturantMenuComponent;
