import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class UsersUi extends Component {
    render() {
        let {userItem, match: {url}} = this.props;
        return (
            <div>
                {userItem.id}={userItem.name}
                <Link to={`${url}/${userItem.id}`}>Full info</Link>
            </div>
        );
    }
}

export default withRouter(UsersUi);