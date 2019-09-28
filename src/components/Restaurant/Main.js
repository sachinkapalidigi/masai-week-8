import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user_id : this.props.u_id,
            user_info : this.props.user
        }
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
            </>
        )
    }
}

export default Main;