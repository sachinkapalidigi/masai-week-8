import React from 'react';
import Main from './Main';

class RestaurantDashboard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user :{

            },
            u_id:this.props.match.params.u_id,
            isLoading:true,
            userNotFound: false
        }
    }

    userSearch = (u_id) => {
        let storage = window.localStorage;
        let users = JSON.parse(storage.users);
        let userFound = false;
        let userInfo = {}
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (u_id == user.u_id) {
                userFound = true;
                userInfo = user
                break;
            }
        }

        if (userFound) {
            this.setState({
                user : userInfo,
                isLoading:false
            })
        } else {
            this.setState({
                userNotFound:true,
                isLoading:false
            })
        }
    }

    componentDidMount() {
        this.userSearch(this.state.u_id)
    }

    render() {
        // console.log(this.props.match.params.u_id)
        return (
            <>
            {this.state.isLoading?(<>Loading...</>):(this.state.userNotFound?<h1>User Not Found</h1>:<Main u_id={this.state.u_id} user={this.state.user} />)}
            </>
        )
    }

}

export default RestaurantDashboard;