import React from 'react';
import MenuItemA from '../General/MenuItemA'
import { Container } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'

class RestaurantMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_id : this.props.match.params.u_id,
            user_menu : [],
            res_name : ''
        }
    }

    changeMenuState = () => {
        let storage = window.localStorage;
        let users = JSON.parse(storage.users);
        var userIndex = null
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.u_id == this.state.user_id) {
                if (users[i].menu !== undefined) {
                    userIndex = i;
                    break;
                } 
            }
        }
        if(userIndex!==null){
            this.setState({
                user_menu : users[userIndex].menu,
                res_name : users[userIndex].name
            })
        }
    }
    
    componentDidMount() {
        this.changeMenuState();
    }

    render() {
        console.log(this.props)
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
                    <h1 style={{textAlign:"center",color:"#3F51B5"}}>{this.state.res_name}'s Restaurant Menu</h1>
                    {this.state.user_menu.length!==0? this.state.user_menu.filter(el=>el.image_url!=='').map(item=><MenuItemA item={item} />): ''}
                </Container>

            </>
        )
    }
}

export default RestaurantMenu;