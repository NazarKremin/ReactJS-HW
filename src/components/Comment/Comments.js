import React, {Component} from 'react';
import CommentsService from "../service/CommentsService";

class Comments extends Component {

    state = {commentValue: []}

    commentsService = new CommentsService()

    componentDidMount(){
        const {id} = this.props
        this.commentsService.getCommentsId(id)
            .then(value => this.setState({commentValue:value}))
    }

    render() {
        const {commentValue} = this.state;
        return (
            <div>
                <h5>Id: {commentValue.id}</h5>
                <h5>Name: {commentValue.name}</h5>
                <h5>Email: {commentValue.email}</h5>
                <h5>Body: {commentValue.body}</h5>
            </div>
        );
    }
}

export default Comments;