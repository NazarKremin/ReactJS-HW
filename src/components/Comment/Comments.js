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
                {commentValue.id}<br/>
                {commentValue.name}
            </div>
        );
    }
}

export default Comments;