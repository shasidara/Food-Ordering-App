import { CND_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    
    const { resData } = props;
    console.log(resData);

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;

    return(
        <div 
            data-testid = "resCard"
            className="w-[270px] p-4 m-4 bg-gray-100 hover:bg-gray-200 rounded-lg"
        >
            <img
             className="w-[250px] rounded-lg"
             alt="res-img"
             src={ CND_URL + cloudinaryImageId } 
            />
            <h3 className="py-4 font-bold">{name}</h3>
            <h4 className="cuisine">{cuisines?.join(", ")}</h4>
            <h4 className="rating">{avgRating}</h4>
            <h4 className="cost">{costForTwo}</h4>
            <h4 className="delivery-time">{sla?.slaString}</h4>
        </div>
    );   
};  


export const withRestaurantOpen = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-green-500 text-white m-2 ml-2 p-2 rounded-lg">
                    Open
                </label>
                <RestaurantCard {...props}/>
            </div>
            
        );
    };
};


export default RestaurantCard;