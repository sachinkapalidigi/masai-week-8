import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterRestaurant from "../components/Restaurant/RegisterRestaurant";
import LoginRestaurant from "../components/Restaurant/RestaurantLogin";
import RestaurantDashboard from "../components/Restaurant/RestaurantDashboard";


const RestaurantRoutes = ({match}) => {
    
    return (
        <>
            <Switch>
                <Route path={`${match.path}/register`} render={props=><RegisterRestaurant />} />
                <Route path={`${match.path}/login`} render={props=><LoginRestaurant {...props} />} />
                <Route path={`${match.path}/:u_id`} render={props=><RestaurantDashboard {...props} />} />
            </Switch>
        </>
    )
}

export default RestaurantRoutes;