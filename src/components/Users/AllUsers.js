import React, {Component} from 'react';
import UsersService from "../ServiceUI/UsersService";
import UsersUi from "./UsersUi";

class AllUsers extends Component {

    state = {users:[]}

    UserService = new UsersService()

    async componentDidMount() {
        const users = await this.UserService.getAllUsers()
           this.setState({users})
    }

    render() {
        let {users} = this.state;
        return (
            <div>
                {
                    users.map(value => <UsersUi userItem={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllUsers;