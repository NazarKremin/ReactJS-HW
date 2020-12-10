import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class PostsUi extends Component {
    render() {
        const {postItem,match:{url}} = this.props;
        return (
            <div>
                {postItem.userId}
                {postItem.id}
                <Link to={url + `/${postItem.id}`}>More Info</Link>
            </div>
        );
    }
}

export default withRouter(PostsUi);