import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Accordian from "./Accordian";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const result = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3187153&lng=78.0263694&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const data = await result.json();
    setResData(data.data);
  };

  if (resData === null) {
    return <Shimmer />;
  }

  console.log(resData);

  const tempData1 = resData.cards.filter((card) => card.groupedCard);

  const tempData2 =
    tempData1[0].groupedCard.cardGroupMap?.REGULAR?.cards.filter((card) => {
      return [
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
      ].includes(card.card.card["@type"]);
    });

  const menuData = tempData2.map((item) => {
    return {
      title: item.card.card.title,
      category: item.card.card.categories || [],
      itemCards: item.card.card.itemCards || [],
    };
  });
  console.log(menuData);

  return (
    <div className="res-menu-body">
      <div className="res-menu-container">
        <div className="res-name-heading">
          <h2>{resData?.cards[0]?.card?.card?.text}</h2>
        </div>
        <div className="res-details">
          <div className="res-ratings-details">
            <span>
              <i class="fa-solid fa-star"></i>
            </span>
            <h3 className="res-ratings">
              {resData?.cards[2]?.card?.card?.info?.avgRating}{" "}
              {resData?.cards[2]?.card?.card?.info?.totalRatingsString}
            </h3>
            <span className="dot"></span>
            <h3 className="res-estimate">
              {resData?.cards[2]?.card?.card?.info?.costForTwoMessage}
            </h3>
          </div>

          <div className="res-address-details">
            <div className="side-tracker">
              <div className="big-dot"></div>
              <div className="connecting-line"></div>
              <div className="big-dot"></div>
            </div>
            <div className="res-address-details-text">
              <h4>Outlet - {resData?.cards[2]?.card?.card?.info?.areaName}</h4>
              <h4>{resData?.cards[2]?.card?.card?.info?.sla.slaString}</h4>
            </div>
          </div>
        </div>
        <div className="res-menu-list">
          <Accordian menuData={menuData} open={true} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
