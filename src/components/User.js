import { useState } from "react";

const User = ({name, location}) => {

    const [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h2>Count: {count}</h2>
            <button
                onClick={() => {
                    setCount(count +1);
                }}
            >
                Count Increses
            </button>
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
        </div>
    );
};

export default User;