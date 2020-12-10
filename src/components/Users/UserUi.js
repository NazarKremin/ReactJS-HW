import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class UserUi extends Component {
    render() {
        const {userItem, match:{url}} = this.props;
        return (
            <div>
                {userItem.id}|
                {userItem.name}
                <Link to={url + '/' + userItem.id}>Full Info</Link>
            </div>
        );
    }
}

export default withRouter(UserUi);