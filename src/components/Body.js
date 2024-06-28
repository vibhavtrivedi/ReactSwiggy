import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import ShimmerComponent from "./Shimmer";

const BodyComponent = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2589476&lng=72.96889039999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const jsonData = await data.json();
    setListOfResturants(jsonData?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResturants(jsonData?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return listOfResturants.length === 0 ? <ShimmerComponent /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
          <button onClick={() => {
            const filteredResturant = listOfResturants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredResturants(filteredResturant);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredResturants(listOfResturants.filter((res) => res.info.avgRating > 4.5))
          }}
        >
          Top rated Resturant
        </button>
      </div>
      <div className="res-container">
        {filteredResturants.map((data) => {
          return <ResturantCard key={data.info.id} resData={data} />
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
