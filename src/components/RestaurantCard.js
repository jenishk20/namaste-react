import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {

    const resData = props.resData;
    console.log(resData);
    url = CDN_URL + resData.data.cloudinaryImageId
    // console.log(url)
  
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}= 
    resData?.data;
  
    return (
    <div className="res-card">
      
      <img
        className="res-image"
        src={url}
      ></img>
      <h3>{name}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h3>{avgRating} Stars</h3>
      <h3>Rs {costForTwo/100} for two </h3>
      <h3>{deliveryTime} Minutes</h3>
    </div>
  )};

  export default RestaurantCard;