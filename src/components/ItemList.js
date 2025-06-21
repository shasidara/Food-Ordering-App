import { useDispatch } from "react-redux";
import { CND_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({itemData}) => {

    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        dispatch(addItem(item));
    };


    return (
        <div>
            {itemData.map((item) => ( 
                <div 
                  key={item?.card?.info?.id}
                  className="flex justify-between border-b-2 border-gray-400 my-6 mb-2 text-center"
                >
                    <div className="w-8/12 text-left">
                        <span className="font-bold">{item?.card?.info?.name}</span>
                        <span className="font-bold"> - ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>

                        <p className="text-sm my-2 text-gray-600">{item?.card?.info?.description}</p>
                    </div>

                    <div className="w-3/12 mb-4">
                        <div className="absolute">
                            <button 
                                className="bg-slate-50 text-green-600 shadow-lg px-4 py-1 rounded-lg mx-10 mt-[70px]"
                                onClick={() => handleAddItems(item)}
                            >
                                Add +
                            </button>
                        </div>
                        <img src={CND_URL + item?.card?.info?.imageId}  className="rounded-lg w-36"/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;