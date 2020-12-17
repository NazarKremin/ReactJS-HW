import React, {Component} from 'react';
import UsersService from "../service/UsersService";

class User extends Component {

    usersService = new UsersService()

    state = {Users: []}

    componentDidMount() {
        let {id} = this.props;
        this.usersService.getId(id).then(value => this.setState({Users: value}))

    }

    render() {
        let {Users} = this.state;
        return (
            <div>
                <div>
                    <div><h5>Name: {Users.name}</h5></div>
                    <div><h5>Username: {Users.username}</h5></div>
                    <div><h5>Mail:  {Users.email} </h5></div>
                </div>
            </div>
        );
    }
}

export default User;