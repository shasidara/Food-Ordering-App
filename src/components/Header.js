import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return(
        
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex items-center">
                    <li className="px-5">
                        Online Status: {onlineStatus ? "✅" : "🟥"}
                    </li>
                    <li className="px-5">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-5">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-5">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-5">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-5 font-bold cursor-pointer" >
                        <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
                    </li>
                    <div className="flex items-center"> 
                        <button className="px-4 py-2 bg-violet-300 rounded-lg"  onClick={() => {
                            btnNameReact === "login"
                            ? setBtnNameReact("logout") : 
                            setBtnNameReact("login");
                        }}>
                            {btnNameReact}
                        </button>
                    </div>
                    <li className="px-5 text-xl font-bold" >{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};


export default Header;