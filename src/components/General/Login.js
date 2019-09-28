import React from 'react';
// import { Link } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Container, Box ,TextField ,Button} from '@material-ui/core';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password: '',
            u_id: '',
            user : null
        }        
    }

    handleChange = (e) => {
        // this.setState({
        //     [e.target.name]: e.target.value
        // },this.userSearch)
    }

    // userSearch = () => {
    //     let storage = window.localStorage;
    //     let users = JSON.parse(storage.users);
    //     let email = this.state.email;
    //     let password = this.state.password;
    //     let userFound = false;
    //     var user_id = ''
    //     for (let i = 0; i < users.length; i++) {
    //         const user = users[i];
    //         if ((user.email==email)&&(user.password == password)) {
    //             userFound = true;
    //             user_id = user.u_id;
    //             break;
    //         }
    //     }

    //     if (userFound) {
    //         this.setState({
    //             u_id : user_id
    //         })
    //     }
    // }

    render() {
        // console.log(this.props.match)
        return (
            <>
                <Container maxWidth="sm">
                    <Box style={{marginTop:"50px",padding:"10px"}} boxShadow={3}>
                        
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            style={{width:"100%"}}
                            type="email"
                            name="email"
                            onChange={(e)=>this.handleChange(e)}
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            style={{width:"100%"}}
                            name="password"
                            onChange={(e)=>this.handleChange(e)}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                        />
                        
                        <br />
                        <Button onClick={this.handleClick} variant="contained" color="primary" style={{width:"100%",marginTop:"10px"}}>
                            Login
                           {/* <Link to={`${this.props.match.url}/${this.state.u_id}`} >Login</Link> */}
                        </Button>
                    </Box>
                    
                </Container>         
            </>
        )
    }

}

export default Login;