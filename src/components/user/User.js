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
                    <div>{Users.name}</div>
                    {Users.username} {Users.email} </div>
            </div>
        );
    }
}

export default User;