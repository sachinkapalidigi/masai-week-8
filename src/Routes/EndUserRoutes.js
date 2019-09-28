import React from "react";
import { Switch, Route } from "react-router-dom";
import RestaurantList from "../components/EndUser/RestaurantList";
import PageNotFound from "../components/General/PageNotFound";
import RestaurantMenu from "../components/EndUser/RestaurantMenu";

const EndUserRoutes = ({match}) => {
    // console.log(match)
    return (
        <>
            <Switch>                
                <Route exact path={`${match.path}`} render={props=><RestaurantList {...props} />} />
                <Route path={`${match.path}/:u_id`} render={props=><RestaurantMenu {...props} />} />
                <Route component={PageNotFound} />
            </Switch>
        </>
    )
}

export default EndUserRoutes;