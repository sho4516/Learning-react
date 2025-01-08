import { useState } from "react";

const Accordian = ({ menuData, open }) => {
  const [activeIndex, setActiveIndex] = useState(
    menuData.map((_, index) => {
        if(open){
            return index;
        }
    })
  );

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => {
      if (prevIndex.includes(index)) {
        return prevIndex.filter((i) => i != index);
      } else {
        return [...prevIndex, index];
      }
    });
  };

  return (
    <div>
      {menuData.map((item, index) => {
        if (item.itemCards && item.itemCards.length > 0) {
          return (
            <div className="accordian">
              <div className="accordian-divider"></div>
              <div
                className="accordian-header"
                onClick={() => handleToggle(index)}
              >
                <h2>{item.title}</h2>
                <span>
                  <i
                    style={{ fontSize: "2rem" }}
                    class="fa-solid fa-caret-down"
                  ></i>
                </span>
              </div>
              {item.itemCards.map((itemCard) => {
                return (
                  <div
                    className={`accordian-content ${
                      activeIndex.includes(index) ? "open" : "closed"
                    }`}
                  >
                    <div className="accordian-content-card">
                      <div className="accordian-content-text">
                        <div className="dish-name">
                          <span>{itemCard.card.info.name}</span>
                        </div>
                        <div className="price-offer">
                          <span>
                            Rs.{" "}
                            {itemCard.card.info.defaultPrice / 100 ||
                              itemCard.card.info.price / 100}
                          </span>
                          <div className="offers">
                            <span>
                              {itemCard?.card?.info?.offerTags?.[0]?.title ||
                                "No Offer Available"}
                            </span>
                          </div>
                          <div className="offers">
                            <span>
                              {itemCard?.card?.info?.offerTags?.[0]?.subTitle ||
                                ""}
                            </span>
                          </div>
                        </div>
                        <div className="rating-details">
                          <span className="star">
                            <i
                              style={{ color: "green" }}
                              class="fa-solid fa-star"
                            ></i>
                          </span>
                          <span
                            style={{ color: "green", marginRight: "0" }}
                            className="star"
                          >
                            {itemCard?.card?.info?.ratings?.aggregatedRating
                              ?.rating || 0}
                          </span>
                          <span style={{ fontWeight: "lighter" }}>
                            (
                            {itemCard?.card?.info?.ratings?.aggregatedRating
                              ?.ratingCountV2 || 0}
                            )
                          </span>
                        </div>
                        <div className="food-description">
                          {itemCard?.card?.info?.description}
                        </div>
                      </div>
                      {itemCard?.card?.info?.imageId && (
                        <div className="accordian-content-image-holder">
                          <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${itemCard?.card?.info?.imageId}`}
                            alt={itemCard?.card?.info?.name || "Food Item"}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }
        if (item.category && item.category.length > 0) {
          return (
            <>
              <h1>{item.title}</h1>
              <Accordian menuData={item.category} open={false}/>
            </>
          );
        }
      })}
    </div>
  );
};

export default Accordian;
