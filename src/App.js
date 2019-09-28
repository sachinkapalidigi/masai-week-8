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
                    <Route exact path="/" component={UserApp} />
                    <Route path="/restaurant/admin" component={RestaurantApp} />
                    <Route component={PageNotFound} />
                </Switch>
            </>
        )
    }
}

export default App;
