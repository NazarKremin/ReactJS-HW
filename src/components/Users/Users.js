import React, {Component} from 'react';
import UsersService from "../Service/UsersService";
import UserUi from "./UserUi";
import {Route, Switch, withRouter} from "react-router-dom";
import UsersFullInformation from "./UsersFullInformation";

class Users extends Component {

    state = {users:[]}

    UsersService = new UsersService()

   async componentDidMount() {
       const users = await this.UsersService.getAllUsers()
            this.setState({users})
    }

    render() {
        const {users} = this.state;
        const {match: {url}} = this.props
        return (
            <div>
                {
                    users.map(value => <UserUi userItem={value} key={value.id}/>)
                }
               <Switch>
                   <Route path={url + '/:id'} render={(props)=>{
                       const {match:{params:{id}}} = props;
                       return <UsersFullInformation {...props} key={id} />
                   }}/>
               </Switch>
            </div>
        );
    }
}

export default withRouter(Users);