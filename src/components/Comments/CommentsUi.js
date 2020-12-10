import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class CommentsUi extends Component {
    render() {
        const {commentsItem, match: {url}} = this.props;
        return (
            <div>
                {commentsItem.postId}
                {commentsItem.id}
                <Link to={url + `/${commentsItem.id}`}>Moreeeeeeeeeee</Link>
            </div>
        );
    }

}

export default withRouter(CommentsUi);