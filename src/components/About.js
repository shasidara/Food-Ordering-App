import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {

    constructor (props) {
        super(props);

        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    render() {
        // console.log("Parent Render");
        return(
            <div>
                <h1 className="p-4 mt-4 mb-2 ml-4 font-bold text-2xl">FOOD DELIVERY APP</h1>
                <div className="flex px-4 mb-2 ml-4">
                   LoggedIn User :
                   <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-lg font-bold ml-2">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <UserClass name={"First"} location={"Hosur"} />
            </div>
        );
    };
};

// const About = () => {
//     return(
//         <div className="about">
//             <h1>Food Delivery App</h1>
//             <UserClass name={"C Shasidara"} location={"Hosur"}/>
//         </div>
//     );
// };


export default About;