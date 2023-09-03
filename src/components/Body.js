import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    fetchAPIData();
  }, []);

  const fetchAPIData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5538241&lng=73.9476689&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const formattedData =
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
      console.log(formattedData);
      setRestaurants(formattedData)
     
    } catch {
      console.log("Some Error Occured");
    }
  };
  const search = () => {
    console.log(searchText);
    const ff = restaurants.filter((elem) => elem.includes(searchText));
    setRestaurants(ff);
  };

  if(restaurants.length ===0) return <Shimmer/>
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              if (searchText !== "") {
                const filteredData = restaurants.filter((elem) =>
                  elem.data.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setRestaurants(filteredData);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard  resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
