import RestaurantCard, {withRestaurantOpen} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {   

    const [listOfReataurants, setListOfReataurants] = useState([]);
    const [filteredReataurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantIsOpen = withRestaurantOpen(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);
                                     
    const fetchData =  async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data?.json();

        setListOfReataurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
        return(
            <h1>
                Looks like you're offline!! Please check your internet connection
            </h1>
        );

    const {setUserName, loggedInUser} = useContext(UserContext);

    return listOfReataurants.length === 0 ? (
        <Shimmer />
    ):(
        <div className="body">
          
            <div className="filter flex">

                <div className=" m-4 p-4 ">
                    <input 
                    type="text" 
                    data-testid = "searchInput"
                    className="border border-solid border-black rounded-sm" 
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e?.target?.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={() => {
                        const filteredReataurant = listOfReataurants.filter((res) =>
                           res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredReataurant);
                    }}>
                    Search</button>
                </div>
                
                <div className="flex items-center">
                    <button className="px-4 py-2 m-2 bg-slate-400 rounded-lg" 
                        onClick={() => {
                            const filteredList = listOfReataurants.filter(
                            (res) => res?.info?.avgRating > 4.5
                            );

                            setListOfReataurants(filteredList);
                        }}>
                        Top Rated Restaurant
                    </button>
                </div>
                <div className="flex items-center m-4">
                    <label>User Name :</label>
                    <input 
                        className="border border-solid p-2 mx-2 rounded-lg" 
                        value={loggedInUser} 
                        onChange={(e) => setUserName(e.target.value)} 
                    />
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {filteredReataurant.map((restaurant, index) => (
                    <Link
                        key={restaurant?.data?.id || index}
                        to={"/restaurants/" + restaurant?.info?.id}
                    >

                        {restaurant.info.isOpen ? (
                            <RestaurantIsOpen resData={restaurant} />
                        ) : (
                             <RestaurantCard  resData={restaurant} />
                        )}
                       
                    </Link>                   
                ))}
            </div>

        </div>
    );
};

export default Body;