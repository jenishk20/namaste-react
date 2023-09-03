import { useEffect } from "react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5538241&lng=73.9476689&restaurantId=31373&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Name of the Restaurants</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Chinese</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
