import React from "react";
import EndUserRoutes from "./Routes/EndUserRoutes";



class UserApp extends React.Component {
    constructor(props){
        super(props);
        
    }


    render() {

        return (
            <>
                <EndUserRoutes match={this.props.match} />
            </>
        )
    }
}

export default UserApp;