import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Grid ,TextField ,Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MenuItemA from '../General/MenuItemA';

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user_id : this.props.u_id,
            user_info : this.props.user,
            menu_item : {
                name : '',
                image_url : '',
                category : '',
                price : null
            },
            user_menu : []
        }
    }

    menuItemChange = (e) => {
        this.setState({
            menu_item : {
                ...this.state.menu_item,
                [e.target.name] : e.target.value
            }
        })
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
                user_menu : users[userIndex].menu
            })
        }
    }
    
    componentDidMount() {
        
        this.changeMenuState();

    }

    addToMenu = (callBack) => {
        let storage = window.localStorage;
        let users = JSON.parse(storage.users);
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.u_id == this.state.user_id) {
                if (users[i].menu == undefined) {
                    users[i].menu = []
                }
                let obj = {
                    ...this.state.menu_item,
                    id : users[i].menu.length
                }
                
                users[i].menu.push(obj)
                break;
            }
        }
        
        storage.users = JSON.stringify(users)
        callBack();
    }


    render () {
        // console.log(this.state.user_info)
        return (
            <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {this.state.user_info.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md">
                <Grid item sm={12}>
                    <TextField
                        id="standard-name"
                        label="Item Name"
                        name="name"
                        style={{margin:"4px"}}
                        value={this.state.menu_item.name}
                        onChange={(e)=>this.menuItemChange(e)}
                        margin="normal"
                    />
                    <TextField
                    id="standard-name"
                    label="Image URL"
                    style={{margin:"4px"}}
                    name="image_url"
                    value={this.state.menu_item.image_url}
                    onChange={(e)=>this.menuItemChange(e)}
                    margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="Item Category"
                        name="category"
                        style={{margin:"4px"}}
                        value={this.state.menu_item.category}
                        onChange={(e)=>this.menuItemChange(e)}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="Item Price"
                        name="price"
                        type="number"
                        style={{margin:"4px"}}
                        value={this.state.menu_item.price}
                        onChange={(e)=>this.menuItemChange(e)}
                        margin="normal"
                    />
                    <Fab onClick={()=>this.addToMenu(this.changeMenuState)} style={{margin:"5px"}} color="primary" aria-label="add"   >
                        <AddIcon />
                    </Fab>
                </Grid>
                {this.state.user_menu.length!==0? this.state.user_menu.filter(el=>el.image_url!=='').map(item=><MenuItemA item={item} />): ''}

            </Container>
            </>
        )
    }
}

export default Main;