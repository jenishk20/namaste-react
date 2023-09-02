import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const resData = props.resData;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  const url = CDN_URL + cloudinaryImageId;
  const deliveryTime = resData.info.sla.deliveryTime;

  return (
    <div className="res-card">
      <img className="res-image" src={url}></img>
      <h3>{name}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h3>{avgRating} Stars</h3>
      <h3>{costForTwo}</h3>
      <h3>{deliveryTime} Minutes</h3>
    </div>
  );
};

export default RestaurantCard;
