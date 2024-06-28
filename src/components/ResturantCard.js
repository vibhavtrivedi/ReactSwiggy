import { CDN_URL } from "../utils/constants";

  
const ResturantCard = ({resData}) => {
  return (
    <div className="res-card">
      <img alt="image" src={CDN_URL + resData.info.cloudinaryImageId} />
      <div className="card-details">
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines}</h4>
        <h4>{resData.info.avgRating}</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.locality }</h4>
      </div>  
    </div>
  )
  };
export default ResturantCard;