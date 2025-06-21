import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return(
        <div className="text-center p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button 
              className="bg-slate-400 text-white m-4 p-2 rounded-lg shadow-lg"
              onClick={handleClearCart}
            >
                Clear Cart
            </button>
            {cartItems.length === 0 && <h1>Cart is empty. So, please add items!!!</h1>}
            <div className="w-6/12 m-auto">
                <ItemList itemData={cartItems} />
            </div>
        </div>
    );
};

export default Cart;