import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, locality } = resData?.info;
  return (
    <div className="res-card">
      <div className="img-container">
        <img src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <div className="res-info-container">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{locality}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
