import React, {Component} from 'react';
import CommentsService from "../Service/CommentsService";

class CommentsFullInformation extends Component {

    state = {comments: null}

    commentsService = new CommentsService()

    async componentDidMount() {
        const {id} = this.props;
        const comments = await this.commentsService.getAllCommentsId(id);
        this.setState({comments})
    }

    render() {
        const {comments} = this.state;
        return (
            <div>
                {comments && <div>{comments.postId}-{comments.id}</div>}
            </div>
        );
    }
}

export default CommentsFullInformation;