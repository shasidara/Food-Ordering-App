import ItemList from "./ItemList";

const RestaurantCategory = ({data, showIndex, setShowIndex}) => {

    const handleClick = () => {
      setShowIndex();
    };

    return (
        <div>
            <div className="bg-gray-50 mx-auto w-6/12 my-4 shadow-lg p-3 text-center">
              <div className="justify-between flex">
                <span 
                  className="font-bold text-lg cursor-pointer"
                  onClick={handleClick}
                >
                    {data?.title} ({data?.itemCards?.length})
                </span>
                <span className="cursor-pointer" onClick={handleClick}>🔽</span>
              </div>
                {showIndex && <ItemList  itemData={data?.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;