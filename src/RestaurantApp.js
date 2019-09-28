import React from "react";
import RestaurantRoutes from "./Routes/RestaurantRoutes";

class RestaurantApp extends React.Component {
    constructor(props){
        super(props);

    }


    render() {

        return (
            <>
                <RestaurantRoutes match={this.props.match}/>
            </>
        )
    }
}

export default RestaurantApp;