import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           userInfo: {
            name: "iuhisf",
            location: "isuhws",
            avatar_url: "https://enfosngsji//euanlnl",
           },
        };
    };

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/shasidara");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    };

    render(){

        const {name, location, avatar_url} = this.state.userInfo;
       
        return(
            <div className="border border-solid border-black w-80 m-4 p-4 rounded-lg bg-slate-50">
                <img className="w-[250px] rounded-lg px-4 mx-4" src={avatar_url} />
                <h3 className="px-5 mx-4 my-3 font-medium">Name: {name}</h3>
                <h3 className="px-5 mx-4 my-2 font-medium">Location: {location}</h3>
            </div>
        );
    };
};

export default UserClass;