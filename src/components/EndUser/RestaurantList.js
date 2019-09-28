import React from 'react';
import RestaurantComponent from './RestaurantComponent';
import { Container } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import { Container } from "@material-ui/core";
// import RestaurantList from "./components/EndUser/RestaurantList";

class RestaurantList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            restaurants : []
        }
    }


    getAllRestaurants = () => {
        let storage = window.localStorage;
        let users = JSON.parse(storage.users);
        users = users.filter(user=>user.userType==='restaurant');
        if (users.length!==0) {
            this.setState({
                restaurants : [...users]
            })
        }
    }

    componentDidMount() {
        this.getAllRestaurants()
    }

    render() {
        // console.log('res lis rendering')
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Food Delivery Service
                    </Typography>
                    {/* <Button edge="end" color="inherit">Login</Button> */}
                    </Toolbar>
                </AppBar>
                <Container style={{marginTop:"10px"}} maxWidth="md">
                    <h1 style={{textAlign:"center",color:"#3F51B5"}}>Restaurants</h1>
                {this.state.restaurants.length!==0?this.state.restaurants.map(restaurant=><RestaurantComponent item={restaurant} match={this.props.match} />):'Loading'}
                </Container>
            </>
        )
    }
}

export default RestaurantList;