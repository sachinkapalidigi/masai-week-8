import React from "react";
import {Switch , Route} from 'react-router-dom';
import UserApp from "./UserApp";
import RestaurantApp from "./RestaurantApp";
import PageNotFound from "./components/General/PageNotFound";


class App extends React.Component {
    constructor(props){
        super(props);

    }

    render() {

        return (
            <>
                <Switch>
                    <Route path="/restaurant-list" component={UserApp} />
                    <Route path="/restaurant/admin" component={RestaurantApp} />                    

                    
                </Switch>
            </>
        )
    }
}

export default App;
