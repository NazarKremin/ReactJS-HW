import React, {Component} from 'react';
import UsersService from "../Service/UsersService";

class UsersFullInformation extends Component {

    state = {userItem: null}

    UserService = new UsersService()

    async componentDidMount() {
        const {match:{params:{id}}} = this.props;
        const userItem = await this.UserService.getUsersId(id);
        this.setState({userItem});


    }

    render() {
        const {userItem} = this.state
        return (
            <div>
                <hr/>
                {userItem && <div>{userItem.id}|
                    {userItem.name}
                    {userItem.age}|
                    {userItem.username}|
                    {userItem.email}</div>}
            </div>
        );
    }
}

export default UsersFullInformation;