import React from 'react';
import { Container, Box ,TextField ,Button} from '@material-ui/core';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            u_id : '',
            userType:props.userType,
            name:'',
            email:'',
            password:'',
            mobile:'',            
        }
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        })

    }

    storeUser = () => {
        let storage = window.localStorage;
        let user = this.state;
        
        storage.users = JSON.stringify([...JSON.parse(storage.users),user]);

        console.log(storage.users)
    }

    handleClick = () => {
        let storage = window.localStorage;        
        
        if (storage.users === undefined) {
            storage.users = '[]'
        } 
        
        let id = JSON.parse(storage.users).length+1;

        this.setState({
            u_id:id
        },this.storeUser)
    }

    render() {
        return (
            <>               
                <Container maxWidth="sm">
                    <Box style={{marginTop:"50px",padding:"10px"}} boxShadow={3}>
                        <TextField
                            id="outlined-name"
                            style={{width:"100%"}}
                            label="Name"                        
                            value={this.state.name}
                            name="name"
                            onChange={(e)=>this.handleChange(e)}
                            margin="normal"
                            variant="outlined"
                        />
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
                            type="password"
                            onChange={(e)=>this.handleChange(e)}
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-full-width"
                            label="Mobile"                  
                            onChange={(e)=>this.handleChange(e)}          
                            placeholder="Enter 10 digit mobile"
                            helperText="Mobile # here!"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            name="mobile"
                        />
                        <br />
                        <Button onClick={this.handleClick} variant="contained" color="primary" style={{width:"100%",marginTop:"10px"}}>
                           Register
                        </Button>
                    </Box>
                    
                </Container>                
            </>
        )
    }
}

export default Register;