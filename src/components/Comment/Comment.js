import React, {Component} from 'react';
import CommentsService from "../service/CommentsService";
import Comments from "./Comments";

class Comment extends Component {

    myForm = React.createRef();

    state = {commentValue:''}

    render() {
        const {commentValue} = this.state;
        return (
            <div>
                <form action={'/savecomments'} ref={this.myForm}>
                    Comments<input type={'number'} onInput={this.sendComments} value={this.state.commentValue}/>
                </form>
                <Comments id={commentValue} key={commentValue}/>
            </div>
        );
    }

    sendComments = (e) => {
        this.setState({commentValue:e.target.value})
    }
}

export default Comment;